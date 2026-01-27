/**
 * ============================================
 * ANIMATIONS MODULE
 * ============================================
 * 
 * Handles scroll-based reveal animations using
 * Intersection Observer API for optimal performance.
 */

const Animations = (() => {
    'use strict';

    // Configuration
    const CONFIG = {
        threshold: 0.1,         // 10% of element must be visible
        rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters
    };

    /**
     * Initialize scroll reveal animations
     * Uses Intersection Observer for better performance than scroll events
     */
    function initScrollReveal() {
        const elements = document.querySelectorAll('[data-reveal]');
        
        if (elements.length === 0) return;

        // Check for Intersection Observer support
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements immediately
            elements.forEach(el => el.classList.add('revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);  // Stop observing once revealed
                }
            });
        }, {
            threshold: CONFIG.threshold,
            rootMargin: CONFIG.rootMargin
        });

        elements.forEach(el => observer.observe(el));
    }

    /**
     * Initialize on page load
     * Reveals hero elements immediately, others on scroll
     */
    function init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initScrollReveal);
        } else {
            initScrollReveal();
        }
    }

    // Public API
    return {
        init
    };
})();

// Auto-initialize
Animations.init();
