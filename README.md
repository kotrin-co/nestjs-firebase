## アーキテクチャ

### クラウドインフラ

- Firebase
  - functions
  - firestore
  - cloud storage
  - authentication
  - emulators

### バックエンド

- 言語: TypeScript
- フレームワーク: Nest.js 10
- データベース: Firestore

### バックエンド環境構築手順

1. firebase CLI のインストール
2. Node.js のインストール（バージョンは 18 以上）
3. backend ディレクトリにて npm install

### ローカル開発

- サーバー起動

ホットリロード

```
npm run watch
```

watch を立ち上げながら、firebase emulators を起動

```
npm run fb-serve
```

- エミュレータ UI

```
http://localhost:4000
```

- 基本エンドポイント

```
http://127.0.0.1:5001/makegift-8a27f/asia-northeast1/api
```

- swagger

```
http://127.0.0.1:5001/makegift-8a27f/asia-northeast1/api/docs
```
