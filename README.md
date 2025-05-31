# Matrix-Themed Portfolio Website

A modern, responsive portfolio website featuring a Matrix-inspired design with animated rain effect and glitch animations.

## Features

- Matrix-style rain animation background
- Glitch text effects
- Responsive design
- Smooth scrolling navigation
- Contact form
- Social media links
- Project showcase section

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- Canvas API for Matrix rain effect

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Customize the content in `index.html` with your personal information
4. Modify the styles in `styles.css` to match your preferences
5. Update the Matrix rain effect parameters in `script.js` if desired

## Customization

### Changing Colors
The main colors can be modified in the CSS variables at the top of `styles.css`:

```css
:root {
    --matrix-green: #00ff00;
    --matrix-dark: #000000;
    --matrix-bg: rgba(0, 0, 0, 0.9);
    --matrix-glow: 0 0 10px var(--matrix-green);
}
```

### Matrix Rain Effect
You can customize the Matrix rain effect by modifying the parameters in `script.js`:

- `fontSize`: Change the size of the falling characters
- `characters`: Modify the characters used in the rain effect

## Browser Support

The website is compatible with all modern browsers that support:
- CSS Grid and Flexbox
- CSS Variables
- ES6+ JavaScript
- Canvas API

## License

MIT License - feel free to use this template for your personal portfolio!

## Contributing

Feel free to submit issues and enhancement requests! 