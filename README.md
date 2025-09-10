# 🇰🇷 韓国語話し言葉マスター

実際の会話で使われる韓国語フレーズを学習できるWebアプリケーション

## 🎯 特徴

- **実用的な話し言葉**: 教科書にない自然な韓国語表現
- **パンマル中心**: 友達同士で使うタメ口表現を重点的に学習
- **インタラクティブな学習**: 練習問題で理解度をチェック
- **レスポンシブデザイン**: PC・スマホ両対応
- **AWS上でのスケーラブルなインフラ**: CloudFront + S3 + Terraform

## 🏗️ アーキテクチャ

```
Frontend (React + TypeScript)
    ↓
CloudFront (CDN)
    ↓
S3 (Static Website Hosting)
    ↓
Infrastructure as Code (Terraform)
```

## 🚀 デプロイ方法

### 前提条件

- AWS CLI設定済み
- Terraform ≥ 1.6.0
- Node.js ≥ 18
- GitHub Actionsでのデプロイ用のAWS認証情報

### 1. インフラストラクチャのデプロイ

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
# terraform.tfvarsを編集してバケット名等を設定

terraform init
terraform plan
terraform apply
```

### 2. フロントエンドのビルド・デプロイ

```bash
cd frontend
npm install
npm run build

# S3にデプロイ
aws s3 sync build/ s3://your-bucket-name --delete
```

### 3. GitHub Actionsでの自動デプロイ

以下のSecretsをGitHubリポジトリに設定：

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`

mainブランチへのpush時に自動デプロイされます。

## 💻 ローカル開発

```bash
cd frontend
npm install
npm start
```

http://localhost:3000 でアクセス可能

## 📚 学習コンテンツ

### フレーズカテゴリ
- 👋 **あいさつ・日常**: 친구同士の気軽な挨拶
- 😊 **感情表現**: 喜怒哀楽を表す話し言葉
- 💬 **SNS・チャット**: リアルなSNS表現
- 💕 **恋愛・友情**: 親しい関係の表現

### 練習問題
- 🔄 **翻訳練習**: 日本語→韓国語の翻訳
- 👂 **聞き取り練習**: 音声を聞いて意味を選択
- 🎭 **状況別練習**: 場面に合った表現を選択

### レベル別学習
- 🌱 **初級**: 基本的なパンマルと日常フレーズ
- 🚀 **中級**: 自然な会話とSNS表現
- ⭐ **上級**: ネイティブレベルの表現

## 🛠️ 技術スタック

### フロントエンド
- **React 18**: UIライブラリ
- **TypeScript**: 型安全性
- **Material-UI**: UIコンポーネント
- **Zustand**: 状態管理
- **Framer Motion**: アニメーション

### インフラ
- **AWS S3**: 静的サイトホスティング
- **AWS CloudFront**: CDN
- **AWS Route53**: DNS管理（オプション）
- **Terraform**: Infrastructure as Code

### CI/CD
- **GitHub Actions**: 自動デプロイ
- **AWS CLI**: デプロイメント

## 📁 プロジェクト構造

```
korean-learning-aws/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CDパイプライン
├── frontend/
│   ├── public/                 # 静的ファイル
│   ├── src/
│   │   ├── components/         # Reactコンポーネント
│   │   ├── data/              # フレーズ・クイズデータ
│   │   ├── store/             # 状態管理(Zustand)
│   │   ├── types/             # TypeScript型定義
│   │   └── App.tsx            # メインアプリ
│   ├── package.json
│   └── tsconfig.json
├── terraform/
│   ├── main.tf                # メインインフラ定義
│   ├── variables.tf           # 変数定義
│   └── terraform.tfvars.example
└── README.md
```

## 🎨 デザイン仕様

- **カラーパレット**: 韓国らしい紫・青のグラデーション
- **フォント**: Noto Sans JP/KR（日韓文字対応）
- **レスポンシブ**: モバイルファーストデザイン
- **アニメーション**: Framer Motionによるスムーズな遷移

## 🔧 カスタマイズ

### フレーズの追加
`frontend/src/data/index.ts` でフレーズデータを編集できます。

### クイズの追加
同じファイルでクイズデータも追加可能です。

### スタイルの変更
Material-UIのテーマを `frontend/src/App.tsx` で変更できます。

## 📝 今後の機能追加予定

- [ ] 音声再生機能
- [ ] ユーザー進捗管理
- [ ] お気に入りフレーズ機能
- [ ] フラッシュカード機能
- [ ] レベル別コンテンツフィルタリング

## 🤝 コントリビューション

1. Forkする
2. feature branchを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をcommit (`git commit -m 'Add amazing feature'`)
4. branchにpush (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

## 📄 ライセンス

MIT License

## 🙏 謝辞

- 韓国語学習者の皆さん
- K-pop・韓ドラファンコミュニティ
- オープンソースコミュニティ

---

**Made with ❤️ for Korean language learners**

친구처럼 자연스럽게 한국어를 배워보세요! 🇰🇷