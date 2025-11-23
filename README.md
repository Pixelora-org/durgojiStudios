# Durgoji Studios

Professional Photography & Creative Studio Services Website

## Features

- Modern React + Vite setup
- Image optimization (82% compression)
- Responsive design
- Cloudflare Pages ready

## Running the code

Run `npm install` to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run build` to build for production.

## Deployment

### Cloudflare Pages

The project is configured for Cloudflare Pages. When connected via GitHub:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Framework preset**: Vite

Cloudflare Pages will automatically:
- Compress images
- Serve WebP/AVIF formats
- Cache globally via CDN
- Provide free SSL

### Vercel

Also configured for Vercel deployment with `vercel.json`.
