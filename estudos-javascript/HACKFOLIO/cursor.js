(function () {
    const existing = document.querySelector('.cyber-cursor');
    if (existing) {
        existing.remove();
    }

    const cursor = document.createElement('div');
    const ring = document.createElement('div');
    const core = document.createElement('div');
    const trail = document.createElement('div');

    cursor.className = 'cyber-cursor';
    ring.className = 'cursor-ring';
    core.className = 'cursor-core';
    trail.className = 'cursor-trail-dot';

    cursor.appendChild(ring);
    cursor.appendChild(core);
    document.body.appendChild(cursor);
    document.body.appendChild(trail);

    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: position.x, y: position.y };
    const trailPos = { x: position.x, y: position.y };
    let visible = false;
    let rafId = null;

    function lerp(start, end, alpha) {
        return start + (end - start) * alpha;
    }

    function update() {
        position.x = lerp(position.x, target.x, 0.2);
        position.y = lerp(position.y, target.y, 0.2);
        cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;

        trailPos.x = lerp(trailPos.x, target.x, 0.12);
        trailPos.y = lerp(trailPos.y, target.y, 0.12);
        trail.style.transform = `translate3d(${trailPos.x - 5}px, ${trailPos.y - 5}px, 0)`;

        rafId = requestAnimationFrame(update);
    }

    function show() {
        if (!visible) {
            visible = true;
            cursor.classList.add('visible');
            trail.classList.add('visible');
        }
    }

    function hide() {
        visible = false;
        cursor.classList.remove('visible');
        trail.classList.remove('visible');
    }

    function onPointerMove(event) {
        target.x = event.clientX;
        target.y = event.clientY;
        show();
    }

    function onMouseDown() {
        cursor.classList.add('active');
    }

    function onMouseUp() {
        cursor.classList.remove('active');
    }

    function setInteractive(state) {
        cursor.classList.toggle('interactive', state);
    }

    function bindInteractiveElements() {
        const selectors = ['a', 'button', 'input', 'textarea', 'select', '.cyber-btn', '.nav-link'];
        document.addEventListener('pointerover', event => {
            if (event.target.closest(selectors.join(','))) {
                setInteractive(true);
            }
        });
        document.addEventListener('pointerout', event => {
            if (event.target.closest(selectors.join(','))) {
                setInteractive(false);
            }
        });
    }

    function init() {
        document.addEventListener('pointermove', onPointerMove, { passive: true });
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', hide);
        window.addEventListener('blur', hide);
        window.addEventListener('focus', show);
        bindInteractiveElements();
        update();
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(rafId);
    });
})();
