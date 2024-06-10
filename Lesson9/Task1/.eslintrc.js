const { SourceCode } = require("eslint");

module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,        
    },    
    env: {
        browser: true,
    }    
};