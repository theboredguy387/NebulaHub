// Fixed Working Proxy for NebulaHub

let proxyHistory = [];
let currentHistoryIndex = -1;
let currentUrl = '';

// Working proxy services
const PROXY_SERVICES = [
    'https://js11.corrosionproxy.com/',
    'https://js7.corrosionproxy.com/',
    'https://js5.corrosionproxy.com/'
];

let currentProxyIndex = 0;

// Get current proxy URL
function getCurrentProxy() {
    return PROXY_SERVICES[currentProxyIndex];
}

// Cycle to next proxy if current fails
function nextProxy() {
    currentProxyIndex = (currentProxyIndex + 1) % PROXY_SERVICES.length;
    return getCurrentProxy();
}

// Load URL in proxy
function loadUrl() {
    const urlInput = document.getElementById('urlInput');
    const proxyFrame = document.getElementById('proxyFrame');
    const proxyLoading = document.getElementById('proxyLoading');
    
    if (!urlInput || !proxyFrame) return;
    
    let url = urlInput.value.trim();
    
    // Validate URL
    if (!url) {
        showNotification('Please enter a URL', 'error');
        return;
    }
    
    // Add https:// if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
        urlInput.value = url;
    }
    
    try {
        new URL(url);
    } catch (e) {
        showNotification('Invalid URL format', 'error');
        return;
    }
    
    // Save to history
    if (proxyHistory.length === 0 || proxyHistory[proxyHistory.length - 1] !== url) {
        proxyHistory.push(url);
        currentHistoryIndex = proxyHistory.length - 1;
    }
    
    currentUrl = url;
    updateNavButtons();
    
    // Show loading
    if (proxyLoading) {
        proxyLoading.style.display = 'flex';
    }
    
    // Get proxy URL
    const proxyUrl = getProxyUrl(url);
    
    // Load in iframe
    proxyFrame.src = proxyUrl;
    
    // Hide loading when frame loads
    proxyFrame.onload = function() {
        if (proxyLoading) {
            proxyLoading.style.display = 'none';
        }
        showNotification(`Loaded: ${new URL(url).hostname}`, 'success');
    };
    
    // Handle errors
    proxyFrame.onerror = function() {
        if (proxyLoading) {
            proxyLoading.style.display = 'none';
        }
        showNotification('Failed to load. Trying different proxy...', 'error');
        setTimeout(() => {
            const newProxy = nextProxy();
            const newProxyUrl = newProxy + 'service/' + encodeURIComponent(url);
            proxyFrame.src = newProxyUrl;
        }, 1000);
    };
}

// Get proxy URL
function getProxyUrl(url) {
    const proxy = getCurrentProxy();
    return proxy + 'service/' + encodeURIComponent(url);
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
    const proxyLoading = document.getElementById('proxyLoading');
    
    if (proxyFrame && proxyFrame.src) {
        if (proxyLoading) {
            proxyLoading.style.display = 'flex';
        }
        
        proxyFrame.contentWindow.location.reload();
        
        setTimeout(() => {
            if (proxyLoading) {
                proxyLoading.style.display = 'none';
            }
        }, 1000);
    }
}

function clearProxy() {
    const proxyFrame = document.getElementById('proxyFrame');
    const urlInput = document.getElementById('urlInput');
    const proxyLoading = document.getElementById('proxyLoading');
    
    if (proxyFrame) {
        proxyFrame.src = '';
    }
    
    if (urlInput) {
        urlInput.value = '';
    }
    
    if (proxyLoading) {
        proxyLoading.style.display = 'none';
    }
    
    showNotification('Proxy cleared', 'info');
}

function updateNavButtons() {
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    
    if (backBtn) {
        backBtn.disabled = currentHistoryIndex <= 0;
        backBtn.style.opacity = currentHistoryIndex <= 0 ? '0.5' : '1';
    }
    
    if (forwardBtn) {
        forwardBtn.disabled = currentHistoryIndex >= proxyHistory.length - 1;
        forwardBtn.style.opacity = currentHistoryIndex >= proxyHistory.length - 1 ? '0.5' : '1';
    }
}

// Notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.proxy-notification');
    existing.forEach(el => el.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'proxy-notification';
    notification.style.background = type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 
                                  type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 
                                  'rgba(99, 102, 241, 0.95)';
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : 'info-circle'}" aria-hidden="true"></i>
        <span style="margin-left: 10px;">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Initialize proxy
document.addEventListener('DOMContentLoaded', function() {
    // Update year
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
    
    // Load default URL after a moment
    setTimeout(() => {
        loadUrl();
    }, 500);
    
    // Add keyboard shortcuts
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
    });
});

// Make functions globally available
window.loadUrl = loadUrl;
window.quickLink = quickLink;
window.goBack = goBack;
window.goForward = goForward;
window.refreshPage = refreshPage;
window.clearProxy = clearProxy;
