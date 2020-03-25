const connection = require('../database/connection');

module.exports = {
  async login(req, resp) {
    let { id } = req.body;

    let ong = await connection('ONGS')
      .where('id', id)
      .select('name')
      .first();

    if (!ong)
      return resp.status(400).json({ error: 'No ONG was found with this ID.' });
    return resp.send({ ong });
  }
};
