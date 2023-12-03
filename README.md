### Personal website

- TypeScript 4.9.5
- [Mantine UI (v5)](https://v5.mantine.dev/)
- Toggleable profile card
- Content (profile, projects, posts) is managed via [assets/data](./src/assets/data/)
- Configurable within [constants](./src/assets/constants/) and [src/config/index](./src/config/index.tsx) file.
- [project articles](./src/assets/data/projects/) & [posts](./src/assets/data/posts/) are generated programmatically within [useContentRenderer](./src/services/useContentRenderer/index.tsx) service. It can be expanded/configured to personal needs. It does not use `import alias` to independent it from the rest of the website.

<br/>

### Credits

- [background (rawpixel.com - Freepik)](https://pl.freepik.com/darmowe-wektory/tlo-swiatla-neonowego_3602483.htm)
- [featured project card background](https://pixabay.com/pl/photos/streszczenie-obraz-pi%c3%b3ra-pi%c4%99kny-6047465/)
