import '../styles/globals.css'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Botoês'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="bg-violet-900 text-white">{children}</body>
    </html>
  )
}
