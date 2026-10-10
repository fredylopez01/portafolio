"use client";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const DEFAULT_FALLBACK =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80";

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
