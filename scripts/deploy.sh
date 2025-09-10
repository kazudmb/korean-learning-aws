#!/bin/bash

# 韓国語学習サイト デプロイスクリプト
# Usage: ./scripts/deploy.sh [environment]

set -e

ENVIRONMENT=${1:-dev}
BUCKET_NAME=${2:-"korean-learning-platform-site-${ENVIRONMENT}"}

echo "🇰🇷 韓国語話し言葉マスター - デプロイ開始"
echo "Environment: $ENVIRONMENT"
echo "Bucket: $BUCKET_NAME"

# 1. フロントエンドのビルド
echo "📦 フロントエンドをビルドしています..."
cd frontend
npm ci
npm run build
cd ..

# 2. Terraformでインフラを構築
echo "🏗️ インフラを構築しています..."
cd terraform
terraform init
terraform plan -var="environment=$ENVIRONMENT" -var="bucket_name=$BUCKET_NAME"
terraform apply -auto-approve -var="environment=$ENVIRONMENT" -var="bucket_name=$BUCKET_NAME"

# Terraformの出力を取得
BUCKET_NAME=$(terraform output -raw s3_bucket_name)
DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)
WEBSITE_URL=$(terraform output -raw website_url)

cd ..

# 3. S3にファイルをアップロード
echo "☁️ S3にファイルをアップロードしています..."
aws s3 sync frontend/build/ "s3://$BUCKET_NAME" --delete \
  --cache-control max-age=31536000,public

# index.htmlは別途キャッシュを無効にしてアップロード
aws s3 cp frontend/build/index.html "s3://$BUCKET_NAME/index.html" \
  --cache-control max-age=0,no-cache,no-store,must-revalidate

# 4. CloudFrontのキャッシュを無効化
echo "🌐 CloudFrontキャッシュを無効化しています..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "⏳ キャッシュ無効化の完了を待っています... (ID: $INVALIDATION_ID)"
aws cloudfront wait invalidation-completed \
  --distribution-id "$DISTRIBUTION_ID" \
  --id "$INVALIDATION_ID"

# 5. デプロイ完了
echo ""
echo "🎉 デプロイが完了しました！"
echo "📍 Website URL: $WEBSITE_URL"
echo "📦 S3 Bucket: $BUCKET_NAME"
echo "🌐 CloudFront Distribution: $DISTRIBUTION_ID"
echo ""
echo "✅ 韓国語学習サイトが正常にデプロイされました！"
echo "친구처럼 자연스럽게 한국어를 배워보세요! 🇰🇷"