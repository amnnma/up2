const withImages = require('next-images')
module.exports = withImages({
    basePath: "/upcycling",
    distDir: "upcycling",  
    fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"]
})