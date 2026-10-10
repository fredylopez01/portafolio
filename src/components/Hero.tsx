import profile from "@/data/profile.json";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex items-center px-6 max-w-6xl mx-auto relative py-20">
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        {/* Columna izquierda */}
        <div>
          <p className="font-mono text-xs mb-5 muted">
            <span className="lime-text">➜</span> ~/portafolio git:(main){" "}
            <span className="accent-text">whoami</span>
          </p>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-6">
            Fredy
            <br />
            <span className="marker-underline">López</span>
            <span className="cursor-blink">&nbsp;</span>
          </h1>

          <p className="text-lg md:text-xl muted max-w-xl mb-3 font-medium">
            {profile.role}
          </p>
          <p className="text-base muted max-w-xl mb-9">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 text-white text-sm tilt-left hover:rotate-0 transition-transform"
              style={{ backgroundColor: "rgb(var(--accent))" }}
            >
              Ver proyectos <ArrowRight size={15} />
            </a>
            <a
              href={profile.cvUrl ?? "#"}
              className="px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 border-2 border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition text-sm"
            >
              Descargar CV <Download size={15} />
            </a>
          </div>

          {/* Bloque tipo terminal (status) */}
          <div className="font-mono text-xs muted mb-8 leading-relaxed">
            <div>
              <span className="lime-text">➜</span>{" "}
              <span className="accent-text">./status --check</span>
            </div>
            <div>
              <span className="text-green-500">✔</span> all systems operational
            </div>
            <div>
              <span className="text-green-500">✔</span> open to work · practices
              · freelance
            </div>
          </div>

          <div className="flex gap-4 muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[rgb(var(--accent))] transition"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[rgb(var(--accent))] transition"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-[rgb(var(--accent))] transition"
            >
              <Mail size={30} />
            </a>
          </div>
        </div>

        {/* Columna derecha: avatar sticker */}
        <div className="relative justify-self-center md:justify-self-end">
          <div
            className="absolute -inset-8 -z-10 rounded-full blur-3xl opacity-40"
            style={{ backgroundColor: "rgb(var(--lime))" }}
          />
          <div
            className="absolute -inset-12 -z-20 rounded-full blur-3xl opacity-25"
            style={{ backgroundColor: "rgb(var(--accent))" }}
          />

          <img
            src="/avatar.png"
            alt="Avatar de Fredy López"
            className="w-64 h-64 md:w-90 md:h-90 object-cover rounded-2xl border-4 border-white/10 shadow-2xl tilt-right hover:rotate-0 transition-transform duration-500"
          />

          {/* Sticker BUILD / CREATE / IMPROVE */}
          <div className="absolute -top-4 -left-8 font-display text-sm leading-tight bg-black text-lime-400 px-3 py-2 rotate-[-8deg] shadow-xl border-2 border-lime-400/60 rounded">
            BUILD
            <br />
            CREATE
            <br />
            IMPROVE
          </div>

          {/* Estrella decorativa */}
          <svg
            className="absolute -bottom-6 -right-6 text-white/70"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.5 5.5 21 7.5 13.5 2 9 9 9 12 2" />
          </svg>
        </div>
      </div>
    </section>
  );
}
