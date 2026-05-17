import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
  },
});
