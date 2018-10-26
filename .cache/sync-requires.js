// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/yulier/Work/landing-page-book/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/index.js")),
  "component---src-pages-layouts-main-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/layouts/main.js")),
  "component---src-pages-components-index-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/components/index.js")),
  "component---src-pages-animated-hero-jsx": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/animated-hero.jsx")),
  "component---src-pages-layouts-container-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/layouts/container.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/yulier/Work/landing-page-book/.cache/json/dev-404-page.json"),
  "404.json": require("/home/yulier/Work/landing-page-book/.cache/json/404.json"),
  "index.json": require("/home/yulier/Work/landing-page-book/.cache/json/index.json"),
  "layouts-main.json": require("/home/yulier/Work/landing-page-book/.cache/json/layouts-main.json"),
  "404-html.json": require("/home/yulier/Work/landing-page-book/.cache/json/404-html.json"),
  "components.json": require("/home/yulier/Work/landing-page-book/.cache/json/components.json"),
  "animated-hero.json": require("/home/yulier/Work/landing-page-book/.cache/json/animated-hero.json"),
  "layouts-container.json": require("/home/yulier/Work/landing-page-book/.cache/json/layouts-container.json")
}