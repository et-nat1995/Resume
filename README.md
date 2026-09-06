# Tamir Natanov — Portfolio

Personal portfolio for [et-nat.com](https://et-nat.com), built with React, TypeScript, Vinext, and the Sites runtime.

## Architecture

The application follows practical Atomic Design boundaries:

- `components/atoms` contains the smallest reusable visual primitives.
- `components/molecules` combines atoms into repeated interface patterns.
- `components/organisms` owns complete page sections and their scoped styles.
- `components/templates` composes the page without owning content.
- `content` contains the editable portfolio copy as domain-focused JSON.
- `lib/content` validates and types all content before rendering.

`app/page.tsx` is intentionally limited to loading content and selecting the page template.

## Editing content

Update the relevant JSON file in `content/`. The Zod schema in `lib/content/schema.ts` catches missing fields, malformed links, invalid icon names, and broken default selections during the build.

## Development

- `npm run dev` starts the local development server.
- `npm run build` creates the deployable production bundle.
