// Global variables
let cart = [];
let isMenuOpen = false;
let currentLanguage = 'en'; // Default language

// Language toggle functionality
function toggleLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    console.log('Language changed to:', lang); // Debug log
    
    // Update all elements with language attributes
    const elementsWithLang = document.querySelectorAll('[data-en][data-mr]');
    
    console.log('Found elements with language data:', elementsWithLang.length); // Debug log
    
    elementsWithLang.forEach(element => {
        const isInput = element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
        const hasPlaceholder = element.hasAttribute('placeholder');

        // If it's an input/textarea with a placeholder, update the placeholder instead of textContent
        if (isInput && hasPlaceholder) {
            if (lang === 'mr' && element.getAttribute('data-mr')) {
                element.setAttribute('placeholder', element.getAttribute('data-mr'));
                console.log('Updated placeholder to Marathi:', element.getAttribute('data-mr'));
            } else if (lang === 'en' && element.getAttribute('data-en')) {
                element.setAttribute('placeholder', element.getAttribute('data-en'));
                console.log('Updated placeholder to English:', element.getAttribute('data-en'));
            }
        } else {
            // Default: update visible text content
            if (lang === 'mr' && element.getAttribute('data-mr')) {
                element.textContent = element.getAttribute('data-mr');
                console.log('Updated to Marathi:', element.getAttribute('data-mr')); // Debug log
            } else if (lang === 'en' && element.getAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
                console.log('Updated to English:', element.getAttribute('data-en')); // Debug log
            }
        }
    });
    
    // Update language toggle buttons
    updateLanguageButtons();
}

function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
    
    console.log('Language buttons updated for:', currentLanguage);
}

function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'mr')) {
        currentLanguage = savedLang;
        toggleLanguage(savedLang);
    } else {
        // Initialize with default language
        updateLanguageButtons();
    }
    console.log('Loaded saved language:', currentLanguage);
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    loadCartFromStorage();
    animateOnScroll();
    initializeImageLoading();
    optimizeImages();
    loadSavedLanguage(); // Load saved language preference
    setupLanguageToggle(); // Setup language toggle events
    setupSizeSelection(); // Setup size selection
    ensureDefaultProductImage(); // Ensure default product image is visible
    setupHeroSideImageMotion(); // Subtle parallax motion for hero side images
    setupMagneticButtons(); // Subtle magnetic effect for buttons
    initializeModernEffects(); // Initialize modern aura effects
    createDynamicParticles(); // Create dynamic particle system
    setupScrollAnimations(); // Setup scroll-triggered animations
    initializeHeroSlideshow(); // Initialize hero image slideshow
    setupMotionEffects(); // Setup professional motion effects
});

// Removed auto-test language toggle used during development to prevent
// unexpected switches after page load.

// Initialize website
function initializeWebsite() {
    // Update cart count display
    updateCartCount();
    
    // Add smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Initialize product cards
    initializeProductCards();
    
    // Preload critical images
    preloadCriticalImages();
}

// Professional image loading and optimization
function initializeImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading placeholder
        img.style.backgroundColor = '#f5f5f5';
        img.style.transition = 'opacity 0.3s ease';
        
        // Handle image load success
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.classList.add('loaded');
        });
        
        // Handle image load error
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#e0e0e0';
            this.alt = 'Image not available';
            console.warn('Failed to load image:', this.src);
        });
        
        // Add fade-in effect for lazy loaded images
        if (img.loading === 'lazy') {
            img.style.opacity = '0';
        }
    });
}

// Optimize images for better performance
function optimizeImages() {
    const heroImages = document.querySelectorAll('.hero-image img');
    const productImages = document.querySelectorAll('.product-image img, .category-image img');
    
    // Hero images - highest priority
    heroImages.forEach(img => {
        img.style.imageRendering = 'crisp-edges';
        img.style.imageRendering = '-webkit-optimize-contrast';
    });
    
    // Product images - optimize for quality
    productImages.forEach(img => {
        img.style.imageRendering = 'auto';
        
        // Add intersection observer for lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '1';
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            if (img.loading === 'lazy') {
                imageObserver.observe(img);
            }
        }
    });
}

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'images/solo.JPG',
        'images/solo1.JPG'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Change main product image function
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        // Add fade effect
        mainImage.style.opacity = '0.5';
        
        setTimeout(() => {
            mainImage.src = imageSrc;
            mainImage.style.opacity = '1';
        }, 150);
    }
    
    // Update active thumbnail
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src.includes(imageSrc)) {
            thumb.classList.add('active');
        }
    });
}

// Ensure default main product image is shown on load and on error
function ensureDefaultProductImage() {
    const mainImage = document.getElementById('mainProductImage');
    const defaultSrc = 'images/solo.JPG';
    const firstThumb = document.querySelector('.thumbnail');

    if (!mainImage) return;

    // If src is missing or empty, set default
    if (!mainImage.getAttribute('src')) {
        mainImage.setAttribute('src', defaultSrc);
    }

    // Fallback if image fails to load
    mainImage.addEventListener('error', () => {
        mainImage.setAttribute('src', defaultSrc);
    });

    // Make sure the first thumbnail is marked active and matches the main image
    if (firstThumb) {
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        firstThumb.classList.add('active');
    }
}

// Size selection functionality
function setupSizeSelection() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            sizeButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
}

// Setup language toggle event listeners
function setupLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    console.log('Setting up language toggle, found buttons:', langButtons.length);
    
    langButtons.forEach(btn => {
        console.log('Setting up button:', btn.getAttribute('data-lang'), btn.textContent);
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute('data-lang');
            console.log('Language button clicked:', selectedLang);
            
            // Remove active class from all buttons
            langButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Toggle language
            toggleLanguage(selectedLang);
        });
    });
    
    // Also try direct event binding
    const enBtn = document.getElementById('lang-en');
    const mrBtn = document.getElementById('lang-mr');
    
    if (enBtn) {
        enBtn.onclick = () => {
            console.log('EN button clicked directly');
            toggleLanguage('en');
        };
    }
    
    if (mrBtn) {
        mrBtn.onclick = () => {
            console.log('MR button clicked directly');
            toggleLanguage('mr');
        };
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', toggleSearch);
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Add to cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
    
    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    // Window scroll event for header
    window.addEventListener('scroll', handleScroll);
    
    // Window resize event
    window.addEventListener('resize', handleResize);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle i');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--royal-blue)';
        nav.style.padding = '20px';
        nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        nav.querySelector('ul').style.flexDirection = 'column';
        nav.querySelector('ul').style.gap = '15px';
        menuToggle.className = 'fas fa-times';
    } else {
        nav.style.display = 'none';
        menuToggle.className = 'fas fa-bars';
    }
}

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        const nav = document.querySelector('.nav');
        nav.style.display = 'flex';
        nav.style.position = 'static';
        nav.style.background = 'none';
        nav.style.padding = '0';
        nav.style.boxShadow = 'none';
        nav.querySelector('ul').style.flexDirection = 'row';
        nav.querySelector('ul').style.gap = '30px';
        isMenuOpen = false;
    }
}

// Toggle search
function toggleSearch() {
    // Create search overlay if it doesn't exist
    let searchOverlay = document.querySelector('.search-overlay');
    
    if (!searchOverlay) {
        searchOverlay = document.createElement('div');
        searchOverlay.className = 'search-overlay';
        searchOverlay.innerHTML = `
            <div class="search-container">
                <input type="text" placeholder="Search for products..." class="search-input">
                <button class="search-close">&times;</button>
            </div>
        `;
        document.body.appendChild(searchOverlay);
        
        // Add styles
        searchOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        `;
        
        const searchContainer = searchOverlay.querySelector('.search-container');
        searchContainer.style.cssText = `
            display: flex;
            align-items: center;
            gap: 20px;
            max-width: 600px;
            width: 90%;
        `;
        
        const searchInput = searchOverlay.querySelector('.search-input');
        searchInput.style.cssText = `
            flex: 1;
            padding: 15px 25px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            outline: none;
        `;
        
        const searchClose = searchOverlay.querySelector('.search-close');
        searchClose.style.cssText = `
            color: white;
            font-size: 2rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        `;
        
        // Event listeners
        searchClose.addEventListener('click', () => {
            searchOverlay.style.opacity = '0';
            searchOverlay.style.visibility = 'hidden';
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    // Show search overlay
    searchOverlay.style.opacity = '1';
    searchOverlay.style.visibility = 'visible';
    searchOverlay.querySelector('.search-input').focus();
}

// Perform search
function performSearch(query) {
    if (query.trim()) {
        // Simulate search functionality
        alert(`Searching for: ${query}\n\nThis would normally search through your product database.`);
    }
}

// Handle newsletter submit
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        // Show success message
        showNotification('Thank you for subscribing! 🎉', 'success');
        e.target.reset();
    }
}

// Handle add to cart
function handleAddToCart(e) {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h4').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent.split(' ')[0];
    const productImage = productCard.querySelector('img').src;
    
    const product = {
        id: Date.now(),
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };
    
    addToCart(product);
    showNotification(`${productName} added to cart! 🛒`, 'success');
}

// Add to cart function
function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    
    updateCartCount();
    saveCartToStorage();
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Toggle cart
function toggleCart() {
    let cartSidebar = document.querySelector('.cart-sidebar');
    
    if (!cartSidebar) {
        createCartSidebar();
        cartSidebar = document.querySelector('.cart-sidebar');
    }
    
    const isOpen = cartSidebar.classList.contains('open');
    
    if (isOpen) {
        cartSidebar.classList.remove('open');
    } else {
        updateCartDisplay();
        cartSidebar.classList.add('open');
    }
}

// Create cart sidebar
function createCartSidebar() {
    const cartSidebar = document.createElement('div');
    cartSidebar.className = 'cart-sidebar';
    cartSidebar.innerHTML = `
        <div class="cart-header">
            <h3>Shopping Cart</h3>
            <button class="cart-close">&times;</button>
        </div>
        <div class="cart-items"></div>
        <div class="cart-footer">
            <div class="cart-total">
                <strong>Total: ₹0</strong>
            </div>
            <button class="btn btn-primary checkout-btn">Checkout</button>
        </div>
    `;
    
    // Add styles
    cartSidebar.style.cssText = `
        position: fixed;
        top: 0;
        right: -400px;
        width: 400px;
        height: 100vh;
        background: white;
        box-shadow: -5px 0 15px rgba(0,0,0,0.1);
        z-index: 2000;
        transition: right 0.3s ease;
        display: flex;
        flex-direction: column;
    `;
    
    document.body.appendChild(cartSidebar);
    
    // Add open class styles
    const style = document.createElement('style');
    style.textContent = `
        .cart-sidebar.open { right: 0 !important; }
        .cart-header { 
            padding: 20px; 
            border-bottom: 1px solid #eee; 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            background: var(--primary-orange);
            color: white;
        }
        .cart-close { 
            background: none; 
            border: none; 
            color: white; 
            font-size: 1.5rem; 
            cursor: pointer; 
        }
        .cart-items { 
            flex: 1; 
            padding: 20px; 
            overflow-y: auto; 
        }
        .cart-footer { 
            padding: 20px; 
            border-top: 1px solid #eee; 
        }
        .cart-item {
            display: flex;
            gap: 15px;
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }
        .cart-item img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 8px;
        }
        .cart-item-info {
            flex: 1;
        }
        .cart-item-name {
            font-weight: 600;
            margin-bottom: 5px;
        }
        .cart-item-price {
            color: var(--primary-orange);
            font-weight: 600;
        }
        .quantity-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }
        .quantity-btn {
            width: 30px;
            height: 30px;
            border: 1px solid #ddd;
            background: white;
            cursor: pointer;
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);
    
    // Event listeners
    cartSidebar.querySelector('.cart-close').addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });
    
    cartSidebar.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Checkout functionality would be implemented here!');
        } else {
            alert('Your cart is empty!');
        }
    });
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
        cartTotal.innerHTML = '<strong>Total: ₹0</strong>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: red;">×</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace('₹', ''));
        return sum + (price * item.quantity);
    }, 0);
    
    cartTotal.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

// Update quantity
function updateQuantity(productId, change) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            updateCartCount();
            saveCartToStorage();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartCount();
    saveCartToStorage();
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('silya_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('silya_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Handle scroll events
function handleScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY;
    
    // Header background change
    if (scrolled > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(255, 107, 53, 0.95), rgba(255, 69, 0, 0.95))';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-orange), var(--deep-orange))';
        header.style.backdropFilter = 'none';
    }
    
    // Parallax effect for hero section
    const heroImage = document.querySelector('.main-hero-img');
    const floatingImages = document.querySelectorAll('.floating-img');
    const decorativeCircles = document.querySelectorAll('.floating-circle');
    
    if (heroImage) {
        const parallaxSpeed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${parallaxSpeed}px)`;
    }
    
    // Floating elements parallax
    floatingImages.forEach((img, index) => {
        const speed = (index + 1) * 0.3;
        img.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    decorativeCircles.forEach((circle, index) => {
        const speed = (index + 1) * 0.2;
        circle.style.transform = `translateY(${scrolled * speed}px) scale(${1 + scrolled * 0.001})`;
    });
    
    // Add scroll-triggered animations
    animateOnScrollElements();
}

// Enhanced scroll-triggered animations
function animateOnScrollElements() {
    const elements = document.querySelectorAll('.feature-card, .product-card, .category-card');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !el.classList.contains('animated')) {
            el.classList.add('animated');
            el.style.animation = 'fadeInUp 0.8s ease forwards';
            
            // Add staggered animation delay
            const delay = Array.from(el.parentElement.children).indexOf(el) * 0.1;
            el.style.animationDelay = `${delay}s`;
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (isMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
}

// Initialize product cards with hover effects
function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Enhanced mouse enter effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) rotateY(5deg) scale(1.02)';
            
            // Add ripple effect
            createRippleEffect(card);
            
            // Animate product badge
            const badge = card.querySelector('.product-badge');
            if (badge) {
                badge.style.animation = 'wiggle 0.5s ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateY(0deg) scale(1)';
            
            const badge = card.querySelector('.product-badge');
            if (badge) {
                badge.style.animation = '';
            }
        });
        
        // Add click effect
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                createClickEffect(card, e);
            }
        });
    });
}

// Create ripple effect on hover
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.3), transparent);
        transform: translate(-50%, -50%);
        animation: ripple 0.8s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 800);
}

// Create click effect
function createClickEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const clickEffect = document.createElement('div');
    clickEffect.className = 'click-effect';
    clickEffect.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.6), transparent);
        transform: translate(-50%, -50%);
        animation: clickPulse 0.6s ease-out;
        pointer-events: none;
        z-index: 2;
    `;
    
    element.appendChild(clickEffect);
    
    setTimeout(() => {
        if (clickEffect.parentNode) {
            clickEffect.parentNode.removeChild(clickEffect);
        }
    }, 600);
}

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .category-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--forest-green)' : 'var(--deep-red)'};
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Product filtering (for product pages)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.dataset.category;
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            product.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            product.style.display = 'none';
        }
    });
}

// Product sorting
function sortProducts(sortBy) {
    const container = document.querySelector('.product-grid');
    const products = Array.from(container.querySelectorAll('.product-card'));
    
    products.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                const priceA = parseInt(a.querySelector('.product-price').textContent.replace('₹', ''));
                const priceB = parseInt(b.querySelector('.product-price').textContent.replace('₹', ''));
                return priceA - priceB;
            case 'price-high':
                const priceA2 = parseInt(a.querySelector('.product-price').textContent.replace('₹', ''));
                const priceB2 = parseInt(b.querySelector('.product-price').textContent.replace('₹', ''));
                return priceB2 - priceA2;
            case 'name':
                const nameA = a.querySelector('h4').textContent;
                const nameB = b.querySelector('h4').textContent;
                return nameA.localeCompare(nameB);
            default:
                return 0;
        }
    });
    
    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}

// ================================
// MODERN AURA EFFECTS
// ================================

// Initialize modern visual effects
function initializeModernEffects() {
    // Add cursor trail effect
    createCursorTrail();
    
    // Enhanced parallax scrolling
    setupAdvancedParallax();
    
    // Add glitch effect on logo hover
    setupGlitchEffects();
    
    console.log('🎨 Modern aura effects initialized!');
}

// Create dynamic floating particles
function createDynamicParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    
    // Create additional interactive particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 8 + 3}px;
            height: ${Math.random() * 8 + 3}px;
            background: ${getRandomMarathiColor()};
            border-radius: 50%;
            opacity: ${Math.random() * 0.7 + 0.3};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
        `;
        
        // Random movement animation
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float-particles ${duration}s linear infinite ${delay}s`;
        
        if (particleContainer) {
            particleContainer.appendChild(particle);
        }
    }
}

// Get random Marathi color palette
function getRandomMarathiColor() {
    const colors = [
        'rgba(255, 107, 53, 0.6)',   // Primary Orange
        'rgba(255, 215, 0, 0.6)',    // Golden Yellow
        'rgba(0, 51, 102, 0.6)',     // Navy Blue
        'rgba(255, 165, 0, 0.6)',    // Orange
        'rgba(220, 20, 60, 0.6)'     // Deep Red
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Cursor trail effect
function createCursorTrail() {
    let mouseX = 0, mouseY = 0;
    const trail = [];
    
    // Create trail elements
    for (let i = 0; i < 10; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #FF6B35, #FFD700);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i * 0.1};
            transform: scale(${1 - i * 0.1});
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = mouseX + 'px';
                dot.style.top = mouseY + 'px';
            }, index * 20);
        });
    });
}

// Advanced parallax effects
function setupAdvancedParallax() {
    const blobs = document.querySelectorAll('.blob');
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        
        // Limit parallax effect to prevent excessive movement
        const maxScroll = bodyHeight - windowHeight;
        const scrollProgress = Math.min(scrolled / maxScroll, 1);
        
        blobs.forEach((blob, index) => {
            // Reduced speed for more subtle effect
            const speed = (index + 1) * 0.1;
            const translateY = scrollProgress * -50 * speed; // Max 50px movement
            const scale = 1 + (scrollProgress * 0.02); // Very subtle scaling
            
            blob.style.transform = `translateY(${translateY}px) scale(${scale})`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Glitch effects for logo
function setupGlitchEffects() {
    const logo = document.querySelector('.logo h1');
    
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.animation = 'glitch 0.3s ease-in-out';
            setTimeout(() => {
                logo.style.animation = '';
            }, 300);
        });
    }
}

// Scroll-triggered animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Prevent conflicts with other animations
                entry.target.style.willChange = 'transform, opacity';
                
                // Add stagger effect for multiple elements - more subtle
                if (entry.target.classList.contains('fade-in-up')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1.01)';
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(0) scale(1)';
                            entry.target.style.willChange = 'auto';
                        }, 150);
                    }, 50);
                }
            }
        });
    }, observerOptions);
    
    // Observe all animation elements
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced button interactions
function enhanceButtonInteractions() {
    const buttons = document.querySelectorAll('.btn, .size-btn, .lang-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for additional effects
const additionalStyles = `
    @keyframes glitch {
        0%, 100% { transform: translateX(0); }
        10% { transform: translateX(-2px) skew(-1deg); }
        20% { transform: translateX(2px) skew(1deg); }
        30% { transform: translateX(-1px) skew(0.5deg); }
        40% { transform: translateX(1px) skew(-0.5deg); }
        50% { transform: translateX(-2px) skew(1deg); }
        60% { transform: translateX(2px) skew(-1deg); }
        70% { transform: translateX(-1px) skew(0.5deg); }
        80% { transform: translateX(1px) skew(-0.5deg); }
        90% { transform: translateX(-2px) skew(1deg); }
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .cursor-trail {
        mix-blend-mode: screen;
    }
    
    body:hover .cursor-trail {
        animation: pulse 0.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.2); opacity: 1; }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize enhanced interactions
setTimeout(enhanceButtonInteractions, 1000);

// ================================
// HERO SLIDESHOW & MOTION EFFECTS
// ================================

let currentSlide = 0;
let slideInterval;
const slideImages = ['images/solo.JPG', 'images/solo1.JPG'];

// Initialize Hero Slideshow
function initializeHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const navDots = document.querySelectorAll('.nav-dot');
    
    if (slides.length === 0) return;
    
    // Start automatic slideshow
    startSlideshow();
    
    // Add mouse pause functionality
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', pauseSlideshow);
        heroImage.addEventListener('mouseleave', startSlideshow);
    }
    
    console.log('🎬 Hero slideshow initialized with', slides.length, 'slides');
}

// Start automatic slideshow
function startSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    
    slideInterval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % slideImages.length;
        switchHeroSlide(nextSlide);
    }, 4000); // Change every 4 seconds
}

// Pause slideshow
function pauseSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// Switch hero slide function
function switchHeroSlide(slideIndex) {
    const slides = document.querySelectorAll('.hero-slide');
    const navDots = document.querySelectorAll('.nav-dot');
    
    if (slideIndex < 0 || slideIndex >= slides.length) return;
    
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    navDots[currentSlide].classList.remove('active');
    
    // Add active class to new slide and dot
    currentSlide = slideIndex;
    slides[currentSlide].classList.add('active');
    navDots[currentSlide].classList.add('active');
    
    // Trigger motion effects sync
    syncMotionEffects(currentSlide);
    
    console.log('🎯 Switched to slide:', currentSlide);
}

// Setup Professional Motion Effects
function setupMotionEffects() {
    // Enhanced parallax for floating images
    setupFloatingImageParallax();
    
    // Interactive motion on mouse move
    setupInteractiveMotion();
    
    // Synchronized animations
    setupSynchronizedAnimations();
    
    console.log('✨ Professional motion effects activated');
}

// Floating image parallax
function setupFloatingImageParallax() {
    const floatingImages = document.querySelectorAll('.large-floating-image');
    const croppedSections = document.querySelectorAll('.cropped-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        floatingImages.forEach((img, index) => {
            const speed = (index + 1) * 0.2;
            img.style.transform += ` translateY(${rate * speed}px)`;
        });
        
        croppedSections.forEach((section, index) => {
            const speed = (index + 1) * 0.15;
            section.style.transform += ` translateY(${rate * speed}px)`;
        });
    });
}

// Interactive motion on mouse movement
function setupInteractiveMotion() {
    const heroImage = document.querySelector('.hero-image');
    const floatingImages = document.querySelectorAll('.large-floating-image');
    const croppedSections = document.querySelectorAll('.cropped-section');
    
    if (!heroImage) return;
    
    heroImage.addEventListener('mousemove', (e) => {
        const rect = heroImage.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;
        
        // Apply subtle movement to floating elements
        floatingImages.forEach((img, index) => {
            const intensity = (index + 1) * 8;
            const currentTransform = img.style.transform || '';
            const baseTransform = currentTransform.split('translate3d')[0] || '';
            
            img.style.transform = `${baseTransform} translate3d(${deltaX * intensity}px, ${deltaY * intensity}px, 0)`;
        });
        
        croppedSections.forEach((section, index) => {
            const intensity = (index + 1) * 5;
            const currentTransform = section.style.transform || '';
            const baseTransform = currentTransform.split('translate3d')[0] || '';
            
            section.style.transform = `${baseTransform} translate3d(${deltaX * intensity}px, ${deltaY * intensity}px, 0)`;
        });
    });
    
    // Reset on mouse leave
    heroImage.addEventListener('mouseleave', () => {
        floatingImages.forEach(img => {
            const currentTransform = img.style.transform || '';
            const baseTransform = currentTransform.split('translate3d')[0] || '';
            img.style.transform = baseTransform;
        });
        
        croppedSections.forEach(section => {
            const currentTransform = section.style.transform || '';
            const baseTransform = currentTransform.split('translate3d')[0] || '';
            section.style.transform = baseTransform;
        });
    });
}

// New: Parallax motion for current hero side images
function setupHeroSideImageMotion() {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const hero = document.querySelector('.hero');
    const imgs = document.querySelectorAll('.hero-side-image .side-img');
    if (!hero || imgs.length === 0) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const dx = (e.clientX - rect.left) / rect.width - 0.5;
        const dy = (e.clientY - rect.top) / rect.height - 0.5;

        imgs.forEach((img, idx) => {
            const intensity = 6 + idx * 2; // slightly different per side
            img.style.transform = `translate3d(${dx * intensity}px, ${dy * intensity}px, 0) scale(1.02)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        imgs.forEach((img) => {
            img.style.transform = '';
        });
    });
}

// New: Magnetic cursor-follow effect for buttons
function setupMagneticButtons() {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// Synchronized animations based on current slide
function syncMotionEffects(slideIndex) {
    const floatingImages = document.querySelectorAll('.large-floating-image');
    const croppedSections = document.querySelectorAll('.cropped-section');
    const animatedRings = document.querySelectorAll('.animated-ring');
    
    // Adjust animation speeds and delays based on current slide
    if (slideIndex === 0) {
        // Faster, more energetic animations for first slide
        floatingImages.forEach(img => {
            img.style.animationDuration = '6s';
        });
        croppedSections.forEach(section => {
            section.style.animationDuration = '4s';
        });
    } else {
        // Slower, more elegant animations for second slide
        floatingImages.forEach(img => {
            img.style.animationDuration = '10s';
        });
        croppedSections.forEach(section => {
            section.style.animationDuration = '8s';
        });
    }
    
    // Pulse effect for rings
    animatedRings.forEach((ring, index) => {
        ring.style.animationDelay = `${slideIndex * 0.5 + index * 0.3}s`;
    });
}

// Advanced image cropping effects
function setupAdvancedCropping() {
    const croppedSections = document.querySelectorAll('.cropped-section');
    
    croppedSections.forEach((section, index) => {
        section.addEventListener('mouseenter', () => {
            // Zoom effect on hover
            const img = section.querySelector('.cropped-img');
            img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Add glow effect
            section.style.boxShadow = '0 20px 40px rgba(255, 107, 53, 0.4)';
        });
        
        section.addEventListener('mouseleave', () => {
            const img = section.querySelector('.cropped-img');
            img.style.transform = 'scale(1)';
            section.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
    });
}

// Initialize advanced cropping on load
setTimeout(setupAdvancedCropping, 1000);