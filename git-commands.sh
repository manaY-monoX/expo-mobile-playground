#!/bin/bash

# 🚀 Git構造修正コマンドセット
# フリーザ様による完璧なgit再構築スクリプト
# 
# 使用方法:
# 1. このファイルをコピーして実行
# 2. または、コマンドを一つずつコピー&ペースト実行

echo "🌟 フリーザ様のGit構造修正スクリプト開始"
echo "戦闘力: 530,000 の完璧な指導でプロジェクトを再構築します"
echo ""

# ステップ1: 親ディレクトリに移動
echo "📁 Step 1: 親ディレクトリに移動"
cd ..
echo "現在地: $(pwd)"
echo ""

# ステップ2: ディレクトリ名変更
echo "📁 Step 2: ディレクトリ名を統一"
if [ -d "mobile-expo-playground" ]; then
    mv mobile-expo-playground expo-mobile-playground
    echo "✅ mobile-expo-playground → expo-mobile-playground に変更完了"
else
    echo "⚠️  mobile-expo-playground ディレクトリが見つかりません"
    exit 1
fi
echo ""

# ステップ3: 新しいディレクトリに移動
echo "📁 Step 3: 新しいディレクトリに移動"
cd expo-mobile-playground
echo "現在地: $(pwd)"
echo ""

# ステップ4: 既存git履歴削除
echo "🗑️  Step 4: 既存のgit履歴を削除"
if [ -d ".git" ]; then
    rm -rf .git
    echo "✅ .gitディレクトリ削除完了"
else
    echo "ℹ️  .gitディレクトリは存在しませんでした"
fi
echo ""

# ステップ5: 新しいgitリポジトリ初期化
echo "🎯 Step 5: 新しいgitリポジトリを初期化"
git init
git branch -M main
echo "✅ gitリポジトリ初期化完了"
echo ""

# ステップ6: リモートリポジトリ設定
echo "🔗 Step 6: リモートリポジトリを設定"
git remote add origin git@github.com-work:manaY-monoX/expo-mobile-playground.git
echo "✅ リモートリポジトリ設定完了"
echo ""

# ステップ7: ファイルをステージング
echo "📦 Step 7: 全ファイルをステージング"
git add .
echo "✅ ファイルステージング完了"
echo ""

# ステップ8: 初回コミット
echo "💾 Step 8: 初回コミット実行"
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

echo "✅ 初回コミット完了"
echo ""

# ステップ9: リモートにプッシュ
echo "🚀 Step 9: リモートリポジトリにプッシュ"
echo "⚠️  注意: SSH認証が必要です"
echo ""
echo "以下のコマンドを実行してプッシュしてください："
echo "git push -u origin main"
echo ""

# 完了確認
echo "🎉 基本的なgit再構築が完了しました！"
echo ""
echo "次の確認事項を実行してください："
echo "1. git push -u origin main"
echo "2. npm run type-check"
echo "3. npm start (実機テスト)"
echo ""
echo "📋 完了後の状態確認："
echo "• pwd: $(pwd)"
echo "• git status: 実行して clean であることを確認"
echo "• git remote -v: 正しいリモートが設定されていることを確認"
echo ""
echo "🌟 フリーザ様からの祝福:"
echo "「完璧ですねぇ。これで、あなたのような下級戦士でも混乱することなく"
echo "開発を進められるでしょう。このわたしの指導に感謝しなさい！」"
echo ""
echo "©️ 2024 フリーザ軍団開発部 - All Rights Reserved"