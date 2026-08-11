# ⏱️ Stopwatch Web Application
A modern neo-brutalist stopwatch web app built with HTML, CSS, JavaScript, and Tailwind CSS. CHRONOS. provides a precise stopwatch with **millisecond accuracy**, **lap recording**, and **keyboard shortcuts**, all wrapped in a bold, retro-inspired interface. The layout is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://shreyakantha.github.io/SCT_WD_2/)

---
## 📑 Table of Contents
- [Goal](#goal)
- [Features](#features)
- [Key Concepts Used](#key-concepts-used)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [How It Works](#how-it-works)
- [Optimizations](#optimizations)
- [Roadmap](#roadmap)
- [Lessons Learned](#lessons-learned)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [Support](#support)
- [Feedback](#feedback)
- [Appendix](#appendix)

---
## 🎯 Goal
To build a functional and interactive stopwatch application that demonstrates precise **time tracking**, **lap recording**, and **keyboard-driven controls**, while strengthening front-end development skills through `HTML`, `CSS`, `JavaScript`, `Tailwind CSS`, `responsive design`, and `DOM manipulation`.

---
## ⭐ Features
- Precise stopwatch with millisecond accuracy (`00:00:00.00` format).
- **START**, **PAUSE**, **LAP**, and **RESET** controls.
- Record multiple laps with individual and cumulative durations.
- Live lap counter showing the total number of recorded laps.
- **Keyboard shortcuts** — `Space` to start/pause, `L` to record a lap, `R` to reset.
- Bold neo-brutalist design with hard shadows, thick borders, and vibrant accents.
- Animated stopwatch icon in the footer (transparent, looping WebP).
- Fully responsive layout optimized for desktop, tablet, and mobile devices.
- Dark mode ready via the `darkMode: "class"` Tailwind configuration.
- Clean, modern, and user-friendly interface.

---
## 🧠 Key Concepts Used
- `Responsive Web Design`
- `Semantic HTML5`
- `Tailwind CSS` utility classes
- `DOM Manipulation`
- `Event Listeners`
- `setInterval` / `clearInterval` timing logic
- `Date.now()` timestamp-based time calculation
- `Template Literals` for dynamic content
- `Array` methods (`.unshift()`, `.map()`, `.padStart()`)
- `CSS Transitions` and Hover Effects
- `Flexbox` and `CSS Grid`
- `Keyboard Events` (`keydown`)
- Separation of Concerns [`HTML`, `CSS`, `JavaScript`]

---
## 🛠 Tech Stack
- `HTML5`
- `CSS3`
- `JavaScript (ES6)`
- `Tailwind CSS`
- `Google Fonts` (`Space Grotesk`, `Inter`)
- `Material Symbols`
- `WebP` (animated transparent footer icon)

---
## ⚙️ Requirements
- A modern web browser (e.g., Chrome, Edge, Firefox, or Safari)
- A code editor such as `Visual Studio Code` (recommended)
- Internet connection (to load `Tailwind CSS`, `Google Fonts`, and `Material Symbols` via CDN)

---
## 📂 Project Structure
```text
SCT_WD_2/
│
├── index.html
├── style.css
├── script.js
├── stopwatch.webp
├── README.md
└── LICENSE
```
---
## 📥 Installation 
Clone the repository using Git :    
```bash    
git clone https://github.com/shreyakantha/SCT_WD_2    
cd SCT_WD_2   
```  
*Open the project in your preferred code editor.*

*(recommended: `Visual Studio Code`).*

---
## 🖥 Run Locally
Choose either of the following methods :

**Option 1 :** Open the `index.html` file directly in your web browser.

**Option 2 (Recommended) :** Use the **Live Server** extension in `Visual Studio Code`.

- Open the project folder in `Visual Studio Code`.
- Install the **Live Server** extension (if not already installed).
- Right-click on `index.html`.
- Select **Open with Live Server**.

---
## 🚀 Deployment
This project is deployed and hosted for free using **GitHub Pages**.

**Live Site :** [CHRONOS. - Stopwatch Web Application](https://shreyakantha.github.io/SCT_WD_2/)

To deploy your own copy :

1. Push this repository to GitHub
2. Go to your repository's **Settings → Pages**
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*
4. Choose the `main` branch and `/ (root)` as the folder, then click **Save**
5. Your site will be live at `https://<username>.github.io/<repo-name>/` within a few minutes

---
## ⚙️ How It Works
- The stopwatch tracks elapsed time using `Date.now()` timestamps, avoiding drift that would occur from simply counting interval ticks.
- Pressing **START** captures the current timestamp and runs a `setInterval` that updates the display every `10ms` for millisecond precision.
- **PAUSE** clears the interval and stores the elapsed time so the stopwatch can resume from where it left off.
- **LAP** records the time since the last lap, storing both the lap `duration` and the running `total`, then renders the list with the newest lap on top.
- **RESET** stops the timer, zeroes the elapsed time, and clears all recorded laps.
- Each lap row is injected into the table via `innerHTML` using template literals, with a live lap counter badge updated on every change.
- Keyboard shortcuts (`Space`, `L`, `R`) map directly to the on-screen buttons for quick, keyboard-only control.
- The layout automatically adapts to different screen sizes, ensuring a consistent experience across desktop, tablet, and mobile devices.

---
## ⚡ Optimizations
- Used timestamp-based time calculation (`Date.now() - startTime`) instead of incrementing counters, preventing timer drift over long runs.
- Added `tabular-nums` on the display so the digits don't jiggle as time changes.
- Reduced the number of individual button state updates by toggling `disabled` attributes only when needed.
- Designed a fully responsive layout with fluid typography (`vw`-based timer sizing) for mobile screens.
- Organized the project into separate `HTML`, `CSS`, and `JavaScript` files for better maintainability.
- Leveraged Tailwind CSS utility classes to write cleaner and more efficient styles.
- Used a compact, transparent animated `WebP` footer icon instead of a large video file for performance.

---
## 🧭 Roadmap
Future enhancements planned for this project :
- **Sound Effects** - Add start/pause/lap/reset sound cues.
- **Theme Persistence** - Save the selected dark/light mode in `localStorage`.
- **Export Laps** - Allow exporting recorded laps as CSV or text.
- **Countdown Mode** - Add a countdown timer alongside the stopwatch.
- **Self-Hosted Assets** - Replace CDN assets with locally hosted files for reliability.
- **PWA Support** - Add a manifest and service worker so the app works offline.

---
## 📚 Lessons Learned
Through this project, I learned how to :
- Build a precise timing engine using `Date.now()` and `setInterval`.
- Manage application state (running, paused, reset) with clean, readable JavaScript.
- Dynamically render table rows with template literals and array methods.
- Handle keyboard events alongside button events for better accessibility.
- Create a cohesive neo-brutalist visual style using Tailwind CSS.
- Write cleaner, more maintainable, and reusable code.
- Make the interface fully responsive across mobile, tablet, and desktop.

---
## 📄 Documentation
The project is organized into separate files to maintain a clean, readable, and easy-to-maintain codebase. Each file has a specific responsibility :
- `index.html` defines the structure and content of the stopwatch page, including the timer display, control buttons, lap table, and footer.
- `style.css` manages the styling, including the neo-brutalist shadows, timer typography, custom scrollbar, and icon styles.
- `script.js` handles the interactive functionality — start/pause/lap/reset logic, lap rendering, and keyboard shortcuts.
- `stopwatch.webp` is the transparent, looping animated stopwatch icon shown in the footer.
- `README.md` provides an overview, setup instructions, and project documentation.
- `LICENSE` contains the licensing terms for the project.

The code follows a clear structure with meaningful variable names, organized functions, and modular JavaScript to improve readability and simplify future enhancements.

---
## 🤝 Contributing

Contributions are always welcome! If you have a suggestion that would make this project better, please follow these steps :

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add some amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---
## 🧩 FAQ

**Q1. Why does the page need an internet connection?**

Answer. The project loads `Tailwind CSS`, `Google Fonts`, and `Material Symbols` from CDNs, so an internet connection is required for the full styling and icons to load.

**Q2. How do I change the theme colors?**

Answer. The color palette is defined in the `tailwind.config` block inside `index.html`. Update the color values there (e.g., `primary`, `secondary`, `tertiary`) and the entire page will update automatically.

**Q3. How does the stopwatch stay accurate?**

Answer. Instead of counting ticks, it stores `startTime = Date.now() - elapsedTime` and computes the elapsed time on every tick. This means the display always reflects real time and never drifts.

**Q4. How do I use the keyboard shortcuts?**

Answer. Press `Space` to start or pause the stopwatch, `L` to record a lap, and `R` to reset. Buttons will toggle as appropriate based on the current state.

---
## 🙌 Acknowledgements
- **SkillCraft Technology** for providing the internship opportunity and project task.
- **Tailwind CSS** for the utility-first CSS framework used in the project.
- **Google Fonts** for the `Space Grotesk` and `Inter` typefaces.
- **Google Material Symbols** for the icon library.
- **MDN Web Docs** for HTML, CSS, and JavaScript references.
- Online web development resources and tutorials for additional learning and inspiration.

---
## 📜 License
This project is licensed under the `MIT License`. Feel free to use, modify, and distribute this project in accordance with the terms of the license.

For more details, see the [LICENSE](LICENSE) file.

---
## ⭐ Support

If you find this project helpful or interesting, consider giving it a ⭐ on GitHub.

It helps improve visibility, supports open- source learning, and motivates further improvements.

---
## 💬 Feedback
If you have any feedback or suggestions, feel free to reach out at 📧 shreyakantha348@gmail.com 

---
## 🧩 Appendix
This project was completed as **Task 2: Stopwatch Web Application** under the **SkillCraft Technology Web Development Internship**. The task focused on building a fully functional stopwatch application with lap recording, precise time tracking, and a responsive, interactive interface using `HTML`, `CSS`, `JavaScript`, and `Tailwind CSS`, while strengthening front-end development and problem-solving skills.

---
