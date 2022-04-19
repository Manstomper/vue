const path = require('path');
const express = require('express');
const mysql = require('mysql2/promise');

async function query(qs) {
  const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'shop',
  });

  connection.connect();
  const [result, ] = await connection.query(qs);
  connection.end();

  return result;
}

express()
  .use(express.json())
  .use(express.static(path.join(__dirname) + '/../public'))
  .get('/', function (req, res) {
    res.render(path.join(__dirname) + '/../index.html');
  })
  .post('/products', async function (req, res) {
    const result = await query('SELECT * FROM product');
    res.json(result || null);
  })
  .post('/product/:id', async function (req, res) {
    const result = await query(
      'SELECT * FROM product WHERE id = ' + parseInt(req.params.id)
    );
    res.json(result[0] || null);
  })
  .listen(5000, '0.0.0.0');
