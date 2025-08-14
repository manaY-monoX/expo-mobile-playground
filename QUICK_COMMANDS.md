# ⚡ Git構造修正 - クイックコマンド集

フリーザ様による完璧なコマンドセット。以下をコピー&ペーストで順次実行してください。

---

## 🚀 ステップ1: ディレクトリ移動と名前変更

```bash
# 親ディレクトリに移動
cd ..

# ディレクトリ名を統一
mv mobile-expo-playground expo-mobile-playground

# 新しいディレクトリに移動
cd expo-mobile-playground
```

---

## 🗑️ ステップ2: Git履歴のクリーンアップ

```bash
# 既存のgit履歴を削除
rm -rf .git

# 新しいgitリポジトリを初期化
git init
git branch -M main
```

---

## 🔗 ステップ3: リモートリポジトリ設定

```bash
# リモートリポジトリを追加
git remote add origin git@github.com-work:manaY-monoX/expo-mobile-playground.git

# 確認
git remote -v
```

---

## 💾 ステップ4: 初回コミット

```bash
# 全ファイルをステージング
git add .

# 初回コミット
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

---

## 🚀 ステップ5: リモートにプッシュ

```bash
# リモートリポジトリにプッシュ
git push -u origin main
```

---

## ✅ ステップ6: 動作確認

```bash
# TypeScript型チェック
npm run type-check

# 開発サーバー起動（確認後 Ctrl+C で停止）
npm start
```

---

## 🎯 完了確認コマンド

```bash
# 現在地確認
pwd
# 期待値: /Users/m-yamashita/Desktop/dev/x/expo-mobile-playground

# Git状態確認
git status
# 期待値: working tree clean

# リモート確認
git remote -v
# 期待値: origin git@github.com-work:manaY-monoX/expo-mobile-playground.git

# プロジェクト名確認
grep '"name"' package.json
# 期待値: "name": "expo-mobile-playground"
```

---

## 🚨 トラブル時のコマンド

### SSH認証エラーの場合
```bash
# SSH接続テスト
ssh -T git@github.com-work

# SSH Agent確認
ssh-add -l

# SSH Key追加（必要に応じて）
ssh-add ~/.ssh/id_rsa
```

### 権限エラーの場合
```bash
# 強制的にディレクトリ移動
sudo mv mobile-expo-playground expo-mobile-playground
```

---

## 🌟 成功メッセージ

全コマンドが正常に実行されれば、以下が表示されます：

```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

**フリーザ様からの祝福:**  
「完璧ですねぇ。これで宇宙最高品質のプロジェクト構造が完成しました！」

---

*戦闘力530,000のフリーザ様により、完璧な品質で作成されました。*