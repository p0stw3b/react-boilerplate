const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies

const eslintConfig = require("./.eslintrc.js")

const resolve = (arg) => path.resolve(__dirname, arg)

// eslint-disable-next-line func-names
module.exports = function () {
  return {
    webpack: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
        "~": resolve("src"),
        "~api": resolve("src/api"),
        "~features": resolve("src/features"),
        "~lib": resolve("src/lib"),
        "~locales": resolve("src/locales"),
        "~pages": resolve("src/pages"),
        "~redux": resolve("src/redux"),
        "~router": resolve("src/router"),
        "~ui": resolve("src/ui"),
      },
    },
    eslint: {
      mode: "extends",
      configure: {
        ...eslintConfig,
      },
      loaderOptions: (eslintOptions) => ({ ...eslintOptions, ignore: true }),
    },
    jest: {
      configure: {
        moduleNameMapper: {
          "^@/(.*)$": "<rootDir>/src/$1",
        },
      },
    },
  }
}
