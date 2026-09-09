import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },

  /*
    jsx-a11y goes through the same compat layer as next's config on purpose.
    Spreading eslint-plugin-jsx-a11y's own flat config instead throws
    "Cannot redefine plugin", because next/core-web-vitals already loads it.
  */
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:jsx-a11y/strict"),

  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      /*
        Accessibility is the point of this site, so this goes well past the
        defaults. eslint-config-next ships its six jsx-a11y rules as warnings;
        each rule below guards a defect the previous version of this site had.
      */

      // The stale-dependency bug that rebuilt the IntersectionObserver every render.
      "react-hooks/exhaustive-deps": "error",

      // Promoted from next's warn-level defaults. `img: ["Image"]` covers next/image.
      "jsx-a11y/alt-text": ["error", { elements: ["img"], img: ["Image"] }],
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",

      // Icon-only buttons and links must still resolve to an accessible name.
      "jsx-a11y/control-has-associated-label": ["error", { depth: 5 }],
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/anchor-ambiguous-text": [
        "error",
        { words: ["click here", "here", "link", "learn more", "read more", "more", "this"] },
      ],
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/no-aria-hidden-on-focusable": "error",
      "jsx-a11y/tabindex-no-positive": "error",
      "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],

      /*
        role="list" on a <ul> is normally redundant — but Tailwind's Preflight
        sets list-style:none, and Safari+VoiceOver then strips the list role,
        losing "list, 3 items". Allow it explicitly.
      */
      "jsx-a11y/no-redundant-roles": ["error", { ul: ["list"], ol: ["list"] }],

      // eslint-config-next turns this one off; reverse-tabnabbing is worth catching.
      "react/jsx-no-target-blank": [
        "error",
        { allowReferrer: false, enforceDynamicLinks: "always" },
      ],

      "@next/next/no-img-element": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

export default config;
