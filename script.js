// Translations
const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.flowers": "Nos Fleurs",
        "nav.drugs": "Drogues",
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

        // Drugs
        "drugs.title": "Nos Substances Spéciales",
        "drugs.subtitle": "Pour les moments où les fleurs ne suffisent plus...",
        "drugs.effects": "Effets",
        "drugs.duration": "Durée des effets",
        "drugs.warning": "⚠️ Consommation à vos risques",

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
        "checkout.delivery": "Nous vous contacterons pour la livraison.",

        // Modal
        "modal.add": "Ajouter au panier",
        "modal.flowers": "Fleurs incluses",
        "modal.duration": "Durée de vie",
        "modal.days": "7-10 jours",
        "modal.delivery": "Livraison express disponible"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.flowers": "Our Flowers",
        "nav.drugs": "Drugs",
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

        // Drugs
        "drugs.title": "Our Special Substances",
        "drugs.subtitle": "For when flowers just aren't enough...",
        "drugs.effects": "Effects",
        "drugs.duration": "Duration",
        "drugs.warning": "⚠️ Consume at your own risk",

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
        "checkout.delivery": "We will contact you for delivery.",

        // Modal
        "modal.add": "Add to cart",
        "modal.flowers": "Included flowers",
        "modal.duration": "Lifespan",
        "modal.days": "7-10 days",
        "modal.delivery": "Express delivery available"
    }
};

// Products Data (bilingual)
const products = {
    fr: [
        {
            id: 1,
            name: "Bouquet Romantique",
            description: "Roses rouges et pivoines pour les grandes occasions",
            fullDescription: "Un bouquet passionné composé de magnifiques roses rouges et de pivoines délicates. Parfait pour exprimer votre amour lors d'un anniversaire, de la Saint-Valentin ou simplement pour surprendre l'être aimé.",
            flowers: "Roses rouges, Pivoines, Eucalyptus",
            price: 45.00,
            emoji: "🌹"
        },
        {
            id: 2,
            name: "Fraîcheur Printanière",
            description: "Tulipes colorées et marguerites champêtres",
            fullDescription: "Célébrez l'arrivée du printemps avec ce bouquet joyeux. Les tulipes aux couleurs variées s'associent parfaitement aux marguerites pour créer une composition pleine de vie et de fraîcheur.",
            flowers: "Tulipes multicolores, Marguerites, Gypsophile",
            price: 35.00,
            emoji: "🌷"
        },
        {
            id: 3,
            name: "Soleil d'Or",
            description: "Tournesols lumineux pour égayer votre journée",
            fullDescription: "Apportez la chaleur du soleil dans votre intérieur avec ce bouquet radieux. Les tournesols, symboles de bonheur et de loyauté, illumineront n'importe quelle pièce de leur éclat doré.",
            flowers: "Tournesols, Solidago, Feuillage vert",
            price: 38.00,
            emoji: "🌻"
        },
        {
            id: 4,
            name: "Élégance Blanche",
            description: "Lys et orchidées blanches, pureté et raffinement",
            fullDescription: "L'incarnation de l'élégance et de la sophistication. Ce bouquet raffiné de lys et d'orchidées blanches est idéal pour les mariages, les cérémonies ou pour offrir à quelqu'un de spécial.",
            flowers: "Lys blancs, Orchidées Phalaenopsis, Roses blanches",
            price: 55.00,
            emoji: "🌺"
        },
        {
            id: 5,
            name: "Jardin Sauvage",
            description: "Composition champêtre de fleurs des champs",
            fullDescription: "Évadez-vous à la campagne avec ce bouquet naturel et authentique. Une composition libre et aérée qui rappelle les prairies fleuries et les beaux jours d'été.",
            flowers: "Marguerites, Bleuets, Coquelicots, Graminées",
            price: 32.00,
            emoji: "🌼"
        },
        {
            id: 6,
            name: "Passion Tropicale",
            description: "Hibiscus et fleurs exotiques aux couleurs vives",
            fullDescription: "Voyagez sous les tropiques avec cette explosion de couleurs. Des fleurs exotiques soigneusement sélectionnées pour créer une ambiance chaleureuse et dépaysante.",
            flowers: "Hibiscus, Strelitzia, Anthurium, Feuilles tropicales",
            price: 48.00,
            emoji: "🌸"
        },
        {
            id: 7,
            name: "Douceur Pastel",
            description: "Roses et hortensias aux teintes délicates",
            fullDescription: "Un bouquet tout en douceur avec ses teintes pastel apaisantes. Les roses se marient harmonieusement aux hortensias pour créer une composition romantique et délicate.",
            flowers: "Roses roses, Hortensias, Lisianthus, Eucalyptus",
            price: 42.00,
            emoji: "💐"
        },
        {
            id: 8,
            name: "Forêt Enchantée",
            description: "Fougères et fleurs vertes pour un intérieur zen",
            fullDescription: "Créez une atmosphère apaisante avec ce bouquet inspiré de la nature. Un mélange harmonieux de verdure et de textures qui apportera sérénité et fraîcheur à votre espace.",
            flowers: "Fougères, Eucalyptus, Hellébores vertes, Mousse",
            price: 40.00,
            emoji: "🌿"
        }
    ],
    en: [
        {
            id: 1,
            name: "Romantic Bouquet",
            description: "Red roses and peonies for special occasions",
            fullDescription: "A passionate bouquet composed of magnificent red roses and delicate peonies. Perfect for expressing your love on an anniversary, Valentine's Day, or simply to surprise your beloved.",
            flowers: "Red roses, Peonies, Eucalyptus",
            price: 45.00,
            emoji: "🌹"
        },
        {
            id: 2,
            name: "Spring Freshness",
            description: "Colorful tulips and country daisies",
            fullDescription: "Celebrate the arrival of spring with this joyful bouquet. The colorful tulips pair perfectly with daisies to create a composition full of life and freshness.",
            flowers: "Multicolored tulips, Daisies, Baby's breath",
            price: 35.00,
            emoji: "🌷"
        },
        {
            id: 3,
            name: "Golden Sun",
            description: "Bright sunflowers to brighten your day",
            fullDescription: "Bring the warmth of the sun into your home with this radiant bouquet. Sunflowers, symbols of happiness and loyalty, will illuminate any room with their golden glow.",
            flowers: "Sunflowers, Solidago, Green foliage",
            price: 38.00,
            emoji: "🌻"
        },
        {
            id: 4,
            name: "White Elegance",
            description: "White lilies and orchids, purity and refinement",
            fullDescription: "The embodiment of elegance and sophistication. This refined bouquet of white lilies and orchids is ideal for weddings, ceremonies, or to offer to someone special.",
            flowers: "White lilies, Phalaenopsis orchids, White roses",
            price: 55.00,
            emoji: "🌺"
        },
        {
            id: 5,
            name: "Wild Garden",
            description: "Country-style composition of wildflowers",
            fullDescription: "Escape to the countryside with this natural and authentic bouquet. A free and airy composition reminiscent of flowering meadows and beautiful summer days.",
            flowers: "Daisies, Cornflowers, Poppies, Grasses",
            price: 32.00,
            emoji: "🌼"
        },
        {
            id: 6,
            name: "Tropical Passion",
            description: "Hibiscus and exotic flowers in vivid colors",
            fullDescription: "Travel to the tropics with this explosion of colors. Carefully selected exotic flowers to create a warm and exotic atmosphere.",
            flowers: "Hibiscus, Bird of paradise, Anthurium, Tropical leaves",
            price: 48.00,
            emoji: "🌸"
        },
        {
            id: 7,
            name: "Pastel Softness",
            description: "Roses and hydrangeas in delicate shades",
            fullDescription: "A gentle bouquet with its soothing pastel tones. Roses blend harmoniously with hydrangeas to create a romantic and delicate composition.",
            flowers: "Pink roses, Hydrangeas, Lisianthus, Eucalyptus",
            price: 42.00,
            emoji: "💐"
        },
        {
            id: 8,
            name: "Enchanted Forest",
            description: "Ferns and green flowers for a zen interior",
            fullDescription: "Create a soothing atmosphere with this nature-inspired bouquet. A harmonious blend of greenery and textures that will bring serenity and freshness to your space.",
            flowers: "Ferns, Eucalyptus, Green hellebores, Moss",
            price: 40.00,
            emoji: "🌿"
        }
    ]
};

// Drugs Data (bilingual)
const drugs = {
    fr: [
        {
            id: 101,
            name: "Café Triple Dose",
            description: "Pour ceux qui ne dorment jamais",
            fullDescription: "Un expresso surpuissant capable de réveiller les morts. Parfait pour les nuits blanches de révision ou les lundis matins difficiles. Attention: peut provoquer des palpitations et une productivité excessive.",
            effects: "Énergie x1000, Insomnie garantie, Tremblements",
            duration: "6-8 heures de chaos",
            price: 15.00,
            emoji: "☕"
        },
        {
            id: 102,
            name: "Chocolat du Bonheur",
            description: "Endorphines pures en tablette",
            fullDescription: "Du chocolat noir 99% cacao importé directement de Suisse. Chaque carré libère une dose massive d'endorphines. Effet secondaire: vous ne pourrez plus jamais manger du chocolat normal.",
            effects: "Euphorie intense, Addiction immédiate, Sourire permanent",
            duration: "Jusqu'à la prochaine tablette",
            price: 25.00,
            emoji: "🍫"
        },
        {
            id: 103,
            name: "Sucre Raffiné Premium",
            description: "La poudre blanche légale",
            fullDescription: "Du sucre glace de la plus haute qualité. Se consomme pur pour les vrais amateurs ou dilué dans un café. Le dealer de votre dentiste vous remerciera.",
            effects: "Hyperactivité, Crash énergétique, Caries",
            duration: "30 min de folie puis dépression",
            price: 8.00,
            emoji: "🍬"
        },
        {
            id: 104,
            name: "Thé Matcha Hallucinant",
            description: "La zénitude poussée à l'extrême",
            fullDescription: "Un matcha si concentré qu'il vous transportera dans une autre dimension. Les moines zen l'utilisent pour atteindre l'illumination. Vous, vous l'utiliserez pour survivre aux réunions.",
            effects: "Calme suspect, Méditation forcée, Urine verte",
            duration: "3-4 heures de paix intérieure",
            price: 35.00,
            emoji: "🍵"
        },
        {
            id: 105,
            name: "Red Bull par Palettes",
            description: "Des ailes... et des insomnies",
            fullDescription: "Pourquoi une canette quand on peut avoir une palette entière? Idéal pour les gamers, les étudiants en période d'exams, et tous ceux qui considèrent le sommeil comme optionnel.",
            effects: "Ailes fictives, Tachycardie, Invincibilité temporaire",
            duration: "Toute la nuit et plus",
            price: 199.00,
            emoji: "🥤"
        },
        {
            id: 106,
            name: "Fromage Addictif",
            description: "La casomorphine naturelle",
            fullDescription: "Du fromage affiné contenant des niveaux records de casomorphine, l'opioïde naturel du lait. Une fois que vous commencez, vous ne pouvez plus vous arrêter. Littéralement.",
            effects: "Addiction fromagère, Bonheur lactique, Constipation",
            duration: "Permanent (c'est une addiction)",
            price: 45.00,
            emoji: "🧀"
        },
        {
            id: 107,
            name: "Série Netflix Illimitée",
            description: "La drogue dure du 21e siècle",
            fullDescription: "Un abonnement Netflix premium avec toutes les séries addictives. Inclut: perte de notion du temps, yeux rouges, et l'excuse 'encore un épisode'. Votre lit ne vous remerciera pas.",
            effects: "Binge-watching compulsif, Vie sociale détruite, 'Juste un épisode'",
            duration: "Jusqu'à 4h du matin minimum",
            price: 17.99,
            emoji: "📺"
        },
        {
            id: 108,
            name: "Wifi Fibre Illimité",
            description: "La dépendance moderne",
            fullDescription: "Une connexion internet ultra-rapide qui vous gardera connecté 24/7. Sans elle, vous ressentirez des symptômes de sevrage incluant anxiété, désorientation et conversations réelles avec des humains.",
            effects: "Dépendance totale, FOMO chronique, Pouce hypertrophié",
            duration: "Toute votre vie",
            price: 49.99,
            emoji: "📶"
        }
    ],
    en: [
        {
            id: 101,
            name: "Triple Shot Coffee",
            description: "For those who never sleep",
            fullDescription: "An overpowered espresso capable of waking the dead. Perfect for all-night study sessions or rough Monday mornings. Warning: may cause palpitations and excessive productivity.",
            effects: "Energy x1000, Guaranteed insomnia, Shaking",
            duration: "6-8 hours of chaos",
            price: 15.00,
            emoji: "☕"
        },
        {
            id: 102,
            name: "Happiness Chocolate",
            description: "Pure endorphins in bar form",
            fullDescription: "99% dark chocolate imported directly from Switzerland. Each square releases a massive dose of endorphins. Side effect: you'll never be able to eat normal chocolate again.",
            effects: "Intense euphoria, Immediate addiction, Permanent smile",
            duration: "Until the next bar",
            price: 25.00,
            emoji: "🍫"
        },
        {
            id: 103,
            name: "Premium Refined Sugar",
            description: "The legal white powder",
            fullDescription: "The highest quality powdered sugar. Consumed pure by true connoisseurs or diluted in coffee. Your dentist's dealer will thank you.",
            effects: "Hyperactivity, Energy crash, Cavities",
            duration: "30 min of madness then depression",
            price: 8.00,
            emoji: "🍬"
        },
        {
            id: 104,
            name: "Hallucinogenic Matcha Tea",
            description: "Extreme zen vibes",
            fullDescription: "A matcha so concentrated it will transport you to another dimension. Zen monks use it to reach enlightenment. You'll use it to survive meetings.",
            effects: "Suspicious calm, Forced meditation, Green urine",
            duration: "3-4 hours of inner peace",
            price: 35.00,
            emoji: "🍵"
        },
        {
            id: 105,
            name: "Red Bull by the Pallet",
            description: "Wings... and insomnia",
            fullDescription: "Why one can when you can have a whole pallet? Ideal for gamers, students during exams, and anyone who considers sleep optional.",
            effects: "Fictional wings, Tachycardia, Temporary invincibility",
            duration: "All night and more",
            price: 199.00,
            emoji: "🥤"
        },
        {
            id: 106,
            name: "Addictive Cheese",
            description: "Natural casomorphin",
            fullDescription: "Aged cheese containing record levels of casomorphin, milk's natural opioid. Once you start, you can't stop. Literally.",
            effects: "Cheese addiction, Dairy happiness, Constipation",
            duration: "Permanent (it's an addiction)",
            price: 45.00,
            emoji: "🧀"
        },
        {
            id: 107,
            name: "Unlimited Netflix Series",
            description: "The hard drug of the 21st century",
            fullDescription: "A premium Netflix subscription with all addictive series. Includes: loss of time perception, red eyes, and the 'just one more episode' excuse. Your bed won't thank you.",
            effects: "Compulsive binge-watching, Destroyed social life, 'Just one episode'",
            duration: "Until 4am minimum",
            price: 17.99,
            emoji: "📺"
        },
        {
            id: 108,
            name: "Unlimited Fiber Wifi",
            description: "The modern addiction",
            fullDescription: "An ultra-fast internet connection that will keep you connected 24/7. Without it, you'll experience withdrawal symptoms including anxiety, disorientation, and actual conversations with humans.",
            effects: "Total dependence, Chronic FOMO, Hypertrophied thumb",
            duration: "Your entire life",
            price: 49.99,
            emoji: "📶"
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

    // Re-render products, drugs and cart
    renderProducts();
    renderDrugs();
    updateCartUI();
}

// Get translation
function t(key) {
    return translations[currentLang][key] || key;
}

// Current modal product
let currentModalProductId = null;
let currentModalProductType = 'flower';

// Render Products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const currentProducts = products[currentLang];

    grid.innerHTML = currentProducts.map(product => `
        <article class="product-card" onclick="openModal(${product.id})">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        ${t('products.add')}
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// Render Drugs
function renderDrugs() {
    const grid = document.getElementById('drugs-grid');
    const currentDrugs = drugs[currentLang];

    grid.innerHTML = currentDrugs.map(drug => `
        <article class="product-card" onclick="openModal(${drug.id}, 'drug')">
            <div class="product-image">${drug.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${drug.name}</h3>
                <p class="product-description">${drug.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(drug.price)}</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${drug.id}, 'drug')">
                        ${t('products.add')}
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// Open Product Modal
function openModal(productId, type = 'flower') {
    const dataSource = type === 'drug' ? drugs : products;
    const product = dataSource[currentLang].find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;
    currentModalProductType = type;

    document.getElementById('modal-image').textContent = product.emoji;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-description').textContent = product.fullDescription;
    document.getElementById('modal-price').textContent = formatPrice(product.price);
    document.getElementById('modal-add-btn').textContent = t('modal.add');

    let infoHTML = '';
    if (type === 'drug') {
        infoHTML = `
            <div class="modal-info-item">
                <span>⚡</span>
                <strong>${t('drugs.effects')}:</strong> ${product.effects}
            </div>
            <div class="modal-info-item">
                <span>⏱️</span>
                <strong>${t('drugs.duration')}:</strong> ${product.duration}
            </div>
            <div class="modal-info-item">
                <span>⚠️</span>
                ${t('drugs.warning')}
            </div>
        `;
    } else {
        infoHTML = `
            <div class="modal-info-item">
                <span>💐</span>
                <strong>${t('modal.flowers')}:</strong> ${product.flowers}
            </div>
            <div class="modal-info-item">
                <span>⏱️</span>
                <strong>${t('modal.duration')}:</strong> ${t('modal.days')}
            </div>
            <div class="modal-info-item">
                <span>🚚</span>
                ${t('modal.delivery')}
            </div>
        `;
    }
    document.getElementById('modal-info').innerHTML = infoHTML;

    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('product-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.getElementById('product-modal').classList.remove('active');
    document.body.style.overflow = '';
    currentModalProductId = null;
}

// Add to Cart from Modal
function addToCartFromModal() {
    if (currentModalProductId) {
        addToCart(currentModalProductId, currentModalProductType);
        closeModal();
    }
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
function addToCart(productId, type = 'flower') {
    const dataSource = type === 'drug' ? drugs : products;
    const product = dataSource[currentLang].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            type: type,
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
            const dataSource = item.type === 'drug' ? drugs : products;
            const product = dataSource[currentLang].find(p => p.id === item.id);
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

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});
