const http = require('http-status-codes');

class AppError extends Error {
	constructor(message, status) {
		super(message);

		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);

		this.status = status || http.INTERNAL_SERVER_ERROR;
	}
}

module.exports = { AppError };
