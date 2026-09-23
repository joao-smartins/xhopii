import Funcionario from '../models/Funcionario.js';

class FuncionarioController {
    static async listarFuncionarios(req, res) {
        const funcionarios = await Funcionario.find();
        res.render('visualizar-funcionario', { funcionarios });
    }
    static renderizarCadastro(req, res) { res.render('cadastrar-funcionario'); }
    static async cadastrarFuncionario(req, res) {
        await new Funcionario(req.body).save();
        res.redirect('/funcionarios');
    }
    static async deletarFuncionario(req, res) {
        await Funcionario.findByIdAndDelete(req.params.id);
        res.redirect('/funcionarios');
    }
    static async renderizarEdicao(req, res) {
        const funcionario = await Funcionario.findById(req.params.id);
        res.render('editar-funcionario', { funcionario });
    }
    static async atualizarFuncionario(req, res) {
        await Funcionario.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/funcionarios');
    }
}
export default FuncionarioController;