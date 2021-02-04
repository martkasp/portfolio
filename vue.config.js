module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/styles/vars.scss";',
            },
        },
    },
    devServer: {
        port: '3000',
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },
};
