"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#about", label: "Sobre mí" },
  { href: "/#stack", label: "Stack" },
  { href: "/projects", label: "Proyectos" },
  { href: "/#contact", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/projects")) return pathname.startsWith("/projects");
    return false;
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgb(var(--bg))]/70 border-b border-[rgb(var(--border))]">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-xs md:text-sm font-bold flex items-center gap-1.5 shrink-0"
        >
          <span className="lime-text">➜</span>
          <span className="accent-text">~/</span>
          <span>fredy</span>
        </Link>

        {/* Desktop: links + toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-xs px-3 py-1.5 rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-[rgb(var(--accent))] bg-[rgb(var(--accent))]/10"
                      : "muted hover:text-[rgb(var(--accent))]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburguesa */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="w-9 h-9 rounded-md border border-[rgb(var(--border))] flex items-center justify-center hover:border-[rgb(var(--accent))] transition"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]/95 backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm block px-3 py-2.5 rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-[rgb(var(--accent))] bg-[rgb(var(--accent))]/10"
                      : "muted hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--border))]/30"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
