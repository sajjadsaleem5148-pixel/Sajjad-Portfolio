# Sajjad Saleem Portfolio

A responsive, three-route Next.js portfolio for **Sajjad Saleem — Modern Web Application Developer**. It uses the App Router, JavaScript/JSX, plain CSS custom properties, Framer Motion, Lucide React, and React Icons.

## Windows CMD setup

1. Extract `sajjad-portfolio.zip`.
2. Open the extracted `sajjad-portfolio` folder in VS Code.
3. Open Windows Command Prompt or the VS Code terminal in that folder.
4. Install dependencies:

```cmd
npm install
```

5. Start the development server:

```cmd
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000), then visit `/projects` and `/contact` directly as well.
7. Stop the server with `Ctrl + C`.
8. Create a production build with `npm run build` and run it with `npm start`.

## Site structure

- `/` — Hero, about, skills, services, education, featured projects, and contact CTA.
- `/projects` — Complete collection of three shared project records.
- `/contact` — Social contact options and a validated `mailto:` fallback form.

The reusable site data lives in `src/config/siteConfig.js` and `src/data/portfolioData.js`. Shared interface pieces live under `src/components/`.

## Portrait and resume

The original portrait was not present in the supplied attachments at build time, so the hero intentionally shows a documented “portrait pending” panel instead of inventing or generating a face. Add Sajjad’s real image at `public/images/developer-portrait.png` (or update the reference in `src/components/Hero/Hero.jsx`) before final use. Preserve the person’s actual identity and do not replace it with stock or AI-generated imagery.

No resume PDF was supplied. Add a real PDF at `public/resume/Sajjad-Saleem-Resume.pdf` and change `resumeAvailable` to `true` in `src/config/siteConfig.js`. Until then, the Resume button is intentionally disabled and `public/resume/README.txt` explains the same process.

## Contact details

The WhatsApp link is intentionally the real international-format URL:

`https://wa.me/923212165148`

The local Pakistani number `03212165148` becomes `923212165148` by removing the leading `0` and adding country code `92`. The site uses `mailto:sajjadsaleem5148@gmail.com` for email.

The form has no server-side email provider configured. It validates fields in the browser, then opens the visitor’s configured email application with the submitted name, email, subject, and message prefilled. This does not guarantee delivery. To connect a real email service later, add a server/API route and a provider using server-side environment variables; never expose API keys in client-side code.

## Theme and customization

Dark Mode is the default for first-time visitors and uses the exact `#000000` page background. Light Mode uses `#FFFFFF`. The selected theme is stored in `localStorage` and remains consistent while navigating between all three routes. Theme variables are centralized in `src/app/globals.css`.

Edit social links, personal details, navigation, and resume state in `src/config/siteConfig.js`. Edit project names, descriptions, technologies, preview images, and verified/unavailable URLs in `src/data/portfolioData.js`. Project preview artwork is labeled as illustration rather than deployed-app screenshots.

## GitHub and Vercel

To push the project to GitHub:

```cmd
git init
git add .
git commit -m "Build Sajjad Saleem portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

On Vercel, import the repository, keep the framework as Next.js, and deploy. Add a real production domain before adding a canonical URL; this project does not invent one. A real email integration should be configured as server-side environment variables in the deployment dashboard.

## Validation notes

The project is intentionally dependency-free at source level beyond the declared npm packages, excludes `node_modules`, `.next`, environment files, and secrets from the deliverable, and includes `public/manus-routes.json` for the three primary routes. The final delivery report should distinguish dependency installation, production build, route/interaction checks, and ZIP verification rather than implying checks that were not run.
