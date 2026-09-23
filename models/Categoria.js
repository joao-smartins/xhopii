import mongoose from 'mongoose';
import CategoriaSchema from './ClienteSchema.js'; 
const Categoria = mongoose.model('Categoria', CategoriaSchema);

export default Categoria;