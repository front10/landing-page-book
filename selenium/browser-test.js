const webdriver = require('selenium-webdriver');

// Input capabilities
const Chrome = {
  os: 'Windows',
  os_version: '10',
  browserName: 'Chrome',
  browser_version: '62.0',
  project: 'home',
  name: 'Home page',
  'browserstack.local': 'false',
  'browserstack.selenium_version': '3.5.2',
  'browserstack.chrome.driver': '2.35',
  'browserstack.user': 'yoandrycollazo1',
  'browserstack.key': 'keqUpLHUTfApAq2fM77i'
};

const Firefox = {
  os: 'Windows',
  os_version: '10',
  browserName: 'Firefox',
  browser_version: '63.0 beta',
  project: 'home',
  name: 'Home page',
  'browserstack.local': 'false',
  'browserstack.timezone': 'UTC',
  'browserstack.selenium_version': '3.5.2',
  'browserstack.chrome.driver': '',
  'browserstack.user': 'yoandrycollazo1',
  'browserstack.key': 'keqUpLHUTfApAq2fM77i'
};

const Safari = {
  os: 'OS X',
  os_version: 'High Sierra',
  browserName: 'Safari',
  browser_version: '11.0',
  project: 'home',
  name: 'Home page',
  'browserstack.local': 'false',
  'browserstack.timezone': 'UTC',
  'browserstack.selenium_version': '3.5.2',
  'browserstack.user': 'yoandrycollazo1',
  'browserstack.key': 'keqUpLHUTfApAq2fM77i'
};

const Iexplorer = {
  os: 'Windows',
  os_version: '10',
  browserName: 'IE',
  browser_version: '11.0',
  project: 'home',
  name: 'Home page',
  'browserstack.local': 'false',
  'browserstack.timezone': 'UTC',
  'browserstack.selenium_version': '3.5.2',
  'browserstack.user': 'yoandrycollazo1',
  'browserstack.key': 'keqUpLHUTfApAq2fM77i'
};

const Edge = {
  os: 'Windows',
  os_version: '10',
  browserName: 'Edge',
  browser_version: '17.0',
  project: 'home',
  name: 'Home page',
  'browserstack.local': 'false',
  'browserstack.timezone': 'UTC',
  'browserstack.selenium_version': '3.5.2',
  'browserstack.user': 'yoandrycollazo1',
  'browserstack.key': 'keqUpLHUTfApAq2fM77i'
};

const vchrome = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(Chrome)
  .build();
const vfirefox = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(Firefox)
  .build();
const vSafari = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(Safari)
  .build();
const vIexplorer = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(Iexplorer)
  .build();
const vEdge = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(Edge)
  .build();

vchrome.get('https://front10.com/landing-page-book').then(() => {
  vchrome.then(() => {
    vchrome.getTitle().then(() => {
      vchrome.quit();
    });
  });
});
vfirefox.get('https://front10.com/landing-page-book').then(() => {
  vfirefox.then(() => {
    vfirefox.getTitle().then(() => {
      vfirefox.quit();
    });
  });
});
vSafari.get('https://front10.com/landing-page-book').then(() => {
  vSafari.then(() => {
    vSafari.getTitle().then(() => {
      vSafari.quit();
    });
  });
});
vIexplorer.get('https://front10.com/landing-page-book').then(() => {
  vIexplorer.then(() => {
    vIexplorer.getTitle().then(() => {
      vIexplorer.quit();
    });
  });
});
vEdge.get('https://front10.com/landing-page-book').then(() => {
  vEdge.then(() => {
    vEdge.getTitle().then(() => {
      vEdge.quit();
    });
  });
});
