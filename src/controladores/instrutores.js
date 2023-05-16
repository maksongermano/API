const {instrutores} = require('../bancodedados')
let {identificadorInstrutor} = require('../bancodedados')

const listarInstrutores = (req, res) => {
return res.json(instrutores);
}

const obterInstrutor = (req, res) => {
const { id } = req.params;
const instrutor = instrutores.find((pessoaNoArray) => {
return pessoaNoArray.id === Number(id);
});

    if (!instrutor){
        return res.status(404).json({mensagem: 'Instrutor não encontrado'});
    }
    // o status 200 dispensa a declaração, mas deixarei aqui comentado para fins didáticos
    return res.status(200).json(instrutor);

}
const cadastrarInstrutor = (req, res) => {
const {nome, idade, email, status} = req.body;

if (!nome) {
    return res.status(400).json({mensagem: 'o nome é obrigatório'})
}

if (!email) {
    return res.status(400).json({mensagem: 'o e-mail é obrigatório'})
}
const instrutor = {
    id: identificadorInstrutor++,
    nome: nome,
    idade: idade,
    email: email,
    status: status ?? true

}
instrutores.push(instrutor);

return res.status(201).json(instrutor);
}


module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor
}
