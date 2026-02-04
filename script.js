// Translations
const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.flowers": "Nos Fleurs",
        "nav.about": "À Propos",
        "nav.contact": "Contact",

        // Hero
        "hero.title": "Des fleurs pour chaque moment",
        "hero.subtitle": "Découvrez notre collection de bouquets artisanaux, créés avec passion et livrés avec amour.",
        "hero.cta": "Découvrir nos fleurs",

        // Features
        "features.delivery.title": "Livraison Express",
        "features.delivery.desc": "Livraison le jour même pour toute commande avant 14h",
        "features.fresh.title": "Fleurs Fraîches",
        "features.fresh.desc": "Nos fleurs sont cueillies et livrées sous 24h",
        "features.message.title": "Message Personnalisé",
        "features.message.desc": "Ajoutez un message gratuit à votre bouquet",

        // Products
        "products.title": "Nos Bouquets",
        "products.subtitle": "Des créations florales uniques pour illuminer votre quotidien",
        "products.add": "Ajouter",

        // About
        "about.title": "Notre Passion",
        "about.text1": "Depuis plus de 20 ans, Fleurs & Jardins est votre artisan fleuriste de confiance. Nous sélectionnons chaque jour les plus belles fleurs auprès de producteurs locaux pour créer des compositions uniques.",
        "about.text2": "Notre équipe passionnée met tout son savoir-faire au service de vos émotions. Que ce soit pour un anniversaire, un mariage ou simplement pour faire plaisir, nous avons le bouquet parfait pour vous.",

        // Contact
        "contact.title": "Contactez-nous",
        "contact.address": "Adresse",
        "contact.phone": "Téléphone",
        "contact.hours": "Horaires",
        "contact.hours.value": "Lun-Sam: 9h-19h",
        "contact.form.name": "Votre nom",
        "contact.form.email": "Votre email",
        "contact.form.message": "Votre message",
        "contact.form.send": "Envoyer",

        // Footer
        "footer.description": "Votre fleuriste artisanal depuis 2004. Des fleurs fraîches et des créations uniques pour tous vos moments précieux.",
        "footer.quicklinks": "Liens Rapides",
        "footer.followus": "Suivez-nous",
        "footer.rights": "© 2024 Fleurs & Jardins. Tous droits réservés.",

        // Cart
        "cart.title": "Votre Panier",
        "cart.total": "Total:",
        "cart.checkout": "Commander",
        "cart.empty": "Votre panier est vide",
        "cart.added": "ajouté au panier",

        // Messages
        "message.sent": "Message envoyé avec succès!",
        "checkout.thanks": "Merci pour votre commande!",
        "checkout.total": "Total:",
        "checkout.delivery": "Nous vous contacterons pour la livraison."
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.flowers": "Our Flowers",
        "nav.about": "About Us",
        "nav.contact": "Contact",

        // Hero
        "hero.title": "Flowers for every moment",
        "hero.subtitle": "Discover our collection of artisanal bouquets, created with passion and delivered with love.",
        "hero.cta": "Discover our flowers",

        // Features
        "features.delivery.title": "Express Delivery",
        "features.delivery.desc": "Same-day delivery for orders placed before 2 PM",
        "features.fresh.title": "Fresh Flowers",
        "features.fresh.desc": "Our flowers are picked and delivered within 24h",
        "features.message.title": "Personalized Message",
        "features.message.desc": "Add a free message to your bouquet",

        // Products
        "products.title": "Our Bouquets",
        "products.subtitle": "Unique floral creations to brighten your day",
        "products.add": "Add to cart",

        // About
        "about.title": "Our Passion",
        "about.text1": "For over 20 years, Fleurs & Jardins has been your trusted artisan florist. Every day, we select the most beautiful flowers from local growers to create unique compositions.",
        "about.text2": "Our passionate team puts all their expertise at the service of your emotions. Whether it's for a birthday, a wedding, or simply to bring joy, we have the perfect bouquet for you.",

        // Contact
        "contact.title": "Contact Us",
        "contact.address": "Address",
        "contact.phone": "Phone",
        "contact.hours": "Hours",
        "contact.hours.value": "Mon-Sat: 9am-7pm",
        "contact.form.name": "Your name",
        "contact.form.email": "Your email",
        "contact.form.message": "Your message",
        "contact.form.send": "Send",

        // Footer
        "footer.description": "Your artisan florist since 2004. Fresh flowers and unique creations for all your precious moments.",
        "footer.quicklinks": "Quick Links",
        "footer.followus": "Follow Us",
        "footer.rights": "© 2024 Fleurs & Jardins. All rights reserved.",

        // Cart
        "cart.title": "Your Cart",
        "cart.total": "Total:",
        "cart.checkout": "Checkout",
        "cart.empty": "Your cart is empty",
        "cart.added": "added to cart",

        // Messages
        "message.sent": "Message sent successfully!",
        "checkout.thanks": "Thank you for your order!",
        "checkout.total": "Total:",
        "checkout.delivery": "We will contact you for delivery."
    }
};

// Products Data (bilingual)
const products = {
    fr: [
        {
            id: 1,
            name: "Bouquet Romantique",
            description: "Roses rouges et pivoines pour les grandes occasions",
            price: 45.00,
            emoji: "🌹"
        },
        {
            id: 2,
            name: "Fraîcheur Printanière",
            description: "Tulipes colorées et marguerites champêtres",
            price: 35.00,
            emoji: "🌷"
        },
        {
            id: 3,
            name: "Soleil d'Or",
            description: "Tournesols lumineux pour égayer votre journée",
            price: 38.00,
            emoji: "🌻"
        },
        {
            id: 4,
            name: "Élégance Blanche",
            description: "Lys et orchidées blanches, pureté et raffinement",
            price: 55.00,
            emoji: "🌺"
        },
        {
            id: 5,
            name: "Jardin Sauvage",
            description: "Composition champêtre de fleurs des champs",
            price: 32.00,
            emoji: "🌼"
        },
        {
            id: 6,
            name: "Passion Tropicale",
            description: "Hibiscus et fleurs exotiques aux couleurs vives",
            price: 48.00,
            emoji: "🌸"
        },
        {
            id: 7,
            name: "Douceur Pastel",
            description: "Roses et hortensias aux teintes délicates",
            price: 42.00,
            emoji: "💐"
        },
        {
            id: 8,
            name: "Forêt Enchantée",
            description: "Fougères et fleurs vertes pour un intérieur zen",
            price: 40.00,
            emoji: "🌿"
        }
    ],
    en: [
        {
            id: 1,
            name: "Romantic Bouquet",
            description: "Red roses and peonies for special occasions",
            price: 45.00,
            emoji: "🌹"
        },
        {
            id: 2,
            name: "Spring Freshness",
            description: "Colorful tulips and country daisies",
            price: 35.00,
            emoji: "🌷"
        },
        {
            id: 3,
            name: "Golden Sun",
            description: "Bright sunflowers to brighten your day",
            price: 38.00,
            emoji: "🌻"
        },
        {
            id: 4,
            name: "White Elegance",
            description: "White lilies and orchids, purity and refinement",
            price: 55.00,
            emoji: "🌺"
        },
        {
            id: 5,
            name: "Wild Garden",
            description: "Country-style composition of wildflowers",
            price: 32.00,
            emoji: "🌼"
        },
        {
            id: 6,
            name: "Tropical Passion",
            description: "Hibiscus and exotic flowers in vivid colors",
            price: 48.00,
            emoji: "🌸"
        },
        {
            id: 7,
            name: "Pastel Softness",
            description: "Roses and hydrangeas in delicate shades",
            price: 42.00,
            emoji: "💐"
        },
        {
            id: 8,
            name: "Enchanted Forest",
            description: "Ferns and green flowers for a zen interior",
            price: 40.00,
            emoji: "🌿"
        }
    ]
};

// Current Language
let currentLang = localStorage.getItem('lang') || 'fr';

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updateCartUI();
});

// Set Language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
    });

    // Update all text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Re-render products and cart
    renderProducts();
    updateCartUI();
}

// Get translation
function t(key) {
    return translations[currentLang][key] || key;
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const currentProducts = products[currentLang];

    grid.innerHTML = currentProducts.map(product => `
        <article class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        ${t('products.add')}
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// Format Price
function formatPrice(price) {
    if (currentLang === 'en') {
        return '€' + price.toFixed(2);
    }
    return price.toFixed(2).replace('.', ',') + ' €';
}

// Toggle Cart
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Add to Cart
function addToCart(productId) {
    const product = products[currentLang].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            price: product.price,
            emoji: product.emoji,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} ${t('cart.added')}`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const currentProducts = products[currentLang];

    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🛒</span>
                <p>${t('cart.empty')}</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => {
            const product = currentProducts.find(p => p.id === item.id);
            return `
                <div class="cart-item">
                    <div class="cart-item-image">${item.emoji}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${product ? product.name : 'Product'}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `;
        }).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast(t('cart.empty'));
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`${t('checkout.thanks')}\n\n${t('checkout.total')} ${formatPrice(total)}\n\n${t('checkout.delivery')}`);

    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// Handle Contact Form
function handleContactForm(event) {
    event.preventDefault();
    showToast(t('message.sent'));
    event.target.reset();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
