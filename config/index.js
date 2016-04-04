const envConfig = require('./envirenments');

module.exports = {
    env: process.env.NODE_ENV,
    setEnvConfigurations(webpackConfig) {
        const env = this.env;
        envConfig.hasEnv(env) && envConfig.getEnvConfigurations(env)(webpackConfig);
    }
};