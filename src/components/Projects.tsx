import projects from "@/data/projects.json";
import type { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import ProjectImage from "./ProjectImage";

export default function Projects() {
  const featured = (projects as Project[]).filter((p) => p.featured);

  return (
    <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
      <p className="font-mono text-xs muted mb-5">
        <span className="lime-text">➜</span> list projects.txt
      </p>

      <div className="flex items-end justify-between mb-10 flex-wrap gap-2">
        <h2 className="font-display text-3xl md:text-5xl">
          Proyectos <span className="marker-underline">destacados</span>
        </h2>
        <span className="font-mono text-xs muted">
          {featured.length.toString().padStart(2, "0")} seleccionados
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative block rounded-2xl overflow-hidden aspect-[4/3] isolate"
          >
            {/* Imagen */}
            <ProjectImage
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* Badge de estado (esquina superior) */}
            <div className="absolute top-3 right-3">
              {p.status === "deployed" ? (
                <span className="font-mono text-[10px] px-2 py-1 rounded bg-green-500/20 text-green-300 backdrop-blur-sm border border-green-500/30">
                  ● deployed
                </span>
              ) : (
                <span className="font-mono text-[10px] px-2 py-1 rounded bg-amber-500/20 text-amber-300 backdrop-blur-sm border border-amber-500/30">
                  ● local
                </span>
              )}
            </div>

            {/* Título + flecha */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3 bg-linear-to-t from-black/5 via-black/10 to-transparent backdrop-blur-xs">
              <h3 className="font-display text-lg text-white leading-tight max-w-[80%]">
                {p.title}
              </h3>
              <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-[rgb(var(--accent))] transition-colors shrink-0">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
