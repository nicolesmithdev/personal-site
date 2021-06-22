module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Nicole Smith | WordPress Web Developer';
                args[0].minify = false;
                return args;
            })
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/sass/style.scss";`
            }
        }
    }
};