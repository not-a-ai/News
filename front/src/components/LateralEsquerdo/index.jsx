'use client'
import CardNoticia from "../CardNoticia";
import './style.css';
import { truncateWithEllipses } from '../../libs/truncateWithEllipses'

export const LateralEsquerdo = ({noticia}) => {

console.log({noticia});
  noticia.texto = truncateWithEllipses(noticia.texto, 100)
  return (
   <div className="mais-popular">
      <div className="titulo">MAIS POPULAR</div>
      <CardNoticia noticia={noticia} />
   </div>
  )
}

export default LateralEsquerdo;