import Cliente from '../models/Cliente.js';

class ClienteController {
    static async listarClientes(req, res) {
        const clientes = await Cliente.find();
        res.render('visualizar-cliente', { clientes });
    }
    static renderizarCadastro(req, res) { res.render('cadastrar-cliente'); }
    static async cadastrarCliente(req, res) {
        await new Cliente(req.body).save();
        res.redirect('/clientes');
    }
    static async deletarCliente(req, res) {
        await Cliente.findByIdAndDelete(req.params.id);
        res.redirect('/clientes');
    }
    static async renderizarEdicao(req, res) {
        const cliente = await Cliente.findById(req.params.id);
        res.render('editar-cliente', { cliente });
    }
    static async atualizarCliente(req, res) {
        await Cliente.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/clientes');
    }
}
export default ClienteController;