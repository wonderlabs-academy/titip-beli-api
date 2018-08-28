const app = require('express')();
const Error = require('../../../error')


module.exports = titip_beli => {
  /**
   * 
   * @TODO 
   */
  app.get('/trip', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.get('/trip/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.post('/trip', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.put('/trip/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.delete('/trip/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  return app;
};