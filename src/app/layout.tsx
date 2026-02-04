import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SiAmazongames } from 'react-icons/si'

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Game club',
  description: 'Game club - crm dashbord system ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased  w-full  h-screen  `}>
        {children}
      </body>
    </html>
  )
}
