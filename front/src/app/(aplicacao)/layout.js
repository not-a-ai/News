import { Inter } from 'next/font/google'
import '../../app/globals.css'
import Menu from '../../components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The news',
  description: 'Copy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}</body>
    </html>
  )
}
