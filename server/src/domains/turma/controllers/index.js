// Configuração das rotas que pertencem à entidade Turma.
const express = require('express');
const router = express.Router();
const turmaService = require('../services/TurmaService');

router.get('/', (req, res) => {
    res.send("Página principal do painel turmas")
});

router.get('/turmas', (req, res) => {
    turmaService.getListaTurmas().then(turmas => {
        //console.log(turmas);
        res.send("Lista de turmas do usuario: <br>"+turmas);
    }).catch((err) => {
        res.send(err)
    });
});

router.get('/turmas/cadastrar', (req, res) => {
    res.send("Página de cadastro de turmas")
});

router.post('/turmas/nova', (req, res) => {
    var novaTurma = {
        codigo: "DCC603", //req.body.codigo?
        turma: "TM" //req.body.turma?
    };

    turmaService.addTurma(novaTurma).then(() => {
        console.log("Turma cadastrada com sucesso!!")
    }).catch((err) => {
        console.log(err)
    });
})

module.exports = router;