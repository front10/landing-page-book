// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/yulier/Work/landing-page-book/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/yulier/Work/landing-page-book/src/pages/page-2.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/yulier/Work/landing-page-book/.cache/json/dev-404-page.json"),
  "404.json": require("/home/yulier/Work/landing-page-book/.cache/json/404.json"),
  "index.json": require("/home/yulier/Work/landing-page-book/.cache/json/index.json"),
  "page-2.json": require("/home/yulier/Work/landing-page-book/.cache/json/page-2.json"),
  "404-html.json": require("/home/yulier/Work/landing-page-book/.cache/json/404-html.json")
}