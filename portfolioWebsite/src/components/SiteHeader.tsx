"use client";

import { useEffect, useRef, useState } from "react";
import { navItems, site } from "@/data/site";
import { CloseIcon, ExternalLinkIcon, MenuIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

/*
  Hoisted to module scope on purpose: the old header rebuilt this array on
  every render and used it as a useEffect dependency, which tore down and
  recreated the IntersectionObserver on every single render.
*/
const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

export default function SiteHeader() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Scroll spy — marks the section currently in view.
  useEffect(() => {
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Document order wins, so overlapping sections resolve predictably.
        const firstVisible = SECTION_IDS.find((id) => visible.has(id));
        setActiveId(firstVisible ?? null);
      },
      // Biases "current" toward whatever sits in the upper middle of the viewport.
      { rootMargin: "-30% 0px -55% 0px" },
    );

    for (const id of SECTION_IDS) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/85 backdrop-blur-md">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <a
            href="#about"
            /* min-h-6 keeps the hit area at the 24px WCAG 2.2 minimum. */
            className="inline-flex min-h-6 items-center rounded py-1 font-mono text-sm font-bold tracking-tight text-text transition-colors hover:text-accent"
          >
            {site.name}
          </a>

          <div className="flex items-center gap-2">
            <nav aria-label="Primary">
              <ul
                role="list"
                id="primary-menu"
                className={`${
                  menuOpen ? "flex" : "hidden"
                } absolute inset-x-0 top-16 flex-col gap-1 border-b border-border-subtle bg-bg p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
              >
                {navItems.map((item) => {
                  const isActive = activeId === item.href.replace("#", "");
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "true" : undefined}
                        /*
                          The underline bar is the non-color half of the current
                          indicator — color alone would fail WCAG 1.4.1.
                        */
                        className={`relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full hover:bg-surface-raised hover:text-text ${
                          isActive
                            ? "text-accent after:bg-accent md:bg-surface-raised"
                            : "text-text-muted after:bg-transparent"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li className="mt-2 md:ml-2 md:mt-0">
                  <a
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover"
                  >
                    Résumé
                    <ExternalLinkIcon />
                    <span className="sr-only">(PDF, opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </nav>

            <ThemeToggle />

            <button
              ref={triggerRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-lg text-text-muted transition-colors hover:border-border-strong hover:text-text md:hidden"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
