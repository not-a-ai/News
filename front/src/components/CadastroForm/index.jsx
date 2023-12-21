'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CadastroForm = () => {
  const router = useRouter();
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  const aoSubmeter = async (e) => {
    
    e.preventDefault()
    try {
      const formulario = {
        nome,
        email,
        senha        
      }
      const result = await axios.post('http://localhost:8080/usuarios', formulario)
      alert("Usuário foi cadastrado com sucesso")
      router.push('/admin/noticias/criar')
    } catch (error) {
      alert(error.response.data.message)
    }
    console.log("submeteu lá ele", nome, email, senha)
  }
  
  const aoAlterarValor = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nome': {
        setNome(value)
        break;
      }
      case 'email': {
        setEmail(value)
        break;
      }
      case 'senha': {
        setSenha(value)
        break;
      }
      default:
        break;
    }
  }

  
  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" onChange={aoAlterarValor}/>
      </div>
      <div>
       <label htmlFor="email">E-mail</label>
       <input type="text" name="email" onChange={aoAlterarValor} />
      </div>
      <div>
       <label htmlFor="senha">Senha</label>
       <input type="password" name="senha" onChange={aoAlterarValor}/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default CadastroForm;