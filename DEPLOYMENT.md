# デプロイメント設定手順

## 1. 初回セットアップ

### Terraformバックエンドの作成
```bash
cd terraform
# backend.tfのみを適用してバックエンドリソースを作成
terraform init
terraform apply -target=aws_s3_bucket.terraform_state -target=aws_dynamodb_table.terraform_locks
```

### バックエンド有効化
```bash
# main.tfのbackend設定のコメントアウトを解除済み
terraform init -migrate-state
```

## 2. GitHub Settings設定

### Repository Secrets
以下をGitHub Settings > Secrets and variablesに追加：

```
AWS_ROLE_ARN: (terraform apply後に出力されるARN)
S3_BUCKET_NAME: korean-learning-site-bucket
CLOUDFRONT_DISTRIBUTION_ID: (terraform apply後に出力されるID)  
CLOUDFRONT_DOMAIN: (terraform apply後に出力されるドメイン)
```

### Actions permissions
Settings > Actions > General > Workflow permissions:
- "Read and write permissions" を選択

## 3. デプロイフロー

1. **feature ブランチで開発**
   ```bash
   git checkout -b feature/new-lesson
   # 開発作業
   git commit -m "Add new lesson"
   git push origin feature/new-lesson
   ```

2. **Pull Request作成**
   - GitHub上でPRを作成
   - レビュー・承認

3. **マージで自動デプロイ**
   - PR mergeを実行
   - GitHub Actionsが自動実行
   - S3 + CloudFrontに自動デプロイ

## 4. 手動デプロイ（緊急時）

```bash
cd terraform
terraform apply

cd ../frontend
npm run build
aws s3 sync build/ s3://korean-learning-site-bucket --delete
aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
```

## 5. 料金最適化

- CloudFrontキャッシュ期間: 1時間（デフォルト）
- S3 lifecycle policy: 未設定（必要に応じて追加）
- 不要ファイルの定期削除推奨