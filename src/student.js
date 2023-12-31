import connection from './database.js';

// CRUD

// LER/EXIBIR todos os alunos
function ler(res) {
  const sql = 'SELECT * FROM alunos ORDER BY nome';

  connection.query(sql, (err, results) => {
    // verificação para ver se há conteúdo
    if (results.length === 0) {
      res.status(204).end(); // é importante trabalhar com os status http (boas práticas restful). 204 = Sem conteúdo. end() encerra a execução
      return;
    }

    if (err) {
      res.status(400).json(err.code); // BAD Request
    } else {
      res.status(200).json(results);
    }
  });
}

// INSERINDO alunos no no banco de dados
function inserir(aluno, res) {
  const sql = 'INSERT INTO alunos SET ?'; // ? = placeholder (substituição de valores)

  connection.query(sql, aluno, (err) => {
    if (err) {
      res.status(400).json(err.code);
    } else {
      res.status(201).json({ 'Status': 'Aluno inserido' });
      // res.status(201).end()
    }
  });
}

// LER UM ANLUNOS
function lerUm(id, res) {
  const sql = 'SELECT * FROM alunos WHERE id = ?';

  connection.query(sql, id, (err, results) => {
    if (results === 0) {
      res.status(204).end();
      return;
    }

    if (err) {
      res.status(400).json(err.code);
    } else {
      res.status(200).json(results[0]);
    }
  });
}

//ATUALIZAR  todos/alguns dados de um aluno
function atualizar(id, aluno, res) {
  const sql = 'UPDATE alunos SET ? WHERE id = ?';

  connection.query(sql, [aluno, id], (err, results) => {
    if (err) {
      res.status(400).json(err.code);
    } else {
      // res.status(200).json({ 'Status': 'Aluno atualizado com sucesso!' });
      res.status(200).json({ ...aluno, id }); // utilizando spread operator, serve para juntar dois objetos (aluno e id)
    }
  });
}

function excluir(id, res) {
  const sql = 'DELETE FROM alunos WHERE id = ?';

  connection.query(sql, id, (err, results) => {
    if (err) {
      res.status(400).json(err.code);
    } else {
      res.status(200).json({ 'Status': 'Aluno excluído', id });
    }
  });
}

export { ler, inserir, lerUm, atualizar, excluir };