const express = require('express');
const bcrypt = require('bcrypt');
const usuarioModel = require('./src/module/usuario/usuario.model'); 
const jwt = require('jsonwebtoken');
const NoticiaModel = require('./src/module/noticia/noticia.model');
const app = express();
const cors = require('cors');
app.use(cors());
//HACK PARA PASSAR UM JSON PARA O BD
app.use(express.json());



app.post('/login', async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: 'O campo email é obrigatório'});
  }
  if (!req.body.senha) {
    return res.status(400).json({ message: 'O campo senha é obrigatório'});
  }
  
  const usuarioExistente = await usuarioModel.findOne({ 
    email: req.body.email 
  });
  if (!usuarioExistente) {
    return res.status(400).json({ message: 'Usuario não está cadastrado' });
  }

  const senhaVerificada = bcrypt.compareSync(
    req.body.senha,
    usuarioExistente.senha
  ); 

  if (!senhaVerificada) {
    return res.status(400).json({ message: 'Email ou senha incorretos' });
  }

  const token = jwt.sign({ _id: usuarioExistente.id}, 'dnc');
  

  return res.status(200).json({ 
    message: 'Login realizado com sucesso', token 
  });
});

app.get('/usuarios', async (req, res) => {
  const usuarios = await usuarioModel.find({})
  return res.status(200).json(usuarios);
});

app.post('/usuarios', async(req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: 'O campo email é obrigatório'});
  }
  if (!req.body.senha) {
    return res.status(400).json({ message: 'O campo senha é obrigatório'});
  }

  const usuarioExistente = await usuarioModel.find({ email: req.body.email });
  if (usuarioExistente.length) {
    return res.status(400).json({ message: 'Usuario existente' });
  }

  const senhaCriptografada = bcrypt.hashSync(req.body.senha, 10);

  const usuario = await usuarioModel.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: senhaCriptografada,
  })

  return res.status(201).json(usuario);
});

app.get('/noticias', async(req, res) => {

  let filtroCategoria = {};
  if(req.query.categoria) {
    filtroCategoria = { categoria: req.query.categoria }
  }

  const noticias = await NoticiaModel.find(filtroCategoria);
  return res.status(200).json(noticias);
});

app.post('/noticias', async(req, res) => {
  if (!req.body.titulo) {
    return res.status(400).json({ message: 'Titulo é obrigatório' });
  }
  if (!req.body.img) {
    return res.status(400).json({ message: 'Imagem é obrigatória' });
  }
  if (!req.body.texto) {
    return res.status(400).json({ message: 'Texto é obrigatório' });
  }
  if (!req.body.categoria) {
    return res.status(400).json({ message: 'Categoria é obrigatória' });
  }
  
  const noticia = await NoticiaModel.create({
    titulo: req.body.titulo,
    img: req.body.img,
    texto: req.body.texto,
    categoria: req.body.categoria,
  });
  return res.status(201).json(noticia);
});

app.listen(8080, () => {
  console.log('Servidor funcionando na porta 8080');
})