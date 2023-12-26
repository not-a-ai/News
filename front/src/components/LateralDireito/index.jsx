'use client'
import CardNoticia from "../CardNoticia";
import './style.css';
import { truncateWithEllipses } from '../../libs/truncateWithEllipses'

const LateralDireito =  ({noticia}) => {
  

  noticia.texto = truncateWithEllipses(noticia.texto, 100)
  return (
   <div className="ultimas-noticias">

      <div className="titulo">ÚLTIMAS NOTÍCIAS</div>
      <div style={{ marginBottom: '20px'}}>
      <CardNoticia noticia={noticia} />
      </div>
      <CardNoticia noticia={noticia} />
      
   </div>
  )
}

export default LateralDireito;