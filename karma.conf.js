module.exports = function(config) {
  config.set({
    browsers: ['ChromiumHeadless'],
    customLaunchers: {
      ChromiumHeadless: {
        base: 'Chromium',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--disable-dev-shm-usage'
        ],
      },
    },
  });
};
