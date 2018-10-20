const withSass  = require('@zeit/next-sass');
const withFonts = require('@ninetynine/next-fonts');

module.exports = withSass(withFonts());