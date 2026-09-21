let clientesSalvos = []; 

class ClienteController {
    static listarClientes(req, res) {
        res.render('visualizar-cliente', { clientes: clientesSalvos }); 
    }

    static renderizarCadastro(req, res) {
        res.render('cadastrar-cliente'); 
    }

    static cadastrarCliente(req, res) {
        const { nome, sobrenome, cpf, dataNascimento, telefone, email, senha } = req.body;
        
        const novoCliente = { 
            id: Date.now().toString(), 
            nome, sobrenome, cpf, dataNascimento, telefone, email, senha 
        };
        clientesSalvos.push(novoCliente);
        
        res.redirect('/clientes'); 
    }



    static deletarCliente(req, res) {
        const idParaDeletar = req.params.id;
        clientesSalvos = clientesSalvos.filter(cliente => cliente.id !== idParaDeletar);
        res.redirect('/clientes');
    }

    static renderizarEdicao(req, res) {
        const id = req.params.id;
        const cliente = clientesSalvos.find(c => c.id === id);
        
        if (!cliente) return res.redirect('/clientes'); 
        
        res.render('editar-cliente', { cliente });
    }

    static atualizarCliente(req, res) {
        const id = req.params.id;
        const { nome, sobrenome, cpf, dataNascimento, telefone, email, senha } = req.body;
        
        const index = clientesSalvos.findIndex(c => c.id === id);
        if (index !== -1) {
            clientesSalvos[index] = { id, nome, sobrenome, cpf, dataNascimento, telefone, email, senha };
        }
        
        res.redirect('/clientes');
    }
}

export default ClienteController;