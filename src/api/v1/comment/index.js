const app = require('express')();
const Error = require('../../../error')


module.exports = titip_beli => {
  /**
   * 
   * @TODO 
   */
  app.get('/comment', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.get('/comment/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.post('/comment', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.put('/comment/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  /**
   * @TODO 
   */
  app.delete('/comment/:id', (req, res, next) => {
    next(new Error.NotImplementedException());
  });

  return app;
};