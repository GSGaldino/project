const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(req, res){
    const response = await connection('users').select('*');

    res.send(response);
  },

  async create(req, res){
    const id = crypto.randomBytes(4).toString('hex');
    const { name, email, password, power } = req.body;
    const user = {id, name, email, password, power};

    await connection('users').insert(user);

    res.status(201);
    res.send(id);
  }
};
