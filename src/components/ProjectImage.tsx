"use client";

import { useEffect, useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const DEFAULT_FALLBACK = "/projects/default.webp";

// 1x1 pixel gris (data URI) como último recurso
const GRAY_PIXEL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=";

export default function ProjectImage({
  src,
  alt,
  className = "",
  fallback = DEFAULT_FALLBACK,
}: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  // Resetear cuando cambia el src (por si el mismo componente se reusa)
  useEffect(() => {
    setImgSrc(src);
    setHasErrored(false);
  }, [src]);

  return (
    <img
      src={hasErrored ? GRAY_PIXEL : imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (!hasErrored) {
          setHasErrored(true);
          setImgSrc(fallback);
        }
      }}
      className={className}
    />
  );
}
