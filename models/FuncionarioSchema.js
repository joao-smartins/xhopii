import mongoose from 'mongoose';

const funcionarioSchema = new mongoose.Schema({
    inputNomeFunc: String,
    inputSobrenomeFunc: String,
    inputCPFFunc: String,
    inputDataNascFunc: String,
    inputTelefoneFunc: String,
    inputCargoFunc: String,
    inputSalarioFunc: String,
    inputEmailFunc: String,
    inputSenha: String
});

export default funcionarioSchema;