import mysql2 from 'mysql2';

// armazenando os dados da conexao em uma constante
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'escola'
});

// efetivando a conexao
// connection.connect();

connection.connect(err => {
  if (err) {
    console.error(`Erro ao conectar: ${err.message}`);
  } else {
    console.log(`Banco de dados conectado com sucesso!`);
  }
});

export default connection;