import Produto from '../models/Produto.js';

class ProdutoController {
    static async listarProdutos(req, res) {
        const produtos = await Produto.find();
        res.render('ver-produto', { produtos });
    }
    static renderizarCadastro(req, res) { res.render('cadastrar-produto'); }
    static async cadastrarProduto(req, res) {
        await new Produto(req.body).save();
        res.redirect('/produtos');
    }
    static async deletarProduto(req, res) {
        await Produto.findByIdAndDelete(req.params.id);
        res.redirect('/produtos');
    }
    static async renderizarEdicao(req, res) {
        const produto = await Produto.findById(req.params.id);
        res.render('editar-produto', { produto });
    }
    static async atualizarProduto(req, res) {
        await Produto.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/produtos');
    }
}
export default ProdutoController;