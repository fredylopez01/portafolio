"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import ProjectImage from "./ProjectImage";

interface ProjectGalleryHeroProps {
  mainImage: string;
  title: string;
  status: "deployed" | "local" | "academic";
  gallery?: string[];
}

export default function ProjectGalleryHero({
  mainImage,
  title,
  status,
  gallery = [],
}: ProjectGalleryHeroProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hasGallery = gallery.length > 0;

  return (
    <>
      {/* Contenedor: en móvil apilado, en sm+ dos columnas */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:h-105">
        {/* Imagen principal */}
        <div className="relative flex-1 rounded-2xl overflow-hidden border border-[rgb(var(--border))] bg-black/20 aspect-4/3 sm:aspect-auto sm:h-full">
          <ProjectImage
            src={mainImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            {status === "deployed" ? (
              <span className="font-mono text-[10px] px-2 py-1 rounded bg-green-500/20 text-green-300 backdrop-blur-sm border border-green-500/30 inline-block mb-3">
                ● deployed
              </span>
            ) : (
              <span className="font-mono text-[10px] px-2 py-1 rounded bg-amber-500/20 text-amber-300 backdrop-blur-sm border border-amber-500/30 inline-block mb-3">
                ● {status}
              </span>
            )}
            <h1 className="font-display text-3xl md:text-5xl text-white leading-tight">
              {title}
            </h1>
          </div>

          <button
            onClick={() => setLightbox(mainImage)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
            aria-label="Ampliar imagen principal"
          >
            <ZoomIn size={16} className="text-white" />
          </button>
        </div>

        {/* Columna de miniaturas */}
        {hasGallery && (
          <div className="sm:w-32 lg:w-40 flex flex-col sm:h-full">
            <h2 className="font-display text-sm mb-2 hidden sm:block">
              Imágenes
            </h2>

            <div className="flex flex-row sm:flex-col gap-2 overflow-x-auto sm:overflow-x-hidden sm:overflow-y-auto sm:flex-1 sm:min-h-0 gallery-scroll sm:pr-2">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(src)}
                  className="group relative shrink-0 w-24 sm:w-full aspect-video rounded-lg overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-colors"
                  aria-label={`Ampliar imagen ${i + 1}`}
                >
                  <ProjectImage
                    src={src}
                    alt={`${title} — imagen ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <ZoomIn
                      size={16}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} className="text-white" />
          </button>
          <img
            src={lightbox}
            alt={`${title} — ampliada`}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
