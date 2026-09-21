let produtosSalvos = []; 

class ProdutoController {
    static listarProdutos(req, res) {
        res.render('ver-produto', { produtos: produtosSalvos }); 
    }

    static renderizarCadastro(req, res) {
        res.render('cadastrar-produto'); 
    }

    static cadastrarProduto(req, res) {
        const { inputNomeProd, inputFabricanteProd, inputDescricaoProd, inputValorProd, inputQtdProd } = req.body;
        
        const novoProduto = { 
            id: Date.now().toString(),
            nome: inputNomeProd, 
            fabricante: inputFabricanteProd, 
            descricao: inputDescricaoProd, 
            valor: inputValorProd, 
            quantidade: inputQtdProd 
        };
        
        produtosSalvos.push(novoProduto);
        res.redirect('/produtos'); 
    }

    static deletarProduto(req, res) {
        produtosSalvos = produtosSalvos.filter(p => p.id !== req.params.id);
        res.redirect('/produtos');
    }

    static renderizarEdicao(req, res) {
        const produto = produtosSalvos.find(p => p.id === req.params.id);
        if (!produto) return res.redirect('/produtos');
        res.render('editar-produto', { produto });
    }

    static atualizarProduto(req, res) {
        const id = req.params.id;
        const index = produtosSalvos.findIndex(p => p.id === id);
        
        if (index !== -1) {
            produtosSalvos[index] = { 
                id, 
                nome: req.body.inputNomeProd, 
                fabricante: req.body.inputFabricanteProd, 
                descricao: req.body.inputDescricaoProd, 
                valor: req.body.inputValorProd, 
                quantidade: req.body.inputQtdProd 
            };
        }
        res.redirect('/produtos');
    }
}

export default ProdutoController;