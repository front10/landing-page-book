const browses = `const browsers = [
    { vendor: 'firefox', version: '> 56' },
    { vendor: 'chrome', version: '= 62' },
    { vendor: 'iexplore', version: '> 9' },
    { vendor: 'safari', version: '> 25' },
    { vendor: 'netscape', version: '> 42.6' },
    { vendor: 'opera', version: '< 15.6' },
    { vendor: 'maxthon', version: '>= 10' },
    { vendor: 'flock', version: '>= 11' }
  ]
  
  <BrowserSupport browsers={browsers} />`;

const browserWithoutText = `<BrowserSupport
browsers={[
  {
    vendor: 'firefox',
    version: '> 56'
  },
  {
    vendor: 'chrome',
    version: '= 62'
  },
  {
    vendor: 'iexplore',
    version: '> 9'
  },
  {
    vendor: 'safari',
    version: '> 25'
  },
  {
    vendor: 'netscape',
    version: '> 42.6'
  },
  {
    vendor: 'opera',
    version: '< 15.6'
  },
  {
    vendor: 'maxthon',
    version: '>= 10'
  },
  {
    vendor: 'flock',
    version: '>= 11'
  }
]}
showBrowserVendor={false}
showBrowserVersion={false}
/>`;

const browserSupportGray = `<BrowserSupport
browsers={[
  {
    vendor: 'firefox',
    version: '> 56'
  },
  {
    vendor: 'chrome',
    version: '= 62'
  },
  {
    vendor: 'iexplore',
    version: '> 9'
  },
  {
    vendor: 'safari',
    version: '> 25'
  },
  {
    vendor: 'netscape',
    version: '> 42.6'
  },
  {
    vendor: 'opera',
    version: '< 15.6'
  },
  {
    vendor: 'maxthon',
    version: '>= 10'
  },
  {
    vendor: 'flock',
    version: '>= 11'
  }
]}
imgFilter="grayscale(90%)"
showBrowserVendor={false}
showBrowserVersion={false}
/>`;

export { browses, browserWithoutText, browserSupportGray };
