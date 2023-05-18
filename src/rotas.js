const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

// posso criar o mesmo endpoint se o verbo for diferente, caso comtrário, naturalmente, conflitaria e apresentaria erro.

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutores);
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);


rotas.post('/instrutores/:idInstrutor/aulas',)

module.exports = rotas