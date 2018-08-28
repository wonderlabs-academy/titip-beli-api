const app = require('express')();
const Error = require('../../../error')


module.exports = titip_beli => {
  /**
   * 
   * @TODO 
   */
  app.get('/request', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.get('/request/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.post('/request', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.put('/request/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  return app;
};