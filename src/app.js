const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const HttpError = require('http-errors');
const apiErrorHandler = require('api-error-handler');

const http = require('http-status-codes');
const jsend = require('jsend');

const config = require('./config');
const errors = require('./errors');

const app = express();
const logger = utils.logger;

app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jsend.middleware);

app.use((err, req, res, next) => {
	// for now we only need to log it
	logger.error(err);

	if (err instanceof errors.AppError) {
		res.status(err.status).jsend.error(err.message);
	} else {
		res.status(http.INTERNAL_SERVER_ERROR).jsend.error(err.message);
	}
});

module.exports = app;