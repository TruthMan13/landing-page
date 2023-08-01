const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    ['/api*'],
    createProxyMiddleware({
      target: 'localhost:5800',
    })
  );
};
