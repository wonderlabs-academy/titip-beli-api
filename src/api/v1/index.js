const v1 = require('./v1');

// dynamic require isn't good for static analyzer tools.
const apiVersions = {
  v1
};

module.exports = (app, titip_beli) => {
  Object.keys(apiVersions).forEach(version => {
    const api = apiVersions[version](titip_beli);

    api.get('/', (req, res) => {
      res.status(200).jsend.success(`REFASH REST API ${version}`);
    });

    app.use(`/api/${version}`, api);
  });
};