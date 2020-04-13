// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    'cesiumSource/Cesium$': '<rootDir>/node_modules/cesium/Source/Cesium.js',
};
