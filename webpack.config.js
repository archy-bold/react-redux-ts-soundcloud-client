module.exports = {
    entry: [
        "webpack-dev-server/client?http://192.168.34.10:8080",
        "webpack/hot/only-dev-server",
        "./src/index.tsx"
    ],
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "./dist/bundle.js",
    },

    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        root: [ __dirname ],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }
        ],


        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    watchOptions: {
        poll: true
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    }
};
