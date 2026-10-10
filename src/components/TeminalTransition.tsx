"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CHAR_SPEED = 45;
const LOADING_HOLD = 550;
const FADE_OUT = 350;

type Phase = "idle" | "typing" | "loading" | "leaving";

const STORAGE_KEY = "tt_prev_path";

function buildCommand(prev: string, next: string): string {
  if (next === "/") return "cd ~";

  // Entrar a un proyecto desde cualquier parte: /projects/[slug]
  if (next.startsWith("/projects/") && next !== "/projects") {
    const slug = next.replace("/projects/", "");
    return `open ${slug}`;
  }

  // Ir a la lista de proyectos
  if (next === "/projects") {
    // Si venimos de un proyecto, retroceder
    if (prev.startsWith("/projects/") && prev !== "/projects") {
      return "cd ../projects";
    }
    // Si venimos de cualquier otro lado, listar
    return "ls projects/";
  }

  return `goto ${next}`;
}

export default function TerminalTransition() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [command, setCommand] = useState("");
  const [typed, setTyped] = useState("");
  const lastPathname = useRef<string | null>(null);

  useEffect(() => {
    // Primera carga: solo guardamos la ruta y no animamos
    if (lastPathname.current === null) {
      lastPathname.current = pathname;
      return;
    }

    // Misma ruta: nada que hacer
    if (lastPathname.current === pathname) return;

    // Obtenemos la ruta de origen desde sessionStorage
    // (la escribimos antes de navegar, en el useEffect siguiente)
    const prev = sessionStorage.getItem(STORAGE_KEY) ?? lastPathname.current;
    const next = pathname;

    // Actualizamos el estado
    lastPathname.current = pathname;
    sessionStorage.setItem(STORAGE_KEY, next);

    const cmd = buildCommand(prev, next);
    console.log("[TerminalTransition]", prev, "→", next, "|", cmd);

    setCommand(cmd);
    setTyped("");
    setPhase("typing");
  }, [pathname]);

  // Antes de que el usuario navegue, guardamos la ruta actual.
  // Esto se ejecuta en cada cambio de pathname y deja la ruta lista
  // para el siguiente render.
  useEffect(() => {
    const current = sessionStorage.getItem(STORAGE_KEY);
    if (current !== pathname) {
      sessionStorage.setItem(STORAGE_KEY, pathname);
    }
  }, [pathname]);

  // Máquina de estados
  useEffect(() => {
    if (phase === "idle") return;

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < command.length) {
        timeout = setTimeout(() => {
          setTyped(command.slice(0, typed.length + 1));
        }, CHAR_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("loading"), 180);
      }
    }

    if (phase === "loading") {
      timeout = setTimeout(() => setPhase("leaving"), LOADING_HOLD);
    }

    if (phase === "leaving") {
      timeout = setTimeout(() => setPhase("idle"), FADE_OUT);
    }

    return () => clearTimeout(timeout);
  }, [phase, typed, command]);

  return (
    <div className="terminal-transition" data-phase={phase} aria-hidden>
      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="terminal-title">~/fredy — zsh</span>
        </div>

        <div className="terminal-body">
          <div className="terminal-line">
            <span className="lime-text">➜</span>
            <span className="accent-text"> ~/portafolio</span>
            <span className="muted"> git:(main) </span>
            <span className="typed-text">{typed}</span>
            {phase === "typing" && <span className="cursor-blink">&nbsp;</span>}
          </div>

          {phase === "loading" && (
            <div className="terminal-line muted">
              <span className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          )}

          {phase === "leaving" && (
            <div className="terminal-line">
              <span className="text-green-400">✔</span>
              <span className="muted"> done</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
