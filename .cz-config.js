// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require("glob")

/**
 * @param {string} pattern
 * @param {(path: string) => string} fn
 */
const globMap = (pattern, fn) =>
  glob
    .sync(pattern)
    .map(fn || ((path) => path))
    .map((path) => path.replace(/\/$/, ""))

/**
 * Check `path` to not include substring in `variants`
 * @param {string[]} variants
 * @return {(path: string) => boolean}
 */
const exclude = (variants) => (path) =>
  variants.every((variant) => !path.includes(variant))

/**
 * Check `path` to include substring of one of `variants`
 * @param {string[]} variants
 * @return {(path: string) => boolean}
 */
const include = (variants) => (path) =>
  variants.some((variant) => path.includes(variant))

module.exports = {
  // prettier-ignore
  types: [
    { value: "feat",     name: "feat:     A new feature" },
    { value: "fix",      name: "fix:      A bug fix" },
    { value: "docs",     name: "docs:     Documentation only changes" },
    { value: "style",    name: "style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)", },
    { value: "chore",    name: "chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation", },
    { value: "config",   name: "config:   Changes in configuration files. Add new or remove old." },
    { value: "refactor", name: "refactor: A code change that neither fixes a bug nor adds a feature", },
    { value: "perf",     name: "perf:     A code change that improves performance" },
    { value: "test",     name: "test:     Adding missing tests" },
    { value: "revert",   name: "revert:   Revert to a commit" },
    { value: "wip",      name: "wip:      Work in progress" },
  ],
  scopes: [].concat(
    "app",
    globMap("src/*/", (path) => path.replace(/src\//, "")).filter(
      exclude(["components", "pages"]),
    ),
    "components",
    globMap("src/components/*/", (path) => path.replace("src/", "")),
    "pages",
    globMap("src/pages/*/", (path) => path.replace("src/", "")),
  ),
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "revert"],
  subjectLimit: 100,
}
