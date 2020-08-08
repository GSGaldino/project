const connection = require('../database/connection');

module.exports = {
  async create(req, res){
    const id = req.body;
    const user = await connection('users')
    .where(id, 'id')
    .select('id', 'name', 'email')
    .first();

    if(!user){
      res.status(401)
      res.json({error: 'Unauthorized'})
    }

    res.send(user)
  }
}
