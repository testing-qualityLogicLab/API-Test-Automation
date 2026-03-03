// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 1,
  timeout: 31000,
  expect:    
  {
    timeout: 20000,
  },

  reporter: 'html',

  projects:
  [
    {
    name: 'chrome',
    use: {
    browserName: 'chromium',
    headless: false,
    screenshot:'only-on-failure', //on, off , only-on-faolure
    video:'retain-on-failure', // on, off, retain-on-failure, on-first-retry
    trace:'retain-on-failure' // on, off, retain-on-failure, on-first-retry
    }
    },
    
   {
    name: 'firefox',
    use: {
    browserName: 'firefox',
    headless: false,
    screenshot:'only-on-failure', //on, off , only-on-faolure
    video:'retain-on-failure', // on, off, retain-on-failure, on-first-retry
    trace:'retain-on-failure' // on, off, retain-on-failure, on-first-retry
    }
    },
    
    {
    name: 'edge',
    use: {
    browserName: 'chromium',
    channel: 'msedge',
    headless: false,
    screenshot:'only-on-failure', //on, off , only-on-faolure
    video:'retain-on-failure', // on, off, retain-on-failure, on-first-retry
    trace:'retain-on-failure' // on, off, retain-on-failure, on-first-retry
    }
    },

    {
    name: 'safari',
    use: {
    browserName: 'webkit',
    headless: false,
    screenshot:'only-on-failure', //on, off , only-on-faolure
    video:'retain-on-failure', // on, off, retain-on-failure, on-first-retry
    trace:'retain-on-failure' // on, off, retain-on-failure, on-first-retry
    }
    }

  ]

});

module.exports = config

