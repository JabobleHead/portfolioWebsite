/**
 * Tech tags. Rendered as a labelled list so a screen reader announces
 * "Technologies used, list, 4 items" rather than a run of loose words.
 */
export default function TagList({ tags, label }: { tags: string[]; label: string }) {
  if (tags.length === 0) return null;

  return (
    <ul role="list" aria-label={label} className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border-subtle bg-surface-raised px-3 py-1 font-mono text-xs tracking-tight text-text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
