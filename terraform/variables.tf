variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "ap-northeast-1" # Tokyo region
}

variable "bucket_name" {
  description = "Name of the S3 bucket for static site hosting"
  type        = string
  default     = "korean-learning-platform-site"
}

variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "domain_name" {
  description = "Domain name for the site (optional)"
  type        = string
  default     = ""
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "korean-learning-platform"
}