// Translations
const translations = {
    fr: {
        light: {
            // Navigation
            "nav.home": "Accueil",
            "nav.products": "Nos Fleurs",
            "nav.about": "À Propos",
            "nav.contact": "Contact",

            // Hero
            "hero.title": "Des fleurs pour chaque moment",
            "hero.subtitle": "Découvrez notre collection de bouquets artisanaux, créés avec passion et livrés avec amour.",
            "hero.cta": "Découvrir nos fleurs",

            // Features
            "features.1.title": "Livraison Express",
            "features.1.desc": "Livraison le jour même pour toute commande avant 14h",
            "features.2.title": "Fleurs Fraîches",
            "features.2.desc": "Nos fleurs sont cueillies et livrées sous 24h",
            "features.3.title": "Message Personnalisé",
            "features.3.desc": "Ajoutez un message gratuit à votre bouquet",

            // Products
            "products.title": "Nos Bouquets",
            "products.subtitle": "Des créations florales uniques pour illuminer votre quotidien",
            "products.add": "Ajouter",

            // About
            "about.title": "Notre Passion",
            "about.text1": "Depuis plus de 20 ans, Fleurs & Jardins est votre artisan fleuriste de confiance. Nous sélectionnons chaque jour les plus belles fleurs auprès de producteurs locaux.",
            "about.text2": "Notre équipe passionnée met tout son savoir-faire au service de vos émotions. Que ce soit pour un anniversaire, un mariage ou simplement pour faire plaisir.",

            // Contact
            "contact.title": "Contactez-nous",
            "contact.address": "Adresse",
            "contact.address.value": "123 Rue des Fleurs, 75001 Paris",
            "contact.phone": "Téléphone",
            "contact.phone.value": "01 23 45 67 89",
            "contact.email": "Email",
            "contact.email.value": "contact@fleurs-jardins.fr",
            "contact.hours": "Horaires",
            "contact.hours.value": "Lun-Sam: 9h-19h",
            "contact.form.name": "Votre nom",
            "contact.form.email": "Votre email",
            "contact.form.message": "Votre message",
            "contact.form.send": "Envoyer",

            // Footer
            "footer.title": "🌸 Fleurs & Jardins",
            "footer.description": "Votre fleuriste artisanal depuis 2004. Des fleurs fraîches pour tous vos moments précieux.",
            "footer.quicklinks": "Liens Rapides",
            "footer.followus": "Suivez-nous",
            "footer.rights": "© 2026 Fleurs & Jardins. Tous droits réservés.",

            // Cart
            "cart.title": "Votre Panier",
            "cart.total": "Total:",
            "cart.checkout": "Commander",
            "cart.empty": "Votre panier est vide",
            "cart.added": "ajouté au panier",

            // Modal
            "modal.add": "Ajouter au panier",
            "modal.info1.label": "Fleurs incluses",
            "modal.info2.label": "Durée de vie",
            "modal.info2.value": "7-10 jours",
            "modal.info3": "Livraison express disponible",

            // Messages
            "message.sent": "Message envoyé avec succès!",
            "checkout.thanks": "Merci pour votre commande!",
            "checkout.total": "Total:",
            "checkout.delivery": "Nous vous contacterons pour la livraison.",

            // Checkout Modal
            "checkout.modal.title": "Finaliser la commande",
            "checkout.confirm": "Confirmer la commande",
            "checkout.name": "Nom complet",
            "checkout.email": "Email",
            "checkout.phone": "Téléphone",
            "checkout.address": "Adresse de livraison"
        },
        dark: {
            // Navigation
            "nav.home": "Accueil",
            "nav.products": "Nos Plantes",
            "nav.about": "À Propos",
            "nav.contact": "Contact",

            // Hero
            "hero.title": "Des plantes médicinales ancestrales",
            "hero.subtitle": "Découvrez notre collection de remèdes naturels, cultivés avec soin et livrés discrètement.",
            "hero.cta": "Découvrir nos plantes",

            // Features
            "features.1.title": "Livraison Discrète",
            "features.1.desc": "Emballage neutre, livreur muet, aucune question",
            "features.2.title": "100% Naturel",
            "features.2.desc": "Cultivé en pleine nature, sans pesticides chimiques",
            "features.3.title": "Conseil Personnalisé",
            "features.3.desc": "Notre chaman est disponible 24/7 pour vous guider",

            // Products
            "products.title": "Nos Plantes Médicinales",
            "products.subtitle": "Des remèdes ancestraux pour élever votre conscience",
            "products.add": "Ajouter",

            // About
            "about.title": "Notre Mission",
            "about.text1": "Depuis des millénaires, les plantes médicinales accompagnent l'humanité. Herbes & Paradis perpétue cette tradition avec une sélection des meilleures variétés mondiales.",
            "about.text2": "Notre équipe de chamans certifiés met tout son savoir ancestral au service de votre bien-être. Pour la méditation, la créativité ou juste le fun.",

            // Contact
            "contact.title": "Contactez-nous",
            "contact.address": "Point de rendez-vous",
            "contact.address.value": "Derrière le Kebab, Ruelle Sombre",
            "contact.phone": "Signal/Telegram",
            "contact.phone.value": "@herbs_paradise_dealer",
            "contact.email": "Email sécurisé",
            "contact.email.value": "contact@protonmail.com",
            "contact.hours": "Disponibilité",
            "contact.hours.value": "24/7 (on dort jamais)",
            "contact.form.name": "Votre pseudo",
            "contact.form.email": "Email jetable",
            "contact.form.message": "Votre commande spéciale",
            "contact.form.send": "Envoyer (crypté)",

            // Footer
            "footer.title": "🌿 Herbes & Paradis",
            "footer.description": "Votre herboriste de confiance depuis l'Antiquité. Des plantes naturelles pour tous vos voyages intérieurs.",
            "footer.quicklinks": "Liens Rapides",
            "footer.followus": "Suivez-nous (discrètement)",
            "footer.rights": "© 2026 Herbes & Paradis. Aucune trace conservée.",

            // Cart
            "cart.title": "Votre Sachet",
            "cart.total": "Total:",
            "cart.checkout": "Valider la commande",
            "cart.empty": "Votre sachet est vide",
            "cart.added": "ajouté au sachet",

            // Modal
            "modal.add": "Ajouter au sachet",
            "modal.info1.label": "Effets",
            "modal.info2.label": "Durée",
            "modal.info3": "⚠️ Usage récréatif uniquement",

            // Messages
            "message.sent": "Message crypté envoyé!",
            "checkout.thanks": "Merci pour votre confiance!",
            "checkout.total": "Total:",
            "checkout.delivery": "Notre pigeon voyageur vous contactera.",

            // Checkout Modal
            "checkout.modal.title": "Finaliser la commande",
            "checkout.confirm": "Confirmer la commande",
            "checkout.name": "Pseudo / Nom de code",
            "checkout.email": "Email sécurisé",
            "checkout.phone": "Signal / Telegram",
            "checkout.address": "Point de rendez-vous"
        }
    },
    en: {
        light: {
            // Navigation
            "nav.home": "Home",
            "nav.products": "Our Flowers",
            "nav.about": "About Us",
            "nav.contact": "Contact",

            // Hero
            "hero.title": "Flowers for every moment",
            "hero.subtitle": "Discover our collection of artisanal bouquets, created with passion and delivered with love.",
            "hero.cta": "Discover our flowers",

            // Features
            "features.1.title": "Express Delivery",
            "features.1.desc": "Same-day delivery for orders placed before 2 PM",
            "features.2.title": "Fresh Flowers",
            "features.2.desc": "Our flowers are picked and delivered within 24h",
            "features.3.title": "Personalized Message",
            "features.3.desc": "Add a free message to your bouquet",

            // Products
            "products.title": "Our Bouquets",
            "products.subtitle": "Unique floral creations to brighten your day",
            "products.add": "Add to cart",

            // About
            "about.title": "Our Passion",
            "about.text1": "For over 20 years, Fleurs & Jardins has been your trusted artisan florist. Every day, we select the most beautiful flowers from local growers.",
            "about.text2": "Our passionate team puts all their expertise at the service of your emotions. Whether it's for a birthday, a wedding, or simply to bring joy.",

            // Contact
            "contact.title": "Contact Us",
            "contact.address": "Address",
            "contact.address.value": "123 Flower Street, 75001 Paris",
            "contact.phone": "Phone",
            "contact.phone.value": "+33 1 23 45 67 89",
            "contact.email": "Email",
            "contact.email.value": "contact@fleurs-jardins.fr",
            "contact.hours": "Hours",
            "contact.hours.value": "Mon-Sat: 9am-7pm",
            "contact.form.name": "Your name",
            "contact.form.email": "Your email",
            "contact.form.message": "Your message",
            "contact.form.send": "Send",

            // Footer
            "footer.title": "🌸 Fleurs & Jardins",
            "footer.description": "Your artisan florist since 2004. Fresh flowers for all your precious moments.",
            "footer.quicklinks": "Quick Links",
            "footer.followus": "Follow Us",
            "footer.rights": "© 2026 Fleurs & Jardins. All rights reserved.",

            // Cart
            "cart.title": "Your Cart",
            "cart.total": "Total:",
            "cart.checkout": "Checkout",
            "cart.empty": "Your cart is empty",
            "cart.added": "added to cart",

            // Modal
            "modal.add": "Add to cart",
            "modal.info1.label": "Included flowers",
            "modal.info2.label": "Lifespan",
            "modal.info2.value": "7-10 days",
            "modal.info3": "Express delivery available",

            // Messages
            "message.sent": "Message sent successfully!",
            "checkout.thanks": "Thank you for your order!",
            "checkout.total": "Total:",
            "checkout.delivery": "We will contact you for delivery.",

            // Checkout Modal
            "checkout.modal.title": "Complete your order",
            "checkout.confirm": "Confirm order",
            "checkout.name": "Full name",
            "checkout.email": "Email",
            "checkout.phone": "Phone",
            "checkout.address": "Delivery address"
        },
        dark: {
            // Navigation
            "nav.home": "Home",
            "nav.products": "Our Plants",
            "nav.about": "About Us",
            "nav.contact": "Contact",

            // Hero
            "hero.title": "Ancestral medicinal plants",
            "hero.subtitle": "Discover our collection of natural remedies, carefully cultivated and discreetly delivered.",
            "hero.cta": "Discover our plants",

            // Features
            "features.1.title": "Discreet Delivery",
            "features.1.desc": "Neutral packaging, silent delivery, no questions asked",
            "features.2.title": "100% Natural",
            "features.2.desc": "Grown in nature, without chemical pesticides",
            "features.3.title": "Personal Guidance",
            "features.3.desc": "Our shaman is available 24/7 to guide you",

            // Products
            "products.title": "Our Medicinal Plants",
            "products.subtitle": "Ancestral remedies to elevate your consciousness",
            "products.add": "Add to bag",

            // About
            "about.title": "Our Mission",
            "about.text1": "For millennia, medicinal plants have accompanied humanity. Herbs & Paradise continues this tradition with a selection of the world's finest varieties.",
            "about.text2": "Our team of certified shamans puts all their ancestral knowledge at the service of your well-being. For meditation, creativity, or just for fun.",

            // Contact
            "contact.title": "Contact Us",
            "contact.address": "Meeting point",
            "contact.address.value": "Behind the Kebab, Dark Alley",
            "contact.phone": "Signal/Telegram",
            "contact.phone.value": "@herbs_paradise_dealer",
            "contact.email": "Secure Email",
            "contact.email.value": "contact@protonmail.com",
            "contact.hours": "Availability",
            "contact.hours.value": "24/7 (we never sleep)",
            "contact.form.name": "Your alias",
            "contact.form.email": "Burner email",
            "contact.form.message": "Your special order",
            "contact.form.send": "Send (encrypted)",

            // Footer
            "footer.title": "🌿 Herbs & Paradise",
            "footer.description": "Your trusted herbalist since Antiquity. Natural plants for all your inner journeys.",
            "footer.quicklinks": "Quick Links",
            "footer.followus": "Follow Us (discreetly)",
            "footer.rights": "© 2026 Herbs & Paradise. No records kept.",

            // Cart
            "cart.title": "Your Bag",
            "cart.total": "Total:",
            "cart.checkout": "Confirm Order",
            "cart.empty": "Your bag is empty",
            "cart.added": "added to bag",

            // Modal
            "modal.add": "Add to bag",
            "modal.info1.label": "Effects",
            "modal.info2.label": "Duration",
            "modal.info3": "⚠️ Recreational use only",

            // Messages
            "message.sent": "Encrypted message sent!",
            "checkout.thanks": "Thank you for your trust!",
            "checkout.total": "Total:",
            "checkout.delivery": "Our carrier pigeon will contact you.",

            // Checkout Modal
            "checkout.modal.title": "Complete your order",
            "checkout.confirm": "Confirm order",
            "checkout.name": "Alias / Code name",
            "checkout.email": "Secure email",
            "checkout.phone": "Signal / Telegram",
            "checkout.address": "Meeting point"
        }
    }
};

// Products Data - Light Theme (Flowers)
const productsLight = {
    fr: [
        {
            id: 1,
            name: "Bouquet Romantique",
            description: "Roses rouges et pivoines pour les grandes occasions",
            fullDescription: "Un bouquet passionné composé de magnifiques roses rouges et de pivoines délicates. Parfait pour exprimer votre amour lors d'un anniversaire, de la Saint-Valentin ou simplement pour surprendre l'être aimé.",
            info1: "Roses rouges, Pivoines, Eucalyptus",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500"
        },
        {
            id: 2,
            name: "Fraîcheur Printanière",
            description: "Tulipes colorées et marguerites champêtres",
            fullDescription: "Célébrez l'arrivée du printemps avec ce bouquet joyeux. Les tulipes aux couleurs variées s'associent parfaitement aux marguerites pour créer une composition pleine de vie.",
            info1: "Tulipes multicolores, Marguerites, Gypsophile",
            price: 35.00,
            image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500"
        },
        {
            id: 3,
            name: "Soleil d'Or",
            description: "Tournesols lumineux pour égayer votre journée",
            fullDescription: "Apportez la chaleur du soleil dans votre intérieur avec ce bouquet radieux. Les tournesols illumineront n'importe quelle pièce de leur éclat doré.",
            info1: "Tournesols, Solidago, Feuillage vert",
            price: 38.00,
            image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500"
        },
        {
            id: 4,
            name: "Élégance Blanche",
            description: "Lys et orchidées blanches, pureté et raffinement",
            fullDescription: "L'incarnation de l'élégance et de la sophistication. Ce bouquet raffiné est idéal pour les mariages ou les cérémonies.",
            info1: "Lys blancs, Orchidées, Roses blanches",
            price: 55.00,
            image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500"
        },
        {
            id: 5,
            name: "Jardin Sauvage",
            description: "Composition champêtre de fleurs des champs",
            fullDescription: "Évadez-vous à la campagne avec ce bouquet naturel et authentique. Une composition libre qui rappelle les prairies fleuries.",
            info1: "Marguerites, Bleuets, Coquelicots",
            price: 32.00,
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
        },
        {
            id: 6,
            name: "Passion Tropicale",
            description: "Hibiscus et fleurs exotiques aux couleurs vives",
            fullDescription: "Voyagez sous les tropiques avec cette explosion de couleurs. Des fleurs exotiques pour une ambiance chaleureuse.",
            info1: "Hibiscus, Strelitzia, Anthurium",
            price: 48.00,
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500"
        },
        {
            id: 7,
            name: "Douceur Pastel",
            description: "Roses et hortensias aux teintes délicates",
            fullDescription: "Un bouquet tout en douceur avec ses teintes pastel apaisantes. Une composition romantique et délicate.",
            info1: "Roses roses, Hortensias, Lisianthus",
            price: 42.00,
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500"
        },
        {
            id: 8,
            name: "Forêt Enchantée",
            description: "Fougères et fleurs vertes pour un intérieur zen",
            fullDescription: "Créez une atmosphère apaisante avec ce bouquet inspiré de la nature. Sérénité et fraîcheur garanties.",
            info1: "Fougères, Eucalyptus, Hellébores vertes",
            price: 40.00,
            image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500"
        }
    ],
    en: [
        {
            id: 1,
            name: "Romantic Bouquet",
            description: "Red roses and peonies for special occasions",
            fullDescription: "A passionate bouquet of magnificent red roses and delicate peonies. Perfect for expressing your love.",
            info1: "Red roses, Peonies, Eucalyptus",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500"
        },
        {
            id: 2,
            name: "Spring Freshness",
            description: "Colorful tulips and country daisies",
            fullDescription: "Celebrate the arrival of spring with this joyful bouquet. Colorful tulips paired with daisies.",
            info1: "Multicolored tulips, Daisies, Baby's breath",
            price: 35.00,
            image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500"
        },
        {
            id: 3,
            name: "Golden Sun",
            description: "Bright sunflowers to brighten your day",
            fullDescription: "Bring the warmth of the sun into your home with this radiant bouquet of sunflowers.",
            info1: "Sunflowers, Solidago, Green foliage",
            price: 38.00,
            image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500"
        },
        {
            id: 4,
            name: "White Elegance",
            description: "White lilies and orchids, purity and refinement",
            fullDescription: "The embodiment of elegance and sophistication. Ideal for weddings or ceremonies.",
            info1: "White lilies, Orchids, White roses",
            price: 55.00,
            image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500"
        },
        {
            id: 5,
            name: "Wild Garden",
            description: "Country-style composition of wildflowers",
            fullDescription: "Escape to the countryside with this natural and authentic bouquet of wildflowers.",
            info1: "Daisies, Cornflowers, Poppies",
            price: 32.00,
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
        },
        {
            id: 6,
            name: "Tropical Passion",
            description: "Hibiscus and exotic flowers in vivid colors",
            fullDescription: "Travel to the tropics with this explosion of colors and exotic flowers.",
            info1: "Hibiscus, Bird of paradise, Anthurium",
            price: 48.00,
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500"
        },
        {
            id: 7,
            name: "Pastel Softness",
            description: "Roses and hydrangeas in delicate shades",
            fullDescription: "A gentle bouquet with soothing pastel tones. Romantic and delicate.",
            info1: "Pink roses, Hydrangeas, Lisianthus",
            price: 42.00,
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500"
        },
        {
            id: 8,
            name: "Enchanted Forest",
            description: "Ferns and green flowers for a zen interior",
            fullDescription: "Create a soothing atmosphere with this nature-inspired bouquet.",
            info1: "Ferns, Eucalyptus, Green hellebores",
            price: 40.00,
            image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500"
        }
    ]
};

// Products Data - Dark Theme (Drugs)
const productsDark = {
    fr: [
        {
            id: 101,
            name: "Cannabis Premium",
            description: "La plante relaxante par excellence",
            fullDescription: "Notre variété maison cultivée avec amour dans les montagnes. Parfaite pour une soirée Netflix ou une session créative. Effet garanti: vous trouverez tout hilarant.",
            info1: "Relaxation, Euphorie, Fringales incontrôlables",
            info2: "2-4 heures de bonheur",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1503262028195-93c528f03218?w=500"
        },
        {
            id: 102,
            name: "Cocaïne Colombienne",
            description: "Pour les soirées qui n'en finissent plus",
            fullDescription: "Importée directement des meilleures plantations. Vous donnera l'énergie de refaire le monde à 4h du matin. Effet secondaire: vous deviendrez expert en tout.",
            info1: "Énergie infinie, Confiance absolue, Mâchoire qui bouge",
            info2: "30-60 min (puis repeat)",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=500"
        },
        {
            id: 103,
            name: "MDMA Love",
            description: "L'amour en cristaux",
            fullDescription: "La molécule de l'amour universel. Vous aimerez tout le monde, même votre ex. Attention: risque de câlins non consentis et de déclarations d'amour à des inconnus.",
            info1: "Amour universel, Envie de danser, Discussions profondes",
            info2: "4-6 heures de love",
            price: 35.00,
            image: "https://pictures.laprovence.com/cdn-cgi/image/width=800,format=auto,quality=80/media/destination-sante/20250117/ce53e5ea90a2c323845fac0c4307de6b6fb4275222c6793abef1517506eba415.jpg"
        },
        {
            id: 104,
            name: "LSD Artisanal",
            description: "Voyage intérieur garanti",
            fullDescription: "Un buvard, huit heures de voyage sans quitter votre salon. Vous comprendrez enfin le sens de la vie (puis vous l'oublierez). Prévoir un trip-sitter et de la bonne musique.",
            info1: "Hallucinations, Révélations cosmiques, Murs qui respirent",
            info2: "8-12 heures d'aventure",
            price: 25.00,
            image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500"
        },
        {
            id: 105,
            name: "Champignons Magiques",
            description: "La nature à l'état pur",
            fullDescription: "Cueillis à la main dans nos forêts secrètes. Connexion spirituelle avec Mère Nature garantie. Possibilité de parler aux arbres et de comprendre leurs réponses.",
            info1: "Connexion nature, Fous rires, Visions mystiques",
            info2: "4-6 heures de magie",
            price: 40.00,
            image: "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Psychedelic_Mushrooms_Color-1200x628-Facebook.jpg"
        },
        {
            id: 106,
            name: "Kétamine Spéciale",
            description: "Le trou noir récréatif",
            fullDescription: "Pour les explorateurs de dimensions parallèles. Vous quitterez votre corps le temps d'une soirée. Effet secondaire: difficulté à marcher droit (mais qui a besoin de marcher?).",
            info1: "Dissociation, K-hole possible, Gravité optionnelle",
            info2: "1-2 heures hors du corps",
            price: 55.00,
            image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500"
        },
        {
            id: 107,
            name: "Héroïne du Chef",
            description: "La recette secrète de grand-mère",
            fullDescription: "Pour les connaisseurs uniquement. Un voyage au pays des rêves dont on ne veut plus revenir. Note: la grand-mère en question était pharmacienne au 19ème siècle.",
            info1: "Béatitude totale, Monde extérieur inexistant",
            info2: "4-5 heures de néant",
            price: 80.00,
            image: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=500"
        },
        {
            id: 108,
            name: "Méthamphétamine Breaking",
            description: "La recette de Walter White",
            fullDescription: "99.1% de pureté, comme dans la série. Vous ne dormirez pas pendant 3 jours et vous nettoierez votre appartement 47 fois. Heisenberg approuve.",
            info1: "Énergie surhumaine, Productivité maniaque, Paranoïa créative",
            info2: "12-24 heures (minimum)",
            price: 150.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXC7CulSf7shJx49z0EXjVUqF7sstN8Dv5aA&s"
        }
    ],
    en: [
        {
            id: 101,
            name: "Premium Cannabis",
            description: "The ultimate relaxation plant",
            fullDescription: "Our house variety grown with love in the mountains. Perfect for a Netflix evening or a creative session. Guaranteed effect: you'll find everything hilarious.",
            info1: "Relaxation, Euphoria, Uncontrollable munchies",
            info2: "2-4 hours of happiness",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1503262028195-93c528f03218?w=500"
        },
        {
            id: 102,
            name: "Colombian Cocaine",
            description: "For never-ending parties",
            fullDescription: "Imported directly from the finest plantations. Will give you the energy to solve world problems at 4am. Side effect: you'll become an expert in everything.",
            info1: "Infinite energy, Absolute confidence, Jaw movements",
            info2: "30-60 min (then repeat)",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=500"
        },
        {
            id: 103,
            name: "MDMA Love",
            description: "Love in crystal form",
            fullDescription: "The molecule of universal love. You'll love everyone, even your ex. Warning: risk of non-consensual hugs and love declarations to strangers.",
            info1: "Universal love, Urge to dance, Deep conversations",
            info2: "4-6 hours of love",
            price: 35.00,
            image: "https://pictures.laprovence.com/cdn-cgi/image/width=800,format=auto,quality=80/media/destination-sante/20250117/ce53e5ea90a2c323845fac0c4307de6b6fb4275222c6793abef1517506eba415.jpg"
        },
        {
            id: 104,
            name: "Artisanal LSD",
            description: "Inner journey guaranteed",
            fullDescription: "One tab, eight hours of travel without leaving your couch. You'll finally understand the meaning of life (then forget it). Trip-sitter and good music recommended.",
            info1: "Hallucinations, Cosmic revelations, Breathing walls",
            info2: "8-12 hours of adventure",
            price: 25.00,
            image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500"
        },
        {
            id: 105,
            name: "Magic Mushrooms",
            description: "Pure nature",
            fullDescription: "Hand-picked in our secret forests. Spiritual connection with Mother Nature guaranteed. You may talk to trees and understand their answers.",
            info1: "Nature connection, Giggles, Mystical visions",
            info2: "4-6 hours of magic",
            price: 40.00,
            image: "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Psychedelic_Mushrooms_Color-1200x628-Facebook.jpg"
        },
        {
            id: 106,
            name: "Special Ketamine",
            description: "The recreational black hole",
            fullDescription: "For parallel dimension explorers. You'll leave your body for the evening. Side effect: difficulty walking straight (but who needs to walk?).",
            info1: "Dissociation, K-hole possible, Gravity optional",
            info2: "1-2 hours out of body",
            price: 55.00,
            image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500"
        },
        {
            id: 107,
            name: "Chef's Heroin",
            description: "Grandma's secret recipe",
            fullDescription: "For connoisseurs only. A journey to dreamland you won't want to return from. Note: said grandma was a 19th century pharmacist.",
            info1: "Total bliss, Outside world nonexistent",
            info2: "4-5 hours of void",
            price: 80.00,
            image: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=500"
        },
        {
            id: 108,
            name: "Breaking Methamphetamine",
            description: "Walter White's recipe",
            fullDescription: "99.1% purity, just like the show. You won't sleep for 3 days and you'll clean your apartment 47 times. Heisenberg approved.",
            info1: "Superhuman energy, Manic productivity, Creative paranoia",
            info2: "12-24 hours (minimum)",
            price: 150.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXC7CulSf7shJx49z0EXjVUqF7sstN8Dv5aA&s"
        }
    ]
};

// State
let currentLang = localStorage.getItem('lang') || 'fr';
let currentTheme = localStorage.getItem('theme') || 'light';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentModalProductId = null;

// Security: Rate limiting
const rateLimiter = {
    lastSubmit: 0,
    minInterval: 30000, // 30 seconds between submissions
    canSubmit: function() {
        const now = Date.now();
        if (now - this.lastSubmit < this.minInterval) {
            return false;
        }
        this.lastSubmit = now;
        return true;
    }
};

// Security: Sanitize input to prevent XSS
function sanitizeInput(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML.trim();
}

// Security: Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Security: Get webhook URL (light obfuscation)
function getWebhookUrl() {
    const encoded = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQ2ODU5NzUwMzk3NTc1MTc2NS9iNFJzQ0JZdGhhRmlsQlRFaXZNc1JLbUo4cmxCLUphYzRzcURGRFRrSFk5WjlFRXp4a0tRUnk4WjRoOUo1LWVyMjB1OQ==';
    try {
        return atob(encoded);
    } catch(e) {
        return null;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme-toggle').checked = currentTheme === 'dark';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    applyTranslations();
    renderProducts();
    updateCartUI();
});

// Toggle Theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    document.body.classList.toggle('dark-theme');

    // Clear cart when switching themes
    cart = [];
    saveCart();

    applyTranslations();
    renderProducts();
    updateCartUI();

    // Update logo
    const logoText = document.querySelector('.logo-text');
    const logoIcon = document.querySelector('.logo-icon');
    if (currentTheme === 'dark') {
        logoText.textContent = currentLang === 'fr' ? 'Herbes & Paradis' : 'Herbs & Paradise';
        logoIcon.textContent = '🌿';
    } else {
        logoText.textContent = 'Fleurs & Jardins';
        logoIcon.textContent = '🌸';
    }
}

// Set Language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
    });

    applyTranslations();
    renderProducts();
    updateCartUI();

    // Update logo for language
    const logoText = document.querySelector('.logo-text');
    if (currentTheme === 'dark') {
        logoText.textContent = lang === 'fr' ? 'Herbes & Paradis' : 'Herbs & Paradise';
    }
}

// Apply translations
function applyTranslations() {
    const trans = translations[currentLang][currentTheme];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (trans[key]) {
            el.textContent = trans[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (trans[key]) {
            el.placeholder = trans[key];
        }
    });

    // Update feature icons for dark theme
    const featureIcons = document.querySelectorAll('.feature-icon');
    if (currentTheme === 'dark') {
        featureIcons[0].textContent = '📦';
        featureIcons[1].textContent = '🌱';
        featureIcons[2].textContent = '🔮';
    } else {
        featureIcons[0].textContent = '🚚';
        featureIcons[1].textContent = '🌿';
        featureIcons[2].textContent = '💝';
    }

    // Update about image
    const aboutImg = document.querySelector('.about-img-placeholder');
    if (aboutImg) {
        aboutImg.textContent = currentTheme === 'dark' ? '🌿' : '🌺';
    }
}

// Get translation
function t(key) {
    return translations[currentLang][currentTheme][key] || key;
}

// Get current products
function getCurrentProducts() {
    return currentTheme === 'dark' ? productsDark[currentLang] : productsLight[currentLang];
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const currentProducts = getCurrentProducts();

    grid.innerHTML = currentProducts.map(product => `
        <article class="product-card" onclick="openModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
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

// Format Price
function formatPrice(price) {
    if (currentLang === 'en') {
        return '€' + price.toFixed(2);
    }
    return price.toFixed(2).replace('.', ',') + ' €';
}

// Open Modal
function openModal(productId) {
    const product = getCurrentProducts().find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;

    document.getElementById('modal-image').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-description').textContent = product.fullDescription;
    document.getElementById('modal-price').textContent = formatPrice(product.price);
    document.getElementById('modal-add-btn').textContent = t('modal.add');

    let info2Value = currentTheme === 'dark' ? product.info2 : t('modal.info2.value');

    document.getElementById('modal-info').innerHTML = `
        <div class="modal-info-item">
            <span>${currentTheme === 'dark' ? '⚡' : '💐'}</span>
            <strong>${t('modal.info1.label')}:</strong> ${product.info1}
        </div>
        <div class="modal-info-item">
            <span>⏱️</span>
            <strong>${t('modal.info2.label')}:</strong> ${info2Value}
        </div>
        <div class="modal-info-item">
            <span>${currentTheme === 'dark' ? '⚠️' : '🚚'}</span>
            ${t('modal.info3')}
        </div>
    `;

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
        addToCart(currentModalProductId);
        closeModal();
    }
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
    const product = getCurrentProducts().find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            price: product.price,
            image: product.image,
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

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const currentProducts = getCurrentProducts();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">${currentTheme === 'dark' ? '🌿' : '🛒'}</span>
                <p>${t('cart.empty')}</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => {
            const product = currentProducts.find(p => p.id === item.id);
            return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${product ? product.name : 'Product'}">
                    </div>
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

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

// Checkout - Open modal
function checkout() {
    if (cart.length === 0) {
        showToast(t('cart.empty'));
        return;
    }
    openCheckoutModal();
}

// Open Checkout Modal
function openCheckoutModal() {
    const currentProducts = getCurrentProducts();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Build summary
    const summaryHTML = cart.map(item => {
        const product = currentProducts.find(p => p.id === item.id);
        return `
            <div class="checkout-item">
                <div>
                    <div class="checkout-item-name">${product ? product.name : 'Produit'}</div>
                    <div class="checkout-item-details">x${item.quantity}</div>
                </div>
                <div class="checkout-item-details">${formatPrice(item.price * item.quantity)}</div>
            </div>
        `;
    }).join('');

    document.getElementById('checkout-summary').innerHTML = summaryHTML;
    document.getElementById('checkout-total-display').textContent = formatPrice(total);

    // Update placeholders
    document.getElementById('checkout-name').placeholder = t('checkout.name');
    document.getElementById('checkout-email').placeholder = t('checkout.email');
    document.getElementById('checkout-phone').placeholder = t('checkout.phone');
    document.getElementById('checkout-address').placeholder = t('checkout.address');

    document.getElementById('checkout-overlay').classList.add('active');
    document.getElementById('checkout-modal').classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close cart sidebar
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
}

// Close Checkout Modal
function closeCheckoutModal() {
    document.getElementById('checkout-overlay').classList.remove('active');
    document.getElementById('checkout-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Confirm Order
async function confirmOrder(event) {
    event.preventDefault();

    // Security: Rate limiting
    if (!rateLimiter.canSubmit()) {
        showToast(currentLang === 'fr' ? 'Veuillez patienter' : 'Please wait');
        return;
    }

    const name = sanitizeInput(document.getElementById('checkout-name').value);
    const email = sanitizeInput(document.getElementById('checkout-email').value);
    const phone = sanitizeInput(document.getElementById('checkout-phone').value);
    const address = sanitizeInput(document.getElementById('checkout-address').value);

    // Security: Validate inputs
    if (name.length < 2 || name.length > 100) {
        showToast(currentLang === 'fr' ? 'Nom invalide' : 'Invalid name');
        return;
    }
    if (!isValidEmail(email)) {
        showToast(currentLang === 'fr' ? 'Email invalide' : 'Invalid email');
        return;
    }
    if (phone.length < 5 || phone.length > 20) {
        showToast(currentLang === 'fr' ? 'Téléphone invalide' : 'Invalid phone');
        return;
    }
    if (address.length < 10 || address.length > 300) {
        showToast(currentLang === 'fr' ? 'Adresse invalide' : 'Invalid address');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const currentProducts = getCurrentProducts();

    // Build order details
    const orderItems = cart.map(item => {
        const product = currentProducts.find(p => p.id === item.id);
        return `• ${product ? product.name : 'Produit'} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`;
    }).join('\n');

    const webhookUrl = getWebhookUrl();
    if (!webhookUrl) {
        closeCheckoutModal();
        showToast(t('checkout.thanks'));
        cart = [];
        saveCart();
        updateCartUI();
        return;
    }

    const shopName = currentTheme === 'dark' ? '🌿 Herbes & Paradis' : '🌸 Fleurs & Jardins';
    const orderEmoji = currentTheme === 'dark' ? '🌙' : '☀️';

    const embed = {
        title: `${orderEmoji} Nouvelle Commande - ${shopName}`,
        color: currentTheme === 'dark' ? 0x4ade80 : 0xe8a4b8,
        fields: [
            { name: '👤 Client', value: name, inline: true },
            { name: '📧 Email', value: email, inline: true },
            { name: '📞 Téléphone', value: phone, inline: true },
            { name: '📍 Adresse', value: address },
            { name: '🛒 Articles', value: orderItems },
            { name: '💰 Total', value: `**${formatPrice(total)}**`, inline: true },
            { name: '📦 Nb articles', value: `${cart.reduce((sum, item) => sum + item.quantity, 0)}`, inline: true }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: `Langue: ${currentLang.toUpperCase()} | Thème: ${currentTheme}` }
    };

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });
    } catch (error) {
        console.error('Webhook error:', error);
    }

    closeCheckoutModal();
    showToast(t('checkout.thanks'));

    cart = [];
    saveCart();
    updateCartUI();
}

// Handle Contact Form
async function handleContactForm(event) {
    event.preventDefault();

    const form = event.target;

    // Security: Check honeypot (bot detection)
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value !== '') {
        console.log('Bot detected');
        form.reset();
        return;
    }

    // Security: Rate limiting
    if (!rateLimiter.canSubmit()) {
        showToast(currentLang === 'fr' ? 'Veuillez patienter avant de renvoyer un message' : 'Please wait before sending another message');
        return;
    }

    const name = sanitizeInput(document.getElementById('contact-name').value);
    const email = sanitizeInput(document.getElementById('contact-email').value);
    const message = sanitizeInput(document.getElementById('contact-message').value);

    // Security: Validate inputs
    if (name.length < 2 || name.length > 100) {
        showToast(currentLang === 'fr' ? 'Nom invalide' : 'Invalid name');
        return;
    }
    if (!isValidEmail(email)) {
        showToast(currentLang === 'fr' ? 'Email invalide' : 'Invalid email');
        return;
    }
    if (message.length < 10 || message.length > 1000) {
        showToast(currentLang === 'fr' ? 'Message trop court ou trop long' : 'Message too short or too long');
        return;
    }

    const webhookUrl = getWebhookUrl();
    if (!webhookUrl) {
        showToast(t('message.sent'));
        form.reset();
        return;
    }

    const shopName = currentTheme === 'dark' ? '🌿 Herbes & Paradis' : '🌸 Fleurs & Jardins';

    const embed = {
        title: `📬 Nouveau message - ${shopName}`,
        color: currentTheme === 'dark' ? 0x2d5a27 : 0xe8a4b8,
        fields: [
            { name: '👤 Nom', value: name, inline: true },
            { name: '📧 Email', value: email, inline: true },
            { name: '💬 Message', value: message }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: `Langue: ${currentLang.toUpperCase()} | Thème: ${currentTheme}` }
    };

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });
        showToast(t('message.sent'));
        form.reset();
    } catch (error) {
        console.error('Webhook error:', error);
        showToast(t('message.sent'));
        form.reset();
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeCheckoutModal();
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});
