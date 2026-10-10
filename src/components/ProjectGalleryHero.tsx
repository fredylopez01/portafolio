"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
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
  // Lista completa de imágenes disponibles en el lightbox
  const allImages = [mainImage, ...gallery];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  // Bloqueo de scroll cuando el lightbox está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Navegación con teclado: Escape, flechas
  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return (i - 1 + allImages.length) % allImages.length;
    });
  }, [allImages.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return (i + 1) % allImages.length;
    });
  }, [allImages.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, goPrev, goNext]);

  const hasGallery = gallery.length > 0;

  return (
    <>
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
            onClick={() => setLightboxIndex(0)}
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
                  onClick={() => setLightboxIndex(i + 1)}
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

      {/* Lightbox con navegación */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/15 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Cerrar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
            aria-label="Cerrar"
          >
            <X size={22} className="text-white" />
          </button>

          {/* Contador */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 font-mono text-xs text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
            {lightboxIndex + 1} / {allImages.length}
          </div>

          {/* Anterior */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          )}

          {/* Imagen */}
          <img
            src={allImages[lightboxIndex]}
            alt={`${title} — imagen ${lightboxIndex + 1}`}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Siguiente */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
