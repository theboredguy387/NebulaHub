// Main script for NebulaHub

// Set active nav link
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Add current year to footer
    const yearSpan = document.querySelector('#currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Simple notification system
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
