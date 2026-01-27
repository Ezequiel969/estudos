/* =====================================================
   PORTFOLIO PRO - Premium Portfolio JavaScript
   Modern, Clean, Recruiter-Focused Interactions
   ===================================================== */

// =====================================================
// TRANSLATIONS
// =====================================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'nav.hire': 'Hire Me',
        
        // Hero
        'hero.available': 'Available for new opportunities',
        'hero.greeting': "Hi, I'm",
        'hero.role': 'Backend Developer',
        'hero.description': "I craft robust, scalable backend systems and APIs that power modern applications. Specialized in Python ecosystem with a focus on clean architecture and performance optimization.",
        'hero.years': 'Years Experience',
        'hero.projects': 'Projects Delivered',
        'hero.clients': 'Happy Clients',
        'hero.viewWork': 'View My Work',
        'hero.getInTouch': 'Get In Touch',
        'hero.scroll': 'Scroll Down',
        
        // About
        'about.tag': 'Who I Am',
        'about.title': 'About Me',
        'about.yearsExp': 'Years of Experience',
        'about.subtitle': 'Building the backbone of modern applications',
        'about.text1': "I'm a passionate Backend Developer with over 5 years of experience designing and implementing scalable server-side solutions. My expertise lies in the Python ecosystem, where I leverage frameworks like FastAPI and Django to build high-performance APIs and web applications.",
        'about.text2': "I believe in writing clean, maintainable code that not only works but is a joy to work with. My approach combines best practices in software architecture with a deep understanding of business requirements to deliver solutions that truly matter.",
        'about.highlight1': 'Clean Architecture Advocate',
        'about.highlight2': 'Performance Optimization',
        'about.highlight3': 'Test-Driven Development',
        'about.highlight4': 'Agile Methodologies',
        'about.downloadCV': 'Download CV',
        
        // Skills
        'skills.tag': 'My Expertise',
        'skills.title': 'Skills & Technologies',
        'skills.backend': 'Backend Development',
        'skills.database': 'Database & Storage',
        'skills.devops': 'DevOps & Cloud',
        'skills.tools': 'Tools & Others',
        
        // Projects
        'projects.tag': 'My Work',
        'projects.title': 'Featured Projects',
        'projects.all': 'All',
        'projects.api': 'APIs',
        'projects.web': 'Web Apps',
        'projects.automation': 'Automation',
        'projects.ecommerce': 'High-performance RESTful API handling 10k+ requests/sec with advanced caching, payment processing, and real-time inventory management.',
        'projects.analytics': 'Full-stack analytics platform with real-time data processing, custom visualization widgets, and automated report generation.',
        'projects.cloud': 'Automated cloud infrastructure provisioning with cost optimization, auto-scaling policies, and comprehensive monitoring.',
        'projects.auth': 'Secure authentication microservice with JWT, OAuth2, MFA support, role-based access control, and audit logging.',
        'projects.collab': 'Real-time collaboration tool with WebSocket communication, task management, file sharing, and team analytics.',
        'projects.pipeline': 'ETL pipeline system processing 1TB+ daily with data validation, transformation workflows, and comprehensive error handling.',
        'projects.viewAll': 'View All Projects on GitHub',
        
        // Experience
        'experience.tag': 'My Journey',
        'experience.title': 'Work Experience',
        'experience.job1.item1': 'Led development of microservices architecture serving 1M+ users',
        'experience.job1.item2': 'Reduced API response times by 60% through optimization',
        'experience.job1.item3': 'Mentored junior developers and conducted code reviews',
        'experience.job2.item1': 'Built RESTful APIs for e-commerce platforms',
        'experience.job2.item2': 'Implemented CI/CD pipelines reducing deployment time by 70%',
        'experience.job2.item3': 'Developed automated testing suites with 90%+ coverage',
        'experience.job3.item1': 'Developed backend features for SaaS products',
        'experience.job3.item2': 'Collaborated with frontend team on API design',
        'experience.job3.item3': 'Participated in agile sprints and daily standups',
        
        // Testimonials
        'testimonials.tag': 'Feedback',
        'testimonials.title': 'What People Say',
        'testimonials.text1': '"Ezequiel is an exceptional developer who consistently delivers high-quality code. His deep understanding of backend architecture and ability to solve complex problems makes him an invaluable team member."',
        'testimonials.text2': '"Working with Ezequiel was a game-changer for our project. He transformed our legacy system into a modern, scalable API that handles our growing user base with ease. Highly recommended!"',
        'testimonials.text3': '"Ezequiel\'s attention to detail and commitment to best practices elevated our entire development process. His code is clean, well-documented, and a pleasure to maintain."',
        
        // Contact
        'contact.tag': 'Get In Touch',
        'contact.title': "Let's Work Together",
        'contact.subtitle': "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.availability': 'Availability',
        'contact.remote': 'Open to Remote Work',
        'contact.followMe': 'Follow Me',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your Message',
        'contact.form.send': 'Send Message',
        
        // Footer
        'footer.tagline': 'Building robust backend solutions',
        'footer.copyright': '© 2024 Ezequiel Lima. All rights reserved.',
        'footer.madeWith': 'Made with',
        'footer.and': 'and'
    },
    
    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.contact': 'Contato',
        'nav.hire': 'Contratar',
        
        // Hero
        'hero.available': 'Disponível para novas oportunidades',
        'hero.greeting': 'Olá, eu sou',
        'hero.role': 'Desenvolvedor Backend',
        'hero.description': 'Crio sistemas backend robustos e escaláveis e APIs que impulsionam aplicações modernas. Especializado no ecossistema Python com foco em arquitetura limpa e otimização de performance.',
        'hero.years': 'Anos de Experiência',
        'hero.projects': 'Projetos Entregues',
        'hero.clients': 'Clientes Satisfeitos',
        'hero.viewWork': 'Ver Meu Trabalho',
        'hero.getInTouch': 'Entrar em Contato',
        'hero.scroll': 'Role para baixo',
        
        // About
        'about.tag': 'Quem Sou Eu',
        'about.title': 'Sobre Mim',
        'about.yearsExp': 'Anos de Experiência',
        'about.subtitle': 'Construindo a espinha dorsal de aplicações modernas',
        'about.text1': 'Sou um Desenvolvedor Backend apaixonado com mais de 5 anos de experiência projetando e implementando soluções escaláveis do lado do servidor. Minha expertise está no ecossistema Python, onde utilizo frameworks como FastAPI e Django para construir APIs e aplicações web de alta performance.',
        'about.text2': 'Acredito em escrever código limpo e manutenível que não apenas funciona, mas é um prazer trabalhar com ele. Minha abordagem combina melhores práticas em arquitetura de software com uma compreensão profunda dos requisitos de negócio para entregar soluções que realmente importam.',
        'about.highlight1': 'Defensor de Arquitetura Limpa',
        'about.highlight2': 'Otimização de Performance',
        'about.highlight3': 'Desenvolvimento Orientado a Testes',
        'about.highlight4': 'Metodologias Ágeis',
        'about.downloadCV': 'Baixar CV',
        
        // Skills
        'skills.tag': 'Minha Expertise',
        'skills.title': 'Habilidades & Tecnologias',
        'skills.backend': 'Desenvolvimento Backend',
        'skills.database': 'Banco de Dados & Storage',
        'skills.devops': 'DevOps & Cloud',
        'skills.tools': 'Ferramentas & Outros',
        
        // Projects
        'projects.tag': 'Meu Trabalho',
        'projects.title': 'Projetos em Destaque',
        'projects.all': 'Todos',
        'projects.api': 'APIs',
        'projects.web': 'Web Apps',
        'projects.automation': 'Automação',
        'projects.ecommerce': 'API RESTful de alta performance processando 10k+ requisições/seg com cache avançado, processamento de pagamentos e gestão de inventário em tempo real.',
        'projects.analytics': 'Plataforma de analytics full-stack com processamento de dados em tempo real, widgets de visualização customizados e geração automatizada de relatórios.',
        'projects.cloud': 'Provisionamento automatizado de infraestrutura cloud com otimização de custos, políticas de auto-scaling e monitoramento abrangente.',
        'projects.auth': 'Microsserviço de autenticação seguro com JWT, OAuth2, suporte MFA, controle de acesso baseado em papéis e logging de auditoria.',
        'projects.collab': 'Ferramenta de colaboração em tempo real com comunicação WebSocket, gestão de tarefas, compartilhamento de arquivos e analytics de equipe.',
        'projects.pipeline': 'Sistema de pipeline ETL processando 1TB+ diariamente com validação de dados, workflows de transformação e tratamento abrangente de erros.',
        'projects.viewAll': 'Ver Todos os Projetos no GitHub',
        
        // Experience
        'experience.tag': 'Minha Jornada',
        'experience.title': 'Experiência Profissional',
        'experience.job1.item1': 'Liderou desenvolvimento de arquitetura de microsserviços servindo 1M+ usuários',
        'experience.job1.item2': 'Reduziu tempo de resposta de APIs em 60% através de otimização',
        'experience.job1.item3': 'Mentorou desenvolvedores juniores e conduziu revisões de código',
        'experience.job2.item1': 'Construiu APIs RESTful para plataformas de e-commerce',
        'experience.job2.item2': 'Implementou pipelines CI/CD reduzindo tempo de deploy em 70%',
        'experience.job2.item3': 'Desenvolveu suítes de testes automatizados com 90%+ de cobertura',
        'experience.job3.item1': 'Desenvolveu funcionalidades backend para produtos SaaS',
        'experience.job3.item2': 'Colaborou com equipe frontend no design de APIs',
        'experience.job3.item3': 'Participou de sprints ágeis e daily standups',
        
        // Testimonials
        'testimonials.tag': 'Feedback',
        'testimonials.title': 'O Que Dizem',
        'testimonials.text1': '"Ezequiel é um desenvolvedor excepcional que consistentemente entrega código de alta qualidade. Sua compreensão profunda de arquitetura backend e capacidade de resolver problemas complexos o torna um membro de equipe inestimável."',
        'testimonials.text2': '"Trabalhar com Ezequiel foi transformador para nosso projeto. Ele transformou nosso sistema legado em uma API moderna e escalável que lida com nossa base de usuários crescente com facilidade. Altamente recomendado!"',
        'testimonials.text3': '"A atenção aos detalhes e compromisso com as melhores práticas do Ezequiel elevou todo o nosso processo de desenvolvimento. Seu código é limpo, bem documentado e um prazer de manter."',
        
        // Contact
        'contact.tag': 'Entre em Contato',
        'contact.title': 'Vamos Trabalhar Juntos',
        'contact.subtitle': 'Tem um projeto em mente? Adoraria ouvir sobre ele. Vamos criar algo incrível juntos.',
        'contact.email': 'Email',
        'contact.location': 'Localização',
        'contact.availability': 'Disponibilidade',
        'contact.remote': 'Aberto a Trabalho Remoto',
        'contact.followMe': 'Siga-me',
        'contact.form.name': 'Seu Nome',
        'contact.form.email': 'Seu Email',
        'contact.form.subject': 'Assunto',
        'contact.form.message': 'Sua Mensagem',
        'contact.form.send': 'Enviar Mensagem',
        
        // Footer
        'footer.tagline': 'Construindo soluções backend robustas',
        'footer.copyright': '© 2024 Ezequiel Lima. Todos os direitos reservados.',
        'footer.madeWith': 'Feito com',
        'footer.and': 'e'
    }
};

// =====================================================
// DOM LOADED
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    Loader.init();
    Header.init();
    MobileNav.init();
    LanguageSwitcher.init();
    ThemeSwitcher.init();
    ScrollAnimations.init();
    StatsCounter.init();
    SkillBars.init();
    ProjectFilter.init();
    ContactForm.init();
    BackToTop.init();
});

// =====================================================
// LOADER MODULE
// =====================================================
const Loader = {
    init() {
        const loader = document.getElementById('loader');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 2000);
        });
    }
};

// =====================================================
// HEADER MODULE
// =====================================================
const Header = {
    init() {
        const header = document.getElementById('header');
        const navLinks = document.querySelectorAll('.nav-link');
        let lastScroll = 0;
        
        // Scroll behavior
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add/remove scrolled class
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
        
        // Active link on scroll
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
        
        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// =====================================================
// MOBILE NAVIGATION MODULE
// =====================================================
const MobileNav = {
    init() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
};

// =====================================================
// LANGUAGE SWITCHER MODULE
// =====================================================
const LanguageSwitcher = {
    currentLang: 'en',
    
    init() {
        const toggle = document.getElementById('lang-toggle');
        const current = toggle.querySelector('.lang-current');
        
        // Load saved language
        const savedLang = localStorage.getItem('portfolio-lang') || 'en';
        this.currentLang = savedLang;
        this.applyTranslations();
        current.textContent = savedLang.toUpperCase();
        
        toggle.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
            this.applyTranslations();
            current.textContent = this.currentLang.toUpperCase();
            localStorage.setItem('portfolio-lang', this.currentLang);
        });
    },
    
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        const lang = translations[this.currentLang];
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (lang[key]) {
                el.textContent = lang[key];
            }
        });
        
        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    }
};

// =====================================================
// THEME SWITCHER MODULE
// =====================================================
const ThemeSwitcher = {
    init() {
        const toggle = document.getElementById('theme-toggle');
        const icon = toggle.querySelector('i');
        
        // Load saved theme
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.applyTheme(savedTheme, icon);
        
        toggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.applyTheme(newTheme, icon);
            localStorage.setItem('portfolio-theme', newTheme);
        });
    },
    
    applyTheme(theme, icon) {
        document.documentElement.setAttribute('data-theme', theme);
        icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    }
};

// =====================================================
// SCROLL ANIMATIONS MODULE (AOS-like)
// =====================================================
const ScrollAnimations = {
    init() {
        const animatedElements = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, delay);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    }
};

// =====================================================
// STATS COUNTER MODULE
// =====================================================
const StatsCounter = {
    init() {
        const stats = document.querySelectorAll('.stat-number[data-count]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        stats.forEach(stat => observer.observe(stat));
    },
    
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
};

// =====================================================
// SKILL BARS MODULE
// =====================================================
const SkillBars = {
    init() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = `${progress}%`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
};

// =====================================================
// PROJECT FILTER MODULE
// =====================================================
const ProjectFilter = {
    init() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                const filter = btn.getAttribute('data-filter');
                
                projects.forEach(project => {
                    const category = project.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
};

// =====================================================
// TESTIMONIALS SLIDER MODULE
// =====================================================
const Testimonials = {
    init() {
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.testimonial-dots .dot');
        let currentIndex = 0;
        let autoplayInterval;
        
        const showSlide = (index) => {
            cards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };
        
        // Dot navigation
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
                resetAutoplay();
            });
        });
        
        // Autoplay
        const startAutoplay = () => {
            autoplayInterval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % cards.length;
                showSlide(nextIndex);
            }, 5000);
        };
        
        const resetAutoplay = () => {
            clearInterval(autoplayInterval);
            startAutoplay();
        };
        
        startAutoplay();
    }
};

// =====================================================
// CONTACT FORM MODULE
// =====================================================
const ContactForm = {
    init() {
        const form = document.getElementById('contact-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Simulate form submission
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    
                    form.reset();
                    
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                }, 2000);
            });
        }
    }
};

// =====================================================
// BACK TO TOP MODULE
// =====================================================
const BackToTop = {
    init() {
        const btn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};

// =====================================================
// UTILITY FUNCTIONS
// =====================================================
const Utils = {
    debounce(func, wait) {
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
    
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// =====================================================
// CURSOR EFFECT (Optional enhancement)
// =====================================================
const CursorEffect = {
    init() {
        // Only enable on desktop
        if (window.innerWidth < 1024) return;
        
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
        document.body.appendChild(cursor);
        
        const dot = cursor.querySelector('.cursor-dot');
        const outline = cursor.querySelector('.cursor-outline');
        
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        });
        
        const animate = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            
            outline.style.left = `${outlineX}px`;
            outline.style.top = `${outlineY}px`;
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        // Hover effects
        const hoverTargets = document.querySelectorAll('a, button, .project-card');
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            target.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }
};

// Uncomment to enable custom cursor
// CursorEffect.init();
