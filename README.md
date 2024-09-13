This is a NextJS starter template for future projects. It's very minimal so it's easy to add new features.

## Features

- [Next.js](https://nextjs.org/docs) Framework: Utilizes Next.js as the React framework with the App Router for efficient routing and server-side rendering.
- [PostCSS](https://postcss.org): Enhanced with additional features such as mixins, functions, and custom media queries to streamline CSS development.
- Code Quality Tools: Includes [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [TypeScript](https://www.typescriptlang.org/) to ensure code quality and consistency across the project.
- [Husky](https://typicode.github.io/husky/) Pre-commit Hooks: Implements Husky with pre-commit hooks to prevent committing unformatted code, maintaining codebase consistency.
- Icon Management: Automated icon management with scripts to generate icon components, sprite sheets, and type definitions from SVG files. Supports both server-side and client-side icons. Server-side icons are rendered inline to avoid unnecessary bundle size increases, while client-side icons use a sprite sheet for efficiency.

Browse through the files to see how you can use and extend.

## Getting Started

Install the necessary tools:

```bash
pnpm install  // v9.8.0
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
