const http = require('http-status-codes');

class AppError extends Error {
	constructor(message, status) {
		super(message);

		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);

		this.status = status || http.INTERNAL_SERVER_ERROR;
	}
}

class NotImplementedException extends Error {
	/**
	 * Constructs the MyError class
	 * @param {String} message an error message
	 * @constructor
	 */
	constructor(message) {
			super(message);
			// properly capture stack trace in Node.js
			Error.captureStackTrace(this, this.constructor);
			this.name = this.constructor.name;
	}
}

module.exports = { AppError , NotImplementedException};
