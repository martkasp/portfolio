const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
const { GracefulShutdownManager } = require('@moebius/http-graceful-shutdown');

const app = express();

const { PORT = 3000 } = process.env;
const { API_SERVER_HOST = 'CHANGE-ME' } = process.env;

const options = {
    target: API_SERVER_HOST,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/api': '/api',
    },
};

app.use('/api', createProxyMiddleware(options));

app.use('/', history());

const server = app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
const shutdownManager = new GracefulShutdownManager(server);

process.on('SIGTERM', () => {
    shutdownManager.terminate(() => {
        console.log('Server is gracefully terminated');
    });
});
