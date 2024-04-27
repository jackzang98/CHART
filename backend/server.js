import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!！');
});

app.get('/api/auth/sigup', (req, res) => {
  res.send('/api/auth/sigup!');
});

app.get('/api/auth/login', (req, res) => {
    res.send('Hello, login!');
});
  
app.get('/api/auth/log', (req, res) => {
    res.send('Hello, World!log');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});