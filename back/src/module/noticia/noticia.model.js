const mongoose = require('../../config/mongo')
const { Schema } = mongoose;

const noticiaSchema = new Schema({
  titulo: String, 
  img: String,
  texto: String,
  categoria: String,
},
{ timestamps: true });

const NoticiaModel = mongoose.model('noticias', noticiaSchema);

module.exports = NoticiaModel;