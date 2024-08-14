const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/features/*.feature',
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/v1/',

    async setupNodeEvents(on, config) {
      allureWriter(on, config);

      await preprocessor.addCucumberPreprocessorPlugin(on, config);
    
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
    
      return config;
    }
  },
  env: {
    allure: true
  }
});





