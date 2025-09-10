# Korean Learning Platform Infrastructure
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  
  backend "s3" {
    bucket         = "korean-learning-terraform-state"
    key            = "terraform/state"
    region         = "ap-northeast-1"
    encrypt        = true
    dynamodb_table = "korean-learning-terraform-locks"
  }
}

provider "aws" {
  region = var.aws_region
}

# S3 Bucket for static website hosting
resource "aws_s3_bucket" "korean_learning_site" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_website_configuration" "korean_learning_site" {
  bucket = aws_s3_bucket.korean_learning_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "korean_learning_site" {
  bucket = aws_s3_bucket.korean_learning_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "korean_learning_site" {
  bucket = aws_s3_bucket.korean_learning_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.korean_learning_site.arn}/*"
      },
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.korean_learning_site]
}

# CloudFront distribution for CDN
resource "aws_cloudfront_distribution" "korean_learning_distribution" {
  origin {
    domain_name = aws_s3_bucket.korean_learning_site.bucket_regional_domain_name
    origin_id   = "S3-${var.bucket_name}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Korean Learning Platform CDN"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.bucket_name}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name        = "Korean Learning Platform"
    Environment = var.environment
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Route53 hosted zone (optional, if you have a domain)
resource "aws_route53_zone" "korean_learning_zone" {
  count = var.domain_name != "" ? 1 : 0
  name  = var.domain_name
}

# Route53 record for CloudFront distribution
resource "aws_route53_record" "korean_learning_record" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.korean_learning_zone[0].zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.korean_learning_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.korean_learning_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# OIDC Provider for GitHub Actions
resource "aws_iam_openid_connect_provider" "github_actions" {
  url = "https://token.actions.githubusercontent.com"
  
  client_id_list = [
    "sts.amazonaws.com"
  ]
  
  thumbprint_list = [
    "6938fd4d98bab03faadb97b34396831e3780aea1"
  ]
}

# IAM role for GitHub Actions deployment
resource "aws_iam_role" "github_actions_role" {
  name = "korean-learning-github-actions-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github_actions.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:kazudmb/korean-learning-aws:*"
          }
        }
      }
    ]
  })
}

resource "aws_iam_policy" "github_actions_policy" {
  name        = "korean-learning-github-actions-policy"
  description = "IAM policy for GitHub Actions to deploy to S3 and CloudFront"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.korean_learning_site.arn,
          "${aws_s3_bucket.korean_learning_site.arn}/*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation"
        ]
        Resource = aws_cloudfront_distribution.korean_learning_distribution.arn
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "github_actions_policy_attachment" {
  role       = aws_iam_role.github_actions_role.name
  policy_arn = aws_iam_policy.github_actions_policy.arn
}

# Output values
output "s3_bucket_name" {
  value       = aws_s3_bucket.korean_learning_site.bucket
  description = "S3 bucket name for the Korean learning site"
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.korean_learning_distribution.id
  description = "CloudFront distribution ID"
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.korean_learning_distribution.domain_name
  description = "CloudFront distribution domain name"
}

output "website_url" {
  value       = "https://${aws_cloudfront_distribution.korean_learning_distribution.domain_name}"
  description = "Website URL"
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions_role.arn
  description = "GitHub Actions IAM Role ARN"
}