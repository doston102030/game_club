import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SiAmazongames } from 'react-icons/si'
import { ThemeProvider } from '@/components/common/ThemeProvider/ThemeProvider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}  antialiased  w-full  h-screen  `}>
        <ThemeProvider attribute={"class"} defaultTheme='light' disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  )
}
