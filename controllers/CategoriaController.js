import Categoria from '../models/Categoria.js';

class CategoriaController {
    static async listarCategorias(req, res) {
        const categorias = await Categoria.find();
        res.render('ver-categoria', { categorias });
    }
    static renderizarCadastro(req, res) { res.render('cadastrar-categoria'); }
    static async cadastrarCategoria(req, res) {
        await new Categoria(req.body).save();
        res.redirect('/categorias');
    }
    static async deletarCategoria(req, res) {
        await Categoria.findByIdAndDelete(req.params.id);
        res.redirect('/categorias');
    }
    static async renderizarEdicao(req, res) {
        const categoria = await Categoria.findById(req.params.id);
        res.render('editar-categoria', { categoria });
    }
    static async atualizarCategoria(req, res) {
        await Categoria.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/categorias');
    }
}
export default CategoriaController;