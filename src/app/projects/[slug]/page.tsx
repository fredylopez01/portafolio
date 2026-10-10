import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "@/data/projects.json";
import type { Project } from "@/types";
import ProjectGalleryHero from "@/components/ProjectGalleryHero";
import TechBadge from "@/components/TechBadge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return (projects as Project[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);

  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.title} — Fredy López`,
    description: project.shortDescription,
  };
}

async function getMDXContent(slug: string) {
  try {
    const { default: Content } = await import(`@/content/projects/${slug}.mdx`);
    return Content;
  } catch {
    return null;
  }
}

export default function ProjectPage({ params }: Props) {
  return (
    <article className="px-6 py-5 max-w-4xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs muted hover:text-[rgb(var(--accent))] transition mb-3"
      >
        <ArrowLeft size={14} /> cd ../projects
      </Link>

      <Suspense
        fallback={
          <div className="font-mono text-xs muted">
            <span className="lime-text">➜</span> loading project...
          </div>
        }
      >
        <ProjectContent params={params} />
      </Suspense>
    </article>
  );
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);

  if (!project) notFound();

  const MDXContent = await getMDXContent(slug);

  const formattedDate = new Date(project.date).toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });
  const dateLabel =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <>
      <ProjectGalleryHero
        mainImage={project.image}
        title={project.title}
        status={project.status}
        gallery={project.gallery}
      />

      {/* Meta: fecha, links */}
      <div className="flex flex-wrap items-center gap-6 mb-5 font-mono text-xs muted">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} /> {dateLabel}
        </span>

        <div className="flex gap-4 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[rgb(var(--accent))] transition"
            >
              <FaGithub size={14} />
              {project.repoUrlBackend ? "Frontend" : "Repositorio"}
            </a>
          )}
          {project.repoUrlBackend && (
            <a
              href={project.repoUrlBackend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[rgb(var(--accent))] transition"
            >
              <FaGithub size={14} /> Backend
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[rgb(var(--accent))] transition"
            >
              <ExternalLink size={14} /> Ver demo
            </a>
          )}
        </div>
      </div>

      {/* Descripción corta */}
      <p className="text-lg muted leading-relaxed mb-12 border-l-2 border-[rgb(var(--accent))] pl-4">
        {project.shortDescription}
      </p>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.stack.map((t) => (
          <TechBadge key={t} name={t} />
        ))}
      </div>

      {/* Cuerpo MDX */}
      {MDXContent && (
        <div className="prose prose-invert! max-w-none">
          <MDXContent />
        </div>
      )}

      {/* Footer de navegación */}
      <div className="mt-20 pt-8 border-t border-[rgb(var(--border))] flex justify-between items-center font-mono text-xs">
        <Link
          href="/projects"
          className="muted hover:text-[rgb(var(--accent))] transition"
        >
          <ArrowLeft size={12} className="inline mr-1" /> todos los proyectos
        </Link>
        <span className="muted">$ end of project</span>
      </div>
    </>
  );
}
