# 🍏 macOS Portfolio
### A fully interactive macOS-style developer portfolio built with React, TailwindCSS, and GSAP.

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0-blue?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-Animation-88CE02?logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-Bundler-9467fe?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Zustand-State%20Manager-orange" />
</p>

## ✨ Features

### 🖥 macOS Desktop Experience
- macOS-style windows (Finder, Terminal, Resume, Photos, Contact, etc.)
- Dock, navbar, wallpaper, and draggable desktop icons
- Window maximize/minimize animations with GSAP

### 🎨 Smooth UI & Animations
- GSAP + Draggable for realistic macOS window movement
- Easing, scaling, transitions
- Desktop-like app-opening interactions

### 📱 Fully Responsive
- Mobile-ready design
- Safe-area support (dvh, dvw)
- Optimized for iPhone/Android

### 🧩 Modular Architecture
- Components split into macOS “apps”
- Zustand store for window & location management
- Very easy to extend and customize

## 🧰 Tech Stack

| Area | Technologies |
|------|--------------|
| Framework | React (Vite) |
| Styling | TailwindCSS |
| Animations | GSAP + Draggable |
| State | Zustand |
| Icons | Lucide-React |
| Language | JavaScript |

## 📂 Project Structure

```
src/
 ├── components/
 ├── windows/
 ├── store/
 ├── constants/
 ├── App.jsx
 └── index.css
```

## ⚙️ Installation

```bash
git clone https://github.com/<your-username>/<repo>.git
cd <repo>
npm install
npm run dev
```

## 🏗 Build

```bash
npm run build
```

## 📜 License
MIT License

## ⭐ Support
If you like this project, consider starring the repo!
