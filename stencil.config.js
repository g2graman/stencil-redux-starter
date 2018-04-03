const pkg = require('./package.json');

exports.config = {
  // namespace: pkg.name,
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
