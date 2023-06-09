const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nome: String,
    turmas: [{
        nome: String,
        codigo: String,
        turma: [String],
        inicio: String,
        fim: String,
        dias: String,
        sala: String,
        faltas: {
            type: Number,
            default: 0
        }
    }]
});

// NOTE: methods must be added to the schema before compiling it with model()

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports.Usuario = Usuario;
