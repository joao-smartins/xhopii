let funcionariosSalvos = []; 

class FuncionarioController {
    static listarFuncionarios(req, res) {
        res.render('visualizar-funcionario', { funcionarios: funcionariosSalvos }); 
    }

    static renderizarCadastro(req, res) {
        res.render('cadastrar-funcionario'); 
    }

    static cadastrarFuncionario(req, res) {
        const novoFuncionario = { id: Date.now().toString(), ...req.body }; 
        funcionariosSalvos.push(novoFuncionario);
        res.redirect('/funcionarios'); 
    }

    static deletarFuncionario(req, res) {
        funcionariosSalvos = funcionariosSalvos.filter(f => f.id !== req.params.id);
        res.redirect('/funcionarios');
    }

    static renderizarEdicao(req, res) {
        const funcionario = funcionariosSalvos.find(f => f.id === req.params.id);
        if (!funcionario) return res.redirect('/funcionarios');
        res.render('editar-funcionario', { funcionario });
    }

    static atualizarFuncionario(req, res) {
        const id = req.params.id;
        const index = funcionariosSalvos.findIndex(f => f.id === id);
        
        if (index !== -1) {
            funcionariosSalvos[index] = { id, ...req.body };
        }
        res.redirect('/funcionarios');
    }
}

export default FuncionarioController;