// Product Data
const supplements = [
    {
        id: 1,
        name: "Whey Protein pro",
        price: 2499,
        description: "High-quality whey protein isolate for muscle recovery and growth. 24g protein, 5.5g BCAAs per serving.",
        image: "prot.jpg",
        category: "protein",
        features: [
            "24g protein per serving",
            "5.5g BCAAs",
            "Low in carbs and fat",
            "Fast absorption",
            "Great taste and mixability"
        ]
    },
    {
        id: 2,
        name: "Creatine Monohydrate",
        price: 899,
        description: "Pure creatine monohydrate for increased strength and power output during workouts.",
        image: "debica-poland-may-3-2022-600nw-2153086157.webp",
        category: "performance",
        features: [
            "Pure creatine monohydrate",
            "Increases strength and power",
            "Improves workout performance",
            "Supports muscle growth",
            "Scientifically proven"
        ]
    },
    {
        id: 3,
        name: "BCAA Amino Acids",
        price: 1100,
        description: "Branched-chain amino acids to support muscle recovery and reduce fatigue.",
        image: "BCAA.webp",
        category: "recovery",
        features: [
            "2:1:1 BCAA ratio",
            "Reduces muscle fatigue",
            "Supports recovery",
            "Prevents muscle breakdown",
            "Instant energy boost"
        ]
    },
    {
        id: 4,
        name: "Pre-Workout Formula",
        price: 1799,
        description: "Advanced pre-workout blend for maximum energy and focus during training sessions.",
        image: "preworkout.webp",
        category: "energy",
        features: [
            "Enhanced energy and focus",
            "Improved endurance",
            "Increased strength",
            "Better pump and vascularity",
            "No crash effect"
        ]
    },
    {
        id: 5,
        name: "Omega-3 Fish Oil",
        price: 799,
        description: "Premium fish oil supplement for heart health and joint support.",
        image: "omega3.webp",
        category: "health",
        features: [
            "Heart health support",
            "Joint health benefits",
            "Brain function support",
            "Anti-inflammatory properties",
            "High EPA/DHA content"
        ]
    },
    {
        id: 6,
        name: "Vitamin D3 + K2",
        price: 999,
        description: "Essential vitamin D3 with K2 for bone health and immune support.",
        image: "d3k21.webp",
        category: "vitamins",
        features: [
            "Bone health support",
            "Immune system boost",
            "Calcium absorption",
            "Mood enhancement",
            "Muscle function support"
        ]
    }
];

const clothes = [
    {
        id: 7,
        name: "Performance Tank Top",
        price: 699,
        description: "Moisture-wicking tank top for maximum comfort during intense workouts.",
        image: "tanktop.jpg",
        category: "tops",
        features: [
            "Moisture-wicking fabric",
            "Breathable design",
            "Comfortable fit",
            "Quick-dry technology",
            "Anti-odor properties"
        ]
    },
    {
        id: 8,
        name: "Compression Shorts",
        price: 899,
        description: "High-performance compression shorts for support and comfort during training.",
        image: "compression.webp",
        category: "bottoms",
        features: [
            "Compression support",
            "Moisture-wicking",
            "Comfortable waistband",
            "Anti-chafe design",
            "Quick-dry fabric"
        ]
    },
    {
        id: 9,
        name: "Gym Hoodie",
        price: 1499,
        description: "Premium cotton blend hoodie perfect for pre and post-workout comfort.",
        image: "hoodie.jpg",
        category: "outerwear",
        features: [
            "Premium cotton blend",
            "Comfortable fit",
            "Warm and cozy",
            "Durable construction",
            "Stylish design"
        ]
    },
    {
        id: 10,
        name: "Training Leggings",
        price: 1050,
        description: "High-waisted leggings with pocket for your essentials during workouts.",
        image: "leggings.webp",
        category: "bottoms",
        features: [
            "High-waisted design",
            "Built-in pocket",
            "Compression fit",
            "Moisture-wicking",
            "Four-way stretch"
        ]
    },
    {
        id: 11,
        name: "Performance T-Shirt",
        price: 999,
        description: "Breathable performance t-shirt with anti-odor technology.",
        image: "tshirt.jpg",
        category: "tops",
        features: [
            "Anti-odor technology",
            "Breathable fabric",
            "Comfortable fit",
            "Quick-dry material",
            "UV protection"
        ]
    },
    {
        id: 12,
        name: "Gym Bag",
        price: 1899,
        description: "Spacious gym bag with multiple compartments for all your gear.",
        image: "bag.webp",
        category: "accessories",
        features: [
            "Multiple compartments",
            "Durable construction",
            "Water-resistant material",
            "Comfortable straps",
            "Large capacity"
        ]
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const supplementsGrid = document.getElementById('supplements-grid');
const clothesGrid = document.getElementById('clothes-grid');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Only load products if we're on the main page
    if (supplementsGrid && clothesGrid) {
        loadProducts();
    }
    setupEventListeners();
    animateOnScroll();
    updateCartDisplay(); // Load cart from localStorage
});

// Load products into the grid
function loadProducts() {
    // Load supplements
    supplements.forEach(product => {
        const productCard = createProductCard(product);
        supplementsGrid.appendChild(productCard);
    });

    // Load clothes
    clothes.forEach(product => {
        const productCard = createProductCard(product);
        clothesGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card loading';
    
    card.innerHTML = `
        <div class="product-image" onclick="openProductDetail(${product.id})">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
            <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    // Add animation delay
    setTimeout(() => {
        card.classList.add('loaded');
    }, 100);

    return card;
}

// Shopping Cart Functions
function addToCart(productId) {
    const product = [...supplements, ...clothes].find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        showNotification(`${product.name} added to cart!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    // Update cart count
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Update cart items
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white;">×</button>
                `;
                
                cartItems.appendChild(cartItem);
            });
        }
    }
    
    // Update total
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
}

// Event Listeners
function setupEventListeners() {
    // Cart modal
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close cart when clicking outside
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                showNotification('Thank you for your order! This is a demo site.');
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
                cartModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Form submissions - only on main page
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message sent! We\'ll get back to you soon.');
            e.target.reset();
        });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for subscribing!');
            e.target.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility Functions
function openProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background:rgb(61, 236, 178);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll animations
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe all elements with loading class
    document.querySelectorAll('.loading').forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation to all product cards
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 100);
    });
});

// Keyboard navigation for cart modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartModal && cartModal.classList.contains('active')) {
        cartModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && cartModal && cartModal.classList.contains('active')) {
            // Swipe left to close cart
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
} 