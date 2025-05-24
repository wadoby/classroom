const http = require('http');
const httpProxy = require('http-proxy');

// プロキシサーバー作成
const proxy = httpProxy.createProxyServer({});

// ポート設定（Glitchならprocess.env.PORT）
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // ここで転送先URLを指定。例えばgoogleに飛ばすなら↓
  proxy.web(req, res, { target: 'http://www.google.com' }, err => {
    console.error('プロキシエラー:', err);
    res.writeHead(502);
    res.end('Bad Gateway');
  });
});

server.listen(PORT, () => {
  console.log(`Proxyサーバーがポート${PORT}で起動中`);
});
