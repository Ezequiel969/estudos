/**
 * =====================================================
 * HACKFOLIO - ADVANCED BACKGROUND EFFECTS
 * Premium Visual Effects System
 * =====================================================
 */

// ================================
// CONFIGURATION
// ================================
const BG_CONFIG = {
    particles: {
        count: 120,
        maxSize: 3,
        minSize: 0.5,
        speed: 0.3,
        connectionDistance: 180,
        mouseRadius: 250,
        colors: [
            { r: 0, g: 255, b: 65, a: 0.8 },   // Neon Green
            { r: 0, g: 255, b: 255, a: 0.6 },  // Cyan
            { r: 0, g: 200, b: 255, a: 0.5 },  // Light Blue
            { r: 128, g: 0, b: 255, a: 0.4 },  // Purple
        ]
    },
    effects: {
        pulseSpeed: 0.02,
        waveAmplitude: 50,
        energyLineCount: 5
    }
};

// ================================
// ADVANCED PARTICLE SYSTEM
// ================================
class AdvancedParticleSystem {
    constructor(canvas) {
        if (!canvas) return;
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: BG_CONFIG.particles.mouseRadius };
        this.time = 0;
        this.hue = 0;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.setupEvents();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.particles = [];
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
    
    createParticles() {
        const count = BG_CONFIG.particles.count;
        
        for (let i = 0; i < count; i++) {
            const colorIndex = Math.floor(Math.random() * BG_CONFIG.particles.colors.length);
            const color = BG_CONFIG.particles.colors[colorIndex];
            
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * BG_CONFIG.particles.speed,
                vy: (Math.random() - 0.5) * BG_CONFIG.particles.speed,
                size: Math.random() * (BG_CONFIG.particles.maxSize - BG_CONFIG.particles.minSize) + BG_CONFIG.particles.minSize,
                color: color,
                baseSize: Math.random() * (BG_CONFIG.particles.maxSize - BG_CONFIG.particles.minSize) + BG_CONFIG.particles.minSize,
                pulseOffset: Math.random() * Math.PI * 2,
                glowIntensity: Math.random() * 0.5 + 0.5
            });
        }
    }
    
    updateParticles() {
        this.time += BG_CONFIG.effects.pulseSpeed;
        
        this.particles.forEach((particle, index) => {
            // Pulsing size effect
            particle.size = particle.baseSize * (1 + Math.sin(this.time + particle.pulseOffset) * 0.3);
            
            // Mouse interaction with smooth attraction/repulsion
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    
                    // Repel particles from mouse
                    particle.x -= Math.cos(angle) * force * 3;
                    particle.y -= Math.sin(angle) * force * 3;
                    
                    // Increase glow near mouse
                    particle.glowIntensity = Math.min(1.5, particle.glowIntensity + 0.05);
                } else {
                    particle.glowIntensity = Math.max(0.5, particle.glowIntensity - 0.02);
                }
            }
            
            // Apply velocity
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen edges
            if (particle.x < -10) particle.x = this.canvas.width + 10;
            if (particle.x > this.canvas.width + 10) particle.x = -10;
            if (particle.y < -10) particle.y = this.canvas.height + 10;
            if (particle.y > this.canvas.height + 10) particle.y = -10;
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            const { r, g, b, a } = particle.color;
            
            // Draw glow
            const glowSize = particle.size * 4 * particle.glowIntensity;
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, glowSize
            );
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a * 0.8})`);
            gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${a * 0.3})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Draw core
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            this.ctx.fill();
        });
    }
    
    drawConnections() {
        const connectionDistance = BG_CONFIG.particles.connectionDistance;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.4;
                    
                    // Create gradient for connection
                    const gradient = this.ctx.createLinearGradient(
                        this.particles[i].x, this.particles[i].y,
                        this.particles[j].x, this.particles[j].y
                    );
                    
                    const color1 = this.particles[i].color;
                    const color2 = this.particles[j].color;
                    
                    gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, ${opacity})`);
                    gradient.addColorStop(1, `rgba(${color2.r}, ${color2.g}, ${color2.b}, ${opacity})`);
                    
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = opacity * 2;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        // Draw connections to mouse
        if (this.mouse.x !== null && this.mouse.y !== null) {
            this.particles.forEach(particle => {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const opacity = (1 - distance / this.mouse.radius) * 0.6;
                    const { r, g, b } = particle.color;
                    
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                    this.ctx.lineWidth = opacity * 3;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

// ================================
// EFFECTS CANVAS (Energy Lines, Pulses)
// ================================
class EffectsCanvas {
    constructor(canvas) {
        if (!canvas) return;
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.energyLines = [];
        this.pulses = [];
        this.time = 0;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createEnergyLines();
        this.setupEvents();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.energyLines = [];
            this.createEnergyLines();
        });
        
        // Create pulse on click
        window.addEventListener('click', (e) => {
            this.createPulse(e.clientX, e.clientY);
        });
    }
    
    createEnergyLines() {
        const count = BG_CONFIG.effects.energyLineCount;
        
        for (let i = 0; i < count; i++) {
            this.energyLines.push({
                y: Math.random() * this.canvas.height,
                speed: Math.random() * 2 + 1,
                width: Math.random() * this.canvas.width * 0.6 + this.canvas.width * 0.2,
                x: Math.random() * this.canvas.width,
                opacity: Math.random() * 0.3 + 0.1,
                hue: Math.random() > 0.5 ? 145 : 180, // Green or Cyan
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }
    }
    
    createPulse(x, y) {
        this.pulses.push({
            x: x,
            y: y,
            radius: 0,
            maxRadius: 300,
            opacity: 0.6,
            speed: 8,
            hue: Math.random() > 0.5 ? 145 : 180
        });
    }
    
    drawEnergyLines() {
        this.energyLines.forEach(line => {
            const gradient = this.ctx.createLinearGradient(
                line.x - line.width / 2, line.y,
                line.x + line.width / 2, line.y
            );
            
            gradient.addColorStop(0, 'rgba(0, 255, 65, 0)');
            gradient.addColorStop(0.3, `hsla(${line.hue}, 100%, 50%, ${line.opacity})`);
            gradient.addColorStop(0.5, `hsla(${line.hue}, 100%, 60%, ${line.opacity * 1.5})`);
            gradient.addColorStop(0.7, `hsla(${line.hue}, 100%, 50%, ${line.opacity})`);
            gradient.addColorStop(1, 'rgba(0, 255, 65, 0)');
            
            this.ctx.beginPath();
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(line.x - line.width / 2, line.y);
            this.ctx.lineTo(line.x + line.width / 2, line.y);
            this.ctx.stroke();
            
            // Update position
            line.y += line.speed * line.direction;
            
            if (line.y > this.canvas.height + 10 || line.y < -10) {
                line.direction *= -1;
                line.opacity = Math.random() * 0.3 + 0.1;
            }
        });
    }
    
    drawPulses() {
        this.pulses = this.pulses.filter(pulse => {
            pulse.radius += pulse.speed;
            pulse.opacity *= 0.96;
            
            if (pulse.opacity < 0.01 || pulse.radius > pulse.maxRadius) {
                return false;
            }
            
            // Draw pulse ring
            this.ctx.beginPath();
            this.ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `hsla(${pulse.hue}, 100%, 50%, ${pulse.opacity})`;
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
            
            // Draw inner glow
            const gradient = this.ctx.createRadialGradient(
                pulse.x, pulse.y, pulse.radius * 0.8,
                pulse.x, pulse.y, pulse.radius
            );
            gradient.addColorStop(0, `hsla(${pulse.hue}, 100%, 50%, 0)`);
            gradient.addColorStop(1, `hsla(${pulse.hue}, 100%, 50%, ${pulse.opacity * 0.3})`);
            
            this.ctx.beginPath();
            this.ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            return true;
        });
    }
    
    drawWaveEffect() {
        this.time += 0.02;
        
        const amplitude = BG_CONFIG.effects.waveAmplitude;
        const frequency = 0.02;
        
        // Draw subtle wave at bottom
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height);
        
        for (let x = 0; x <= this.canvas.width; x += 5) {
            const y = this.canvas.height - 100 + 
                     Math.sin(x * frequency + this.time) * amplitude * 0.5 +
                     Math.sin(x * frequency * 0.5 + this.time * 1.5) * amplitude * 0.3;
            this.ctx.lineTo(x, y);
        }
        
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.closePath();
        
        const gradient = this.ctx.createLinearGradient(0, this.canvas.height - 150, 0, this.canvas.height);
        gradient.addColorStop(0, 'rgba(0, 255, 65, 0)');
        gradient.addColorStop(1, 'rgba(0, 255, 65, 0.05)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawWaveEffect();
        this.drawEnergyLines();
        this.drawPulses();
        
        requestAnimationFrame(() => this.animate());
    }
}

// ================================
// FLOATING CODE SNIPPETS
// ================================
class FloatingCode {
    constructor() {
        this.container = document.querySelector('.digital-background');
        if (!this.container) return;
        
        this.snippets = [
            'const future = await build();',
            'while(true) { learn(); }',
            'async function innovate() {}',
            'export default Excellence;',
            'git commit -m "perfection"',
            'npm run success',
            'docker compose up',
            '// TODO: Change the world',
            'return new Promise(resolve);',
            'class Developer extends Human {}',
            'if (bugs) { fix(); }',
            'console.log("Hello World");',
            'SELECT * FROM skills;',
            'chmod +x ./dreams.sh',
            'sudo make future'
        ];
        
        this.createSnippets();
    }
    
    createSnippets() {
        const snippetCount = 8;
        
        for (let i = 0; i < snippetCount; i++) {
            setTimeout(() => this.createSnippet(), i * 3000);
        }
        
        // Continue creating snippets
        setInterval(() => this.createSnippet(), 4000);
    }
    
    createSnippet() {
        const snippet = document.createElement('div');
        snippet.className = 'floating-code-snippet';
        snippet.textContent = this.snippets[Math.floor(Math.random() * this.snippets.length)];
        
        // Random position
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 50;
        
        snippet.style.cssText = `
            position: fixed;
            left: ${startX}px;
            top: ${startY}px;
            font-family: 'Fira Code', monospace;
            font-size: ${Math.random() * 6 + 10}px;
            color: rgba(0, 255, 65, ${Math.random() * 0.3 + 0.1});
            white-space: nowrap;
            pointer-events: none;
            z-index: 1;
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
            animation: floatUp ${Math.random() * 15 + 20}s linear forwards;
            transform: rotate(${Math.random() * 10 - 5}deg);
        `;
        
        this.container.appendChild(snippet);
        
        // Remove after animation
        setTimeout(() => snippet.remove(), 35000);
    }
}

// ================================
// MOUSE TRAIL EFFECT
// ================================
class MouseTrailEffect {
    constructor() {
        this.trails = [];
        this.maxTrails = 20;
        this.lastX = 0;
        this.lastY = 0;
        
        this.init();
    }
    
    init() {
        window.addEventListener('mousemove', (e) => {
            const dx = e.clientX - this.lastX;
            const dy = e.clientY - this.lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 10) {
                this.createTrail(e.clientX, e.clientY);
                this.lastX = e.clientX;
                this.lastY = e.clientY;
            }
        });
        
        this.animate();
    }
    
    createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail-particle';
        
        const hue = Math.random() > 0.5 ? 145 : 180;
        const size = Math.random() * 8 + 4;
        
        trail.style.cssText = `
            position: fixed;
            left: ${x - size / 2}px;
            top: ${y - size / 2}px;
            width: ${size}px;
            height: ${size}px;
            background: hsla(${hue}, 100%, 50%, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            box-shadow: 0 0 ${size * 2}px hsla(${hue}, 100%, 50%, 0.5);
            mix-blend-mode: screen;
        `;
        
        document.body.appendChild(trail);
        
        this.trails.push({
            element: trail,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1,
            life: 1,
            decay: 0.02 + Math.random() * 0.02
        });
        
        // Limit trails
        if (this.trails.length > this.maxTrails) {
            const old = this.trails.shift();
            old.element.remove();
        }
    }
    
    animate() {
        this.trails = this.trails.filter(trail => {
            trail.life -= trail.decay;
            trail.x += trail.vx;
            trail.y += trail.vy;
            trail.vy += 0.1; // Gravity
            
            if (trail.life <= 0) {
                trail.element.remove();
                return false;
            }
            
            trail.element.style.opacity = trail.life;
            trail.element.style.transform = `translate(${trail.vx * 5}px, ${trail.vy * 5}px) scale(${trail.life})`;
            
            return true;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ================================
// GLITCH EFFECT SYSTEM
// ================================
class GlitchEffectSystem {
    constructor() {
        this.isGlitching = false;
        this.glitchInterval = null;
        
        this.init();
    }
    
    init() {
        // Random glitch effects
        setInterval(() => {
            if (Math.random() > 0.95) {
                this.triggerGlitch();
            }
        }, 3000);
        
        // Glitch on scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            const scrollSpeed = Math.abs(currentScroll - lastScroll);
            
            if (scrollSpeed > 50 && Math.random() > 0.7) {
                this.triggerMicroGlitch();
            }
            
            lastScroll = currentScroll;
        });
    }
    
    triggerGlitch() {
        if (this.isGlitching) return;
        this.isGlitching = true;
        
        const body = document.body;
        body.classList.add('glitch-active');
        
        // Create glitch overlay
        const overlay = document.createElement('div');
        overlay.className = 'glitch-effect-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            animation: glitchFlicker 0.3s ease-out;
        `;
        
        // Create glitch lines
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            const top = Math.random() * 100;
            const height = Math.random() * 5 + 1;
            
            line.style.cssText = `
                position: absolute;
                left: 0;
                top: ${top}%;
                width: 100%;
                height: ${height}px;
                background: rgba(0, 255, 65, ${Math.random() * 0.3 + 0.1});
                transform: translateX(${Math.random() * 20 - 10}px);
                animation: glitchLine 0.1s ease-out;
            `;
            overlay.appendChild(line);
        }
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.remove();
            body.classList.remove('glitch-active');
            this.isGlitching = false;
        }, 300);
    }
    
    triggerMicroGlitch() {
        const elements = document.querySelectorAll('.section-title, .nav-logo, .hero-name');
        const element = elements[Math.floor(Math.random() * elements.length)];
        
        if (element) {
            element.classList.add('micro-glitch');
            setTimeout(() => element.classList.remove('micro-glitch'), 150);
        }
    }
}

// ================================
// CSS INJECTION FOR DYNAMIC EFFECTS
// ================================
function injectDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-120vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes glitchFlicker {
            0%, 100% { opacity: 0; }
            10%, 30%, 50%, 70%, 90% { opacity: 1; }
            20%, 40%, 60%, 80% { opacity: 0; }
        }
        
        @keyframes glitchLine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .glitch-active {
            animation: screenGlitch 0.3s ease-out;
        }
        
        @keyframes screenGlitch {
            0%, 100% { transform: translate(0); filter: none; }
            20% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
            40% { transform: translate(2px, -2px); filter: hue-rotate(-90deg); }
            60% { transform: translate(-1px, 1px); filter: saturate(2); }
            80% { transform: translate(1px, -1px); filter: brightness(1.2); }
        }
        
        .micro-glitch {
            animation: microGlitchAnim 0.15s ease-out;
        }
        
        @keyframes microGlitchAnim {
            0%, 100% { 
                transform: translateX(0); 
                text-shadow: none;
            }
            25% { 
                transform: translateX(-3px); 
                text-shadow: 3px 0 #ff0080, -3px 0 #00ffff;
            }
            50% { 
                transform: translateX(3px); 
                text-shadow: -3px 0 #ff0080, 3px 0 #00ffff;
            }
            75% { 
                transform: translateX(-1px); 
                text-shadow: 1px 0 #ff0080, -1px 0 #00ffff;
            }
        }
        
        .floating-code-snippet {
            transition: color 0.3s ease;
        }
        
        .floating-code-snippet:hover {
            color: rgba(0, 255, 65, 0.8) !important;
        }
        
        /* Improved scanlines */
        .scanlines {
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.03),
                rgba(0, 0, 0, 0.03) 1px,
                transparent 1px,
                transparent 2px
            ),
            repeating-linear-gradient(
                90deg,
                rgba(0, 255, 65, 0.01),
                rgba(0, 255, 65, 0.01) 1px,
                transparent 1px,
                transparent 3px
            );
            animation: scanlineMove 10s linear infinite;
        }
        
        @keyframes scanlineMove {
            0% { background-position: 0 0; }
            100% { background-position: 0 4px; }
        }
        
        /* Enhanced vignette pulse */
        .vignette {
            animation: vignettePulse 8s ease-in-out infinite;
        }
        
        @keyframes vignettePulse {
            0%, 100% {
                background: radial-gradient(ellipse at center, transparent 35%, rgba(0, 0, 0, 0.6) 100%);
            }
            50% {
                background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
            }
        }
        
        /* Mouse trail particle animation */
        .mouse-trail-particle {
            animation: trailFade 0.5s ease-out forwards;
        }
        
        @keyframes trailFade {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(0.3); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ================================
// INITIALIZATION
// ================================
function initBackgroundEffects() {
    // Inject dynamic styles
    injectDynamicStyles();
    
    // Initialize particle system on main canvas
    const particlesCanvas = document.getElementById('particlesCanvas');
    if (particlesCanvas) {
        new AdvancedParticleSystem(particlesCanvas);
    }
    
    // Initialize effects canvas
    const effectsCanvas = document.getElementById('effectsCanvas');
    if (effectsCanvas) {
        new EffectsCanvas(effectsCanvas);
    }
    
    // Initialize floating code snippets
    new FloatingCode();
    
    // Initialize mouse trail effect
    new MouseTrailEffect();
    
    // Initialize glitch system
    new GlitchEffectSystem();
    
    console.log('%c✨ Advanced Background Effects Initialized', 'color: #00ff41; font-size: 14px; font-weight: bold;');
}

// Wait for DOM and then initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackgroundEffects);
} else {
    initBackgroundEffects();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdvancedParticleSystem, EffectsCanvas, FloatingCode, MouseTrailEffect, GlitchEffectSystem };
}
