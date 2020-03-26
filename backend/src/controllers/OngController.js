const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  //Listagem-------------------------------------------------
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  //Cadastro------------------------------------------------
  async create(request, response) {
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); //Vai gerar um código com 4 letras

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({id});
  }
}