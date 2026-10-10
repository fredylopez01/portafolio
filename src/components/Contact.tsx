"use client";

import { useEffect, useState } from "react";
import profile from "@/data/profile.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section id="contact" className="px-6 py-16 max-w-6xl mx-auto">
      <p className="font-mono text-xs muted mb-5">
        <span className="lime-text">➜</span> cat contact.txt
      </p>

      <div className="card p-8 md:p-12 text-center relative overflow-hidden">
        <div
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: "rgb(var(--accent))" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: "rgb(var(--lime))" }}
        />

        <p className="font-mono text-xs muted mb-4 relative">
          <span className="lime-text">➜</span> echo &quot;let&apos;s build
          something&quot;
        </p>

        <h2 className="font-display text-4xl md:text-6xl mb-4 relative">
          ¿Trabajamos <span className="marker-underline">juntos</span>?
        </h2>

        <p className="muted max-w-xl mx-auto mb-8 text-sm md:text-base relative">
          Estoy abierto a prácticas, proyectos freelance y oportunidades
          full-time.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 relative">
          <a
            href={`mailto:${profile.email}`}
            className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-white text-sm tilt-left hover:rotate-0 transition-transform"
            style={{ backgroundColor: "rgb(var(--accent))" }}
          >
            <SiGmail size={15} /> Escríbeme
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 border-2 border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition text-sm"
          >
            <FaGithub size={15} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 border-2 border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition text-sm"
          >
            <FaLinkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>

      <footer className="mt-10 text-center font-mono text-xs muted">
        © {year ?? "—"} {profile.name} · <span className="lime-text">$</span>{" "}
        built_with next.js
      </footer>
    </section>
  );
}
