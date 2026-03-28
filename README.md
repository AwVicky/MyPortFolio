# Muhammad Waqar — React Native Developer Portfolio

> A personal portfolio website built with **React 17 + TypeScript + Styled Components**, deployed on **Vercel**.

📧 **Contact:** waqarshakeel96@gmail.com
💼 **LinkedIn:** [waqar-shakeel-50660611b](https://www.linkedin.com/in/waqar-shakeel-50660611b/)
🐙 **GitHub:** [AwVicky](https://github.com/AwVicky)

---

## 🚀 How to Create Your Own Repo from This Project

This project was originally forked from a friend's repository. Follow these steps to make it fully your own.

### Step 1 — Create a New GitHub Repo

1. Go to https://github.com/new
2. Name it: `My_Portfolio` (or anything you like)
3. Set it to **Public**
4. Do **NOT** initialize with README (we already have one)
5. Click **Create repository**

### Step 2 — Replace the Remote Origin

Open terminal in the project folder and run:

```bash
# Remove the old remote (friend's repo)
git remote remove origin

# Add your own new repo as origin
git remote add origin https://github.com/AwVicky/My_Portfolio.git

# Push everything to your new repo
git add .
git commit -m "Initial commit - Muhammad Waqar Portfolio"
git push -u origin Vicky_PortFolio
```

---

## 📁 Project Structure

```
My_Portfolio/
├── public/
│   ├── index.html
│   └── sitemap.xml
├── src/
│   ├── App.tsx                  # Root component — renders all sections
│   ├── index.tsx                # Entry point
│   ├── @types/
│   │   └── image.d.ts           # SVG/image type declarations
│   ├── styles/
│   │   └── global.ts            # Global CSS variables, dark/light theme
│   ├── assets/                  # All images, icons, PDFs
│   │   ├── me.png               # Profile photo
│   │   ├── waqar_shakeel.pdf    # Resume (download button)
│   │   ├── SnapQuoteGT.jpg      # Project 1 app icon
│   │   ├── aihomepro-icon.png   # Project 2 app icon
│   │   ├── blacktree-icon.png   # Project 3 app icon
│   │   ├── credione-icon.png    # Project 4 app icon
│   │   └── wantlyst-icon.png    # Project 5 app icon
│   └── components/
│       ├── Header/              # Navbar + theme toggle + Resume download
│       ├── Hero/                # Name, title, social links, profile photo
│       ├── Main/                # Particle background wrapper
│       ├── About/               # Bio + animated skills grid
│       ├── Project/             # Project cards grid
│       ├── Contact/             # Email/phone cards + contact form
│       ├── Form/                # Formspree contact form
│       └── Footer/              # Social links footer
├── package.json
├── tsconfig.json
└── vercel.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 17 + TypeScript | UI framework |
| Styled Components 5 | CSS-in-JS styling |
| react-animate-on-scroll | Scroll entrance animations |
| react-tsparticles | Animated particle background |
| @formspree/react | Contact form email delivery |
| react-router-hash-link | Smooth scroll navigation |
| react-toastify | Toast notifications |
| @vercel/analytics | Deployment analytics |
| validator | Email validation |

---

## ✏️ Personalised Values

| What | File | Value |
|---|---|---|
| Name | `Hero/Hero.tsx` | Muhammad Waqar |
| Title | `Hero/Hero.tsx` | React Native Developer |
| GitHub | `Hero/Hero.tsx`, `Footer/Footer.tsx` | github.com/AwVicky |
| LinkedIn | `Hero/Hero.tsx`, `Footer/Footer.tsx` | waqar-shakeel-50660611b |
| Profile photo | `src/assets/me.png` | me.png |
| Resume | `src/assets/waqar_shakeel.pdf` | waqar_shakeel.pdf |
| Email | `Contact/Contact.tsx` | waqarshakeel96@gmail.com |
| Phone | `Contact/Contact.tsx` | +92 316 4845916 |
| Formspree ID | `Form/Form.tsx` | xeepekvg |
| Skills | `About/About.tsx` | 15 skills |
| Projects | `Project/Project.tsx` | 5 projects |

---

## 🖼️ Sections Overview

### Hero
- Circular profile photo with green glow
- Name, title, GitHub/LinkedIn buttons, WhatsApp, Resume download

### About
- Bio: 2+ years React Native experience
- 15 animated skills (float + hover zoom):
  React Native, React JS, JavaScript, TypeScript, Redux, Firebase,
  Android, iOS, Node.js, Express, MongoDB, Stripe, Git, Supabase, RevenueCat

### Projects

| # | Project | Status | Stores |
|---|---|---|---|
| 1 | SnapQuoteGT | ✅ Live | Android + iOS |
| 2 | AI Home Pro | ✅ Live | Android + iOS |
| 3 | BlackTree | ✅ Live | — |
| 4 | CrediOne | ⚡ Ongoing | — |
| 5 | Wantlyst | ⚡ Ongoing | — |

### Contact
- Email card + Phone card (dark/light theme aware)
- Formspree form (`xeepekvg`) → delivers to waqarshakeel96@gmail.com

### Dark / Light Theme
- Toggle in header, all sections adapt including cards, text, toggle button

---

## 📦 Installation & Running Locally

```bash
# Always use --legacy-peer-deps
npm install --legacy-peer-deps

# Start dev server at http://localhost:3000
npm start

# Build for production
npm run build
```

---

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com → Import project → select your repo
3. Framework: **Create React App** (auto-detected)
4. Click **Deploy**

After deploying, go to Formspree → your form → **Settings → Allowed Domains** → add your Vercel domain (e.g. `my-portfolio.vercel.app`)

---

## ⚠️ Important Notes

- Always use `npm install --legacy-peer-deps` — plain `npm install` fails due to peer dep conflict between `@vercel/analytics` and React 17
- Formspree submissions from `localhost` are marked as spam — this is expected. Live domain submissions work correctly.
- The `overrides` block in `package.json` is required to fix TypeScript `TS2786` errors from nested `@types/react@19` packages.
