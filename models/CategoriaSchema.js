import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
    nomeCategoria: String,
    descricaoCategoria: String
});

export default categoriaSchema;