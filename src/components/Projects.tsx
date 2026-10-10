import projects from "@/data/projects.json";
import type { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import ProjectImage from "./ProjectImage";
import Link from "next/link";

export default function Projects() {
  const featured = (projects as Project[]).filter((p) => p.featured);

  return (
    <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
      <p className="font-mono text-xs muted mb-5">
        <span className="lime-text">➜</span> list projects.txt
      </p>

      <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
        <h2 className="font-display text-3xl md:text-5xl">
          Proyectos <span className="marker-underline">destacados</span>
        </h2>
        <Link
          href="/projects"
          className="font-mono text-xs muted hover:text-[rgb(var(--accent))] transition flex items-center gap-1.5"
        >
          Ver todos los proyectos <ArrowUpRight size={12} />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-[rgb(var(--accent))] transition-colors"
          >
            {/* Imagen arriba, con esquinas redondeadas */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <ProjectImage
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Badge de estado encima de la imagen */}
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
            </div>

            {/* Bloque negro inferior con título y flecha */}
            <div className="p-4 flex items-end justify-between gap-3">
              <h3 className="text-sm text-white leading-tight max-w-[80%] font-medium">
                {p.title}
              </h3>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[rgb(var(--accent))] transition-colors shrink-0">
                <ArrowUpRight size={12} className="text-white" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
