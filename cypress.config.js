const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    standardUser: 'standard_user',
    lockedOutUser: 'locked_out_user',
    problemUser: 'problem_user',
    errorUser: 'error_user',
    password: 'secret_sauce'
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
