const path = require("path");
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    }
}

module.exports = withPlugins([
    [optimizedImages, {

    }],

], nextConfig);