const app = require('express')();
const Error = require('../../../error')


module.exports = titip_beli => {
  /**
   * 
   * @TODO 
   */
  app.get('/review', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.get('/review/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.post('/review', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.put('/review/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.delete('/review/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  return app;
};