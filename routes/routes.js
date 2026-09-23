import express from 'express';
import { verificarToken } from '../middlewares/middlewares.js'; 
import LoginController from '../controllers/LoginController.js';
import ClienteController from '../controllers/ClienteController.js';
import ProdutoController from '../controllers/ProdutoController.js';
import FuncionarioController from '../controllers/FuncionarioController.js';
import CategoriaController from '../controllers/CategoriaController.js';

import Cliente from '../models/Cliente.js';
import Funcionario from '../models/Funcionario.js';
import Produto from '../models/Produto.js';
import Categoria from '../models/Categoria.js';

const router = express.Router();

// ROTAS DE LOGIN E LOGOUT
router.get('/login', LoginController.renderizarLogin);
router.post('/login', LoginController.realizarLogin);
router.get('/logout', LoginController.realizarLogout);

router.use(verificarToken); 

// Rota Home 
router.get('/', async (req, res) => {
    try {
        // Conta quantos documentos existem em cada coleção no MongoDB
        const totalClientes = await Cliente.countDocuments();
        const totalFuncionarios = await Funcionario.countDocuments();
        const totalProdutos = await Produto.countDocuments();
        const totalCategorias = await Categoria.countDocuments();

        // Envia esses números para a página home.ejs
        res.render('home', {
            totalClientes,
            totalFuncionarios,
            totalProdutos,
            totalCategorias
        });
    } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
        res.render('home', { totalClientes: 0, totalFuncionarios: 0, totalProdutos: 0, totalCategorias: 0 });
    }
});

// ROTAS DE CLIENTE
router.get('/clientes', ClienteController.listarClientes);
router.get('/clientes/cadastrar', ClienteController.renderizarCadastro);
router.post('/clientes/cadastrar', ClienteController.cadastrarCliente);
router.get('/clientes/deletar/:id', ClienteController.deletarCliente);
router.get('/clientes/editar/:id', ClienteController.renderizarEdicao);
router.post('/clientes/editar/:id', ClienteController.atualizarCliente);

// Produtos
router.get('/produtos', ProdutoController.listarProdutos);
router.get('/produto/cadastrar', ProdutoController.renderizarCadastro);
router.post('/produto/cadastrar', ProdutoController.cadastrarProduto);
router.get('/produtos/deletar/:id', ProdutoController.deletarProduto);
router.get('/produtos/editar/:id', ProdutoController.renderizarEdicao);
router.post('/produtos/editar/:id', ProdutoController.atualizarProduto);

// Funcionários
router.get('/funcionarios', FuncionarioController.listarFuncionarios);
router.get('/funcionario/cadastrar', FuncionarioController.renderizarCadastro);
router.post('/funcionario/cadastrar', FuncionarioController.cadastrarFuncionario);
router.get('/funcionarios/deletar/:id', FuncionarioController.deletarFuncionario);
router.get('/funcionarios/editar/:id', FuncionarioController.renderizarEdicao);
router.post('/funcionarios/editar/:id', FuncionarioController.atualizarFuncionario);

// Categorias
router.get('/categorias', CategoriaController.listarCategorias);
router.get('/categorias/cadastrar', CategoriaController.renderizarCadastro);
router.post('/categorias/cadastrar', CategoriaController.cadastrarCategoria);
router.get('/categorias/deletar/:id', CategoriaController.deletarCategoria);
router.get('/categorias/editar/:id', CategoriaController.renderizarEdicao);
router.post('/categorias/editar/:id', CategoriaController.atualizarCategoria);
export default router;