"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
]
export default function NavBar() {
  const pathname = usePathname() ?? "/"
  return (
    <nav className="bg-black/60 backdrop-blur-sm w-full fixed top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-[10px] bg-[var(--tertiary-color)] flex items-center justify-center font-bold text-black">
            DR
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-white">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-medium no-underline hover:underline hover:decoration-[var(--primary-color)] hover:underline-offset-6 hover:transition hover:decoration-4 transition duration-700  ${
                  active ? "text-[var(--tertiary-color)] underline decoration-[var(--primary-color)] decoration-2 underline-offset-6 transition duration-700 " : "text-white/90"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
        </div>
    </nav>
  )
}
