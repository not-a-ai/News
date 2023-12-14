"use client";
import { useState } from 'react';
const CadastroForm = () => {

  const [titulo, setTitulo] = useState('');
  const [img, setImg] = useState('');
  const [texto, setTexto] = useState('');

  const aoSubmeter =  (e) => {
    e.preventDefault()
    //TODO enviar para o servidor 
    console.log("submeteu lá ele", titulo, img, texto)
  }

   const aoAlterarValores = (e) => {
      const { name, value } = e.target;
      if ( name === 'titulo') {
        setTitulo(value)
      }
      if ( name === 'img') {
        setImg(value)
      }
      if ( name === 'texto') {
        setTexto(value)
      }
    }

  
  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="titulo">Título</label>
        <input type="text" name='titulo' onChange={aoAlterarValores}/>
      </div>
      <div>
        <label htmlFor="img">Imagem</label>
        <input type="text" name='img' onChange={aoAlterarValores}/>
      </div>
      <div>
        <label htmlFor="texto">Texto</label>
        <textarea type="text" name='texto' onChange={aoAlterarValores}/>
      </div>
      <button type="submit">Criar noticia</button>
    </form>
  )
}

export default CadastroForm;