'use client'
import "./style.css"
import CardNoticia from "../CardNoticia"

const GridNoticias = ({noticias}) => {
  return (
    <div className="grid-noticias">
      {noticias.map(noticia => 
        <CardNoticia key={noticia.id} noticia={noticia} />
      )}
    </div>
  )
}

export default GridNoticias