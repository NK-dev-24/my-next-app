import './globals.css'
import { Inter } from 'next/font/google'
import InkCursor from '@/components/ui/InkCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naveen Kumar V - Portfolio',
  description: 'Front-end Developer & Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <InkCursor />
      </body>
    </html>
  )
}

