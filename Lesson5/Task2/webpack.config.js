const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    
    entry: {
        profile: './profile/index.js',
        dashboard: './dashboard/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
};