# DX Portfolio Landing Page

地方自治体の土木・インフラ分野での業務改善、DX、学習活動、Web記事、試作ツールを一覧するための個人用静的LPです。

## 構成

- `index.html`：ページ本体
- `style.css`：デザイン、レスポンシブ対応
- `script.js`：スマホメニュー、記事タグ絞り込み、トップへ戻るボタン
- `README.md`：この説明と公開手順

## 編集する場所

公開前に、次の仮置きテキストを自分用に差し替えてください。

- `田舎の人＠twitter`
- `https://github.com/tetsuHama1534`
- `https://x.com/GIANT_TCR1_TH`
- `https://note.com/tetsu_hama`
- `https://note.com/tetsu_hama/n/n2c6900b3778f?sub_rt=share_sb` などの記事URL
- `https://www.pref.toyama.jp/documents/45868/07kencyokasseika.pdf` などのプロジェクトURL

職場名、部署名、内部情報、非公開の業務内容は書きすぎない設計にしています。公開できる範囲の概要に留めてください。

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成します。
2. このフォルダ内の `index.html`、`style.css`、`script.js`、`README.md` をリポジトリ直下に配置します。
3. GitHubにファイルをアップロード、またはローカルからコミットしてプッシュします。
4. GitHubのリポジトリ画面で `Settings` を開きます。
5. 左メニューの `Pages` を開きます。
6. `Build and deployment` の `Source` で `Deploy from a branch` を選びます。
7. `Branch` で `main`、フォルダで `/root` を選び、保存します。
8. 数分待つと、GitHub PagesのURLが表示されます。

## カスタマイズ例

- 記事を増やす場合は、`index.html` の `Articles` セクションにある `.link-card` をコピーして追加します。
- タグ絞り込みを増やす場合は、タグボタンの `data-filter` と記事カードの `data-tags` を合わせます。
- プロジェクトを増やす場合は、`Projects` セクションの `.project-item` をコピーして追加します。

## 技術要件

- HTML / CSS / JavaScriptのみ
- サーバー処理なし
- DBなし
- 外部ライブラリなし
- GitHub Pages対応
- レスポンシブ対応
