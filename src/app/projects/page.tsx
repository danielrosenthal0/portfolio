
import Link from "next/link";
// import plauly from "./Assets/plauly.mp4"

export default function Projects() {
  const ProjectCardData = [
  {
    id: "hyzerberg-technologies",
    title: "Hyzerberg Technologies",
    description: "Creating a disc golf simulator for senior Capstone project",
    date: "5/2023"
  },
  {
    id: "smart-robot",
    title: "Smart Robot",
    description: "Using a Romi Pololu Robot in smart applications",
    date: "12/2022"
  },
  {
    id: "lionize",
    title: "Lionize",
    description: "Data analytics for a tech startup working with influencers",
    date: "8/2022"
  },
  {
    id: "ultrasonic",
    title: "Ultrasonic Eyes",
    description: "Custom toy that follows a user across the room with LED eyes",
    date: "3/2021"
  },
  {
    id: "research",
    title: "Stereo Vision Wildfire Drone Research",
    description: "Using cameras on drones to monitor controlled wildfire burns",
    date: "8/2021"
  },
  {
    id: "face-api",
    title: "In-Browser Facial Recognition",
    description: "Using face-api to run real-time facial recognition in the browser",
    date: "8/2023"
  },
  {
    id: "turnstile",
    title: "Turnstile",
    description: "A web app to connect up-and-coming artists with artists already solidified in the industry",
    date: "1/2024"
  },
  {
    id: "plauly",
    title: "Plauly",
    description: "A web app to analyze a song and related playlists to find the best playlist for your music",
    date: "8/2025"
  },
  {
    id: "metrohedron",
    title: "Metrohedron",
    description: "A web app to track people's travels on the NYC subway system and provide quick stats, heatmaps of frequented stations, and visual representations of travels on a map of the subway",
    date: "9/2025"
  },
];
  const sortedProjects = [...ProjectCardData].sort((a, b) => {
    const dateA = new Date(`${a.date.slice(0, 2)}/01/${a.date.slice(3)}`).valueOf();
    const dateB = new Date(`${b.date.slice(0, 2)}/01/${b.date.slice(3)}`).valueOf();
    return dateB - dateA;
  });

  return (
    <div className="page-bg min-h-screen text-white">
      <main className="max-w-5xl mx-auto px-6 py-64">
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm uppercase tracking-wide text-[var(--tertiary-color)]/80 mb-2">my work</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              projects <span className="text-[var(--tertiary-color)]">portfolio</span>.
              <span className="block text-lg font-normal mt-3 text-[var(--tertiary-color)]">a collection of things i've built</span>
            </h1>
            <p className="mt-6 max-w-xl text-[var(--tertiary-color)]">
              here are some of my favorite projects, ranging from web apps to hardware builds and research.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {sortedProjects.map((project) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="block glass hover-glass rounded-lg p-6 hover:bg-[var(--tertiary-color)]/10 transition group"
                >
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--tertiary-color)] transition">{project.title}</h2>
                  <p className="mb-2 text-white/80">{project.description}</p>
                  <p className="text-xs text-white/50">{project.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
