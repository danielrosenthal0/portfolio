import Image from "next/image";
import cannon from "../assets/cannon.jpg";


export default function About() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-24 px-4">
      <div className="max-w-2xl w-full flex flex-col md:flex-row items-center gap-10">
        
          <div className="flex-shrink-0">
            <Image
              src={cannon}
              alt="Me sitting on a cannon!"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg object-cover w-64 h-64"
              priority
            />
          </div>

        <div className="flex-1 space-y-8">
   
            <p className="text-lg leading-relaxed bg-white/5 rounded-lg p-5 shadow">
              My name is Daniel Rosenthal and I live in NYC. I am 24 years old and I went to Wake Forest University in Winston-Salem, North Carolina. I am originally from just outside Philadelphia. I enjoy programming, basketball, film photography, running, golf, snowboarding, etc.!
            </p>

            <p className="text-lg leading-relaxed bg-white/5 rounded-lg p-5 shadow">
              I majored in engineering with a concentration in computer and electrical engineering. I minored in computer science and mathematics. I have wide array of interests and I am always looking for a new project. I am a fast-learner, creative problem solver, and I am very eager to learn new technologies. I believe there is no problem I cannot tackle.
            </p>
    
        </div>
      </div>
    </div>
  );
}