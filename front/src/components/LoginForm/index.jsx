import { useState } from 'react';

const LoginForm = () => {
  const [formulario, setFormulario] = useState({
    email: '',
    senha: ''
  })

  const aoSubmeter = (e) => {
    e.preventDefault()
    console.log('submeteu lá ele', formulario)
  }
  const aoAlterarValores = (e) => {
    const { name, value } = e.target 
    setFormulario({
      ...formulario,
      [name]: value 
    })
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" onChange={aoAlterarValores} />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" onChange={aoAlterarValores} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default LoginForm;