# Simple Node.js Proxy Server

Node.jsと[`http-proxy`](https://github.com/http-party/node-http-proxy)を使った超シンプルな汎用プロキシサーバーです。  
学校や職場のネットワーク制限を突破したい時のテスト用などにどうぞ！

---

## 特徴

- リクエストURLのホストヘッダーを元に自動で転送先を決定
- 簡単に起動＆利用可能
- GlitchやReplitなどクラウド環境でも動作可能（ただし利用規約は要確認）

---

## 動作環境

- Node.js（バージョン12以上推奨）
- npm

---

## セットアップ方法

1. このリポジトリをクローンまたはダウンロードします。

2. 依存パッケージをインストールします。

```bash
npm install
