// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
const prod = process.env.NODE_ENV === "production";

module.exports = {
  mode: prod
    ? "production"
    : "development" /* mode: 프로덕션 모드인지 개발 모드인지 확인하는 옵션이다. */,
  devtool: prod
    ? "hidden-source-map"
    : "source-map" /* devtool : 프로덕션 모드인 경우엔 hidden-source-map을 권장한다. (외부에서 리액트 구조를 확인할 수 없다.) */,
  entry: "./src/index.tsx",
  resolve: {
    /* resolve : 확장자나 경로를 알아서 처리할 수 있도록 설정하는 옵션이다. */
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  stats: { children: true },

  module: {
    /* module : 이 옵션에 설치한 ts-loader와 babel-loader를 설정하면 된다. loader들은 오른쪽에서 왼쪽 방향으로 적용되기 때문에 ts-loader를 babel-loader보다 오른쪽에 위치시켜야 한다. */
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  output: {
    // output : 번들화 된 파일을 export할 경로와 파일명을 설정한다.
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    // sourceMapFilename: "[name].js.map",
  },

  devServer: {
    historyApiFallback: true /* historyApiFallback : 히스토리 API를 사용하는 SPA 개발 시 설정하며 404에러가 발생하면 index.html로 리다이렉트 한다. */,
    // inline: true, /* inline : inline모드를 활성화 해준다. (이거 이제 안씀) */
    port: 3000 /* port : 접속 포트를 설정한다. */,
    hot: true /* webpack의 HMR기능을 활성화 한다. (리로드 기능) */,
    // publicPath: '/' /* publicPath : 브라우저를 통해 접근하는 기본 주소값을 설정한다. (이거 이제 안씀) */
  },

  plugins: [
    /* plugins : 설치한 플러그인을 적용하는 옵션이다 */
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
