"use client";

import Image from "next/image";
import { useState } from "react";
import type { Screenshot } from "@/data/types";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

type ProjectGalleryProps = {
  screenshots: Screenshot[];
  /** Used to build unique, meaningful control labels for each gallery. */
  projectName: string;
};

/**
 * Screenshot carousel following the WAI-ARIA APG pattern.
 *
 * The slide container is a polite live region, so stepping through with the
 * controls announces the new slide's position and its descriptive alt text.
 * Only the active slide is rendered, which keeps hidden images out of the
 * accessibility tree entirely and avoids downloading every screenshot upfront.
 */
export default function ProjectGallery({ screenshots, projectName }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const total = screenshots.length;
  const current = screenshots[index];

  const goTo = (next: number) => setIndex((next + total) % total);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${projectName} screenshots`}
      className="flex flex-col gap-3"
    >
      <div
        aria-live="polite"
        aria-atomic="true"
        className="overflow-hidden rounded-xl border border-border-subtle bg-surface-raised"
      >
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${total}`}
          className="relative aspect-2/1"
        >
          <Image
            src={current.image}
            alt={current.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 640px, (min-width: 640px) 90vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {total > 1 ? (
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <ArrowLeftIcon />
            <span className="sr-only">Previous screenshot of {projectName}</span>
          </button>

          <ul role="list" className="flex flex-wrap items-center justify-center gap-1.5">
            {screenshots.map((screenshot, slideIndex) => {
              const isActive = slideIndex === index;
              return (
                <li key={screenshot.alt}>
                  {/*
                    The button is a full 24x24 hit area to satisfy WCAG 2.2
                    target size; the visible dot is the smaller span inside it.
                  */}
                  <button
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex h-6 w-6 items-center justify-center rounded-full"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-2.5 rounded-full transition-all ${
                        isActive
                          ? "w-5 bg-accent"
                          : "w-2.5 bg-border-strong group-hover:bg-text-muted"
                      }`}
                    />
                    <span className="sr-only">
                      Show screenshot {slideIndex + 1} of {total}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <ArrowRightIcon />
            <span className="sr-only">Next screenshot of {projectName}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
