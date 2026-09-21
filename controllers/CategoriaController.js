let categoriasSalvas = [];

class CategoriaController {
    static listarCategorias(req, res) {
        res.render('ver-categoria', { categorias: categoriasSalvas }); 
    }

    static renderizarCadastro(req, res) {
        res.render('cadastrar-categoria'); 
    }

    static cadastrarCategoria(req, res) {
        const novaCategoria = { id: Date.now().toString(), ...req.body };
        categoriasSalvas.push(novaCategoria);
        res.redirect('/categorias'); 
    }

    static deletarCategoria(req, res) {
        categoriasSalvas = categoriasSalvas.filter(c => c.id !== req.params.id);
        res.redirect('/categorias');
    }

    static renderizarEdicao(req, res) {
        const categoria = categoriasSalvas.find(c => c.id === req.params.id);
        if (!categoria) return res.redirect('/categorias');
        res.render('editar-categoria', { categoria });
    }

    static atualizarCategoria(req, res) {
        const id = req.params.id;
        const index = categoriasSalvas.findIndex(c => c.id === id);
        if (index !== -1) {
            categoriasSalvas[index] = { id, ...req.body };
        }
        res.redirect('/categorias');
    }
}

export default CategoriaController;