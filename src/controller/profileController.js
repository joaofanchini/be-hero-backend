const connection = require('../database/connection');

module.exports = {
  async incidentsByOngs(req, resp) {
    let ong_id = req.headers.authorization;

    let incidents = await connection('INCIDENTS')
      .where('ong_id', ong_id)
      .select(['id', 'title', 'value', 'description']);

    resp.json(incidents);
  }
};
