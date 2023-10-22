import { Inter } from 'next/font/google'
import './globals.css'
import HeaderNav from './components/navigation/HeaderNav'
import SideNav from './components/navigation/SideNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className}`}>
        <HeaderNav />
        <div className='flex container pt-6 pb-12 px-0'>
          <SideNav />
          <div className='w-full px-4 pt-6 mb-12'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
