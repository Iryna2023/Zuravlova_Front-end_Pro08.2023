const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://658ec29b2871a9866e79bfcc.mockapi.io/api/todos',
      changeOrigin: true,
    })
  );
};