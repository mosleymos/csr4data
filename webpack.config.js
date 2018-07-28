const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = (env) => {

  console.log(env)
    return {
      //mode: env.mode,
      output:{
        filename: "bundle.js"
      },
      plugins:[new HtmlWebPackPlugin(), new webpack.ProgressPlugin()]

    };
};
