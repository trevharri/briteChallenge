const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '8tq226',
  viewportHeight: 1080,
  viewportWidth: 1920,
  videoUploadOnPasses: false,
  e2e: {
    baseUrl: 'https://www.imdb.com',
  },
})
