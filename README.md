# Mobile Expo Playground

React Native + Expoにとる開発を進める上で実機でのテストができるかどうかを確かめるための、リポジトリです。
以下のマニュアルを参考に実機でのテストを行ってください。

<img width="1200" height="630" alt="image" src="https://github.com/user-attachments/assets/bdebb4b2-f325-46c7-a6ce-840b56b56190" />

---

## 前提条件

### 必須ソフトウェア
- **Node.js** (v18以上推奨)
- **npm** または **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)

### 実機準備
- **iOS端末** (iOS 13.0以上)
- **Android端末** (Android 6.0以上)
- 開発マシンと同一Wi-Fiネットワークへの接続

---

## 方法1: Expo Go アプリでテスト（最も簡単）

```bash
# 基本の起動（Expo Go専用URL生成）
npx expo start --go

# npm script経由の場合
npm start -- --go

# ネットワーク問題対応（推奨）
npx expo start --go --tunnel

# 重要：--goフラグを必ず使用
# expo-dev-clientがある場合、--goなしだと開発ビルド用URLになりiOSカメラで認識不可
```

### ステップ1: Expo Goアプリのインストール
1. **iOS:** App Storeから「Expo Go」をダウンロード
2. **Android:** Google Play Storeから「Expo Go」をダウンロード

### ステップ2: 開発サーバーの起動
```bash
# プロジェクトディレクトリで実行
npm start
# または
npm run start
```

### ステップ3: 実機での接続
1. **開発サーバー起動後、ターミナルにQRコードが表示されます**
2. **iOS:** カメラアプリでQRコードをスキャン → Expo Goで開くを選択
3. **Android:** Expo GoアプリでQRコードをスキャン

### 期待される結果（AIが作りました。）
- 深い宇宙色の背景が表示される
- 「Hello World」の文字が光るエフェクトで表示される
- 「宇宙最強の完璧なアプリ」のサブタイトル
- 「戦闘力: 530,000」の表示

### 発行されたQRコード(URL)が`//expo+devclient/...`となっている場合

方法2で使用する`expo-dev-client`がインストールされている（package.jsonのデフォルト設定が開発ビルド用設定になっている）場合、`npm start`で発行されるURLは`exp+devclient://〜`を優先表示するため、iOSカメラで読み取っても"使用可能なデータが見つかりません"と表示される。

その場合は以下のように`--go`プレフィックスを使用して、明示的にExpo Goターゲットに切り替えてください。
```bash
# 一度サーバーを停止してから
npx expo start --go
# npm script経由なら
npm start -- --go
# ネットワークが怪しいなら（外出先/社内網）
npx expo start --go --tunnel
```

---

## 方法2: 開発ビルドでテスト（上級者向け）

### ステップ1: 開発ビルドの作成
```bash
# EAS CLIのインストール（初回のみ）
npm install -g eas-cli

# 開発ビルドの作成
eas build --profile development --platform all
```

### ステップ2: ビルドのインストール
1. EASダッシュボードからビルドをダウンロード
2. **iOS:** TestFlightまたは直接インストール
3. **Android:** APKファイルから直接インストール

### ステップ3: 接続とテスト
```bash
# 開発サーバーの起動
npm run dev
```

---

## ネットワーク設定とトラブルシューティング

### 一般的な問題と解決法

#### 問題1: QRコードをスキャンしても接続できない
**解決法:**
```bash
# IPv4アドレスを明示的に指定
expo start --tunnel
# または
expo start --localhost
```

#### 問題2: 「Metro bundler is not running」エラー
**解決法:**
```bash
# キャッシュをクリアして再起動
npm run reset
npm start
```

#### 問題3: ネットワーク接続エラー
**確認事項:**
- 開発マシンと実機が同一Wi-Fiに接続されているか
- ファイアウォールが8081ポートをブロックしていないか
- VPN接続が干渉していないか

**解決法:**
```bash
# トンネルモードで起動（ngrokを使用）
expo start --tunnel
```

#### 問題4: アプリのコンパイルエラー
**解決法:**
```bash
# TypeScriptの型チェック
npm run type-check

# 依存関係の再インストール
npm run reset
```

#### 問題5: トンネルモードでもiOSカメラが"使用可能なデータが見つかりません"と表示
**原因:** `expo-dev-client`がインストールされているため、開発ビルド用URL（`exp+devclient://`）が生成され、iOSカメラアプリで認識できない。

**確認方法:**
ターミナルで以下のような出力が表示される場合：
```
› Scan the QR code above with your development build
› Or enter this URL directly in Expo Go: exp+devclient://[...]
```

**解決法:**
```bash
# 現在のサーバーを停止（Ctrl+C）してから以下を実行
npx expo start --go --tunnel
```

**期待される正しい出力:**
```
› Metro waiting on exp://[ngrok-url]/
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
› Using Expo Go
```

**重要:** `--go`フラグによりExpo Go専用URL（`exp://`）が生成され、iOSカメラで正常に認識されます。

---

## プラットフォーム別詳細手順

### iOS端末での詳細手順
1. **設定 > 一般 > デバイス管理** でプロファイルを信頼（開発ビルドの場合）
2. **Wi-Fi設定で開発マシンと同じネットワークに接続**
3. **カメラアプリでQRコードスキャン**
4. **「Expo Goで開く」を選択**

### Android端末での詳細手順
1. **設定 > セキュリティ > 提供元不明のアプリ** を有効化（開発ビルドの場合）
2. **Wi-Fi設定で開発マシンと同じネットワークに接続**
3. **Expo GoアプリのQRコードスキャナーを使用**
4. **「このデバイスで開く」を選択**

---

## テスト項目チェックリスト

### 基本動作確認
- [ ] アプリが正常に起動する
- [ ] 「Hello World」テキストが表示される
- [ ] 背景のグラデーションが正しく表示される
- [ ] 文字のシャドウエフェクトが適用されている
- [ ] ステータスバーが暗色（light mode）になっている

### パフォーマンス確認
- [ ] アプリの起動時間（3秒以内推奨）
- [ ] スクロールの滑らかさ
- [ ] メモリ使用量（Hermesエンジンの効果確認）

### 実機固有の確認
- [ ] 各種画面サイズでの表示
- [ ] 縦横回転での表示確認
- [ ] バックグラウンド復帰時の動作

---

## 高度なテスト手法

### パフォーマンス測定
```bash
# Hermesエンジンのデバッグ接続確認
curl http://127.0.0.1:8081/json/list
```

### リモートデバッグ
1. 開発者メニューを開く（端末を振る、または3本指タップ）
2. 「Open JS Debugger」を選択
3. Chromeデベロッパーツールでデバッグ

---

## 重要な注意事項

### セキュリティ
- **プロダクション環境では絶対にExpo Goを使用しないこと**
- **開発ビルドには機密情報を含めないこと**

### パフォーマンス
- **初回ビルド時は時間がかかることがある（5-15分）**
- **ネットワーク状況により接続速度が変わる**

---

## リソース

### 公式リソース
- [Expo公式ドキュメント](https://docs.expo.dev/)
- [React Native公式ドキュメント](https://reactnative.dev/)

### コミュニティ
- [Expo Discord](https://discord.gg/4gtbPAdpaE)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/expo)

---

このプロジェクトはほぼAIが書いたものです。
