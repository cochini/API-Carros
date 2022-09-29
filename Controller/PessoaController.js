const express = require('express');

const router = express.Router();

const PessoalModel = require('../Model/PessoalModel');

router.get('/listarPessoas', (req, res)=>{
    PessoalModel.findAll()
        .then(
            (pessoa)=>{
                return res.status(200).json(pessoa);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar pessoa',
                    erroBancoDados: erro
                });
            }
        );
});

router.get('/listarPessoa/:id',(req, res)=>{

    let {id} = req.params;

    PessoalModel.findByPk(id)
        .then(
            (pessoa)=>{
                res.status(200).json(pessoa);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar pessoa',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirPessoa', (req, res)=>{
    let {ID_PESSOA, NOME, SOBRENOME, CPF, RG} = req.body;

    PessoalModel.create(
        {
            ID_PESSOA,
            NOME,
            SOBRENOME,
            CPF,
            RG
        }
        
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: 'Pessoa inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao cadastrar pessoa',
                erroBancoDados: erro
            });
        }
    );
});

router.put('/atualizarPessoa/:ID_PESSOA', (req, res)=>{
    let {ID_PESSOA} =  req.params;
    let { NOME, SOBRENOME, CPF, RG} = req.body;

    PessoalModel.update(
        {NOME},
        {SOBRENOME},
        {CPF},
        {RG},
        {where:{ID_PESSOA}},

    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Pessoa alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao alterar pessoa',
                erroBancoDados: erro
            });
        }
    );
});

router.delete('/deletarPessoa/:ID_PESSOA', (req, res)=>{
    
    let {ID_PESSOA} = req.params;

    PessoalModel.destroy(
        {where: {ID_PESSOA}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Pessoa excluido com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir pessoa',
                        erroBancoDados: erro
                    });
        }
    );
});

module.exports = router;