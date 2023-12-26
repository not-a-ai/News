'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Noticia from "@/components/Noticia";
import LateralEsquerdo from "@/components/LateralEsquerdo";
import LateralDireito from "@/components/LateralDireito";
import './style.css';


const HomePage = () => {
  const [noticias, setNoticias] = useState([]);
  
  const getNoticias = async () => {
    try {
      const result = await axios.get('http://localhost:8080/noticias');
      setNoticias(result.data);
    } catch (error) {
      alert(error.response.data.message);
    }
    
  }
  useEffect(() => {
    getNoticias();
  }, [])

  console.log(noticias)
  return (
    <div className="grid-home">
      <LateralEsquerdo noticia={noticias[0]}/>

      <div>
        {noticias.map(noticia => 
        <Noticia key={noticia._id} noticia={noticia}/>)}
      </div>

      {/* <LateralDireito noticia={noticias[0]}/> */}
    </div>
  )
}

export default HomePage;