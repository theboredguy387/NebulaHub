// Main Nebula Script

document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentPage === 'index.html' || currentPage === '') {
            if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        } else if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Update current year
    const yearElements = document.querySelectorAll('#currentYear, .copyright');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el.textContent.includes('2024')) {
            el.textContent = el.textContent.replace('2024', currentYear);
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Tab cloaking (available on all pages)
function showCloak() {
    const panel = document.getElementById('cloakPanel');
    if (panel) panel.style.display = 'block';
}

function hideCloak() {
    const panel = document.getElementById('cloakPanel');
    if (panel) panel.style.display = 'none';
}

function cloakTab(title, icon) {
    document.title = title;
    
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
    document.head.appendChild(link);
    
    hideCloak();
}

function resetCloak() {
    // Reset to Nebula
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'games.html') {
        document.title = '🎮 100 Games - Nebula';
    } else if (currentPage === 'proxy.html') {
        document.title = '🔒 Secure Proxy - Nebula';
    } else {
        document.title = '🌌 Nebula - Unblocked Games';
    }
    
    const link = document.querySelector("link[rel*='icon']");
    if (link) {
        link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌌</text></svg>`;
    }
    
    hideCloak();
}

// Make functions available globally
window.showCloak = showCloak;
window.hideCloak = hideCloak;
window.cloakTab = cloakTab;
window.resetCloak = resetCloak;
