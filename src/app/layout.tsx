import type { Metadata } from 'next'
import { Permanent_Marker, Orbitron, Advent_Pro } from 'next/font/google'
import '../globals.css'

const advent = Advent_Pro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-advent',
})
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-orbitron',
})
const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marker',
})

export const metadata: Metadata = {
  title: 'Victor Moucattash - Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${advent.className} ${orbitron.variable} ${marker.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
