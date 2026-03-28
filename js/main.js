// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Render Global Chatbot
    renderChatbot();
    
    // 4. Render Global Top Bar (Accessibility & Language)
    renderTopBar();
    initAccessibility();
});

// AI Chatbot Logic
function renderChatbot() {
    const body = document.body;
    
    const chatbotHTML = `
        <div class="chatbot-widget">
            <div class="chatbot-window" id="chatbot-window">
                <div class="chatbot-header">
                    <h4><i class="fas fa-robot"></i> BW Parastatal AI</h4>
                    <button class="chatbot-close" id="chatbot-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="chatbot-messages" id="chatbot-messages">
                    <div class="message bot">
                        Hello! I am the BW Parastatal AI assistant. How can I help you learn about Botswana's state-owned enterprises today?
                    </div>
                </div>
                <div class="chatbot-input">
                    <input type="text" id="chatbot-input-field" placeholder="Ask about a parastatal or service..." />
                    <button id="chatbot-send-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
            <button class="chatbot-btn" id="chatbot-btn">
                <i class="fas fa-comment-dots"></i>
            </button>
        </div>
    `;
    
    body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Add FontAwesome for icons if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    // Chatbot functionality
    const chatWindow = document.getElementById('chatbot-window');
    const chatBtn = document.getElementById('chatbot-btn');
    const closeBtn = document.getElementById('chatbot-close');
    const inputField = document.getElementById('chatbot-input-field');
    const sendBtn = document.getElementById('chatbot-send-btn');
    const messagesContainer = document.getElementById('chatbot-messages');

    chatBtn.addEventListener('click', () => {
        chatWindow.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function processBotResponse(query) {
        query = query.toLowerCase();
        let response = "I'm still learning! You can ask me 'What is Botswana Oil?', 'What services do you provide?', or 'Contact'.";
        
        if (query.includes("botswana oil")) {
            response = "Botswana Oil Limited is the national oil company of Botswana, mandated to ensure security and efficiency of supply of petroleum products.";
        } else if (query.includes("services")) {
            response = "BW Parastatal is managed by ASTEC (Pty) Ltd. We provide live streaming, social media management, PR & media coverage, AI chatbots, and newsletter services to parastatals.";
        } else if (query.includes("contact")) {
            response = "You can contact us via our Contact Page, or email us at info@bwparastatal.com.";
        } else if (query.includes("bpc") || query.includes("power")) {
            response = "Botswana Power Corporation (BPC) is responsible for electrical power generation, transmission and distribution in Botswana.";
        } else if (query.includes("parastatal")) {
            response = "A parastatal is a state-owned enterprise. Our platform connects them with the public. Visit our Directory for a full list.";
        }

        setTimeout(() => {
            addMessage(response, 'bot');
        }, 600);
    }

    function handleSend() {
        const text = inputField.value.trim();
        if (text) {
            addMessage(text, 'user');
            inputField.value = '';
            processBotResponse(text);
        }
    }

    sendBtn.addEventListener('click', handleSend);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}

// --- Accessibility & Top Bar Logic ---
function renderTopBar() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Automatically manage active class based on current URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Reset all initially
    navLinks.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    
    navLinks.querySelectorAll('a').forEach(link => {
        if(link.getAttribute('href') === currentPath && !link.classList.contains('btn-outline')) {
            link.classList.add('active');
            
            // Also flag parent dropdown active if applicable
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const toggle = parentDropdown.querySelector('.dropdown-toggle');
                if (toggle) toggle.classList.add('active');
            }
        }
    });

    const toolsHTML = `
        <div class="accessibility-tools" style="display: flex; align-items: center; gap: 0.5rem; margin-left: 1rem; padding-left: 1rem; border-left: 1px solid var(--glass-border);">
            <button onclick="openAISearchGlobal()" title="AI Search" style="background:var(--primary); color:white; border:none; padding: 0.2rem 0.6rem; border-radius: 4px; cursor:pointer;"><i class="fas fa-robot"></i> AI</button>
            <button class="lang-btn active" data-lang="en" style="background:transparent; border:none; color:inherit; cursor:pointer; font-weight:bold; font-family:inherit;">EN</button>
            <span style="color:var(--text-muted);">|</span>
            <button class="lang-btn" data-lang="tn" style="background:transparent; border:none; color:inherit; cursor:pointer; font-family:inherit;">TN</button>
            <button id="toggle-contrast" title="Toggle High Contrast" style="background:transparent; border:none; color:inherit; cursor:pointer; font-size:1.1rem; margin-left:0.5rem;"><i class="fas fa-adjust"></i></button>
            <button id="toggle-text-size" title="Toggle Text Size" style="background:transparent; border:none; color:inherit; cursor:pointer; font-size:1.1rem; margin-left:0.5rem;"><i class="fas fa-text-height"></i></button>
            <button id="toggle-theme" title="Toggle Dark Mode" style="background:transparent; border:none; color:inherit; cursor:pointer; font-size:1.1rem; margin-left:0.5rem;"><i class="fas fa-moon"></i></button>
        </div>
    `;
    const portalBtn = navLinks.querySelector('.btn-outline');
    if(portalBtn) {
        portalBtn.insertAdjacentHTML('beforebegin', toolsHTML);
    } else {
        navLinks.insertAdjacentHTML('beforeend', toolsHTML);
    }
}

function initAccessibility() {
    // Theme Toggle
    const themeBtn = document.getElementById('toggle-theme');
    const storedTheme = localStorage.getItem('bw-theme') || 'light';
    if(storedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    themeBtn.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('bw-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('bw-theme', 'dark');
        }
    });

    // Contrast Toggle
    const contrastBtn = document.getElementById('toggle-contrast');
    const storedContrast = localStorage.getItem('bw-contrast');
    if(storedContrast === 'high') document.documentElement.setAttribute('data-accessibility', 'high-contrast');

    contrastBtn.addEventListener('click', () => {
        let currentContrast = document.documentElement.getAttribute('data-accessibility');
        if (currentContrast === 'high-contrast') {
            document.documentElement.removeAttribute('data-accessibility');
            localStorage.setItem('bw-contrast', 'normal');
        } else {
            document.documentElement.setAttribute('data-accessibility', 'high-contrast');
            localStorage.setItem('bw-contrast', 'high');
        }
    });

    // Text Size Toggle
    const textSizeBtn = document.getElementById('toggle-text-size');
    const storedSize = localStorage.getItem('bw-text-size');
    if(storedSize === 'large') document.documentElement.setAttribute('data-text-size', 'large');

    textSizeBtn.addEventListener('click', () => {
        let currentSize = document.documentElement.getAttribute('data-text-size');
        if (currentSize === 'large') {
            document.documentElement.removeAttribute('data-text-size');
            localStorage.setItem('bw-text-size', 'normal');
        } else {
            document.documentElement.setAttribute('data-text-size', 'large');
            localStorage.setItem('bw-text-size', 'large');
        }
    });

    // Language Toggle (Simulated)
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langBtns.forEach(b => {
                b.style.fontWeight = 'normal';
                b.classList.remove('active');
            });
            e.target.style.fontWeight = 'bold';
            e.target.classList.add('active');
            if(e.target.dataset.lang === 'tn') {
                alert("Language switched to Setswana (Simulation). In a production app, this would load the TN locale JSON.");
            }
        });
    });
}

function openAISearchGlobal() {
    window.location.href = 'index.html?aisearch=true';
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if(params.get('aisearch') === 'true' && typeof openAISearch === 'function') {
        openAISearch();
    }
});
