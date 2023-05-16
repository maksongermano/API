const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

// posso criar o mesmo endppoint se o verbo for diferente, caso comtrário, naturalmente, conflitaria e apresentaria erro

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instruatores/:id', )

module.exports = rotas