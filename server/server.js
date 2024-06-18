const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootashenafi',
  database: 'online',
  port: 3307
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Endpoint for user signup
app.post('/api/signup', async (req, res) => {
  const { username, password, email, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, hashedPassword, email, role], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User registered successfully!');
  });
});

// Endpoint for user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length === 0) {
      return res.status(401).send('Invalid username or password');
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'ashe', { expiresIn: '1h' });
    res.json({ token, role: user.role });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
