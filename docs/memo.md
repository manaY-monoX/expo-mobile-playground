## 開発ビルドでテストの結果

2025/08/14 14:30

### 行ったこと

EAS CLIをインストールして、開発ビルドを行い、Expoプロジェクトを、AndroidとiOSの実機でテストするための**特別な開発用アプリ（開発クライアント）**に変換（ビルド）しようとしている一連の作業を開始

```bash
# EAS CLIのインストール（初回のみ）
npm install -g eas-cli

# 開発ビルドの作成
eas build --profile development --platform all
```

### 結果
* Expoアカウントにログイン: EASクラウドサービスにログイン
* expo-dev-clientのインストール: 開発クライアントを作るために必須のライブラリexpo-dev-clientがプロジェクトになかったため、自動でインストール

* Androidアプリのビルド
  * Android app IDを`com.manay_monox.mobileexpoplayground`で設定
  * キーストア（正規の開発者であることを証明するための**電子署名**を新規に作成）の作成
  * EASに圧縮したプロジェクトファイルをアップロード
  
* iOSアプリのビルド
  * Bundle Identifierを`mobile-expo-playground`に設定
  * Appleアカウントへのログイン: Apple Developerアカウントへログインしようとしたが失敗

### 失敗の原因

```bash
Authentication with Apple Developer Portal failed! You have no team associated with your Apple account, cannot proceed.
```

iOSアプリをビルドして実機で動かすには、年間費用（日本では現在12,980円/年）が発生する「Apple Developer Program」に加入している必要があります。あなたのApple ID（m-yamashita@mono-x.com）はこのプログラムに加入していないため、「開発者チームに所属していない」と判断され、ビルドに必要な証明書を作成できずに処理が停止しました。