/**
 * =====================================================
 * PORTFOLIO PREMIUM - SCRIPT.JS
 * Modern, Professional, Interactive Developer Portfolio
 * =====================================================
 */

// ==================== TRANSLATIONS ====================
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'nav.available': 'Available for projects',
        'accessibility.skip': 'Skip to main content',
        
        // Hero
        'hero.badge': 'Backend Developer',
        'hero.greeting': "Hello, I'm",
        'hero.description': 'I build <span class="highlight">scalable systems</span>, clean APIs, and reliable backend infrastructure. Currently expanding into <span class="highlight">full-stack</span> development.',
        'hero.cta.projects': 'View Projects',
        'hero.cta.contact': 'Get In Touch',
        'hero.stack': 'Tech Stack',
        'hero.projects': 'Projects',
        'hero.years': 'Years Exp.',
        'hero.scroll': 'Scroll to explore',
        
        // About
        'about.tag': 'About Me',
        'about.title': 'Building reliable systems<br><span class="gradient-text">with clean architecture</span>',
        'about.p1': "I'm a <strong>backend-focused Python developer</strong> with a passion for building systems that scale. My journey started with automating tasks and quickly evolved into designing APIs and database architectures.",
        'about.p2': "Currently, I'm expanding my skillset into <strong>full-stack development</strong>, learning modern frontend technologies while maintaining my focus on solid backend foundations.",
        'about.stats.projects': 'Projects',
        'about.stats.technologies': 'Technologies',
        'about.stats.commits': 'Commits',
        'about.features.api.title': 'Clean APIs',
        'about.features.api.desc': 'RESTful APIs built with FastAPI and Django',
        'about.features.database.title': 'Database Design',
        'about.features.database.desc': 'PostgreSQL optimization and data modeling',
        'about.features.testing.title': 'Proper Testing',
        'about.features.testing.desc': 'Unit tests, integration tests, and CI/CD',
        'about.cta': "Let's Talk",
        
        // Experience
        'experience.tag': 'Experience',
        'experience.title': 'My Professional Journey',
        'experience.description': 'An overview of my software development path',
        'experience.item1.date': '2024 - Present',
        'experience.item1.title': 'Backend Developer',
        'experience.item1.company': 'Freelance Projects',
        'experience.item1.description': 'Building complete backend systems, from API architecture to database design. Focus on Python, FastAPI, and Django.',
        'experience.item2.date': '2023 - 2024',
        'experience.item2.title': 'Intensive Studies',
        'experience.item2.company': 'Self-taught Training',
        'experience.item2.description': 'Period dedicated to deepening knowledge in software architecture, APIs, DevOps and best development practices.',
        'experience.item3.date': '2022 - 2023',
        'experience.item3.title': 'Beginning of the Journey',
        'experience.item3.company': 'First Projects',
        'experience.item3.description': 'Building first personal projects, learning programming fundamentals, version control with Git and Python basics.',
        
        // Projects
        'projects.tag': 'Portfolio',
        'projects.title': 'Featured Projects',
        'projects.description': "Projects I've built with passion and dedication",
        'projects.featured.label': 'Featured Project',
        'projects.featured.title': 'E-commerce REST API',
        'projects.featured.description': 'Complete e-commerce backend with JWT authentication, shopping cart management, real-time order processing and admin dashboard. Built with FastAPI and PostgreSQL for high performance.',
        'projects.viewCode': 'View Code',
        'projects.viewDemo': 'View Demo',
        'projects.card1.title': 'Analytics Dashboard API',
        'projects.card1.excerpt': 'REST API for data analysis with Redis cache and Swagger documentation.',
        'projects.card1.description': 'Complete analytics system with optimized endpoints, intelligent caching and full documentation via Swagger/OpenAPI.',
        'projects.card2.title': 'Real-time Chat API',
        'projects.card2.excerpt': 'WebSocket-based messaging backend with room support and message history.',
        'projects.card2.description': 'Real-time chat backend with conversation history, push notifications and support for multiple simultaneous rooms.',
        'projects.card3.title': 'Auth Service',
        'projects.card3.excerpt': 'Authentication microservice with OAuth2 and complete audit logging.',
        'projects.card3.description': 'Enterprise authentication system with OAuth2, refresh tokens, rate limiting and audit logs.',
        'projects.card4.title': 'Data Processing API',
        'projects.card4.excerpt': 'Backend service for data processing with async tasks and reports.',
        'projects.card4.description': 'Data processing backend with async task queues, scheduled jobs and PDF report generation.',
        'projects.card5.title': 'Task Manager API',
        'projects.card5.excerpt': 'Task management backend with REST API and user collaboration.',
        'projects.card5.description': 'Project management backend with full CRUD, user permissions and notification system.',
        'projects.githubCta': 'See more on GitHub',
        
        // Skills
        'skills.tag': 'Technologies',
        'skills.title': 'Stack & Tools',
        'skills.description': 'Technologies I work with daily',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.database': 'Database',
        'skills.devops': 'DevOps & Tools',
        
        // Contact
        'contact.tag': 'Contact',
        'contact.title': "Let's build something<br><span class=\"gradient-text\">amazing together?</span>",
        'contact.description': "I'm always open to discussing new projects, creative opportunities or ways to be part of your visions. Let's talk!",
        'contact.code.from': '"You"',
        'contact.code.subject': '"Amazing Project"',
        
        // Footer
        'footer.tagline': 'Turning ideas into quality code',
        'footer.navigation': 'Navigation',
        'footer.social': 'Social',
        'footer.copyright': '© 2026 Ezequiel Lima. Made with <span class="heart">♥</span> and lots of coffee.',
        'footer.tech': 'Built with pure JavaScript'
    },
    'pt-BR': {
        // Navigation
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.projects': 'Projetos',
        'nav.skills': 'Skills',
        'nav.contact': 'Contato',
        'nav.available': 'Disponível para projetos',
        'accessibility.skip': 'Pular para conteúdo principal',
        
        // Hero
        'hero.badge': 'Desenvolvedor Backend',
        'hero.greeting': 'Olá, eu sou',
        'hero.description': 'Construo <span class="highlight">sistemas escaláveis</span>, APIs limpas e infraestrutura backend confiável. Atualmente expandindo para desenvolvimento <span class="highlight">full-stack</span>.',
        'hero.cta.projects': 'Ver Projetos',
        'hero.cta.contact': 'Fale Comigo',
        'hero.stack': 'Tech Stack',
        'hero.projects': 'Projetos',
        'hero.years': 'Anos Exp.',
        'hero.scroll': 'Role para explorar',
        
        // About
        'about.tag': 'Sobre Mim',
        'about.title': 'Construindo sistemas confiáveis<br><span class="gradient-text">com arquitetura limpa</span>',
        'about.p1': 'Sou um <strong>desenvolvedor Python focado em backend</strong> com paixão por construir sistemas que escalam. Minha jornada começou automatizando tarefas e rapidamente evoluiu para design de APIs e arquiteturas de banco de dados.',
        'about.p2': 'Atualmente, estou expandindo minhas habilidades para <strong>desenvolvimento full-stack</strong>, aprendendo tecnologias frontend modernas enquanto mantenho meu foco em fundamentos sólidos de backend.',
        'about.stats.projects': 'Projetos',
        'about.stats.technologies': 'Tecnologias',
        'about.stats.commits': 'Commits',
        'about.features.api.title': 'APIs Limpas',
        'about.features.api.desc': 'APIs RESTful construídas com FastAPI e Django',
        'about.features.database.title': 'Design de Banco',
        'about.features.database.desc': 'Otimização PostgreSQL e modelagem de dados',
        'about.features.testing.title': 'Testes Adequados',
        'about.features.testing.desc': 'Testes unitários, integração e CI/CD',
        'about.cta': 'Vamos Conversar',
        
        // Experience
        'experience.tag': 'Experiência',
        'experience.title': 'Minha Jornada Profissional',
        'experience.description': 'Uma visão geral da minha trajetória em desenvolvimento',
        'experience.item1.date': '2024 - Presente',
        'experience.item1.title': 'Desenvolvedor Backend',
        'experience.item1.company': 'Projetos Freelance',
        'experience.item1.description': 'Construindo sistemas backend completos, desde arquitetura de API até design de banco de dados. Foco em Python, FastAPI e Django.',
        'experience.item2.date': '2023 - 2024',
        'experience.item2.title': 'Estudos Intensivos',
        'experience.item2.company': 'Formação Autodidata',
        'experience.item2.description': 'Período dedicado ao aprofundamento em arquitetura de software, APIs, DevOps e melhores práticas de desenvolvimento.',
        'experience.item3.date': '2022 - 2023',
        'experience.item3.title': 'Início da Jornada',
        'experience.item3.company': 'Primeiros Projetos',
        'experience.item3.description': 'Construção dos primeiros projetos pessoais, aprendendo fundamentos de programação, versionamento com Git e fundamentos Python.',
        
        // Projects
        'projects.tag': 'Portfólio',
        'projects.title': 'Projetos em Destaque',
        'projects.description': 'Projetos que construí com paixão e dedicação',
        'projects.featured.label': 'Projeto Destaque',
        'projects.featured.title': 'API REST E-commerce',
        'projects.featured.description': 'Backend completo de e-commerce com autenticação JWT, gerenciamento de carrinho, processamento de pedidos em tempo real e painel admin. Construído com FastAPI e PostgreSQL para alta performance.',
        'projects.viewCode': 'Ver Código',
        'projects.viewDemo': 'Ver Demo',
        'projects.card1.title': 'API Dashboard Analytics',
        'projects.card1.excerpt': 'API REST para análise de dados com cache Redis e documentação Swagger.',
        'projects.card1.description': 'Sistema completo de analytics com endpoints otimizados, cache inteligente e documentação completa via Swagger/OpenAPI.',
        'projects.card2.title': 'API Chat em Tempo Real',
        'projects.card2.excerpt': 'Backend de mensagens com WebSocket, suporte a salas e histórico.',
        'projects.card2.description': 'Backend de chat em tempo real com histórico de conversas, notificações push e suporte a múltiplas salas simultâneas.',
        'projects.card3.title': 'Serviço de Auth',
        'projects.card3.excerpt': 'Microsserviço de autenticação com OAuth2 e auditoria completa.',
        'projects.card3.description': 'Sistema de autenticação enterprise com OAuth2, refresh tokens, rate limiting e logs de auditoria.',
        'projects.card4.title': 'API de Processamento',
        'projects.card4.excerpt': 'Serviço backend para processamento de dados com tarefas async.',
        'projects.card4.description': 'Backend de processamento com filas de tarefas async, jobs agendados e geração de relatórios PDF.',
        'projects.card5.title': 'API Gerenciador de Tarefas',
        'projects.card5.excerpt': 'Backend de gestão de tarefas com API REST e colaboração.',
        'projects.card5.description': 'Backend de gerenciamento de projetos com CRUD completo, permissões de usuário e sistema de notificações.',
        'projects.githubCta': 'Ver mais no GitHub',
        
        // Skills
        'skills.tag': 'Tecnologias',
        'skills.title': 'Stack & Ferramentas',
        'skills.description': 'Tecnologias que trabalho diariamente',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.database': 'Banco de Dados',
        'skills.devops': 'DevOps & Ferramentas',
        
        // Contact
        'contact.tag': 'Contato',
        'contact.title': 'Vamos construir algo<br><span class="gradient-text">incrível juntos?</span>',
        'contact.description': 'Estou sempre aberto a discutir novos projetos, oportunidades criativas ou maneiras de fazer parte das suas visões. Vamos conversar!',
        'contact.code.from': '"Você"',
        'contact.code.subject': '"Projeto Incrível"',
        
        // Footer
        'footer.tagline': 'Transformando ideias em código de qualidade',
        'footer.navigation': 'Navegação',
        'footer.social': 'Social',
        'footer.copyright': '© 2026 Ezequiel Lima. Feito com <span class="heart">♥</span> e muito café.',
        'footer.tech': 'Desenvolvido com JavaScript puro'
    }
};

// ==================== LANGUAGE SWITCHER ====================
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.button = document.getElementById('langSwitch');
        this.flagElement = document.getElementById('langFlag');
        this.codeElement = document.getElementById('langCode');
        
        if (!this.button) return;
        this.init();
    }
    
    init() {
        // Apply saved language on load
        this.applyLanguage(this.currentLang);
        this.updateButton();
        
        // Button click handler
        this.button.addEventListener('click', () => this.toggleLanguage());
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'pt-BR' : 'en';
        localStorage.setItem('preferredLanguage', this.currentLang);
        this.applyLanguage(this.currentLang);
        this.updateButton();
    }
    
    updateButton() {
        if (this.currentLang === 'en') {
            this.flagElement.textContent = '🇺🇸';
            this.codeElement.textContent = 'EN';
            this.button.setAttribute('aria-label', 'Switch to Portuguese');
            this.button.setAttribute('title', 'Switch to Portuguese');
        } else {
            this.flagElement.textContent = '🇧🇷';
            this.codeElement.textContent = 'PT';
            this.button.setAttribute('aria-label', 'Mudar para Inglês');
            this.button.setAttribute('title', 'Mudar para Inglês');
        }
    }
    
    applyLanguage(lang) {
        document.documentElement.lang = lang;
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = translations[lang][key];
            
            if (translation) {
                // Check if element has child elements that need to be preserved
                if (el.querySelector('.highlight') || el.querySelector('.gradient-text') || el.querySelector('.heart')) {
                    el.innerHTML = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
    }
}

// ==================== UTILITY FUNCTIONS ====================
const Utils = {
    // Debounce function
    debounce(func, wait = 100) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit = 100) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Lerp (Linear Interpolation)
    lerp(start, end, factor) {
        return start + (end - start) * factor;
    },

    // Check if element is in viewport
    isInViewport(element, threshold = 0.1) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
    },

    // Check if device is touch
    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
};

// ==================== PRELOADER ====================
class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, 1500);
        });
    }

    hide() {
        if (this.preloader) {
            this.preloader.classList.add('loaded');
            document.body.style.overflow = '';
            
            // Remove preloader from DOM after animation
            setTimeout(() => {
                this.preloader.remove();
            }, 500);
        }
    }
}

// ==================== CUSTOM CURSOR ====================
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.cursorDot = document.querySelector('.cursor-dot');
        this.cursorOutline = document.querySelector('.cursor-outline');
        
        if (Utils.isTouchDevice() || !this.cursor) {
            document.body.classList.add('touch-device');
            return;
        }

        this.mouseX = 0;
        this.mouseY = 0;
        this.outlineX = 0;
        this.outlineY = 0;
        this.isHovering = false;

        this.init();
    }

    init() {
        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-magnetic]');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
            });
        });

        // Click effect
        document.addEventListener('mousedown', () => {
            this.cursor.classList.add('cursor-click');
        });

        document.addEventListener('mouseup', () => {
            this.cursor.classList.remove('cursor-click');
        });

        // Start animation loop
        this.animate();
    }

    animate() {
        // Move dot immediately
        if (this.cursorDot) {
            this.cursorDot.style.left = `${this.mouseX}px`;
            this.cursorDot.style.top = `${this.mouseY}px`;
        }

        // Smooth outline follow
        this.outlineX = Utils.lerp(this.outlineX, this.mouseX, 0.15);
        this.outlineY = Utils.lerp(this.outlineY, this.mouseY, 0.15);

        if (this.cursorOutline) {
            this.cursorOutline.style.left = `${this.outlineX}px`;
            this.cursorOutline.style.top = `${this.outlineY}px`;
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ==================== MAGNETIC ELEMENTS ====================
class MagneticElements {
    constructor() {
        this.elements = document.querySelectorAll('[data-magnetic]');
        
        if (Utils.isTouchDevice() || this.elements.length === 0) return;

        this.init();
    }

    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', (e) => this.handleMouseMove(e, el));
            el.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, el));
        });
    }

    handleMouseMove(e, el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const magneticStrength = 0.3;
        
        el.style.transform = `translate(${x * magneticStrength}px, ${y * magneticStrength}px)`;
    }

    handleMouseLeave(e, el) {
        el.style.transform = 'translate(0, 0)';
    }
}

// ==================== NAVBAR CONTROLLER ====================
class NavbarController {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.navLinks = document.getElementById('navLinks');
        this.lastScrollY = 0;
        this.scrollThreshold = 100;

        if (!this.navbar) return;
        this.init();
    }

    init() {
        // Scroll handler
        window.addEventListener('scroll', Utils.throttle(() => this.handleScroll(), 50));

        // Mobile menu toggle
        if (this.mobileMenuBtn && this.navLinks) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());

            // Close menu when clicking a link
            this.navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });
        }

        // Initial state
        this.handleScroll();
    }

    handleScroll() {
        const currentScrollY = window.scrollY;

        // Add/remove scrolled class
        if (currentScrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Hide/show navbar based on scroll direction
        if (currentScrollY > this.scrollThreshold) {
            if (currentScrollY > this.lastScrollY) {
                this.navbar.classList.add('hidden');
            } else {
                this.navbar.classList.remove('hidden');
            }
        }

        this.lastScrollY = currentScrollY;
    }

    toggleMobileMenu() {
        this.mobileMenuBtn.classList.toggle('active');
        this.navLinks.classList.toggle('active');
        
        const isOpen = this.navLinks.classList.contains('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.mobileMenuBtn.classList.remove('active');
        this.navLinks.classList.remove('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
    }
}

// ==================== SCROLL REVEAL ====================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('[data-reveal]');
        
        if (this.elements.length === 0) return;
        this.init();
    }

    init() {
        // Create intersection observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    this.observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements
        this.elements.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ==================== ANIMATED COUNTERS ====================
class AnimatedCounters {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        
        if (this.counters.length === 0) return;
        this.init();
    }

    init() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'), 10);
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (easeOutQuart)
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeProgress);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        };

        requestAnimationFrame(update);
    }
}

// ==================== SKILL LEVEL ANIMATION ====================
class SkillLevelAnimation {
    constructor() {
        this.skillItems = document.querySelectorAll('.skill-item');
        
        if (this.skillItems.length === 0) return;
        this.init();
    }

    init() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkill(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.skillItems.forEach(item => {
            const levelEl = item.querySelector('.skill-level');
            if (levelEl) {
                const level = levelEl.getAttribute('data-level');
                levelEl.style.setProperty('--level', level);
            }
            observer.observe(item);
        });
    }

    animateSkill(element) {
        element.classList.add('animate');
    }
}

// ==================== 3D TILT EFFECT ====================
class TiltEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-tilt]');
        
        if (Utils.isTouchDevice() || this.elements.length === 0) return;
        this.init();
    }

    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', (e) => this.handleMouseMove(e, el));
            el.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, el));
        });
    }

    handleMouseMove(e, el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -8;
        const rotateY = (x - centerX) / centerX * 8;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    handleMouseLeave(e, el) {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}

// ==================== SMOOTH SCROLL ====================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ==================== BACK TO TOP ====================
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        
        if (!this.button) return;
        this.init();
    }

    init() {
        // Show/hide button
        window.addEventListener('scroll', Utils.throttle(() => {
            if (window.scrollY > 500) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        }, 100));

        // Click handler
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ==================== PROFILE PHOTO HANDLER ====================
class ProfilePhotoHandler {
    constructor() {
        this.photos = document.querySelectorAll('#profilePhoto');
        this.init();
    }

    init() {
        this.photos.forEach(photo => {
            photo.addEventListener('error', () => {
                this.createPlaceholder(photo);
            });

            // Check if already failed to load
            if (photo.complete && photo.naturalHeight === 0) {
                this.createPlaceholder(photo);
            }
        });
    }

    createPlaceholder(photo) {
        const container = photo.parentElement;
        
        // Create placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'photo-placeholder';
        placeholder.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
        `;
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
            color: var(--accent);
        `;
        placeholder.querySelector('svg').style.cssText = `
            width: 40%;
            height: 40%;
            opacity: 0.5;
        `;

        // Replace photo
        photo.style.display = 'none';
        container.appendChild(placeholder);
    }
}

// ==================== GRADIENT BLOB ANIMATION ====================
class GradientBlobAnimation {
    constructor() {
        this.blobs = document.querySelectorAll('.gradient-blob');
        
        if (this.blobs.length === 0) return;
        this.init();
    }

    init() {
        // Add mouse parallax effect
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
        });

        const animate = () => {
            currentX = Utils.lerp(currentX, mouseX, 0.05);
            currentY = Utils.lerp(currentY, mouseY, 0.05);

            this.blobs.forEach((blob, index) => {
                const factor = (index + 1) * 0.3;
                blob.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
            });

            requestAnimationFrame(animate);
        };

        if (!Utils.isTouchDevice()) {
            animate();
        }
    }
}

// ==================== TYPING EFFECT (Optional enhancement) ====================
class TypingEffect {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.delayBetweenWords = options.delayBetweenWords || 2000;
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        
        if (!this.element) return;
        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let typeSpeed = this.typeSpeed;

        if (this.isDeleting) {
            typeSpeed = this.deleteSpeed;
        }

        if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
            typeSpeed = this.delayBetweenWords;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ==================== FORM VALIDATION (if contact form exists) ====================
class FormValidation {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        
        if (!this.form) return;
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Form is valid, you can submit it
            console.log('Form submitted successfully!');
            this.showSuccess();
        }
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const name = field.name;

        // Remove previous error
        this.clearError(field);

        // Required validation
        if (field.required && !value) {
            this.showError(field, 'Este campo é obrigatório');
            return false;
        }

        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Email inválido');
                return false;
            }
        }

        return true;
    }

    showError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    clearError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    showSuccess() {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Mensagem enviada com sucesso!';
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
            this.form.reset();
        }, 3000);
    }
}

// ==================== ACTIVE NAV LINK UPDATER ====================
class ActiveNavLink {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link:not(.btn-nav)');
        
        if (this.sections.length === 0 || this.navLinks.length === 0) return;
        this.init();
    }

    init() {
        window.addEventListener('scroll', Utils.throttle(() => this.update(), 100));
        this.update();
    }

    update() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ==================== KEYBOARD NAVIGATION ====================
class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        // Add keyboard navigation for project cards
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const cardInner = card.querySelector('.project-card-inner');
                    if (cardInner) {
                        cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' 
                            ? 'rotateY(0deg)' 
                            : 'rotateY(180deg)';
                    }
                }
            });
        });

        // ESC key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navLinks = document.getElementById('navLinks');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                
                if (navLinks?.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn?.classList.remove('active');
                    mobileMenuBtn?.setAttribute('aria-expanded', false);
                    document.body.style.overflow = '';
                }
            }
        });
    }
}

// ==================== PARALLAX EFFECT ====================
class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        
        if (Utils.isTouchDevice() || this.elements.length === 0) return;
        this.init();
    }

    init() {
        window.addEventListener('scroll', Utils.throttle(() => this.update(), 16));
    }

    update() {
        const scrollY = window.scrollY;

        this.elements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
            const offset = scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    }
}

// ==================== INITIALIZATION ====================
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initComponents());
        } else {
            this.initComponents();
        }
    }

    initComponents() {
        // Language switcher (initialize first)
        new LanguageSwitcher();
        
        // Core components
        new Preloader();
        new CustomCursor();
        new MagneticElements();
        new NavbarController();
        new SmoothScroll();
        new BackToTop();
        
        // Animation components
        new ScrollReveal();
        new AnimatedCounters();
        new SkillLevelAnimation();
        new TiltEffect();
        new GradientBlobAnimation();
        
        // Navigation
        new ActiveNavLink();
        new KeyboardNavigation();
        
        // Utilities
        new ProfilePhotoHandler();
        new ParallaxEffect();
        
        // Optional: Contact form
        new FormValidation('#contactForm');

        console.log('🚀 Portfolio initialized successfully!');
    }
}

// Start the application
new App();

// ==================== EXPORT (for module environments) ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        App,
        Utils,
        LanguageSwitcher,
        Preloader,
        CustomCursor,
        NavbarController,
        ScrollReveal,
        AnimatedCounters,
        SmoothScroll,
        BackToTop
    };
}
