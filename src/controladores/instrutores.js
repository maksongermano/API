let { instrutores } = require('../bancodedados')
let { identificadorInstrutor } = require('../bancodedados')

const listarInstrutores = (req, res) => {
    return res.json(instrutores);
}
const obterInstrutor = (req, res) => {
    const { id } = req.params;
    const instrutor = instrutores.find((pessoaNoArray) => {
        return pessoaNoArray.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
    }
    // o status 200 dispensa a declaração, mas deixarei aqui comentado para fins didáticos
    return res.status(200).json(instrutor);

}
const cadastrarInstrutor = (req, res) => {
    const { nome, idade, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome é obrigatório' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'o e-mail é obrigatório' })
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
const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, idade, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome é obrigatório' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'o e-mail é obrigatório' })
    }

    if (!idade) {
        return res.status(400).json({ mensagem: 'a Idade é obrigatória' })
    }
    const instrutor = instrutores.find((pessoaNoArray) => {
        return pessoaNoArray.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }
    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.idade = idade;
    instrutor.status = status;

    return res.status(204).send();
}
const atualizarStatusInstrutores = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const instrutor = instrutores.find((pessoaNoArray) => {
        return pessoaNoArray.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }


    instrutor.status = status;
    return res.status(204).send();

}
const excluirInstrutor = (req, res) => {
    const { id } = req.params
    const instrutor = instrutores.find((professor) => {
        return professor.id === Number(id);

    });
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe.' })
    }
    instrutores = instrutor.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });
    return res.status(204).send();
};

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutores,
    excluirInstrutor
}
