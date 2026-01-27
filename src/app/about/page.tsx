import Image from "next/image";
import cannon from "../assets/cannon.jpg";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="max-w-5xl mx-auto px-6 py-64">
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm uppercase tracking-wide text-[var(--tertiary-color)]/80 mb-2">about me</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              hi, i'm <span className="text-[var(--tertiary-color)]">daniel</span>.
              <span className="block text-lg font-normal mt-3 text-[var(--tertiary-color)]">software engineer, builder, and creative problem solver</span>
            </h1>
            <p className="mt-6 max-w-xl text-[var(--tertiary-color)]">
              I'm a full-stack engineer based in NYC, passionate about building scalable web apps, interactive tools, and delightful user experiences. I thrive in fast-paced environments and love collaborating with teams to ship production-ready products.
            </p>
            <p className="mt-4 max-w-xl text-white/80">
              My background is in engineering (Wake Forest University), with a focus on computer and electrical engineering, computer science, and mathematics. I have experience across the stack: React, Next.js, .NET, Blazor, TypeScript, Python, AWS, Azure, and more. I enjoy working on challenging problems, learning new technologies, and delivering impactful solutions.
            </p>
            <p className="mt-4 max-w-xl text-white/80">
              Outside of work, I enjoy basketball, film photography, running, golf, and snowboarding. I'm always looking for new projects and opportunities to grow as an engineer and teammate.
            </p>
            
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-[150px] overflow-hidden ">
              <Image
                src={cannon}
                alt="Daniel on a cannon"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}