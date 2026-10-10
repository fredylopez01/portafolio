export interface Profile {
  name: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl?: string;
}

export interface StackItem {
  name: string;
  slug: string;
  color: string;
  category: "backend" | "frontend" | "database" | "devops" | "data";
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  year: string;
  status: "deployed" | "local" | "academic";
  image: string; // ← NUEVO: ruta pública de la imagen
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}
