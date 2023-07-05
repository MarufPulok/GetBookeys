import './globals.css'
import {Nunito} from "next/font/google"

export const metadata = {
  title: 'GetBookeys',
  description: 'GetBookeys is a book rental service.',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
