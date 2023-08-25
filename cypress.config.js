const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1600,
  viewportWidth: 2560,
  e2e: {
    baseUrl: 'https://www.imdb.com',
  },
})
