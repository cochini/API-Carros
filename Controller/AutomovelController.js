const express = require('express');

const router = express.Router();

const AutomovelModel = require('../Model/AutomovelModel');

router.get('/listarAutomoveis', (req, res)=>{
    AutomovelModel.findAll()
        .then(
            (automovel)=>{
                return res.status(200).json(automovel);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar automoveis',
                    erroBancoDados: erro
                });
            }
        );
});

router.get('/listarAutomovel/:id',(req, res)=>{

    let {id} = req.params;

    AutomovelModel.findByPk(id)
        .then(
            (automovel)=>{
                res.status(200).json(automovel);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar automovel',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirAutomovel', (req, res)=>{
    let {idAutomovel, fabricante, preco, modelo, ano, cor, tblPessoaIdPessoa} = req.body;

    AutomovelModel.create(
        {
            idAutomovel,
            fabricante,
            preco,
            modelo,
            ano,
            cor,
            tblPessoaIdPessoa
        }
        
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: 'Automovel inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao cadastrar automovel',
                erroBancoDados: erro
            });
        }
    );
});

router.put('/atualizarAutomovel/:idAutomovel', (req, res)=>{
    let {idAutomovel} =  req.params;
    let { fabricante, preco, modelo, ano, cor, tblPessoaIdPessoa} = req.body;

    AutomovelModel.update({
        fabricante,
        preco,
        modelo,
        ano,
        cor,
        tblPessoaIdPessoa
    },
    {where:{idAutomovel}}).then(()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Automovel alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao alterar automovel',
                erroBancoDados: erro
            });
        }
    );
});

router.delete('/deletarAutomovel/:idAutomovel', (req, res)=>{
    
    let {idAutomovel} = req.params;

    AutomovelModel.destroy(
        {where: {idAutomovel}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Automóvel excluido com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir automóvel',
                        erroBancoDados: erro
                    });
        }
    );
});

module.exports = router;