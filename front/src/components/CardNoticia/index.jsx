'use client'
import "./style.css"
import { useState } from "react"

const CardNoticia = ({ noticia }) => {
  const [isHouver, setIsHouver] = useState(false)
  return (
    <div className="card-noticia">
      <div
      style={{position: 'relative'}} 
      onMouseEnter={() => setIsHouver(true)} 
      onMouseLeave={() => setIsHouver(false)}>
        <div className="popular" style={{ opacity: isHouver ? '1' : '0' }}>Clique aqui</div>
        <div className="imagem" style={{ backgroundImage: `url(${noticia.img})` }} />
      </div>
      
      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={ {__html: noticia.texto}}/>
      <div className="publicado-em"> { new Date(noticia.createdAt).toLocaleDateString('pt-BR')} </div>
    </div>
  )
}

export default CardNoticia