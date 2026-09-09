"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export const THEME_STORAGE_KEY = "theme";

/**
 * Theme toggle.
 *
 * Which icon and label show is decided purely in CSS off the `data-theme`
 * attribute the inline script in layout.tsx stamps before first paint, and the
 * click handler reads the current theme straight from the DOM. That means this
 * component renders identically on the server and the client, so there is no
 * hydration mismatch and no flash of the wrong icon.
 */
export default function ThemeToggle() {
  // Empty on both server and first client render, so it can't mismatch.
  const [announcement, setAnnouncement] = useState("");

  // Follow the OS while the visitor hasn't made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private-mode storage failures shouldn't break the toggle.
    }
    setAnnouncement(next === "dark" ? "Dark theme on" : "Light theme on");
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-lg text-text-muted transition-colors hover:border-border-strong hover:text-text"
      >
        <MoonIcon className="dark:hidden" />
        <SunIcon className="hidden dark:block" />
        {/* Only one of these is displayed, so only one becomes the button's name. */}
        <span className="sr-only dark:hidden">Switch to dark theme</span>
        <span className="sr-only hidden dark:block">Switch to light theme</span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </>
  );
}
