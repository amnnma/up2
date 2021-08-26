const withImages = require('next-images')
module.exports = withImages({
    future: {
        webpack5: true
      },
    basePath: "/upcycling",
    distDir: "upcycling",  
    fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
    webpack(config, options) {
      return config
    }
})