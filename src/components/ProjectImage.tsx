"use client";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const DEFAULT_FALLBACK = "./projects/default.webp";

export default function ProjectImage({
  src,
  alt,
  className = "",
  fallback = DEFAULT_FALLBACK,
}: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== fallback) {
          target.src = fallback;
        }
      }}
      className={className}
    />
  );
}
