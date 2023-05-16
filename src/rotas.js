const express = require('express');

const rotas = express();
rotas.get('/', (req, res) => {
    res.send('Tudo certo.')
    });

module.exports = rotas