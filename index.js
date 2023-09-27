import express from 'express';
import { ler, inserir, lerUm, atualizar, excluir } from './src/student.js';

const app = express();
const port = process.env.PORT || 3306; //permitindo que o servidor aponte a melhor porta ou então, usamos a porta 3306

// adicionando suporte ao formato json
app.use(express.json());

// adicionandp suporte a dados vindos de formulários
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Raiz da API NodeJs + Express + MySQL');
});

app.get('/alunos', (req, res) => {
  // res.send('dados de todos os alunos');
  ler(res);
});

app.get('/alunos/:id', (req, res) => {
  // res.send('dados de um aluno');
  const id = parseInt(req.params.id);
  lerUm(id, res);
});

app.post('/alunos', (req, res) => {
  // res.send('Inserindo dados de um aluno');
  const novoAluno = req.body;
  inserir(novoAluno, res);
});

app.patch('/alunos/:id', (req, res) => {
  // res.send('Atualizando dados de um aluno');
  const id = parseInt(req.params.id);
  const aluno = req.body;
  atualizar(id, aluno, res);
});

app.delete('/alunos/:id', (req, res) => {
  // res.send('Excluindo um aluno');
  const id = parseInt(req.params.id);
  excluir(id, res);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});