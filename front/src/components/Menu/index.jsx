'use client'
import { useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';

const Menu = () => {
  const [ menuLateral, setMenuLateral ] = useState(false);
  const router = useRouter()

  return (
    <>
    <nav className="menu">
      <button onClick={() => setMenuLateral(!menuLateral)}>Menu</button>
      <div>Logo</div>
      <button onClick={() => router.push('/login')}>Login</button>
    </nav>

    { menuLateral && 
    <div className='menu_lateral'>
      <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>x</div>
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </div>}
    </>
  )
}

export default Menu