const db = require('../db/db');

module.exports.getUsers = async () => {
  const newPerson = await db.query(`select * from person`);
  return newPerson;
};

module.exports.createUser = async (body) => {
  const { name, surname } = body;
  const newPerson = await db.query(
    `INSERT INTO person (name, surname) values($1, $2) RETURNING *`,
    [name, surname]
  );
  return newPerson;
};
