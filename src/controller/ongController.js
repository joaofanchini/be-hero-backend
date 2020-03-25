//Lib para gerar ID randomico criptografado
const crypto = require('crypto');

//Conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
  create(req, resp) {
    let { name, email, whatsapp, city, uf } = req.body;

    let idOng = crypto.randomBytes(4).toString('HEX');

    //Nome das variavies as mesmas das enviadas
    connection('ONGS')
      .insert({
        id: idOng,
        name,
        email,
        whatsapp,
        city,
        uf
      })
      .then(resp.json({ idOng }))
      .catch(resp.status(400).json({ error: 'Error while sign up ong' }));
  },
  async getAllOngs(req, resp) {
    const ongs = await connection('ONGS').select('*');

    return resp.json(ongs);
  }
};
