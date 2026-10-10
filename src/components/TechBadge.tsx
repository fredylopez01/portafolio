import { TECH_MAP } from "@/data/stack-map";

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  const info = TECH_MAP[name];

  return (
    <span
      className="font-mono text-[10px] px-2 py-1 rounded border flex items-center gap-1.5"
      style={{
        borderColor: info ? `${info.color}66` : "rgb(var(--border))",
        backgroundColor: info ? `${info.color}1a` : "transparent",
        color: info ? info.color : "rgb(var(--text-muted))",
      }}
    >
      {info && (
        <img
          src={`https://cdn.simpleicons.org/${info.slug}/${info.color.replace("#", "")}`}
          alt={name}
          width={12}
          height={12}
          loading="lazy"
        />
      )}
      <span>{name}</span>
    </span>
  );
}
