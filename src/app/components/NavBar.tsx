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
    <nav className="w-full fixed top-0 z-40">
      <div className="nav-glass max-w-6xl mx-auto mt-3 px-4 py-3 flex items-center justify-between rounded-xl">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-[10px] glass-button text-[var(--tertiary-color)] flex items-center justify-center font-bold">
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
                className={`nav-link text-sm font-medium ${active ? "nav-link-active" : ""}`}
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
