const app = require('express')();
const Error = require('../../../error')


module.exports = titip_beli => {
  /**
   * 
   * @TODO 
   */
  app.get('/search', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  return app;
};