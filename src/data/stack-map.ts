export interface TechInfo {
  slug: string;
  color: string;
}

// Mapa de nombre exacto → slug y color para Simple Icons
export const TECH_MAP: Record<string, TechInfo> = {
  Java: { slug: "openjdk", color: "#ED8B00" },
  "Spring Boot": { slug: "springboot", color: "#6DB33F" },
  "Node.js": { slug: "nodedotjs", color: "#5FA04E" },
  NestJS: { slug: "nestjs", color: "#E0234E" },
  Express: { slug: "express", color: "#8B5CF6" },
  "Socket.IO": { slug: "socketdotio", color: "#8B5CF6" },
  TypeScript: { slug: "typescript", color: "#3178C6" },
  React: { slug: "react", color: "#61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "#8B5CF6" },
  "Tailwind CSS": { slug: "tailwindcss", color: "#06B6D4" },
  PostgreSQL: { slug: "postgresql", color: "#4169E1" },
  MySQL: { slug: "mysql", color: "#4479A1" },
  MongoDB: { slug: "mongodb", color: "#47A248" },
  Redis: { slug: "redis", color: "#DC382D" },
  RabbitMQ: { slug: "rabbitmq", color: "#FF6600" },
  "Apache Kafka": { slug: "apachekafka", color: "#231F20" },
  Docker: { slug: "docker", color: "#2496ED" },
  NGINX: { slug: "nginx", color: "#009639" },
  Prometheus: { slug: "prometheus", color: "#E6522C" },
  Grafana: { slug: "grafana", color: "#F46800" },
  Python: { slug: "python", color: "#3776AB" },
  Flask: { slug: "flask", color: "#8B5CF6" },
  JWT: { slug: "jsonwebtokens", color: "#ffda03" },
  JPA: { slug: "hibernate", color: "#59666C" },
  Prisma: { slug: "prisma", color: "#2FE748" },
  Git: { slug: "git", color: "#F05032" },
  GitHub: { slug: "github", color: "#181717" },
  Linux: { slug: "linux", color: "#FCC624" },
  "scikit-learn": { slug: "scikitlearn", color: "#F7931E" },
};
