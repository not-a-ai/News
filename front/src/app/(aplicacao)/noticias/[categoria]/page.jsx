'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import GridNoticias from "@/components/GridNoticias"

const NoticiasPage = ({ params }) => {
  const [noticias, setNoticias] = useState([])

  const getNoticias = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/noticias?categoria=${params.categoria}`);
      setNoticias(result.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  useEffect(() => {
    getNoticias();
  })


  return (
    <div style={{ textAlign: 'center'}}>
      <h1 style={{  padding:'20px 0'}}>{params.categoria.toUpperCase()}</h1>
      <GridNoticias noticias={noticias}/>
    </div>
  )
}

export default NoticiasPage
