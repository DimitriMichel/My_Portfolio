const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");
const withVideos = require("next-videos");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
module.exports = withVideos(
  withImages(
    withSass(
      withCSS(
        withFonts({
          webpack(config, options) {
            return config;
          }
        })
      )
    )
  )
);
