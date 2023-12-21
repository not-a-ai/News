'use client'

const CardNoticia = ({ noticia }) => {
  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <img src={noticia.img} alt={noticia.titulo} />
      <p dangerouslySetInnerHTML={ {__html: noticia.texto}}/>
    </div>
  )
}

export default CardNoticia