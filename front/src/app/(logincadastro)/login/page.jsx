'use client';
import LoginForm from '../../../components/LoginForm';
import { useRouter } from 'next/navigation';
import '../style.css'

const LoginPage = () => {
  const router = useRouter()

  return (
    <div className='logincadastro'>
      <h1>Login</h1>
      <LoginForm/>
      <button onClick={() => router.push('/cadastro')}>Cadastrar</button>
    </div>
  )
  
}

export default LoginPage