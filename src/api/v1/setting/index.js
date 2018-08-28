const app = require('express')();
const Error = require('../../../error')


module.exports = titip_beli => {
  /**
   * 
   * @TODO 
   */
  app.get('/setting', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.post('/setting', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  return app;
};