import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import CursorGlassEffect from "./components/CursorGlassEffect";

const circularStd = localFont({
  src: [
    { path: "../../public/fonts/CircularStd-Book.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/CircularStd-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/CircularStd-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/CircularStd-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-primary",
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={circularStd.variable}>
        <CursorGlassEffect />
        <NavBar/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
