import Link from "next/link";
import projects from "@/data/projects.json";
import type { Project } from "@/types";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
  title: "Proyectos — Fredy López",
  description: "Todos los proyectos de Fredy Oswaldo López Daza.",
};

export default function ProjectsPage() {
  const all = projects as Project[];

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      {/* Volver al inicio */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs muted hover:text-[rgb(var(--accent))] transition mb-10"
      >
        <ArrowLeft size={14} /> cd ..
      </Link>

      {/* Header */}
      <p className="font-mono text-xs muted mb-4">
        <span className="lime-text">➜</span> ls projects/
      </p>

      <div className="flex items-end justify-between mb-12 flex-wrap gap-3">
        <h1 className="font-display text-4xl md:text-6xl">
          Todos los <span className="marker-underline">proyectos</span>
        </h1>
        <span className="font-mono text-xs muted">
          {all.length.toString().padStart(2, "0")} total
        </span>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {all.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-[rgb(var(--accent))] transition-colors"
          >
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <ProjectImage
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
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

            <div className="p-4 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-sm text-white leading-tight font-medium mb-1">
                  {p.title}
                </h3>
                <p className="font-mono text-[10px] text-white/50">{p.year}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[rgb(var(--accent))] transition-colors shrink-0">
                <ArrowUpRight size={12} className="text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer de la página */}
      <div className="mt-20 text-center font-mono text-xs muted">
        <span className="lime-text">➜</span> end of list ·{" "}
        <Link href="/" className="hover:text-[rgb(var(--accent))] transition">
          cd ..
        </Link>
      </div>
    </main>
  );
}
