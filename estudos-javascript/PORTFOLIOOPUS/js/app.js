/**
 * ============================================
 * MAIN APPLICATION
 * ============================================
 * 
 * Core JavaScript for the portfolio.
 * Handles navigation, scroll behavior, and interactive elements.
 * 
 * Architecture:
 * - Module pattern for encapsulation
 * - Event delegation where possible
 * - Throttled scroll handlers for performance
 */

'use strict';

// ==================== UTILITIES ====================

const Utils = {
    /**
     * Throttle function execution
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in ms
     * @returns {Function} Throttled function
     */
    throttle(func, limit = 100) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Debounce function execution
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} Debounced function
     */
    debounce(func, wait = 100) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
};

// ==================== HEADER MODULE ====================

const Header = (() => {
    let header = null;
    let lastScrollY = 0;
    let ticking = false;

    /**
     * Update header state based on scroll position
     */
    function updateHeader() {
        const scrollY = window.scrollY;
        
        // Add/remove scrolled class
        if (scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        
        // Hide/show header on scroll direction (optional - disabled for simplicity)
        // if (scrollY > lastScrollY && scrollY > 100) {
        //     header.classList.add('header--hidden');
        // } else {
        //     header.classList.remove('header--hidden');
        // }
        
        lastScrollY = scrollY;
        ticking = false;
    }

    /**
     * Request animation frame for scroll handler
     */
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    /**
     * Initialize header functionality
     */
    function init() {
        header = document.getElementById('header');
        if (!header) return;

        window.addEventListener('scroll', onScroll, { passive: true });
        updateHeader();  // Initial state
    }

    return { init };
})();

// ==================== MOBILE NAVIGATION MODULE ====================

const MobileNav = (() => {
    let toggle = null;
    let nav = null;
    let isOpen = false;

    /**
     * Toggle mobile navigation
     */
    function toggleNav() {
        isOpen = !isOpen;
        toggle.classList.toggle('active', isOpen);
        nav.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    /**
     * Close mobile navigation
     */
    function closeNav() {
        if (!isOpen) return;
        isOpen = false;
        toggle.classList.remove('active');
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
    }

    /**
     * Initialize mobile navigation
     */
    function init() {
        toggle = document.getElementById('navToggle');
        nav = document.getElementById('nav');
        
        if (!toggle || !nav) return;

        // Toggle button click
        toggle.addEventListener('click', toggleNav);

        // Close on nav link click
        nav.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', closeNav);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeNav();
        });

        // Close on resize to desktop
        window.addEventListener('resize', Utils.debounce(() => {
            if (window.innerWidth >= 768) closeNav();
        }, 100));
    }

    return { init };
})();

// ==================== SMOOTH SCROLL MODULE ====================

const SmoothScroll = (() => {
    /**
     * Scroll to target element
     * @param {string} targetId - ID of target element (without #)
     */
    function scrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const headerHeight = document.getElementById('header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    /**
     * Initialize smooth scroll for anchor links
     */
    function init() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;

            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetId = href.slice(1);
            scrollTo(targetId);
        });
    }

    return { init };
})();

// ==================== BACK TO TOP MODULE ====================

const BackToTop = (() => {
    let button = null;

    /**
     * Update button visibility based on scroll position
     */
    function updateVisibility() {
        if (window.scrollY > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }

    /**
     * Scroll to top of page
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    /**
     * Initialize back to top button
     */
    function init() {
        button = document.getElementById('backToTop');
        if (!button) return;

        window.addEventListener('scroll', Utils.throttle(updateVisibility, 100), { passive: true });
        button.addEventListener('click', scrollToTop);
    }

    return { init };
})();

// ==================== ACTIVE NAV LINK MODULE ====================

const ActiveNavLink = (() => {
    let sections = [];
    let navLinks = [];

    /**
     * Update active nav link based on scroll position
     */
    function updateActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    /**
     * Initialize active nav link tracking
     */
    function init() {
        sections = document.querySelectorAll('section[id]');
        navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

        if (sections.length === 0 || navLinks.length === 0) return;

        window.addEventListener('scroll', Utils.throttle(updateActiveLink, 100), { passive: true });
        updateActiveLink();  // Initial state
    }

    return { init };
})();

// ==================== KEYBOARD NAVIGATION ====================

const KeyboardNav = (() => {
    /**
     * Initialize keyboard navigation enhancements
     */
    function init() {
        // Focus visible polyfill behavior
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    return { init };
})();

// ==================== APPLICATION INIT ====================

const App = (() => {
    /**
     * Initialize all modules
     */
    function init() {
        Header.init();
        MobileNav.init();
        SmoothScroll.init();
        BackToTop.init();
        ActiveNavLink.init();
        KeyboardNav.init();

        console.log('Portfolio initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { init };
})();
