// Real Proxy Implementation for NebulaHub

let proxyHistory = [];
let currentHistoryIndex = -1;
let currentUrl = '';

// Initialize proxy
function initializeProxy() {
    // Load default URL
    loadUrl();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Update navigation buttons
    updateNavButtons();
    
    // Show welcome notification
    showProxyNotification('Welcome to NebulaHub Proxy! Start browsing securely.', 'info');
}

// Load URL in proxy
function loadUrl() {
    const urlInput = document.getElementById('urlInput');
    const proxyFrame = document.getElementById('proxyFrame');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!urlInput || !proxyFrame) return;
    
    let url = urlInput.value.trim();
    
    // Validate URL
    if (!url) {
        showProxyNotification('Please enter a URL', 'error');
        return;
    }
    
    // Add https:// if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
        urlInput.value = url;
    }
    
    // Validate URL format
    try {
        new URL(url);
    } catch (e) {
        showProxyNotification('Invalid URL format', 'error');
        return;
    }
    
    // Save to history
    if (currentUrl !== url) {
        proxyHistory.push(url);
        currentHistoryIndex = proxyHistory.length - 1;
        currentUrl = url;
    }
    
    // Update navigation buttons
    updateNavButtons();
    
    // Show loading
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }
    
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
    
    // Use a CORS proxy service for actual proxying
    // Note: For production, you would need your own proxy server
    const proxyUrl = getProxyUrl(url);
    
    // Set iframe source
    proxyFrame.src = proxyUrl;
    
    // Update URL in input (in case it was corrected)
    urlInput.value = url;
    
    // Show notification
    showProxyNotification(`Loading ${new URL(url).hostname}...`, 'info');
}

// Get proxy URL using a CORS proxy service
function getProxyUrl(originalUrl) {
    // Using CORS Anywhere as a demo proxy
    // Note: This requires a backend server for production use
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    
    // For security, we'll only use the proxy for certain sites
    // In production, you would implement your own proxy server
    return corsProxy + originalUrl;
    
    // Alternative: Use a different proxy service
    // return `https://api.allorigins.win/raw?url=${encodeURIComponent(originalUrl)}`;
}

// Quick link function
function quickLink(url) {
    const urlInput = document.getElementById('urlInput');
    if (urlInput) {
        urlInput.value = url;
        loadUrl();
    }
}

// Navigation functions
function goBack() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        const url = proxyHistory[currentHistoryIndex];
        currentUrl = url;
        
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = url;
        }
        
        loadUrl();
    }
    
    updateNavButtons();
}

function goForward() {
    if (currentHistoryIndex < proxyHistory.length - 1) {
        currentHistoryIndex++;
        const url = proxyHistory[currentHistoryIndex];
        currentUrl = url;
        
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = url;
        }
        
        loadUrl();
    }
    
    updateNavButtons();
}

function refreshPage() {
    const proxyFrame = document.getElementById('proxyFrame');
    if (proxyFrame && proxyFrame.contentWindow) {
        try {
            proxyFrame.contentWindow.location.reload();
            showProxyNotification('Page refreshed', 'success');
        } catch (e) {
            loadUrl(); // Fallback to reloading the URL
        }
    }
}

function clearProxy() {
    const urlInput = document.getElementById('urlInput');
    const proxyFrame = document.getElementById('proxyFrame');
    
    if (urlInput) {
        urlInput.value = '';
    }
    
    if (proxyFrame) {
        proxyFrame.src = '';
    }
    
    const loadingOverlay = document.getElementById('loadingOverlay');
    const errorMessage = document.getElementById('errorMessage');
    
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
    
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
    
    showProxyNotification('Proxy cleared', 'info');
}

// Update navigation buttons state
function updateNavButtons() {
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    
    if (backBtn) {
        backBtn.disabled = currentHistoryIndex <= 0;
    }
    
    if (forwardBtn) {
        forwardBtn.disabled = currentHistoryIndex >= proxyHistory.length - 1;
    }
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl + L or Cmd + L to focus URL input
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            const urlInput = document.getElementById('urlInput');
            if (urlInput) {
                urlInput.focus();
                urlInput.select();
            }
        }
        
        // F5 or Ctrl + R to refresh
        if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && e.key === 'r')) {
            e.preventDefault();
            refreshPage();
        }
        
        // Enter in URL input to load
        if (e.key === 'Enter' && e.target.id === 'urlInput') {
            loadUrl();
        }
    });
}

// Load example URL
function loadExample() {
    const examples = [
        'https://www.wikipedia.org',
        'https://www.github.com',
        'https://www.reddit.com',
        'https://www.twitch.tv',
        'https://www.netflix.com'
    ];
    
    const randomExample = examples[Math.floor(Math.random() * examples.length)];
    const urlInput = document.getElementById('urlInput');
    
    if (urlInput) {
        urlInput.value = randomExample;
        loadUrl();
    }
}

// Retry loading
function retryLoad() {
    loadUrl();
}

// Proxy notification
function showProxyNotification(message, type) {
    // Use main notification system if available
    if (window.NebulaHub && window.NebulaHub.showNotification) {
        window.NebulaHub.showNotification(message, type);
        return;
    }
    
    // Fallback notification
    const notification = document.createElement('div');
    notification.className = 'proxy-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .proxy-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(20, 20, 40, 0.95);
            border: 1px solid var(--primary);
            border-radius: 10px;
            padding: 15px 20px;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 9999;
            animation: slideUp 0.3s ease;
        }
        
        .proxy-notification i {
            font-size: 1.2rem;
        }
        
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    
    // Auto remove
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Setup iframe event listeners
document.addEventListener('DOMContentLoaded', function() {
    const proxyFrame = document.getElementById('proxyFrame');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const errorMessage = document.getElementById('errorMessage');
    
    if (proxyFrame) {
        proxyFrame.addEventListener('load', function() {
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
            
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
            
            // Update URL in input to reflect actual loaded URL
            try {
                const currentUrl = proxyFrame.contentWindow.location.href;
                const urlInput = document.getElementById('urlInput');
                if (urlInput && currentUrl && !currentUrl.includes('about:blank')) {
                    urlInput.value = currentUrl.replace('https://cors-anywhere.herokuapp.com/', '');
                }
            } catch (e) {
                // Cross-origin restriction, ignore
            }
        });
        
        proxyFrame.addEventListener('error', function() {
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
            
            if (errorMessage) {
                errorMessage.style.display = 'flex';
            }
            
            showProxyNotification('Failed to load page. The site may be blocked.', 'error');
        });
    }
});

// Make functions globally available
window.loadUrl = loadUrl;
window.quickLink = quickLink;
window.goBack = goBack;
window.goForward = goForward;
window.refreshPage = refreshPage;
window.clearProxy = clearProxy;
window.loadExample = loadExample;
window.retryLoad = retryLoad;

// Initialize proxy when page loads
if (window.location.pathname.includes('proxy.html')) {
    window.addEventListener('load', initializeProxy);
}
