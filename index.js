import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Raiz da API NodeJs + Express + MySQL');
});

app.get('/alunos', (req, res) => {
  res.send('dados de todos os alunos');
});

app.get('/alunos/:id', (req, res) => {
  res.send('dados de um aluno');
});

app.post('/alunos', (req, res) => {
  res.send('Inserindo dados de um aluno');
});

app.patch('/alunos/:id', (req, res) => {
  res.send('Atualizando dados de um aluno');
});

app.delete('/alunos/:id', (req, res) => {
  res.send('Excluindo um aluno');
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});