const path = require('path')

module.exports = {
    devIndicators: {
        autoPrerender: false,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}