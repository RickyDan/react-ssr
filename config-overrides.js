const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired")
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  )

  tsLoader.options = {
    ...tsLoader.options,
    getCustomTransformers: () => ({
      before: [tsImportPluginFactory({
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      })]
    })
  }

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
  })(config, env)

  return config
}
