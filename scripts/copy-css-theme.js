const fs = require('fs');
const path = require('path');

const { resolve } = path;
const absolute = resolve();
const file = `${absolute}/assets/themes/default/index.css`;

function copyFileCSS() {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile(`${absolute}/public/theme.css`, data, 'utf8', () => {
      console.log('Copied themes to public');
    });
  });
}

const interval = setInterval(() => {
  if (fs.existsSync(`${absolute}/public/index.html`)) {
    copyFileCSS();
    clearInterval(interval);
  }
}, 5000);
