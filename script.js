// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.matrixBg = document.querySelector('.matrix-bg');
        this.matrixBg.appendChild(this.canvas);
        
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        
        this.init();
        this.animate();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        
        for(let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.floor(Math.random() * -100);
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for(let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Matrix Rain
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    new MatrixRain();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    const matrixRain = new MatrixRain();
}); 