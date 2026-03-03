'use client'
import Image from 'next/image'
import NavBar from './components/NavBar'
import uzi from "./assets/uzi.png"
import Link from 'next/link'

export default function Page() {
  return (
    <div className="page-bg min-h-screen text-white">
      {/* <NavBar /> */}

      <main className="max-w-5xl mx-auto px-6 py-64">
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm uppercase tracking-wide text-[var(--tertiary-color)]/80 mb-2">software engineer</p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              hi, i'm <span className="text-[var(--tertiary-color)]">daniel</span>.
              <span className="block text-lg font-normal mt-3 text-[var(--tertiary-color)]">i'm a software engineer living in nyc</span>
            </h1>

            <p className="mt-6 max-w-xl text-[var(--tertiary-color)]">
              i work at threshold.world and build production-ready web apps, tools, and interactive projects.
              this site showcases my projects and experiments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md glass-button text-white font-medium shadow-md"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md glass-button text-white"
              >
                Contact
              </Link>
            </div>

            <div className="mt-6 flex gap-4 text-white/80">
              <Link href="https://github.com/danielrosenthal0" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--tertiary-color)] transition">
                github
              </Link>

              <Link href="https://linkedin.com/in/daniel-b-rosenthal" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--tertiary-color)] transition">
                linkedin
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-[150px] overflow-hidden glass glass-strong">
              <Image
                src={uzi}
                alt="Daniel"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
