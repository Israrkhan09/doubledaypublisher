const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ddp/send-mail.php', // The path on your server
    createProxyMiddleware({
      target: 'https://doubledaypublisher.com', // The target domain
      changeOrigin: true,
      secure: true, // IMPORTANT for HTTPS
    })
  );
};