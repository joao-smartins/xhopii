import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    cpf: String,
    dataNascimento: String,
    telefone: String,
    email: String,
    senha: String
});

export default ClienteSchema;