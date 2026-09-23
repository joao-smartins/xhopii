import mongoose from 'mongoose';
import FuncionarioSchema from './FuncionarioSchema.js'; 

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema);

export default Funcionario;