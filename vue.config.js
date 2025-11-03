// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
            }),
            // new webpack.ProvidePlugin({
            //     process: "process/browser",
            // }),
            new webpack.DefinePlugin({
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
            }),
        ],
        resolve: {
            fallback: {
                os: false,
                url: false,
                crypto: false,
                https: false,
                http: false,
                assert: false,
                stream: false,
                process: false,
                path: false,
                zlib: false,
                buffer: require.resolve("buffer"),
            },
        },
    },
});
