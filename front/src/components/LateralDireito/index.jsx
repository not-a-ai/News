'use client'
import CardNoticia from "../CardNoticia";
import './style.css';
import { truncateWithEllipses } from '../../libs/truncateWithEllipses'

const LateralDireito =  ({ noticias }) => {

  const noticiasComElipse = () => {
    return noticias.map((noticia , index) => {
     noticia.texto = truncateWithEllipses(noticia.texto, 100) 
      return (
        <div  key={index} style={{marginBottom: '20px'}}>
          <CardNoticia noticia={ noticia } />
        </div>
      )
      
    })
}
  
  return (
   <div className="ultimas-noticias">

      <div className="titulo">ÚLTIMAS NOTÍCIAS</div>
      <div style={{ marginBottom: '20px'}}>
        { noticias.length && noticiasComElipse() }
      </div>
      
   </div>
  )
}

export default LateralDireito;