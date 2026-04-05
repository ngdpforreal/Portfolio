# Naufalino Web Developer Portfolio ✨

A modern, high-performance portfolio website built to showcase my skills, education, and projects. Designed with cutting-edge web technologies, featuring immersive parallax scrolling, glassmorphic UI, and buttery smooth animations.

## 🚀 Key Features

- **Immersive Parallax Depth:** Multi-layered, hardware-accelerated animated backgrounds using Framer Motion. 
- **Premium Glassmorphism:** Clean, modern interface with heavily optimized frosted glass UI overlays.
- **Buttery Smooth Scrolling:** Utilizes Lenis for a 60fps inertia-based scrolling experience.
- **Fully Responsive:** Perfectly scales from wide desktop monitors down to mobile screens.
- **Dark Mode Ready:** Seamless support for operating system theme preferences.
- **SEO Optimized:** Next.js Server Components and rich Metadata configuration.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React Framework)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 💻 Running Locally

To run this project on your local machine:

1. Clone the repository
2. Install the required dependencies:
```bash
npm install
```
3. Start the local development server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deploying to Production (VPS / Linux Server)

If you are deploying this application from a Windows machine to a Linux server:

1. Transfer your code to your server **WITHOUT** the `node_modules` folder.
2. In your Linux terminal, run the following to install Linux-compatible dependencies:
```bash
npm install --omit=dev
```
3. Build the production application:
```bash
npm run build
```
4. Run the production build using a process manager like PM2:
```bash
pm2 start npm --name "portfolio" -- start
```

## 👨‍💻 About the Author

**Naufalino Tuhfah T.K.W**  
7th Grade Student at SMP Plus Cordova CIC & Aspiring Full-Stack Web Developer. 

---
*Built with ❤️ utilizing Next.js*
