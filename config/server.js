module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["PqT1DFhABW2knMmkaM8y8g==","EolyA2Sjk0wcU/7xyc3lrA==","jvhQLJNH8H3gol+aQRyN6A==","pkmwSSyU1Km8AZpZklh97g=="]),
  },
  admin: {
    watchIgnoreFiles: ["**/private/**"],
  },
});
