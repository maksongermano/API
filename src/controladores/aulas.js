let { identificadorAula, instrutores, aulas } = require('../bancodedados')

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id = Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrtutor não existe' });
    }
    if (!titulo) {
        return res.status(400).json({ mensagem: 'O titulo é obrigatório' })
    }
    if (!descricao) {
        return res.status(400).json({ mensagem: 'A descrição é obrigatória' })
    }
    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    };

    aulas.push(aula);
    return res.status(201).json(aula);
};
const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
};
const obterAulas = (req, res) => {
    const { id } = req.params;
    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: 'Aula não encontrada' });
    }

    return res.status(200).json(aula);
};

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAulas
}