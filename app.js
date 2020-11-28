function toggleMenu() {
    const menuToggleEl = document.getElementById('mobile-menu-button');
    const menuContainerEl = document.getElementById('top-menu');
    const currentStyle = window.getComputedStyle(menuContainerEl).display;
    if (currentStyle === 'none') {
        menuContainerEl.style.display = 'inline-block';
        menuToggleEl.innerHTML = 'X';
        menuToggleEl.setAttribute('aria-expanded', 'true');
    } else {
        menuContainerEl.style.display = 'none';
        menuToggleEl.innerHTML = '☰';
        menuToggleEl.setAttribute('aria-expanded', 'false');
    }
}