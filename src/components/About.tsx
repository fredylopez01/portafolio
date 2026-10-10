import profile from "@/data/profile.json";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 max-w-6xl mx-auto">
      <p className="font-mono text-xs mb-5 muted">
        <span className="lime-text">➜</span> cat about.txt
      </p>

      <h2 className="font-display text-3xl md:text-5xl mb-8">
        Sobre <span className="marker-underline">mí</span>
      </h2>

      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="space-y-4">
          <p className="text-base md:text-lg leading-relaxed muted max-w-3xl">
            {profile.description}
          </p>
        </div>

        <div className="card px-4 py-3 flex items-center gap-2 self-start">
          <MapPin size={16} className="lime-text" />
          <span className="text-sm font-mono">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
