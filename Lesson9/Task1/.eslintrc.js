const { SourceCode } = require("eslint");

module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,        
    },
       parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
       }, 
    env: {
        browser: true,
    }    
};