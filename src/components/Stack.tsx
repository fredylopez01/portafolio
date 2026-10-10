import stack from "@/data/stack.json";
import type { StackItem } from "@/types";

export default function Stack() {
  const items = stack as StackItem[];

  // Dividimos en dos filas (mitad y mitad)
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  // Duplicamos cada fila para el loop infinito
  const row1Loop = [...row1, ...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="stack" className="px-6 py-16 max-w-6xl mx-auto">
      <p className="font-mono text-xs muted mb-5">
        <span className="lime-text">➜</span> list skills
      </p>

      <h2 className="font-display text-3xl md:text-5xl mb-10">
        Stack <span className="marker-underline">tecnológico</span>
        <span className="cursor-blink">&nbsp;</span>
      </h2>

      <div className="marquee">
        {/* Fila 1: hacia la izquierda */}
        <div className="marquee-row">
          <div className="marquee-track">
            {row1Loop.map((tech, i) => (
              <TechIcon key={`r1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Fila 2: hacia la derecha */}
        <div className="marquee-row marquee-row--right">
          <div className="marquee-track">
            {row2Loop.map((tech, i) => (
              <TechIcon key={`r2-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechIcon({ tech }: { tech: StackItem }) {
  return (
    <div className="tech-icon">
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
        alt={tech.name}
        width={28}
        height={28}
        loading="lazy"
      />
      <span className="tech-tooltip">{tech.name}</span>
    </div>
  );
}
