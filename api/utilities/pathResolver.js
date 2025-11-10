const path = require('path');

const pathResolver = (version) => {
    return{
        services : path.resolve(`./api/${version}/services`),
        controllers : path.resolve(`./api/${version}/controllers`),
        models : path.resolve(`./api/${version}/models`),
        transforms : path.resolve(`./api/${version}/transforms`),
        validators : path.resolve(`./api/${version}/validators`),
        dtos : path.resolve(`./api/${version}/dtos`)
    };
};

module.exports = pathResolver;