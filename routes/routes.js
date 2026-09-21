import express from 'express';
import { verificarToken } from '../middlewares/middlewares.js'; 
import LoginController from '../controllers/LoginController.js';
import ClienteController from '../controllers/ClienteController.js';
import ProdutoController from '../controllers/ProdutoController.js';
import FuncionarioController from '../controllers/FuncionarioController.js';
import CategoriaController from '../controllers/CategoriaController.js';
const router = express.Router();

// ROTAS DE LOGIN E LOGOUT
router.get('/login', LoginController.renderizarLogin);
router.post('/login', LoginController.realizarLogin);
router.get('/logout', LoginController.realizarLogout);

router.use(verificarToken); 

router.get('/', (req, res) => res.render('home'));

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