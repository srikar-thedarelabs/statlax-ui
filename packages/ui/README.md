@srikar-thedarelabs/ui

Statlax design system components for React 19. ESM-only, ships precompiled CSS.

Install

- npm: npm i @srikar-thedarelabs/ui
- pnpm: pnpm add @srikar-thedarelabs/ui

Peer dependencies

- react ^19
- react-dom ^19

Usage

- Import styles once in your app entry:

  import "@srikar-thedarelabs/ui/styles.css";

- Use components:

  import { Button } from "@srikar-thedarelabs/ui";

  <Button>Click me</Button>

Notes

- Requires a modern bundler (Vite, Next.js) that supports ESM packages.
- Dark mode uses the .dark class on a parent element.
