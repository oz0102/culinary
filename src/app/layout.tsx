import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Removed ThemeProvider import

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Culinary Canvas: The Art of Food Plating',
  description: 'Interactive web page showcasing plating techniques for Nigerian dishes, continental dishes, and desserts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Removed ThemeProvider wrapper */}
        {children}
      </body>
    </html>
  )
}

