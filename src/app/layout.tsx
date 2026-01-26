import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Space_Mono } from 'next/font/google'
import NavBar from "./components/NavBar";
const spacemono = Space_Mono({subsets: ['latin'], weight: '400', display: "swap", })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spacemono.className}>
        <NavBar/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
