const _convertDebug = (env) => {
	return (env === 'On') ? true : false;
};

config = {
	port: 3000,
	host: '0.0.0.0',
	debug: _convertDebug(process.env.DEBUG),
	logLevel: process.env.LOG_LEVEL || 'debug',
	mongoUri: process.env.MONGO_URI || 'mongodb://'
};

module.exports = config;