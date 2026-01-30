/**
 * =====================================================
 * HACKFOLIO - HOLOGRAPHIC PHOTO SYSTEM EFFECTS
 * Advanced Interactive Visual Effects
 * =====================================================
 */

class HolographicPhotoSystem {
    constructor() {
        this.wrapper = document.getElementById('holoPhotoWrapper');
        this.canvas = document.getElementById('holoEnergyCanvas');
        this.glitch = document.getElementById('holoGlitch');
        this.photoSystem = document.getElementById('holoPhotoSystem');
        
        if (!this.wrapper || !this.canvas || !this.photoSystem) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.energyWaves = [];
        this.mouse = { x: 0, y: 0, isOver: false };
        this.rotation = { x: 0, y: 0, targetX: 0, targetY: 0 };
        this.time = 0;
        this.glitchTimer = null;
        this.isAnimating = true;
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.createParticles();
        this.createEnergyWaves();
        this.setupEventListeners();
        this.startGlitchEffect();
        this.animate();
    }
    
    setupCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        const rect = this.photoSystem.getBoundingClientRect();
        const padding = 120;
        this.canvas.width = rect.width + padding;
        this.canvas.height = rect.height + padding;
    }
    
    createParticles() {
        this.particles = [];
        const count = 60;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: this.getRandomColor(),
                alpha: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }
    
    createEnergyWaves() {
        this.energyWaves = [];
        const count = 5;
        
        for (let i = 0; i < count; i++) {
            this.energyWaves.push({
                radius: 50 + i * 40,
                maxRadius: 200 + i * 30,
                speed: 0.5 + Math.random() * 0.3,
                alpha: 0.3 - i * 0.05,
                hue: 180 + i * 20
            });
        }
    }
    
    getRandomColor() {
        const colors = [
            { r: 0, g: 255, b: 255 },   // Cyan
            { r: 0, g: 255, b: 65 },    // Green
            { r: 191, g: 0, b: 255 },   // Purple
            { r: 0, g: 128, b: 255 },   // Blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    setupEventListeners() {
        // Mouse tracking for 3D effect
        this.photoSystem.addEventListener('mousemove', (e) => {
            const rect = this.photoSystem.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate rotation based on mouse position
            const maxRotation = 15;
            this.rotation.targetX = ((e.clientY - centerY) / (rect.height / 2)) * maxRotation;
            this.rotation.targetY = ((e.clientX - centerX) / (rect.width / 2)) * -maxRotation;
            
            // Track mouse for particles
            this.mouse.x = e.clientX - rect.left + 60;
            this.mouse.y = e.clientY - rect.top + 60;
            this.mouse.isOver = true;
        });
        
        this.photoSystem.addEventListener('mouseleave', () => {
            this.rotation.targetX = 0;
            this.rotation.targetY = 0;
            this.mouse.isOver = false;
        });
        
        // Touch support
        this.photoSystem.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                const rect = this.photoSystem.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const maxRotation = 12;
                this.rotation.targetX = ((touch.clientY - centerY) / (rect.height / 2)) * maxRotation;
                this.rotation.targetY = ((touch.clientX - centerX) / (rect.width / 2)) * -maxRotation;
            }
        });
        
        this.photoSystem.addEventListener('touchend', () => {
            this.rotation.targetX = 0;
            this.rotation.targetY = 0;
        });
        
        // Visibility change for performance
        document.addEventListener('visibilitychange', () => {
            this.isAnimating = !document.hidden;
        });
    }
    
    startGlitchEffect() {
        // Random glitch effect
        const triggerGlitch = () => {
            if (this.glitch && Math.random() > 0.7) {
                this.glitch.classList.add('active');
                setTimeout(() => {
                    this.glitch.classList.remove('active');
                }, 300);
            }
            
            // Schedule next glitch
            const nextGlitch = 3000 + Math.random() * 8000;
            this.glitchTimer = setTimeout(triggerGlitch, nextGlitch);
        };
        
        // Start glitch cycle
        this.glitchTimer = setTimeout(triggerGlitch, 5000);
    }
    
    update3DRotation() {
        // Smooth interpolation
        const ease = 0.08;
        this.rotation.x += (this.rotation.targetX - this.rotation.x) * ease;
        this.rotation.y += (this.rotation.targetY - this.rotation.y) * ease;
        
        // Apply transform
        if (this.wrapper) {
            this.wrapper.style.transform = `
                rotateX(${this.rotation.x}deg) 
                rotateY(${this.rotation.y}deg)
                translateZ(20px)
            `;
        }
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Update pulse
            particle.pulse += 0.05;
            
            // Mouse interaction
            if (this.mouse.isOver) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    const force = (100 - dist) / 100;
                    particle.x -= dx * force * 0.02;
                    particle.y -= dy * force * 0.02;
                    particle.alpha = Math.min(0.8, particle.alpha + 0.1);
                }
            } else {
                particle.alpha = Math.max(0.2, particle.alpha - 0.01);
            }
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
        });
    }
    
    updateEnergyWaves() {
        this.energyWaves.forEach(wave => {
            wave.radius += wave.speed;
            if (wave.radius > wave.maxRadius) {
                wave.radius = 50;
            }
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            const { r, g, b } = particle.color;
            const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.3);
            
            // Glow effect
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, pulseSize * 4
            );
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.alpha})`);
            gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${particle.alpha * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, pulseSize * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Core
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.alpha * 1.5})`;
            this.ctx.fill();
        });
    }
    
    drawEnergyWaves() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        this.energyWaves.forEach(wave => {
            const progress = wave.radius / wave.maxRadius;
            const alpha = wave.alpha * (1 - progress);
            
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, wave.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `hsla(${wave.hue}, 100%, 50%, ${alpha})`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        });
    }
    
    drawConnections() {
        const maxDistance = 100;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < maxDistance) {
                    const alpha = (1 - dist / maxDistance) * 0.15;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    drawHexagonalGrid() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const size = 30;
        const time = this.time * 0.001;
        
        this.ctx.strokeStyle = `rgba(0, 255, 65, ${0.05 + Math.sin(time) * 0.02})`;
        this.ctx.lineWidth = 0.5;
        
        for (let row = -5; row <= 5; row++) {
            for (let col = -5; col <= 5; col++) {
                const x = centerX + col * size * 1.5;
                const y = centerY + row * size * Math.sqrt(3) + (col % 2) * size * Math.sqrt(3) / 2;
                
                const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
                if (dist < 180) {
                    this.drawHexagon(x, y, size * 0.4, dist);
                }
            }
        }
    }
    
    drawHexagon(x, y, size, distFromCenter) {
        const alpha = Math.max(0, 0.1 - distFromCenter / 2000);
        this.ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
        
        this.ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            const px = x + size * Math.cos(angle);
            const py = y + size * Math.sin(angle);
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw background elements
        this.drawHexagonalGrid();
        this.drawEnergyWaves();
        this.drawConnections();
        this.drawParticles();
    }
    
    animate() {
        if (!this.isAnimating) {
            requestAnimationFrame(() => this.animate());
            return;
        }
        
        this.time++;
        
        this.update3DRotation();
        this.updateParticles();
        this.updateEnergyWaves();
        this.render();
        
        requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.glitchTimer) {
            clearTimeout(this.glitchTimer);
        }
        this.isAnimating = false;
    }
}

// Typing effect for HUD version
class HUDTypingEffect {
    constructor() {
        this.element = document.getElementById('hudBuildVersion');
        if (!this.element) return;
        
        this.versions = ['v3.0.1', 'v3.0.2', 'STABLE', 'ACTIVE'];
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        setInterval(() => this.cycleVersion(), 10000);
    }
    
    async cycleVersion() {
        const text = this.element.textContent.replace('_', '');
        
        // Erase current text
        for (let i = text.length; i >= 0; i--) {
            this.element.textContent = text.substring(0, i);
            await this.sleep(50);
        }
        
        // Move to next version
        this.currentIndex = (this.currentIndex + 1) % this.versions.length;
        const newText = this.versions[this.currentIndex];
        
        // Type new text
        for (let i = 0; i <= newText.length; i++) {
            this.element.textContent = newText.substring(0, i);
            await this.sleep(80);
        }
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Data bits randomizer
class DataBitsEffect {
    constructor() {
        this.bits = document.querySelectorAll('.data-bit');
        if (this.bits.length === 0) return;
        
        this.init();
    }
    
    init() {
        setInterval(() => this.randomizeBits(), 500);
    }
    
    randomizeBits() {
        this.bits.forEach(bit => {
            if (Math.random() > 0.7) {
                const values = ['00', '01', '10', '11', '0x', 'FF'];
                bit.textContent = values[Math.floor(Math.random() * values.length)];
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Initialize holographic system
        window.holoPhotoSystem = new HolographicPhotoSystem();
        
        // Initialize HUD effects
        new HUDTypingEffect();
        new DataBitsEffect();
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.holoPhotoSystem) {
        window.holoPhotoSystem.destroy();
    }
});
