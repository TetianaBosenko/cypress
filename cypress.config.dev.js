import { defineConfig } from "cypress";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default defineConfig({
  allowCypressEnv: true,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    baseUrl: "https://qauto2.forstudy.space",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    username: "devuser@gmail.com",
    password: "T6urt2mv!",
  },
});
