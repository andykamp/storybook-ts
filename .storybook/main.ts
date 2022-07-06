const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-storysource",
    "storybook-addon-designs",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true, // 👈 Enable playback controls
  },
  async viteFinal(config, options) {
    // Add your configuration here
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/atoms": path.resolve(__dirname, "../src/atoms"),
      "@/molecules": path.resolve(__dirname, "../src/molecules"),
      "@/organisms": path.resolve(__dirname, "../src/organisms"),
      "@/templates": path.resolve(__dirname, "../src/templates"),
      "@/pages": path.resolve(__dirname, "../src/pages"),
      "@/design": path.resolve(__dirname, "../src/design"),
      "@/docs": path.resolve(__dirname, "../src/docs"),
      "@/assets": path.resolve(__dirname, "../src/assets"),
    };
    return config;
  },
};
