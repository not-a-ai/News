import Noticia from "@/components/Noticia";

const noticias = [
  {
    id: 1,
    titulo: 'notícia 1',
    img: 'https://via.placeholder.com/150',
    texto: 'Texto da notícia <b>1</b>'
  },
  {
    id: 2,
    titulo: 'notícia 2',
    img: 'https://via.placeholder.com/150',
    texto: 'Texto da notícia <b>2</b>'
  },
  {
    id: 3,
    titulo: 'notícia 3',
    img: 'https://via.placeholder.com/150',
    texto: 'Texto da notícia <b>3</b>'
  }
]
const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      {noticias.map(noticia => <Noticia key={noticia.id} noticia={noticia}/>)}
    </div>
  )
}

export default HomePage;