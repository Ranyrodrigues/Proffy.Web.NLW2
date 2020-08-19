import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);



//get: buscar ou listar
//post: criar
//put: atualizar
//delete: deletar

// corpo (request Boby): dados para criação ou atualização para um registro.
// Routes Params: indentificar qual recurso quero atualizar ou deletar
//querey Params: paginaçao, listagem,