import type { Metadata } from 'next'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boilerplate Next.JS',
  description: 'Desenvolvido por victorandradelima',
  authors: [
    { name: 'Victor Lima', url: 'https://github.com/victorandradelima' }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> Exemplo usando next/font */}
      <body>{children}</body>
    </html>
  )
}
