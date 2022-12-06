const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('A REQUISIÇÃO PASSOU PELO INDEX');



const pessoaController = require('./Controller/PessoaController');
app.use('/', pessoaController);
const automovelController = require('./Controller/AutomovelController');
app.use('/', automovelController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});