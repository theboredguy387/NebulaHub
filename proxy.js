// Working Proxy for NebulaHub

let proxyHistory = [];
let currentHistoryIndex = -1;

// Load URL in proxy
function loadUrl() {
    const urlInput = document.getElementById('urlInput');
    const proxyFrame = document.getElementById('proxyFrame');
    
    if (!urlInput || !proxyFrame) return;
    
    let url = urlInput.value.trim();
    
    // Validate URL
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    
    // Add https:// if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
        urlInput.value = url;
    }
    
    // Save to history
    if (proxyHistory.length === 0 || proxyHistory[proxyHistory.length - 1] !== url) {
        proxyHistory.push(url);
        currentHistoryIndex = proxyHistory.length - 1;
    }
    
    // Use Ultraviolet proxy (same as PeteZah)
    const proxyUrl = getProxyUrl(url);
    
    // Load in iframe
    proxyFrame.src = proxyUrl;
    
    // Show notification
    showNotification(`Loading: ${url}`);
}

// Get proxy URL using Ultraviolet (same as PeteZah)
function getProxyUrl(url) {
    // Using Titanium Network's Ultraviolet (what PeteZah uses)
    const uvBase = 'https://uv.8bays.repl.co/';
    return uvBase + 'service/' + encodeURIComponent(url);
}

// Alternative proxy services if one doesn't work
function getAlternateProxyUrl(url) {
    const proxies = [
        'https://corrosion.pro/',
        'https://alloy.pro/',
        'https://node2.allschoolproxy.xyz/'
    ];
    
    const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];
    return randomProxy + 'service/' + encodeURIComponent(url);
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
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = url;
        }
        loadUrl();
    }
}

function goForward() {
    if (currentHistoryIndex < proxyHistory.length - 1) {
        currentHistoryIndex++;
        const url = proxyHistory[currentHistoryIndex];
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = url;
        }
        loadUrl();
    }
}

function refreshPage() {
    const proxyFrame = document.getElementById('proxyFrame');
    if (proxyFrame && proxyFrame.contentWindow) {
        try {
            proxyFrame.contentWindow.location.reload();
            showNotification('Page refreshed');
        } catch (e) {
            loadUrl();
        }
    }
}

function clearProxy() {
    const proxyFrame = document.getElementById('proxyFrame');
    const urlInput = document.getElementById('urlInput');
    
    if (proxyFrame) {
        proxyFrame.src = '';
    }
    
    if (urlInput) {
        urlInput.value = '';
    }
    
    showNotification('Proxy cleared');
}

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid #6366f1;
        border-radius: 10px;
        padding: 15px 20px;
        color: white;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-info-circle" style="color:#6366f1; margin-right:10px;"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Load default URL when page loads
window.addEventListener('load', function() {
    // Load Google by default
    setTimeout(() => {
        loadUrl();
    }, 1000);
});

// Make functions globally available
window.loadUrl = loadUrl;
window.quickLink = quickLink;
window.goBack = goBack;
window.goForward = goForward;
window.refreshPage = refreshPage;
window.clearProxy = clearProxy;
