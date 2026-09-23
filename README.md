# Portfolio Website V3

A responsive personal portfolio for Ajmal Mohamed Yaseen. It presents an introduction, skills, certificates, selected projects, contact links, and a contact form.

## Built with

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS

## Run locally

Prerequisites: Node.js 20 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local address printed by Vite, usually `http://localhost:4173`.

## Scripts

```bash
pnpm dev        # Start the development server
pnpm build      # Create the production build
pnpm typecheck  # Check TypeScript types
```

The Vite application lives in `artifacts/portfolio` and its production files are written to `artifacts/portfolio/dist`.

## Contact form setup

The contact form sends submissions through EmailJS when these environment variables are set in `artifacts/portfolio/.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Copy `artifacts/portfolio/.env.example` to `artifacts/portfolio/.env` and replace its values with your EmailJS settings. If the variables are absent, the form opens the visitor's email client with a prefilled message instead.

## Deploy to Vercel

The repository includes `vercel.json`. In Vercel, use these settings:

| Setting | Value |
| --- | --- |
| Root Directory | Leave empty |
| Framework Preset | Vite |
| Install Command | `pnpm install` |
| Build Command | `pnpm --filter @workspace/portfolio build` |
| Output Directory | `artifacts/portfolio/dist` |

Add the three `VITE_EMAILJS_*` variables in Vercel's Environment Variables settings if you want the deployed contact form to send through EmailJS.

## Project structure

```text
artifacts/portfolio/
├── public/        # Static assets
├── src/
│   ├── components/ # Portfolio sections and UI components
│   ├── pages/      # Application pages
│   └── main.tsx    # Application entry point
├── index.html
└── vite.config.ts
```

## License

This project is available under the MIT License.
