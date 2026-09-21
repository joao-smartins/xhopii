import mongoose from 'mongoose';
import ClienteSchema from './ClienteSchema.js';

const Cliente = mongoose.model('Cliente', ClienteSchema);

export default Cliente;