# PORTFOLIOOPUS

A clean, professional developer portfolio built with vanilla HTML, CSS, and JavaScript.

## 🏗️ Architecture

```
PORTFOLIOOPUS/
├── index.html              # Main HTML document
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, typography)
│   ├── base.css            # CSS reset & foundational styles
│   └── main.css            # Component styles
├── js/
│   ├── app.js              # Main application logic
│   └── modules/
│       └── animations.js   # Scroll reveal animations
├── assets/                 # Images and static files
└── README.md
```

## 🎯 Design Philosophy

- **Content-first**: Focus on skills and projects, not flashy effects
- **Clean code**: BEM methodology, modular architecture
- **Performance**: Zero dependencies, minimal JS, optimized CSS
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Professional**: Suitable for job applications and client presentations

## ✨ Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- Scroll reveal animations (using Intersection Observer)
- Dark theme with subtle blue accent
- Code block in hero section (shows personality)
- Skills organized by category with proficiency levels
- Project cards with tech tags
- Contact section with CTA

## 🚀 Getting Started

1. Open `index.html` in a browser, or
2. Use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   ```

## 🎨 Customization

### Colors
Edit `css/variables.css` to change the color scheme:
```css
--color-accent: #3b82f6;        /* Main accent color */
--color-bg-primary: #0a0f1a;    /* Background color */
```

### Content
Edit `index.html` to update:
- Personal information
- Skills and proficiency levels
- Project descriptions
- Contact links

### Typography
The portfolio uses:
- **Inter** - Body text
- **JetBrains Mono** - Code and labels

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Feel free to use for your own portfolio.

---

Built with attention to detail and clean code practices.
