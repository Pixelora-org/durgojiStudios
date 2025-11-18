module.exports = {
  plugins: {
    // The project's CSS already contains compiled Tailwind output in `src/index.css`.
    // Avoid running Tailwind as a PostCSS plugin here (the v4 PostCSS plugin package
    // isn't available in the registry for this project). Use only autoprefixer.
    autoprefixer: {},
  },
};
