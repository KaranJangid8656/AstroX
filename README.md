# 🌌 AstroX — Interactive 3D Developer Workspace & Experience Showcase

AstroX is an immersive, high-performance 3D web application designed to showcase modern frontend engineering practices, real-time WebGL graphics, and responsive UI design. Built using React 19, Vite 6, Tailwind CSS v4, and Three.js (via React Three Fiber), the application creates a futuristic dark-space interface integrating interactive 3D models, smooth camera rigging, orbiting animations, and custom timeline components.

---

## 📚 Table of Contents

- [✨ Core Features](#-core-features)
  - [🌌 Immersive 3D Space Scene](#-immersive-3d-space-scene)
  - [📊 Interactive Bento Grid (About Section)](#-interactive-bento-grid-about-section)
  - [📈 Chronological Experience Timeline](#-chronological-experience-timeline)
  - [💻 Project Showcase Grid](#-project-showcase-grid)
  - [💬 Connect Hub & Marquee Widget](#-connect-hub--marquee-widget)
- [🛠 Technical Stack & Architecture](#-technical-stack--architecture)
- [📁 Project Directory Structure](#-project-directory-structure)
- [🚀 Installation & Setup](#-installation--setup)
- [⚙️ Developer Customization Guide](#-developer-customization-guide)
- [📱 Responsive Optimization Details](#-responsive-optimization-details)
- [📄= License](#-license)

---

## ✨ Core Features

### 🌌 Immersive 3D Space Scene
- **React Three Fiber & Drei Integration**: Renders a floating, animated 3D astronaut model in real-time.
- **Interactive Camera Rigging**: Implements dynamic camera positioning that dampens smoothly based on real-time mouse/cursor coordinates, creating a realistic parallax perspective effect.
- **Floating Parallax Space Elements**: Interactive background particles and custom star systems rendered via canvas layers for high-fidelity animations without performance degradation.
- **Loading Boundaries**: A custom React fallback loader displays status animations while heavy GLTF 3D assets compile in the background.

### 📊 Interactive Bento Grid (About Section)
- **3D Globe Canvas**: Houses an interactive, high-performance canvas globe powered by `cobe`. Users can click, drag, and spin the globe, which features glowing geolocation markers.
- **Double-Concentric Orbiting Badge Cloud**: Displays technical skills utilizing a dual-ring orbiting circle component. Icons rotate along paths in opposing directions with custom speeds, scaling dynamically upon cursor hover.
- **Bento Card Architecture**: Built using a modular flex layout to group experience insights, geographical data, custom tech stacks, and active links in a uniform dashboard style.

### 📈 Chronological Experience Timeline
- **Dynamic Timeline Height**: Calculates the layout line height dynamically using a `ResizeObserver` instead of static height attributes, ensuring perfect visual scaling during layout changes or font adjustments.
- **Adaptive Branding Logos**: Custom logic manages scaling and placement offsets for specific company logos (e.g., Paytm and ScriptVerse assets scale and shift offsets dynamically to maintain visual balance).
- **Responsive Mobile Layout**: Transitions smoothly from a side-by-side sticky column layout on desktop to a stacked single-column design on mobile screens.

### 💻 Project Showcase Grid
- **Pristine Project Cards**: Cards showcase key details, descriptions, and technology badges for repositories.
- **Direct Code Integration**: Features direct outbound anchors opening target project source code links in new browser tabs.
- **Flexible Tag Cloud**: Uses wrapping flexboxes for technical tag clouds to prevent text clipping or horizontal overflow on narrow mobile screens.

### 💬 Connect Hub & Marquee Widget
- **Infinite Looping Marquee**: Showcases external connection cards (LeetCode, GitHub, LinkedIn, Discord, Instagram, Email, X) across two opposing infinite-scrolling marquee tracks.
- **Secure Email Delivery**: Integrates a client-side contact flow powered by EmailJS, sending form details securely to the developer without exposing backend API credentials.

---

## 🛠 Technical Stack & Architecture

| Technology | Description | Key Role / Capabilities |
| :--- | :--- | :--- |
| **React 19** | Modern UI Rendering Engine | Direct React 19 hooks, Concurrent Rendering, and performance-tuned rendering cycles. |
| **Vite 6** | Frontend Toolchain | Supercharges development with near-instantaneous Hot Module Replacement (HMR). |
| **React Three Fiber** | WebGL React Wrapper | Translates declarative React components into high-performance Three.js scenes. |
| **@react-three/drei** | R3F Helper Pack | Simplifies asset preloading, camera rigs, and Float components for 3D elements. |
| **Framer Motion / Motion** | Animation Library | Powers spring-based layout animations, marquee speed offsets, and fade-in states. |
| **Tailwind CSS v4** | CSS Compiler & Engine | Utilizes modern CSS custom properties and theme definitions for a consistent dark-theme system. |
| **Cobe** | Minimal WebGL Globe | Renders a lightweight, interactive 3D globe with spring-damped rotation physics. |
| **Maath** | 3D Math Helper | Uses `maath/easing` algorithms to create frame-rate-independent camera dampening. |

---

## 📁 Project Directory Structure

Below is the layout of the codebase highlighting where structural layouts, assets, and styling components reside:

```bash
AstroX/
├── public/                 # Static assets directory
│   ├── assets/             # Vector icons, image textures, and logos
│   │   ├── logos/          # Technology logos (React, Tailwind, Git, etc.)
│   │   ├── socials/        # Platform icons (LinkedIn, Instagram, GitHub, etc.)
│   │   └── images/         # Work, project, and background images
│   └── models/             # 3D models (GLTF/GLB Spaceman model)
├── src/                    # Source application code
│   ├── components/         # Reusable UI, Animation, and WebGL components
│   │   ├── Astronaut.jsx   # 3D Astronaut loader and mesh configuration
│   │   ├── Globe.jsx       # Interactive 3D Globe component (cobe)
│   │   ├── TechStack.jsx   # Orbital Skill Badges container
│   │   ├── OrbitingCircles.jsx # Double concentric ring movement logic
│   │   ├── Timeline.jsx    # Custom chronological experience layout
│   │   └── HeroText.jsx    # Responsive overlay text on the landing scene
│   ├── constants/          # Application configuration mapping (Data Layer)
│   │   └── index.js        # Global static objects (Projects, Experiences, Reviews)
│   ├── sections/           # High-level page sections
│   │   ├── Navbar.jsx      # Sticky fixed navigation bar
│   │   ├── Hero.jsx        # WebGL landing scene canvas and camera rig
│   │   ├── About.jsx       # Bento dashboard grid layout
│   │   ├── Experiences.jsx # Work history timeline container
│   │   ├── Projects.jsx    # Projects list renderer
│   │   └── Testimonial.jsx # Connect Hub and social marquee rows
│   ├── App.jsx             # Main layout orchestrator
│   ├── index.css           # Global Tailwind v4 CSS directives and utilities
│   └── main.jsx            # React mounting node and entry point
├── package.json            # npm dependencies and script setups
├── vite.config.js          # Vite bundler configurations
└── tailwind.config.js      # Custom theme configurations
```

---

## 🚀 Installation & Setup

Follow these steps to run, preview, or build the application on your local machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed.

### 2. Clone and Install
Clone this repository to your workspace and install the required dependencies:
```bash
git clone https://github.com/KaranJangid8656/AstroX.git
cd AstroX
npm install
```

### 3. Start Development Server
Start the local development server with Vite:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view the app in your browser.

### 4. Local Network Access (Mobile Testing)
To test responsiveness on mobile devices connected to your local network, run Vite with network exposure enabled:
```bash
npm run dev -- --host
```
This prints your local IP address (e.g. `http://192.168.1.XX:5173/`), which you can load on your mobile device.

### 5. Production Build
Create an optimized production bundle ready for hosting:
```bash
npm run build
```
Verify the production build locally:
```bash
npm run preview
```

---

## ⚙️ Developer Customization Guide

The application is fully data-driven. You can customize the entire layout by editing static objects inside the file configuration:

### 1. Modifying Text & Projects Data
Open [src/constants/index.js](file:///c:/Users/karan/OneDrive/Desktop/AstroPortX/AstroX/src/constants/index.js):
- **Projects**: Edit `myProjects` items to set name, description points, technology tag arrays, thumbnail image URLs, and GitHub links.
- **Experience Timeline**: Add items to `experiences` with the date, job role, company name, logo path, and list of accomplishments.
- **Social Widgets**: Update `reviews` and `mySocials` arrays to link to your respective social media accounts, coding profiles (LeetCode), or platforms.

### 2. Adjusting 3D Astronaut Scene
Open [src/sections/Hero.jsx](file:///c:/Users/karan/OneDrive/Desktop/AstroPortX/AstroX/src/sections/Hero.jsx):
- Modify the `Canvas` fallback loading components or adjust light intensities.
- Tweak the `Rig()` function to increase or decrease the camera dampening speed (`easing.damp3`) or range (`state.mouse.x / 10`).

### 3. Custom Logo Sizing in Timeline
Open [src/components/Timeline.jsx](file:///c:/Users/karan/OneDrive/Desktop/AstroPortX/AstroX/src/components/Timeline.jsx):
- If adding new company logos that require specific dimensions or scale-offsets on desktop or mobile, adjust the conditional strings matching the logo filepath names inside the `className` logic:
  ```javascript
  item.image.includes("paytm") || item.image.includes("sv-")
  ```

---

## 📱 Responsive Optimization Details

Special care has been taken to ensure AstroX remains visual, immersive, and legible on all devices:
1. **Adaptive Navigation**: Desktop margins are conditionally applied (e.g. `md:-ml-[1.6cm]`) to prevent layout components like titles from shifting off-screen on mobile devices.
2. **Horizontal Overflow Prevention**: Text nodes and skill-badge arrays use Tailwind wrapping (`flex-wrap`) and flexible column spans to auto-adjust sizes, preventing screen overflows on narrow viewports.
3. **Viewport Scale Modifiers**: 3D scene elements scale down (e.g. Astronaut model scale reduces to `0.23` on viewports less than `853px`) to prevent model clipping on small screens.

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

*Developed by [Karan Suthar](https://github.com/KaranJangid8656).*
