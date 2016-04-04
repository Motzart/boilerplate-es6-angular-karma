module.exports = {
    hasEnv,
    getEnvConfigurations
};



const envConfigurations = {
    dev(webpackConfig) {
        webpackConfig.output.publicPath = `http://localhost:8081/`;
        webpackConfig.devtool = 'source-map';
        webpackConfig.devServer = {
            host: 'localhost',
            port: 8081
        }
    }
};

function getEnvConfigurations(env) {
    return envConfigurations[env];
}
    
    
function hasEnv(env) {
    return Boolean(envConfigurations[env]);
}