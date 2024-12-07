import mysql from 'mysql2/promise';

const sql = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'rentwave'
});

export default sql;