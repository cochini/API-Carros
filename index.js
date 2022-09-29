const express = require('express');

const pessoaController = require('./Controller/PessoaController')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('A REQUISIÇÃO PASSOU PELO INDEX');
app.use('/', pessoaController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});