# 🌐 Portfolio Website V3

A modern, responsive personal portfolio website for **Ajmal Mohamed Yaseen**, built to showcase my skills, certifications, projects, education, and contact information.

The portfolio is designed with a clean and interactive interface, smooth animations, responsive layouts, and an accessible contact experience.

---

## ✨ Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- ⚡ Fast performance with Vite
- 🎬 Smooth animations using Framer Motion
- 🧑‍💻 Skills and technology showcase
- 📜 Certificates and achievements section
- 🚀 Selected projects showcase
- 🔗 Social media and professional links
- 📧 Functional contact form using EmailJS
- ♿ Accessible contact links
- 📱 Mobile-friendly navigation
- 🌙 Modern visual design
- 🔍 SEO-friendly page structure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Frontend framework |
| **TypeScript** | Type-safe development |
| **Vite** | Development server and build tool |
| **Tailwind CSS** | Styling and responsive design |
| **Framer Motion** | Animations and transitions |
| **EmailJS** | Contact form email delivery |
| **Lucide React** | Icons |
| **React Icons** | Additional social/media icons |

---

## 📸 Portfolio Sections

The website currently includes:

- **Home** – Introduction and personal branding
- **About** – Background and profile information
- **Skills** – Technical and professional skills
- **Certificates** – Courses and certifications
- **Projects** – Selected development projects
- **Contact** – Social links and contact form

---

## 📂 Project Structure

```text
PortfolioWebsiteV3/
│
├── artifacts/
│   └── portfolio/
│       ├── public/
│       │   └── # Static assets
│       │
│       ├── src/
│       │   ├── components/
│       │   │   └── # Portfolio sections and reusable UI
│       │   │
│       │   ├── pages/
│       │   │   └── # Application pages
│       │   │
│       │   └── main.tsx
│       │
│       ├── index.html
│       ├── vite.config.ts
│       └── .env.example
│
├── vercel.json
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

- **Node.js 20 or later**
- **pnpm**

Check your installed versions:

```bash
node --version
pnpm --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd PortfolioWebsiteV3
```

Install dependencies:

```bash
pnpm install
```

---

## 💻 Run Locally

Start the development server:

```bash
pnpm dev
```

Vite will display the local development URL in your terminal.

Open the displayed URL in your browser.

For example:

```text
http://localhost:4173
```

> The exact port may vary depending on your Vite configuration and whether another service is already using the port.

---

# 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm typecheck` | Check TypeScript types |

Example:

```bash
pnpm dev
```

Build the project:

```bash
pnpm build
```

Run TypeScript checks:

```bash
pnpm typecheck
```

---

# 📧 Contact Form Setup

The portfolio uses **EmailJS** to send messages submitted through the contact form.

Create an EmailJS account and obtain:

- Service ID
- Template ID
- Public Key

Inside:

```text
artifacts/portfolio/
```

copy:

```text
.env.example
```

to:

```text
.env
```

Then add your EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Important

Do **not** commit your `.env` file to GitHub.

Your `.gitignore` should include:

```text
.env
.env.local
.env.*.local
```

The `VITE_EMAILJS_PUBLIC_KEY` is intended for frontend use, but your EmailJS service/template configuration should still be managed carefully.

---

## 📩 EmailJS Template

Make sure your EmailJS template variables match the variables used by the contact form.

For example:

```text
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

Adjust the variable names according to your implementation.

---

# ☁️ Deploy to Vercel

This project is configured for deployment on **Vercel**.

### Vercel Settings

| Setting | Value |
|---|---|
| Root Directory | Leave empty |
| Framework Preset | Vite |
| Install Command | `pnpm install` |
| Build Command | `pnpm --filter @workspace/portfolio build` |
| Output Directory | `artifacts/portfolio/dist` |

The repository also contains:

```text
vercel.json
```

for deployment configuration.

---

## 🔐 Vercel Environment Variables

If you want the deployed contact form to use EmailJS, add these variables to your Vercel project:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Add them under:

**Vercel → Project → Settings → Environment Variables**

Then redeploy the project.

---

# 🏗️ Production Build

To create the production build locally:

```bash
pnpm build
```

The generated files will be available in:

```text
artifacts/portfolio/dist
```

You can use this directory as the deployment output.

---

# 🎯 Project Goals

The main goals of this project are to:

- Build a professional developer portfolio
- Showcase technical skills and projects
- Provide an easy way for recruiters and visitors to contact me
- Demonstrate frontend development skills
- Practice modern React and TypeScript development
- Maintain a fast and responsive user experience

---

# 👨‍💻 About Me

**Ajmal Mohamed Yaseen**

I am a developer and technology enthusiast interested in software development, data analytics, artificial intelligence, and modern web technologies.

I use this portfolio to showcase my projects, technical skills, learning journey, and professional work.

---

# 🔗 Links

🌐 **Portfolio:**  
[Add your portfolio URL here]

💻 **GitHub:**  
[Add your GitHub URL here]

🔗 **LinkedIn:**  
[Add your LinkedIn URL here]

📧 **Email:**  
[Add your email address here]

---

# 🖼️ Screenshots

Add screenshots of your portfolio here to make the repository easier to explore.

Example:

```markdown
## Screenshots

### Home

![Portfolio Home](./screenshots/home.png)

### Projects

![Projects Section](./screenshots/projects.png)

### Contact

![Contact Section](./screenshots/contact.png)
```

Recommended screenshot structure:

```text
screenshots/
├── home.png
├── about.png
├── projects.png
└── contact.png
```

---

# 🧪 Development

Before pushing changes to GitHub, run:

```bash
pnpm typecheck
pnpm build
```

This helps verify that the project compiles successfully and that there are no TypeScript errors.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute the code in accordance with the license terms.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ by Ajmal Mohamed Yaseen**
