module.exports = {
  extends: ['tslint-config-standard'],
  linterOptions: {
    exclude: [
      "src/components.d.ts"
    ]
  },
  rules: {
    semicolon: [true, 'always']
  }
};
