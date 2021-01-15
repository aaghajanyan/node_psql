const UserModel = require('../models/users');

module.exports.getUsers = async (req, res) => {
  const result = await UserModel.getUsers();
  const r = result.rows && result.rows.length ? result.rows : [];
  res.json(r);
};

module.exports.createUser = async (req, res) => {
  const result = await UserModel.createUser(req.body);
  const r = result.rows && result.rows.length ? result.rows[0] : [];
  res.json(r);
};
