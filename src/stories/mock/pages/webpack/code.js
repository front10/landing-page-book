const indexCodeExample = `
import bar from './bar';

bar();
`;

const barCodeExample = `
export default function bar() {
  //
}
`;

const configCodeExample = `
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
`;

const pageCodeExample = `
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script src="dist/bundle.js"></script>
  </body>
</html>
`;

export { indexCodeExample, barCodeExample, configCodeExample, pageCodeExample };
