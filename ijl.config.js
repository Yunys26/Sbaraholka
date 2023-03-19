const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  },
  navigations: {
    'sbaraholka.main': '/sbaraholka'
  },
  features: {
    'sbaraholka': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value'
  }
}
