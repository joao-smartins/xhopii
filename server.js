import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { rootDir } from './utils/pathUtils.js';
import { logRequisicao } from './middlewares/middlewares.js';
import rotas from './routes/routes.js'; 
import connectDB from './config/db.js'; 
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();


connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));
app.use(express.static(path.join(rootDir, 'assets')));

// Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(logRequisicao);

app.use('/', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/login`);
});