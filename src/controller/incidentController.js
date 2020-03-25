//Conexão com o banco de dados
const connection = require('../database/connection');

// O idOng simula o token, logo é passado pelo header

module.exports = {
  async create(req, resp) {
    let { title, description, value } = req.body;
    let ong_id = req.headers.authorization; // nome do header: 'Authorization'

    const [id] = await connection('INCIDENTS').insert({
      title,
      description,
      value,
      ong_id
    });
    resp.json({ id });
  },
  async getAllIncidents(req, resp) {
    const { page = 1 } = req.query;

    const [totalIncidents] = await connection('INCIDENTS').count();

    const incidents = await connection('INCIDENTS')
      .join('ONGS', 'ongs.id', '=', 'incidents.ong_id')
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.uf'
      ])
      .limit(5)
      .offset((page - 1) * 5);
    resp.header('X-Total-Count', totalIncidents['count(*)']);
    return resp.json(incidents);
  },
  async delete(req, resp) {
    let { id } = req.params;
    let ong_id = req.headers.authorization;

    console.log(ong_id);
    console.log(id);
    // Falta fazer tratamento para o caso de não encontrar
    // Primeiro verifica se existe e possui permissão
    let incident = await connection('INCIDENTS')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id)
      resp
        .status(401)
        .json({ error: 'Not authorized to delete this incident' });

    if (incident)
      await connection('INCIDENTS')
        .where('id', id)
        .delete();

    return resp.status(204).send();
  }
};
