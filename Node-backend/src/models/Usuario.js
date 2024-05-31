const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UsuarioSchema = schema({
    // Definimos los atributos
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    telephone:{
        type: String,
        required: true,
        
    },
    password:{
        type: String,
        required: true,
        
    }
 },{timestamps: true});
 
 module.exports = mongoose.model("usuario_collection", UsuarioSchema);