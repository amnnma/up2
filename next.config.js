const withImages = require('next-images')
module.exports = withImages({
    future: {
        webpack5: true
      },
    fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
    webpack(config, options) {
      return config
    }
})