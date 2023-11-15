import type { Metadata } from 'next'
import '../globals.css'


export const metadata: Metadata = {
  title: 'Página de teste - Rock, Paper, Scissors, Lizard, Spock',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-radial h-screen w-screen bg-top bg-cover bg-black'>
        {children}
      </body>

    </html>
  )
}
