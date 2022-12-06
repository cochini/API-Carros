const express = require('express');

const router = express.Router();

const PessoaModel = require('../Model/PessoaModel');

router.get('/listarPessoas', (req, res)=>{
    PessoaModel.findAll()
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

    PessoaModel.findByPk(id)
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
    let {idPessoa, nome, sobrenome, CPF, RG} = req.body;

    PessoaModel.create(
        {
            idPessoa,
            nome,
            sobrenome,
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

router.put('/atualizarPessoa/:idPessoa', (req, res)=>{
    let {idPessoa} =  req.params;
    let {nome, sobrenome, CPF, RG} = req.body;

    PessoaModel.update({
        nome,
        sobrenome,
        CPF,
        RG
    },
        {where:{idPessoa}}).then(()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Pessoa alterada com sucesso!'
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

router.delete('/deletarPessoa/:idPessoa', (req, res)=>{
    
    let {idPessoa} = req.params;

    PessoaModel.destroy(
        {where: {idPessoa}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Pessoa excluida com sucesso!'
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