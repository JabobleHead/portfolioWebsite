/**
 * First focusable element on the page. Hidden until it receives focus, so a
 * keyboard user can jump straight past the nav to the main content.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast shadow-lg"
    >
      Skip to main content
    </a>
  );
}
