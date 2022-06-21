exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://site.dev-5.seedz.ag',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    pin_page: './pages/pin_page.js',
    user_login_page: './pages/user_login_page.js',
    password_login_page: './pages/password_login_page.js',
    myaccout_page: './pages/myaccount_page.js',
    create_user_page: './pages/create_user_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    },
    allure: {
      enabled: true
    },
    mocha: {
      reporterOptions: {}
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.js',
  name: 'POC_CodeceptJS_WEB_Fidelidade'
}
