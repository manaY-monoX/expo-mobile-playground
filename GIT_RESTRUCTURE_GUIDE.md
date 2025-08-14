# 🚀 Git構造修正マニュアル
*フリーザ様による完璧なgit再構築指導書*

---

## ⚡ 概要

現在のプロジェクトは以下の問題を抱えています：
- gitリポジトリのルートが `/Users/m-yamashita/Desktop/dev/x/` にある
- プロジェクトが `mobile-expo-playground/` サブディレクトリにある
- 他のプロジェクト（kozoka-v2r、zenn-preview）も同じgitルートに含まれている

この手順書に従って、`expo-mobile-playground` を独立したgitリポジトリのルートに修正します。

---

## 📋 前提条件

### 現在の状況確認
```bash
# 現在地確認
pwd
# 結果: /Users/m-yamashita/Desktop/dev/x/mobile-expo-playground

# git状況確認  
git status
# 結果: 他のプロジェクトがuntrackedとして表示される

# リモート確認
git remote -v
# 結果: git@github.com-work:manaY-monoX/expo-mobile-playground.git
```

---

## 🔧 Step-by-Step 修正手順

### Step 1: 親ディレクトリに移動
```bash
cd ..
pwd
# 結果: /Users/m-yamashita/Desktop/dev/x
```

### Step 2: ディレクトリ名を変更
```bash
# ディレクトリ名を統一
mv mobile-expo-playground expo-mobile-playground

# 確認
ls -la
# expo-mobile-playground/ が作成されていることを確認
```

### Step 3: 新しいディレクトリに移動
```bash
cd expo-mobile-playground
pwd
# 結果: /Users/m-yamashita/Desktop/dev/x/expo-mobile-playground
```

### Step 4: 既存のgit履歴を削除
```bash
# 隠しファイルも含めて.gitディレクトリを完全削除
rm -rf .git

# 確認（.gitディレクトリが存在しないことを確認）
ls -la | grep .git
# 何も表示されないことを確認
```

### Step 5: 新しいgitリポジトリを初期化
```bash
# git初期化
git init
# 結果: Initialized empty Git repository in /Users/m-yamashita/Desktop/dev/x/expo-mobile-playground/.git/

# デフォルトブランチをmainに設定
git branch -M main
```

### Step 6: リモートリポジトリを設定
```bash
# リモートリポジトリ追加
git remote add origin git@github.com-work:manaY-monoX/expo-mobile-playground.git

# 確認
git remote -v
# 正しく設定されていることを確認
```

### Step 7: 全ファイルをステージング
```bash
# 全ファイルを追加
git add .

# ステージング状況確認
git status
# 全ファイルがnew fileとして表示されることを確認
```

### Step 8: 初回コミット
```bash
# 初回コミット実行
git commit -m "feat: プロジェクト構造を再構築し、expo-mobile-playground として独立したリポジトリに統一

🎯 変更内容:
- package.json name を expo-mobile-playground に統一
- app.json name/slug を expo-mobile-playground に統一  
- .cursor/rules の参照名を更新
- gitリポジトリを独立化、クリーンな履歴でスタート

🌟 成果物:
✅ 統一されたプロジェクト名
✅ 独立したgitリポジトリ構造
✅ 完璧なフリーザ様品質のHello Worldアプリ

🚀 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 9: リモートにプッシュ
```bash
# リモートリポジトリにプッシュ
git push -u origin main

# 成功すれば完了！
```

---

## ✅ 完了確認チェックリスト

### 構造確認
- [ ] `pwd` で `/Users/m-yamashita/Desktop/dev/x/expo-mobile-playground` が表示される
- [ ] `git status` で他のプロジェクトが表示されない
- [ ] `git remote -v` で正しいリモートが設定されている

### 動作確認
```bash
# TypeScript型チェック
npm run type-check
# エラーが出ないことを確認

# 開発サーバー起動テスト
npm start
# 正常に起動することを確認（Ctrl+Cで停止）
```

### プロジェクト名確認
- [ ] `package.json` の name が `expo-mobile-playground`
- [ ] `app.json` の name/slug が `expo-mobile-playground`
- [ ] `.cursor/rules/general.mdc` が統一された参照名

---

## 🚨 トラブルシューティング

### 問題1: ディレクトリの移動に失敗
```bash
# 権限確認
ls -la ..
# 書き込み権限があることを確認

# 強制移動
sudo mv mobile-expo-playground expo-mobile-playground
```

### 問題2: git push で認証エラー
```bash
# SSH key確認
ssh -T git@github.com-work

# SSH Agent確認
ssh-add -l

# 必要に応じてSSH keyを追加
ssh-add ~/.ssh/id_rsa
```

### 問題3: リモートリポジトリが存在しない
GitHubで `expo-mobile-playground` リポジトリが存在することを確認。
存在しない場合は先にGitHub上でリポジトリを作成してください。

---

## 🎯 期待される最終状態

### ディレクトリ構造
```
/Users/m-yamashita/Desktop/dev/x/
├── expo-mobile-playground/  <- 独立したgitリポジトリ
│   ├── .git/
│   ├── App.tsx
│   ├── package.json (name: expo-mobile-playground)
│   ├── app.json (name/slug: expo-mobile-playground)
│   └── その他のプロジェクトファイル
├── kozoka-v2r/             <- 別の独立したプロジェクト
└── zenn-preview/           <- 別の独立したプロジェクト
```

### Git状態
- `expo-mobile-playground` が独立したgitリポジトリ
- クリーンなgit履歴
- 正しいリモートリポジトリへの接続
- 他のプロジェクトの混入なし

---

## 🌟 成功時の確認事項

全て完了後、以下を確認してください：

1. **プロジェクト名統一**
   ```bash
   grep -r "mobile-expo-playground" . --exclude-dir=node_modules
   # 何も表示されないことを確認
   
   grep -r "expo-mobile-playground" . --exclude-dir=node_modules
   # 適切にリネームされていることを確認
   ```

2. **実機テスト**
   ```bash
   npm start
   # QRコードが表示され、実機で正常動作することを確認
   ```

3. **Git動作確認**
   ```bash
   git log --oneline
   # クリーンな履歴が表示される
   
   git status
   # working tree clean が表示される
   ```

---

## ⚠️ 重要な注意事項

### データバックアップ
- 作業前に重要なファイルをバックアップ推奨
- `node_modules` は再生成可能なので保存不要

### 他のプロジェクトへの影響
- `kozoka-v2r` と `zenn-preview` は影響を受けません
- それぞれ独立したgit管理が必要な場合は個別に設定

### 認証情報
- SSH keyやアクセストークンの設定は変更されません
- 既存の認証設定をそのまま使用可能

---

## 🎉 完了メッセージ

この手順が完了すると、以下が実現されます：

✅ **統一されたプロジェクト名** - `expo-mobile-playground`  
✅ **独立したgitリポジトリ** - クリーンな構造  
✅ **正常な実機テスト** - Hello Worldアプリの完璧な動作  
✅ **効率的な開発環境** - 混乱のない明確な構造  

**フリーザ様からの祝福:**  
「完璧ですねぇ。これで、あなたのような下級戦士でも混乱することなく開発を進められるでしょう。このわたしの指導に感謝しなさい！」

---

*このガイドは、フリーザ様の530,000の戦闘力により作成されました。*  
*手順通りに実行すれば、宇宙最高品質のプロジェクト構造が完成します。*

**©️ 2024 フリーザ軍団開発部 - All Rights Reserved**