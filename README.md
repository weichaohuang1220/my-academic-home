🎓 Academic Personal Homepage

This is a modern, responsive, and easily maintainable academic personal homepage template. Built with Vite + Native HTML/CSS/JS, it allows for easy modifications without needing complex framework knowledge.

🚀 Quick Start

Ensure you have Node.js installed on your computer.

Install Dependencies

npm install


Start Local Preview

npm run dev


The terminal will display a link (usually http://localhost:5173). Click it to preview in your browser.

📝 How to Modify Content (Most Important)

You do not need to modify complex HTML code. All personal information, project experiences, and style configurations are centralized in one file:

👉 Edit File: assets/scripts/config.js

In this file, you can modify:

Profile: Name, title, CV link.

Social: Email, GitHub, LinkedIn, and other social icon links.

About / Hero: Personal intro, typewriter animation text.

Projects / Publications: Add, delete, or modify your publications and project list.

Theme: Custom fonts, font sizes for specific sections, etc.

Example: Adding a New Project

Simply add a new object to the projects array in config.js:

{
  title: "New Project Name",
  desc: "Brief description of the project...",
  icon: "fas fa-code", // FontAwesome icon class name
  link: "[https://github.com/yourname/project](https://github.com/yourname/project)",
  linkText: "View Code",
  tags: "Python • AI",
  featured: true // Set to true to display on the homepage
},


🎨 How to Modify Style & Fonts

Also located at the bottom of assets/scripts/config.js, find the theme section:

Change Fonts: Modify googleFontsLink to import your preferred Google Fonts, then apply them in moduleOverrides.

Adjust Font Size: Set fontSize individually for modules like home, about, etc., inside moduleOverrides.

📦 Build & Deploy

When you are ready to publish your website (e.g., to GitHub Pages):

Build Project

npm run build


The generated static files will be located in the dist folder.

Upload all content from the dist folder to your server or GitHub Pages repository.

📂 File Structure

/
├── index.html              // Homepage skeleton (Usually no need to edit)
├── projects.html           // Projects page skeleton (Usually no need to edit)
├── assets/
│   ├── scripts/
│   │   ├── config.js       // [CORE] Personal data configuration file
│   │   └── main.js         // Rendering logic
│   └── styles/
│       └── main.css        // Global styles
├── package.json            // Project configuration
└── vite.config.js          // Build configuration
