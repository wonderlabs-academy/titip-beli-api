const mongoose = require('mongoose');

const config = require('./config');
const utils = require('./utils');

const logger = utils.logger;

const mongoConn = mongoose.connect(config.mongoUri, {
	keepAlive: true,
	autoIndex: false,
});

mongoConn.catch((err) => {
	logger.error(`Error mongo connection: ${err.message} / uri: ${config.mongoUri}`);
});

mongoose.connection.on('connected', () => {
	logger.info(`Connected with mongo: ${config.mongoUri}`);
});

mongoose.connection.on('disconnected', () => {
	logger.info('Disconnect with mongo...');
});

module.exports = { mongoose };
