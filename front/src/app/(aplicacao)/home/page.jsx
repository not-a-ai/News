'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Noticia from "@/components/Noticia";

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

  return (
    <div>
      <h1>Home</h1>
      {noticias.map(noticia => <Noticia key={noticia.id} noticia={noticia}/>)}
    </div>
  )
}

export default HomePage;