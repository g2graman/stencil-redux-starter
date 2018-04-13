module.exports = {
  extends: ['tslint-config-standard', 'tslint-sonarts'],
  linterOptions: {
    exclude: [
      "src/components.d.ts"
    ]
  },
  rules: {
    semicolon: [true, 'always']
  }
};
