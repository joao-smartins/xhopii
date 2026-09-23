import mongoose from 'mongoose';
import ProdutoSchema from './ProdutoSchema.js'; 

const Produto = mongoose.model('Produto', ProdutoSchema);

export default Produto;