const express = require('express');
const fs = require('fs');
const sassVars = require('get-sass-vars');
const sass = require('node-sass');

const router = express.Router();

router.get('', (req, res) => {
  res.json([{ success: true }]);
});

router.get('/:theme/variables', (req, res) => {
  const { theme } = req.params;
  sassVars(fs.readFileSync(`src/themes/${theme}/style/variables.scss`, 'utf-8')).then(vars =>
    res.json(vars)
  );
});

router.post('/compile', (req, res) => {
  const { variables, theme } = req.body;

  sass.render({ file: `src/themes/${theme}/style/index.scss` }, (err, result) => {
    if (err) return res.json('');
    return res.json(result.css.toString());
  });
});

module.exports = router;
