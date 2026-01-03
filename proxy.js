// Working Proxy for Nebula - Uses actual working proxy services

// WORKING Proxy Services (updated daily)
const PROXY_SERVICES = [
    'https://js11.corrosionproxy.com/',
    'https://js7.corrosionproxy.com/',
    'https://js5.corrosionproxy.com/',
    'https://alloy.basketballsharks.io/',
    'https://node2.allschoolproxy.xyz/'
];

let currentProxyIndex = 0;
let history = [];
let currentIndex = -1;
let currentUrl = '';

// Get working proxy URL
function getProxyUrl(url) {
    const proxy = PROXY_SERVICES[currentProxyIndex];
    const encodedUrl = encodeURIComponent(url);
    return `${proxy}service/${encodedUrl}`;
}

// Cycle to next proxy
function nextProxy() {
    currentProxyIndex = (currentProxyIndex + 1) % PROXY_SERVICES.length;
    return PROXY_SERVICES[currentProxyIndex];
}

// Load URL in proxy
function loadUrl() {
    const urlInput = document.getElementById('urlInput');
    const proxyFrame = document.getElementById('proxyFrame');
    const loading = document.getElementById('proxyLoading');
    const error = document.getElementById('proxyError');
    
    if (!urlInput || !proxyFrame) return;
    
    let url = urlInput.value.trim();
    
    // Validate URL
    if (!url) {
        showError('Please enter a URL');
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
        showError('Invalid URL format. Please include http:// or https://');
        return;
    }
    
    // Save to history
    if (history.length === 0 || history[history.length - 1] !== url) {
        history.push(url);
        currentIndex = history.length - 1;
    }
    
    currentUrl = url;
    updateNavButtons();
    
    // Show loading
    if (loading) loading.style.display = 'flex';
    if (error) error.style.display = 'none';
    
    // Get proxy URL
    const proxyUrl = getProxyUrl(url);
    
    // Load in iframe
    proxyFrame.src = proxyUrl;
    
    // Handle loading
    proxyFrame.onload = function() {
        if (loading) loading.style.display = 'none';
        showNotification(`Loaded: ${new URL(url).hostname}`);
    };
    
    proxyFrame.onerror = function() {
        if (loading) loading.style.display = 'none';
        
        // Try next proxy
        const nextProxyUrl = nextProxy() + 'service/' + encodeURIComponent(url);
        proxyFrame.src = nextProxyUrl;
        
        showNotification('Trying different proxy service...');
    };
}

// Quick load function
function quickLoad(url) {
    const urlInput = document.getElementById('urlInput');
    if (urlInput) {
        urlInput.value = url;
        loadUrl();
    }
}

// Navigation
function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        const url = history[currentIndex];
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = url;
            loadUrl();
        }
    }
    updateNavButtons();
}

function goForward() {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        const url = history[currentIndex];
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = url;
            loadUrl();
        }
    }
    updateNavButtons();
}

function refreshProxy() {
    const proxyFrame = document.getElementById('proxyFrame');
    const loading = document.getElementById('proxyLoading');
    
    if (proxyFrame && proxyFrame.src) {
        if (loading) loading.style.display = 'flex';
        proxyFrame.contentWindow.location.reload();
        
        setTimeout(() => {
            if (loading) loading.style.display = 'none';
        }, 1000);
    }
}

function clearProxy() {
    const proxyFrame = document.getElementById('proxyFrame');
    const urlInput = document.getElementById('urlInput');
    const loading = document.getElementById('proxyLoading');
    const error = document.getElementById('proxyError');
    
    if (proxyFrame) proxyFrame.src = '';
    if (urlInput) urlInput.value = '';
    if (loading) loading.style.display = 'none';
    if (error) error.style.display = 'none';
    
    showNotification('Proxy cleared');
}

function openInNewTab() {
    const urlInput = document.getElementById('urlInput');
    const url = urlInput.value.trim();
    
    if (url) {
        const proxyUrl = getProxyUrl(url);
        window.open(proxyUrl, '_blank');
    }
}

function retryLoad() {
    const error = document.getElementById('proxyError');
    if (error) error.style.display = 'none';
    loadUrl();
}

function updateNavButtons() {
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    
    if (backBtn) {
        backBtn.disabled = currentIndex <= 0;
        backBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';
    }
    
    if (forwardBtn) {
        forwardBtn.disabled = currentIndex >= history.length - 1;
        forwardBtn.style.opacity = currentIndex >= history.length - 1 ? '0.5' : '1';
    }
}

// Error handling
function showError(message) {
    const error = document.getElementById('proxyError');
    const errorMessage = document.getElementById('errorMessage');
    
    if (error && errorMessage) {
        errorMessage.textContent = message;
        error.style.display = 'flex';
    }
}

// Notification
function showNotification(message) {
    // Simple notification
    console.log(`Nebula Proxy: ${message}`);
    
    // You could add a toast notification here
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(109, 40, 217, 0.95);
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load default URL
    setTimeout(() => {
        loadUrl();
    }, 1000);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + L to focus URL input
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            const urlInput = document.getElementById('urlInput');
            if (urlInput) {
                urlInput.focus();
                urlInput.select();
            }
        }
        
        // Enter in URL input
        if (e.key === 'Enter' && e.target.id === 'urlInput') {
            loadUrl();
        }
        
        // F5 to refresh
        if (e.key === 'F5') {
            e.preventDefault();
            refreshProxy();
        }
    });
});

// Make functions global
window.loadUrl = loadUrl;
window.quickLoad = quickLoad;
window.goBack = goBack;
window.goForward = goForward;
window.refreshProxy = refreshProxy;
window.clearProxy = clearProxy;
window.openInNewTab = openInNewTab;
window.retryLoad = retryLoad;

// Cloak functions (same as games.js)
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
    
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
    document.head.appendChild(link);
    
    hideCloak();
}

function resetCloak() {
    document.title = '🔒 Secure Proxy - Nebula';
    const link = document.querySelector("link[rel*='icon']");
    if (link) {
        link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌌</text></svg>`;
    }
    hideCloak();
}

window.showCloak = showCloak;
window.hideCloak = hideCloak;
window.cloakTab = cloakTab;
window.resetCloak = resetCloak;
