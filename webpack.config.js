const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const webpackMerge = require("webpack-merge");

module.exports = ({mode, presets}= {mode: "production", presets: []}) => {

  console.log(mode)
    return webpackMerge({
      mode,
      output:{
        filename: "bundle.js"
      },
      plugins:[new HtmlWebPackPlugin(), new webpack.ProgressPlugin()]
    },
    //modeConfig(mode),
    //loadPresets({mode, presets})
    )
    // return {
    //   //mode: env.mode,
    //   mode,
    //   output:{
    //     filename: "bundle.js"
    //   },
    //   plugins:[new HtmlWebPackPlugin(), new webpack.ProgressPlugin()]
    //
    // };
};
