// =============================================
// NAERDEX — Catálogo de Productos (85 items)
// =============================================

let products = [
    // ========== HOMBRE (10) ==========
    {
        id: 1,
        name: "Samba OG",
        brand: "Adidas",
        type: "Sneaker Urbano",
        category: "men",
        price: 2399.00,
        isNew: true,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d135591bdd3f4dd5857264ee8b0816c4_9366/Tenis_Samba_OG_Gris_KK2268_01_00_standard.jpg",
        buyLink: "https://www.adidas.mx/tenis-samba-og/KK2268.html",
        description: "Celebra un legado con los Tenis Samba OG, un auténtico icono en la historia de adidas. Nacidos en los campos de fútbol y adoptados por los pioneros de la moda urbana, este calzado se ha convertido en un básico para quienes valoran el patrimonio y el estilo desenfadado.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/51bcb9bfc4aa4d82b5a9063cb44411b9_9366/Tenis_Samba_OG_Gris_KK2268_02_standard_hover.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7188067d85de495990025d5b24bd4242_9366/Tenis_Samba_OG_Gris_KK2268_04_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d94489c261e4657b54b2244680923c4_9366/Tenis_Samba_OG_Gris_KK2268_05_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/96f8b90178a2432fb3b41dee6a33ab02_9366/Tenis_Samba_OG_Gris_KK2268_41_detail.jpg"
        ],
        specs: { material: "Malla sintética + EVA", peso: "280g", suela: "EVA de alta densidad" },
        rating: 4.5,
        reviews: [
            { name: "Carlos M.", stars: 5, text: "Muy cómodos, los uso todos los días para ir al trabajo." },
            { name: "Roberto L.", stars: 4, text: "Buen diseño, el tamaño es exacto." },
            { name: "Ana S.", stars: 5, text: "Los compré para mi esposo y le encantaron." }
        ]
    },
    {
        id: 2,
        name: "TENIS HANDBALL SPEZIAL",
        brand: "Adidas",
        type: "Sneaker Urbano",
        category: "men",
        price: 2799.00,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3783f4abc61a4847adf224fe06b67604_9366/TENIS_HANDBALL_SPEZIAL_Beige_KK4860_01_00_standard.jpg",
        buyLink: "https://www.adidas.mx/tenis-handball-spezial/KK4860.html",
        description: "Los Tenis Handball Spezial de adidas rinden homenaje a las canchas de balonmano de los años 70 con un look vintage inconfundible. Upper de gamuza suave, suela de goma duradera y las clásicas 3 tiras. Un icono del terrace style que nunca pasa de moda.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a5c99f0604f47a7aa391312a1a593b2_9366/TENIS_HANDBALL_SPEZIAL_Beige_KK4860_02_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/34430eb97f694d3db6e0d535e1ff601b_9366/TENIS_HANDBALL_SPEZIAL_Beige_KK4860_04_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/05d0d192aebd4e1baf7eefc560f36714_9366/TENIS_HANDBALL_SPEZIAL_Beige_KK4860_05_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc12fc90a01642bea6bf8e6a8e0b71a2_9366/TENIS_HANDBALL_SPEZIAL_Beige_KK4860_15_hover_standard.jpg"
        ],
        specs: { material: "Cuero sintético", peso: "450g", suela: "Goma vulcanizada" },
        rating: 4.3,
        reviews: [
            { name: "Miguel R.", stars: 4, text: "Bonitas y resistentes, tardaron en ablandarse pero valen la pena." },
            { name: "Luis P.", stars: 5, text: "Excelente compra, muy buen acabado." }
        ]
    },
    {
        id: 3,
        name: "Tenis ULTRABOOST 5",
        brand: "Adidas",
        type: "Sneaker Running",
        category: "men",
        price: 4099.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d838b18eb9bb4b4f9ea77ed061ed18fe_9366/Tenis_ULTRABOOST_5_Blanco_KI8559_HM1.jpg",
        buyLink: "https://www.adidas.mx/tenis-ultraboost-5/KI8559.html",
        description: "Diseñada para corredores exigentes. Tecnología de retorno de energía, suela con tracción multidireccional y Upper de malla 360°. Perfecta para entrenamientos y competiciones.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/074fab0467ce496b92a579f4c8b62907_9366/Tenis_ULTRABOOST_5_Blanco_KI8559_HM3_hover.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a60b591960e40259461d5862308ff3a_9366/Tenis_ULTRABOOST_5_Blanco_KI8559_HM4.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e64710adfc24673a75690f55eb1d0b7_9366/Tenis_ULTRABOOST_5_Blanco_KI8559_HM5.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cf2c13c6fbb414b865565686e2eb24e_9366/Tenis_ULTRABOOST_5_Blanco_KI8559_HM8.jpg"
        ],
        specs: { material: "Malla 360° + fibra de carbono", peso: "260g", suela: "Goma con tecnología Boost" },
        rating: 4.7,
        reviews: [
            { name: "Fernando G.", stars: 5, text: "La mejor zapatilla de running que he tenido. Muy ligera." },
            { name: "Diego A.", stars: 5, text: "Amortiguación increíble, corre como en las nubes." },
            { name: "Jorge M.", stars: 4, text: "Muy buena, solo un poco estrecha para pies anchos." }
        ]
    },
    {
        id: 4,
        name: "Terrex Skychaser AX5 Mid GORE-TEX",
        brand: "Adidas",
        type: "Bota Senderismo",
        category: "men",
        price: 3499.00,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/59c9f0cc3c0e4a69a48736e37a23fc6a_9366/tenis_de_senderismo_Terrex_Skychaser_AX5_Mid_GORE-TEX_Negro_JQ2207_HM1.jpg",
        buyLink: "https://www.adidas.mx/tenis-de-senderismo-terrex-skychaser-ax5-mid-gore-tex/JQ2207.html",
        description: "Conquista cualquier terreno con las Terrex Skychaser AX5 Mid GORE-TEX. Impermeables, con suela Vibram y soporte de tobillo reforzado. Diseñadas para aventureros que no se rinden ante el lodo o la roca.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e695b49fea54e3093b3d7aa1108a910_9366/tenis_de_senderismo_Terrex_Skychaser_AX5_Mid_GORE-TEX_Negro_JQ2207_HM5.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c5f86ca94ac4532bb9810562a058dbe_9366/tenis_de_senderismo_Terrex_Skychaser_AX5_Mid_GORE-TEX_Negro_JQ2207_HM6.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf34ca08ef264698ab657ea9d07cebc7_9366/tenis_de_senderismo_Terrex_Skychaser_AX5_Mid_GORE-TEX_Negro_JQ2207_HM9.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b4f95952ebe45feb55c2018f46a3873_9366/tenis_de_senderismo_Terrex_Skychaser_AX5_Mid_GORE-TEX_Negro_JQ2207_HM11.jpg"
        ],
        specs: { material: "Cuero sintético impermeable", peso: "420g", suela: "Vibram Megagrip" },
        rating: 4.4,
        reviews: [
            { name: "Sergio V.", stars: 5, text: "Las usé en una caminata de 20km y perfectas, impermeables de verdad." },
            { name: "Pedro T.", stars: 4, text: "Muy buenas botas, algo pesadas pero estables." }
        ]
    },
    {
        id: 5,
        name: "CAMPO LEATHER WHITE BLACK",
        brand: "Veja",
        type: "Sneaker Deportivo",
        category: "men",
        price: 3054.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690682/VEJA/PACKSHOTS/CP0501537_1/veja-zapatillas-campo-cuero-blanco-cp0501537_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/campo-leather-white-black-CP0501537.html?cgid=HOMME",
        description: "Las Campo Leather de Veja están confeccionadas en cuero de origen responsable. Diseño minimalista, forro de algodón orgánico y suela de goma silvestre. Un básico atemporal con conciencia ecológica.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690682/VEJA/PACKSHOTS/CP0501537_1/veja-zapatillas-campo-cuero-blanco-cp0501537_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781533740/VEJA/PACKSHOTS/CP0501537_2/veja-zapatillas-campo-cuero-blanco-cp0501537_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781690676/VEJA/PACKSHOTS/CP0501537_3/veja-zapatillas-campo-cuero-blanco-cp0501537_3.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781540185/VEJA/PACKSHOTS/CP0501537_4/veja-zapatillas-campo-cuero-blanco-cp0501537_4.jpg"
        ],
        specs: { material: "Malla sintética", peso: "270g", suela: "EVA con goma" },
        rating: 4.2,
        reviews: [
            { name: "Alejandro F.", stars: 4, text: "Buenas para el gym, ligeras y cómodas." },
            { name: "Raúl C.", stars: 5, text: "Excelente relación calidad-precio." }
        ]
    },
    {
        id: 6,
        name: "V-90 LEATHER WHITE BLACK",
        brand: "Veja",
        type: "Sneaker Deportivo",
        category: "men",
        price: 3316.00,
        isNew: false,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690430/VEJA/PACKSHOTS/VD2021061_1/veja-zapatillas-v-90-cuero-organico-blanco-vd2021061_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/v-90-leather-white-black-VD2021061.html?cgid=HOMME",
        description: "Las V-90 de Veja reinventan el running de los 90 con un enfoque sostenible. Cuero orgánico certified, detalles en ante reciclado y suela de goma silvestre de la Amazonía. Estilo retro con valores modernos.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690430/VEJA/PACKSHOTS/VD2021061_1/veja-zapatillas-v-90-cuero-organico-blanco-vd2021061_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781533701/VEJA/PACKSHOTS/VD2021061_2/veja-zapatillas-v-90-cuero-organico-blanco-vd2021061_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1774956447/VEJA/PACKSHOTS/VD2021061_3/veja-zapatillas-v-90-cuero-organico-blanco-vd2021061_3.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781540265/VEJA/PACKSHOTS/VD2021061_4/veja-zapatillas-v-90-cuero-organico-blanco-vd2021061_4.jpg"
        ],
        specs: { material: "Cuero sintético premium", peso: "380g", suela: "Cuero genuino" },
        rating: 4.6,
        reviews: [
            { name: "Andrés H.", stars: 5, text: "Se ven carísimas, la calidad del material es impresionante." },
            { name: "Eduardo M.", stars: 4, text: "Muy elegantes, tardé en abrirlas pero ahora van perfectas." },
            { name: "Francisco J.", stars: 5, text: "Las mejores botas formales que he comprado." }
        ]
    },
    {
        id: 17,
        name: "VOLLEY SUEDE EAGLE SWAN",
        brand: "Veja",
        type: "Sneaker Deportivo",
        category: "men",
        price: 2705.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690382/VEJA/PACKSHOTS/VO0320888_1/veja-zapatillas-volley-ante-marron-vo0320888_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/volley-suede-eagle-swan-VO0320888.html?cgid=HOMME",
        description: "Las Volley Suede de Veja toman la silueta clásica del voleibol y la reinterpretan con ante premium y algodón orgánico. Diseño ligero, transpirable y sostenible para el día a día más activo.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690382/VEJA/PACKSHOTS/VO0320888_1/veja-zapatillas-volley-ante-marron-vo0320888_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781533654/VEJA/PACKSHOTS/VO0320888_2/veja-zapatillas-volley-ante-marron-vo0320888_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690374/VEJA/PACKSHOTS/VO0320888_3/veja-zapatillas-volley-ante-marron-vo0320888_3.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781540293/VEJA/PACKSHOTS/VO0320888_4/veja-zapatillas-volley-ante-marron-vo0320888_4.jpg"
        ],
        specs: { material: "Nylon ripstop + TPU", peso: "340g", suela: "Goma con clavos" },
        rating: 4.5,
        reviews: [
            { name: "Manuel R.", stars: 5, text: "Perfectas para trail running, el agarre es brutal." },
            { name: "Luis A.", stars: 4, text: "Muy resistentes, las usé en lluvia y secaron rápido." }
        ]
    },
    {
        id: 18,
        name: "CONDOR 3 OFF ROAD RIPSTOP EAGLE BLACK",
        brand: "Veja",
        type: "Bota Alta",
        category: "men",
        price: 3849.00,
        isNew: false,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690350/VEJA/PACKSHOTS/OF1921485_1/veja-zapatillas-condor-3-off-road-algodon-organico-y-tejidos-negro-of1921485_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/condor-3-off-road-ripstop-eagle-black-OF1921485.html?cgid=HOMME",
        description: "Las Condor 3 Off Road de Veja combinan algodón orgánico y tejido reciclado con un diseño off-road audaz. Suela robusta con buen agarre, acabados premium y compromiso ecológico en cada paso.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690350/VEJA/PACKSHOTS/OF1921485_1/veja-zapatillas-condor-3-off-road-algodon-organico-y-tejidos-negro-of1921485_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1782256025/VEJA/PACKSHOTS/OF1921485_2/veja-zapatillas-condor-3-off-road-algodon-organico-y-tejidos-negro-of1921485_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1782256019/VEJA/PACKSHOTS/OF1921485_3/veja-zapatillas-condor-3-off-road-algodon-organico-y-tejidos-negro-of1921485_3.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1773187318/VEJA/PACKSHOTS/OF1921485_4/veja-zapatillas-condor-3-off-road-algodon-organico-y-tejidos-negro-of1921485_4.jpg"
        ],
        specs: { material: "Cuero sintético + lona", peso: "400g", suela: "Goma vulcanizada" },
        rating: 4.3,
        reviews: [
            { name: "Oscar D.", stars: 5, text: "Muy bonitas, el diseño es muy llamativo." },
            { name: "Javier B.", stars: 4, text: "Buenas botas, algo pesadas para uso prolongado." }
        ]
    },
    {
        id: 19,
        name: "Tenis de Running Ultraboost 5 Hermanos Koumori",
        brand: "Adidas",
        type: "Sneaker Running",
        category: "men",
        price: 4199.00,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6245cc82bfc6411599ee54ca361c462f_9366/Tenis_de_Running_Ultraboost_5_Hermanos_Koumori_Gris_JS2439_HM1.jpg",
        buyLink: "https://www.adidas.mx/tenis-de-running-ultraboost-5-hermanos-koumori/JS2439.html",
        description: "Diseñados para correr, estos tenis adidas Ultraboost 5 Hermanos Koumori son el resultado de una colaboración especial con Hermanos Koumori, una marca mexicana que está impulsando la cultura del running.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6245cc82bfc6411599ee54ca361c462f_9366/Tenis_de_Running_Ultraboost_5_Hermanos_Koumori_Gris_JS2439_HM1.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/20c8a42d01704add9e0853ef0a459ed4_9366/Tenis_de_Running_Ultraboost_5_Hermanos_Koumori_Gris_JS2439_HM3_hover.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/2574fcbc17584a9e8e64f5a0e6ddb58c_9366/Tenis_de_Running_Ultraboost_5_Hermanos_Koumori_Gris_JS2439_HM4.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f44af118b894424c9733ab3cceebe524_9366/Tenis_de_Running_Ultraboost_5_Hermanos_Koumori_Gris_JS2439_HM5.jpg"

        ],
        specs: { material: "Malla + gel", peso: "250g", suela: "Tecnología LIGHT BOOST" },
        rating: 4.8,
        reviews: [
            { name: "Gustavo P.", stars: 5, text: "Hice mi primer maratón con estas y sin dolor. Increíbles." },
            { name: "Ricardo N.", stars: 5, text: "La mejor amortiguación que he probado." },
            { name: "Arturo V.", stars: 4, text: "Muy buenas, solo que el color no es exactamente como la foto." }
        ]
    },
    {
        id: 20,
        name: "Tenis Samba OG",
        brand: "Adidas",
        type: "Sneaker Casual",
        category: "men",
        price: 2399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Tenis_Samba_OG_Negro_B75807_01_standard.jpg",
        buyLink: "https://www.adidas.mx/tenis-samba-og/B75807.html",
        description: "Las Samba OG en negro son puro estilo adidas. Cuero premium con la icónica punta en T, suela de goma y las clásicas 3 tiras. Nacidas en el campo de fútbol, adoptadas por la cultura urbana. Un icono atemporal.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Tenis_Samba_OG_Negro_B75807_01_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/309a0c8f53dd45d3a3bea8bf0118aa6b_9366/Tenis_Samba_OG_Negro_B75807_02_standard_hover.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0561b42bd25442e9144a8bf0119046b_9366/Tenis_Samba_OG_Negro_B75807_09_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/541ded71f98a4a8a8496a8bf0118ea18_9366/Tenis_Samba_OG_Negro_B75807_42_detail.jpg"
        ],
        specs: { material: "Lona de algodón", peso: "300g", suela: "Cauchos vulcanizados" },
        rating: 4.1,
        reviews: [
            { name: "Marco A.", stars: 4, text: "Sencillas pero bonitas, perfectas para el verano." },
            { name: "Héctor L.", stars: 4, text: "Muy ligeras, el lino es de buena calidad." }
        ]
    },

    // ========== MUJER (15) ==========
    {
        id: 7,
        name: "Adidas Samba OG W",
        brand: "Adidas",
        type: "Sneaker Retro",
        category: "women",
        price: 2499.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/ID0478_1.jpg",
        buyLink: "https://www.adidas.mx/samba-og-mujer/ID0478.html",
        description: "La Samba OG para mujer es un ícono absoluto del streetwear. Cuero premium con la icónica punta en T, las 3 tiras serradas y suela de goma translúcida. Nacida en el fútbol, reinventada para la calle. Un clásico que nunca pasa de moda.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/ID0478_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID0478_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID0478_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID0478_4.jpg"
        ],
        specs: { material: "Cuero premium + gamuza", peso: "300g", suela: "Goma translúcida" },
        rating: 4.8,
        reviews: [
            { name: "Laura M.", stars: 5, text: "Las Samba son adictivas, ya tengo 3 pares. La calidad del cuero es increíble." },
            { name: "Sofía R.", stars: 5, text: "Perfectas para todo, van con jeans, vestido, falda. Las uso todos los días." }
        ]
    },
    {
        id: 8,
        name: "Adidas Samba OG W Negro",
        brand: "Adidas",
        type: "Sneaker Retro",
        category: "women",
        price: 2399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/IE6520_1.jpg",
        buyLink: "https://www.adidas.mx/samba-og-mujer/IE6520.html",
        description: "La Samba OG en color Core Black es pureza estilística. Todo negro con las 3 tiras en contraste blanco nieve y suela de goma. Una versión más oscura del clásico que funciona con cualquier outfit del día a día.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/IE6520_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/IE6520_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/IE6520_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/IE6520_4.jpg"
        ],
        specs: { material: "Cuero premium + gamuza", peso: "300g", suela: "Goma translúcida" },
        rating: 4.7,
        reviews: [
            { name: "Camila D.", stars: 5, text: "El color negro es versatilísimo, combina con todo y no se ensucia fácil." },
            { name: "Valentina P.", stars: 5, text: "Excelente calidad, el cuero es suave desde la primera vez." }
        ]
    },
    {
        id: 9,
        name: "Adidas Samba Jane W",
        brand: "Adidas",
        type: "Mary Jane Sneaker",
        category: "women",
        price: 2199.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://www.overkillshop.com/cdn/shop/files/JQ6445_1.jpg",
        buyLink: "https://www.adidas.mx/samba-jane-mujer/JQ6445.html",
        description: "La Samba Jane fusiona el legado deportivo de la Samba con el estilo Mary Jane. Tira ajustable con velcro, cuero liso y las 3 tiras serradas clásicas. Una interpretación femenina y moderna de un clásico absoluto.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.overkillshop.com/cdn/shop/files/JQ6445_1.jpg",
            "https://www.overkillshop.com/cdn/shop/files/JQ6445_2.jpg",
            "https://www.overkillshop.com/cdn/shop/files/JQ6445_3.jpg",
            "https://www.overkillshop.com/cdn/shop/files/JQ6445_4.jpg"
        ],
        specs: { material: "Cuero liso + forro textil", peso: "280g", suela: "Goma gum" },
        rating: 4.6,
        reviews: [
            { name: "Isabella M.", stars: 5, text: "Las Mary Janes de Adidas son geniales, cómodas y súper fashion." },
            { name: "Paula G.", stars: 4, text: "Muy bonitas, la tira de velcro queda perfecta. Talla real." }
        ]
    },
    {
        id: 10,
        name: "Adidas Samba Jane W Blanca",
        brand: "Adidas",
        type: "Mary Jane Sneaker",
        category: "women",
        price: 2199.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/JR1402_1.jpg",
        buyLink: "https://www.adidas.mx/samba-jane-mujer/JR1402.html",
        description: "La Samba Jane en Cloud White es frescura y elegancia en un solo par. Cuero blanco con detalles en negro y suela gum que aporta un toque retro. Perfecta para primavera y verano con vestidos, faldas o jeans.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/JR1402_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/JR1402_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/JR1402_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/JR1402_4.jpg"
        ],
        specs: { material: "Cuero liso + forro textil", peso: "280g", suela: "Goma gum" },
        rating: 4.5,
        reviews: [
            { name: "Daniela R.", stars: 5, text: "Blancas y hermosas, las uso con todo en verano." },
            { name: "Fernanda L.", stars: 4, text: "Bonitas y cómodas, solo hay que cuidarlas del polvo." }
        ]
    },
    {
        id: 11,
        name: "Adidas Gazelle Indoor W",
        brand: "Adidas",
        type: "Sneaker Retro",
        category: "women",
        price: 2499.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.overkillshop.com/cdn/shop/files/HQ5152_1.jpg",
        buyLink: "https://www.adidas.mx/gazelle-indoor-mujer/HQ5152.html",
        description: "La Gazelle Indoor es una reinterpretación moderna de un clásico de 1979. Upper de gamuza suave con la suela de goma transparente que la hace icónica. Las 3 tiras en cuero y la detallada construcción la convierten en un must-have del armario urbano.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.overkillshop.com/cdn/shop/files/HQ5152_1.jpg",
            "https://www.overkillshop.com/cdn/shop/files/HQ5152_2.jpg",
            "https://www.overkillshop.com/cdn/shop/files/HQ5152_3.jpg",
            "https://www.overkillshop.com/cdn/shop/files/HQ5152_4.jpg"
        ],
        specs: { material: "Gamuza premium + cuero", peso: "310g", suela: "Goma gum translúcida" },
        rating: 4.7,
        reviews: [
            { name: "Natalia F.", stars: 5, text: "La gamuza es preciosa y la suela transparente le da un toque único." },
            { name: "Mariana C.", stars: 5, text: "Muy cómodas y el color coffee combina con todo." }
        ]
    },
    {
        id: 12,
        name: "Adidas Gazelle Indoor W Rosa",
        brand: "Adidas",
        type: "Sneaker Retro",
        category: "women",
        price: 2499.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://www.overkillshop.com/cdn/shop/files/IH5484_1.jpg",
        buyLink: "https://www.adidas.mx/gazelle-indoor-mujer/IH5484.html",
        description: "La Gazelle Indoor Pink Fusion es pura energía. Upper de gamuza en rosa vibrante con detalles en verde oscuro y suela gum oscura. Un colorway llamativo que transforma cualquier outfit casual en algo especial.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.overkillshop.com/cdn/shop/files/IH5484_1.jpg",
            "https://www.overkillshop.com/cdn/shop/files/IH5484_2.jpg",
            "https://www.overkillshop.com/cdn/shop/files/IH5484_3.jpg",
            "https://www.overkillshop.com/cdn/shop/files/IH5484_4.jpg"
        ],
        specs: { material: "Gamuza premium + cuero", peso: "310g", suela: "Goma gum oscura" },
        rating: 4.6,
        reviews: [
            { name: "Luciana M.", stars: 5, text: "El rosa es espectacular, recibo muchos cumplidos cada vez que las uso." },
            { name: "Adriana S.", stars: 5, text: "Increíbles, la calidad de la gamuza es de otro nivel." }
        ]
    },
    {
        id: 21,
        name: "Adidas Superstar II W Negro",
        brand: "Adidas",
        type: "Sneaker Clásico",
        category: "women",
        price: 2399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/JI0124_1.jpg",
        buyLink: "https://www.adidas.mx/superstar-ii-mujer/JI0124.html",
        description: "La Superstar II en Core Black honora su legado de los 90s con actualizaciones modernas. Acabado en cuero negro con las 3 tiras blancas, punta de concha icónica y nueva amortiguación EVA para mayor comodidad. Un ícono que nunca muere.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/JI0124_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/JI0124_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/JI0124_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/JI0124_4.jpg"
        ],
        specs: { material: "Cuero 100% + punta de concha", peso: "340g", suela: "Goma herringbone con EVA" },
        rating: 4.5,
        reviews: [
            { name: "Renata G.", stars: 5, text: "Las Superstar negras son un clásico atemporal, nunca fallan." },
            { name: "Teresa L.", stars: 4, text: "Muy cómodas con la nueva suela EVA, mejor que las originales." }
        ]
    },
    {
        id: 22,
        name: "Adidas Superstar II W Blanca",
        brand: "Adidas",
        type: "Sneaker Clásico",
        category: "women",
        price: 2399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/JH7033_1.jpg",
        buyLink: "https://www.adidas.mx/superstar-ii-mujer/JH7033.html",
        description: "La Superstar II Blanca es la definición de versatilidad. Cuero blanco puro con las 3 tiras negras y la icónica punta de concha. New EVA cushioning para todo el día de comodidad. Del court al street, siempre relevante.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/JH7033_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH7033_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH7033_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH7033_4.jpg"
        ],
        specs: { material: "Cuero 100% + punta de concha", peso: "340g", suela: "Goma herringbone con EVA" },
        rating: 4.6,
        reviews: [
            { name: "Verónica S.", stars: 5, text: "Las blancas con negro son perfectas, van con absolutamente todo." },
            { name: "Gloria M.", stars: 5, text: "Las mejores zapatillas que he comprado, súper cómodas." }
        ]
    },
    {
        id: 23,
        name: "Adidas VL Court 3.0 W",
        brand: "Adidas",
        type: "Sneaker Casual",
        category: "women",
        price: 1799.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/ID6286_1.jpg",
        buyLink: "https://www.adidas.mx/vl-court-30-mujer/ID6286.html",
        description: "La VL Court 3.0 es la alternativa perfecta al look terrace. Diseño skate-inspired con suela de goma robusta, upper de cuero sintético y las 3 tiras clásicas. Más chunky que la Samba pero igual de versátil. Para un look relajado y moderno.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/ID6286_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID6286_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID6286_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID6286_4.jpg"
        ],
        specs: { material: "Cuero sintético + malla", peso: "320g", suela: "Goma robusta" },
        rating: 4.4,
        reviews: [
            { name: "Andrea P.", stars: 5, text: "Excelente relación calidad-precio, se ven mucho más caras de lo que son." },
            { name: "Paula V.", stars: 4, text: "Cómodas y bonitas, la suela es muy resistente." }
        ]
    },
    {
        id: 24,
        name: "Adidas Samba OG W Nieve",
        brand: "Adidas",
        type: "Sneaker Retro",
        category: "women",
        price: 2399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.overkillshop.com/cdn/shop/files/IG1962_1.jpg",
        buyLink: "https://www.adidas.mx/samba-og-mujer/IG1962.html",
        description: "La Samba OG en Cloud White es minimalismo absoluto. Cuero blanco con suela gum dorada y el logo Trefoil en relieve. Una versión limpia y elegante de la Samba que eleva cualquier look casual sin esfuerzo.",
        sizes: ["22", "22.5", "23", "23.5", "24", "25", "25.5", "26", "26.5"],
        images: [
            "https://www.overkillshop.com/cdn/shop/files/IG1962_1.jpg",
            "https://www.overkillshop.com/cdn/shop/files/IG1962_2.jpg",
            "https://www.overkillshop.com/cdn/shop/files/IG1962_3.jpg",
            "https://www.overkillshop.com/cdn/shop/files/IG1962_4.jpg"
        ],
        specs: { material: "Cuero premium + gamuza", peso: "300g", suela: "Goma gum dorada" },
        rating: 4.7,
        reviews: [
            { name: "Carolina A.", stars: 5, text: "Las blancas con suela dorada son elegantes, perfectas para verano." },
            { name: "Claudia F.", stars: 5, text: "Muy versátiles, las combino con todo." }
        ]
    },

    // ========== KIDS (4) ==========
    {
        id: 13,
        name: "Adidas Superstar II Kids",
        brand: "Adidas",
        type: "Sneaker Clásico",
        category: "kids",
        price: 2099.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/JH9977_1.jpg",
        buyLink: "https://www.adidas.mx/superstar-ii-shoes-kids/JH9977.html",
        description: "La leyenda del baloncesto, ahora para los más pequeños. La Superstar II Kids conserva el icónico shell toe y las 3 tiras serradas en una versión junior. Parte superior de cuero, plantilla moldeada y suela de goma estable. Para pequeños superestrellas que quieren estilo y comodidad.",
        sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/JH9977_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH9977_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH9977_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH9977_4.jpg"
        ],
        specs: { material: "Cuero sintético + caucho", peso: "220g", suela: "Caucho con cupsole" },
        rating: 4.7,
        reviews: [
            { name: "Patricia H.", stars: 5, text: "Mi hijo las ama, el diseño clásico no pasa de moda. Muy resistentes." },
            { name: "Mario S.", stars: 5, text: "Excelente calidad Adidas para niños, valen cada peso." }
        ]
    },
    {
        id: 14,
        name: "Adidas VL Court 3.0 Kids",
        brand: "Adidas",
        type: "Sneaker Casual",
        category: "kids",
        price: 1199.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/ID9157_1.jpg",
        buyLink: "https://www.adidas.mx/vl-court-30-shoes-kids/ID9157.html",
        description: "Diseñadas para los más pequeños que están descubriendo el mundo. La VL Court 3.0 Kids tiene cierre de velcro para fácil calzado, parte superior sintética resistente y plantilla acolchada. Estilo skater que los niños adoran, con comodidad que los padres aprueban.",
        sizes: ["10", "11", "12", "13", "1", "1.5", "2", "2.5", "3"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/ID9157_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID9157_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID9157_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/ID9157_4.jpg"
        ],
        specs: { material: "Cuero sintético + velcro", peso: "160g", suela: "Goma vulcanizada" },
        rating: 4.6,
        reviews: [
            { name: "Sandra M.", stars: 5, text: "El velcro es perfecto, mi hijo se las pone solo. Muy lindas." },
            { name: "Lorena G.", stars: 5, text: "Duraderas y bonitas, las ha usado todo el semestre sin problema." }
        ]
    },
    {
        id: 15,
        name: "Adidas Superstar",
        brand: "Adidas",
        type: "Sneaker Lifestyle",
        category: "kids",
        price: 2499.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/EG4958_1.jpg",
        buyLink: "https://www.adidas.mx/superstar-shoes/EG4958.html",
        description: "La Superstar es un ícono que ha trascendido generaciones. Originalmente creada para las canchas de baloncesto, adoptada por la cultura hip-hop y el streetwear. Parte superior de cuero, punta de concha icónica y suela de caucho. Un clásico atemporal disponible en tallas junior.",
        sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/EG4958_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/EG4958_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/EG4958_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/EG4958_4.jpg"
        ],
        specs: { material: "Cuero 100%", peso: "230g", suela: "Caucho con cupsole" },
        rating: 4.8,
        reviews: [
            { name: "Gabriela R.", stars: 5, text: "Las compre para mi hijo y quedó encantado,质量和 increíble." },
            { name: "Fernando T.", stars: 5, text: "El mismo modelo que yo uso, pero en miniatura. Perfectas." }
        ]
    },
    {
        id: 16,
        name: "Adidas SL 72 RS",
        brand: "Adidas",
        type: "Sneaker Retro",
        category: "kids",
        price: 2399.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/IE6526_1.jpg",
        buyLink: "https://www.adidas.mx/sl-72-rs-shoes/IE6526.html",
        description: "Reimaginando un ícono de 1972, la SL 72 RS combina estilo retro con comodidad moderna. Parte superior de nylon y gamuza, mediasuela EVA ultraligera y suela dentada de caucho. Originalmente creada para los Juegos Olímpicos de Múnich, ahora un staple del streetwear juvenil.",
        sizes: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/IE6526_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/IE6526_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/IE6526_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/IE6526_4.jpg"
        ],
        specs: { material: "Nylon + gamuza sintética", peso: "180g", suela: "EVA + caucho dentado" },
        rating: 4.5,
        reviews: [
            { name: "Julia C.", stars: 5, text: "Diseño retro que encanta a los niños, muy ligeras y cómodas." },
            { name: "Roberto A.", stars: 4, text: "Excelente alternativa a las Samba, colorido y llamativo." }
        ]
    },

    // ========== DESTACADOS / MIX (6) ==========
    {
        id: 25,
        name: "CAMPO LEATHER WHITE CALIFORNIA",
        brand: "Veja",
        type: "Sneaker Urban",
        category: null,
        featured: true,
        price: 3054.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690712/VEJA/PACKSHOTS/CP0503121_1/veja-zapatillas-campo-cuero-blanco-cp0503121_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/campo-leather-white-california-CP0503121.html?cgid=HOMME",
        description: "Nuestro cuero bovino proviene del sur de Brasil y Uruguay, y es curtido localmente en talleres seleccionados por sus exigencias medioambientales – no se utilizan componentes nocivos para la salud ni el medio ambiente. Los tintes cumplen con las normativas vigentes y se aplican cuidando el consumo de agua durante el curtido.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781690712/VEJA/PACKSHOTS/CP0503121_1/veja-zapatillas-campo-cuero-blanco-cp0503121_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781533747/VEJA/PACKSHOTS/CP0503121_2/veja-zapatillas-campo-cuero-blanco-cp0503121_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781690706/VEJA/PACKSHOTS/CP0503121_3/veja-zapatillas-campo-cuero-blanco-cp0503121_3.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781540201/VEJA/PACKSHOTS/CP0503121_4/veja-zapatillas-campo-cuero-blanco-cp0503121_4.jpg"
        ],
        specs: { material: "Malla sintética reflectante", peso: "290g", suela: "EVA con air" },
        rating: 4.6,
        reviews: [
            { name: "Alejandro Z.", stars: 5, text: "Llamativas y cómodas, recibo muchos cumplidos." },
            { name: "Cristian V.", stars: 5, text: "Diseño único, las mejores zapatillas que he tenido." }
        ]
    },
    {
        id: 26,
        name: "CAMPO BOLD SUEDE CAMEL PIERRE",
        brand: "Veja",
        type: "Sneaker Deportivo",
        category: null,
        featured: true,
        price: 3054.00,
        isNew: false,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1774959192/VEJA/PACKSHOTS/CP0320524_1/veja-zapatillas-campo-ante-marron-cp0320524_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/campo-bold-suede-camel-pierre-CP0320524.html",
        description: "Los Campo Bold son versatilidad pura. Estilo casual que funciona para ciudad y naturaleza. Cuero sintético resistente, forro transpirable y suela con buen agarre.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1774959192/VEJA/PACKSHOTS/CP0320524_1/veja-zapatillas-campo-ante-marron-cp0320524_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1774959185/VEJA/PACKSHOTS/CP0320524_2/veja-zapatillas-campo-ante-marron-cp0320524_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1774959198/VEJA/PACKSHOTS/CP0320524_3/veja-zapatillas-campo-ante-marron-cp0320524_3.jpg"
        ],
        specs: { material: "Cuero sintético + forro mesh", peso: "360g", suela: "Goma con agarre" },
        rating: 4.3,
        reviews: [
            { name: "Héctor M.", stars: 4, text: "Buenas botas, el descuento estuvo genial." },
            { name: "Ricardo S.", stars: 5, text: "Versátiles y resistentes, las uso para todo." }
        ]
    },
    {
        id: 27,
        name: "On Cloud 6",
        brand: "On",
        type: "Sneaker Comfort",
        category: null,
        featured: true,
        price: 1899.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://images.ctfassets.net/hnk2vsx53n6l/f7V7aAtfOkd7MCiBHrA0W/f5ef5785238a97fb96c74d79a5417b2b/5fe4b760f2b91d354cdb2cb0624a6902a3e6c77c.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        buyLink: "https://www.on.com/es-us/products/cloud-6-m-3mf1007/mens/black-black-shoes-3MF10071043",
        description: "Caminar sobre las nubes es posible con la Cloud Walk. Tecnología de amortiguación con gel, plantilla anatómica y diseño minimalista. Para pies que merecen lo mejor.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://images.ctfassets.net/hnk2vsx53n6l/6ziic1Fgu4JagKE9P9kJW6/69a5ecd9c32b624f782a4adc4a673d68/350ea817d4815da39e07836043bbe24675c65128.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/1uedNlcvjXYodWLJ63DIr0/ec9f0126b40088a81a892a7fe7316097/35ad525a1a9aca5b93ce587751cbb57848883c98.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/4ZesMuQJfoDKuQZ7w0YElB/5eda533e43b952a776be8f8bd07057e6/9b2016af10d3a348c342f2ca5033aee7be975bd6.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80"
        ],
        specs: { material: "Malla suave + gel", peso: "230g", suela: "EVA con gel" },
        rating: 4.7,
        reviews: [
            { name: "Pedro L.", stars: 5, text: "Literalmente caminar en nubes, la mejor amortiguación." },
            { name: "Sandra P.", stars: 5, text: "Para uso diario son perfectas." },
            { name: "Miguel A.", stars: 4, text: "Muy cómodas, un poco anchas pero aceptable." }
        ]
    },
    {
        id: 28,
        name: "CONDOR 3 ADVANCED ENGINERED-MESH FULL BLACK",
        brand: "Veja",
        type: "Sneaker Deportivo",
        category: null,
        featured: true,
        price: 3670.00,
        isNew: false,
        imageUrl: "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690338/VEJA/PACKSHOTS/CE2820591_1/veja-zapatillas-condor-3-advanced-punto-negro-ce2820591_1.jpg",
        buyLink: "https://www.veja-store.com/es_mx/p/condor-3-advanced-engineered-mesh-full-black-CE2820591.html?cgid=HOMME",
        description: "Las Condor 3 Advanced de Veja elevan el estándar con engineered-mesh reciclado y plantilla de corcho y látex natural. Diseño técnico con conciencia ecológica, ideales para el día a día más activo y exigente.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://media.veja-store.com/images/t_sfcc-pdp-desktop-v2/f_auto/c_limit,w_1440/v1781690338/VEJA/PACKSHOTS/CE2820591_1/veja-zapatillas-condor-3-advanced-punto-negro-ce2820591_1.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781690332/VEJA/PACKSHOTS/CE2820591_2/veja-zapatillas-condor-3-advanced-punto-negro-ce2820591_2.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1781690344/VEJA/PACKSHOTS/CE2820591_3/veja-zapatillas-condor-3-advanced-punto-negro-ce2820591_3.jpg",
            "https://media.veja-store.com/images/t_sfcc-pdp-zoom-desktop-v3/f_auto/v1760957792/VEJA/PACKSHOTS/CE2820591_4/veja-zapatillas-condor-3-advanced-punto-negro-ce2820591_4.jpg"
        ],
        specs: { material: "Cuero sintético grano alto", peso: "390g", suela: "Cuero genuino Goodyear" },
        rating: 4.5,
        reviews: [
            { name: "Enrique R.", stars: 5, text: "Calidad de zapato de $5000 a precio accesible." },
            { name: "Arturo G.", stars: 4, text: "Muy elegantes, algo tardaron en ablandar." }
        ]
    },
    {
        id: 29,
        name: "Adidas Adizero Adios OG",
        brand: "Adidas",
        type: "Sneaker Running Heritage",
        category: null,
        featured: true,
        price: 1999.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.overkillshop.com/cdn/shop/files/JI2684_1.jpg",
        buyLink: "https://www.adidas.mx/adizero-adios-og-shoes/JI2684.html",
        description: "Basada en un record-breaking racing shoe de los 80s, la Adizero Adios OG combina estética deportiva audaz con líneas de diseño rápido que gritan movimiento. Parte superior de malla de una sola pieza, overlays de gamuza sintética y amortiguación Adiprene + Adiprene+. Un clásico de running que conquistó las calles.",
        sizes: ["22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27"],
        images: [
            "https://www.overkillshop.com/cdn/shop/files/JI2684_1.jpg",
            "https://www.overkillshop.com/cdn/shop/files/JI2684_2.jpg",
            "https://www.overkillshop.com/cdn/shop/files/JI2684_3.jpg",
            "https://www.overkillshop.com/cdn/shop/files/JI2684_4.jpg"
        ],
        specs: { material: "Malla + gamuza sintética", peso: "230g", suela: "Caucho + Adiprene" },
        rating: 4.6,
        reviews: [
            { name: "Diego F.", stars: 5, text: "El diseño retro es increíble, se ven como zapatillas de colección." },
            { name: "Sergio M.", stars: 4, text: "Muy ligeras y cómodas, perfectas para uso diario." }
        ]
    },
    {
        id: 30,
        name: "Adidas Gazelle Indoor",
        brand: "Adidas",
        type: "Sneaker Terrace Classic",
        category: null,
        featured: true,
        price: 2599.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://www.overkillshop.com/cdn/shop/files/HQ5154_1.jpg",
        buyLink: "https://www.adidas.mx/gazelle-indoor-shoes/HQ5154.html",
        description: "Una vez un shoe de entrenamiento, ahora un ícono atemporal. La Gazelle Indoor combina un upper de gamuza premium con suela de goma translúcida para un look retro perfecto para el uso diario. Detalles en cuero, el lettering dorado 'GAZELLE' y las 3 tiras clásicas completan un diseño que nunca pasa de moda.",
        sizes: ["22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27", "28"],
        images: [
            "https://www.overkillshop.com/cdn/shop/files/HQ5154_1.jpg",
            "https://www.overkillshop.com/cdn/shop/files/HQ5154_2.jpg",
            "https://www.overkillshop.com/cdn/shop/files/HQ5154_3.jpg",
            "https://www.overkillshop.com/cdn/shop/files/HQ5154_4.jpg"
        ],
        specs: { material: "Gamuza premium + cuero", peso: "310g", suela: "Goma gum translúcida" },
        rating: 4.7,
        reviews: [
            { name: "Alejandro Z.", stars: 5, text: "La gamuza es preciosa, el color beige combina con todo." },
            { name: "Cristian V.", stars: 5, text: "Perfectas, el estilo terrace es impecable." }
        ]
    },

    // ========== NIKE (8) ==========
    {
        id: 31,
        name: "Nike Vomero 18",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/acd94521-e3d5-4568-ae8f-ab948695764d/NIKE+VOMERO+18.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-18-JW7z8ruR/HM6803-021",
        description: "El Vomero 18 ofrece la mayor amortiguación de la línea Nike Running con espuma ZoomX. Diseñado para distancias largas, combina ligereza con un retorno de energía excepcional. La malla Flyknit se adapta a tu pie como una segunda piel.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4a36bd8c-f0d0-4c18-869c-f60e7989d4ee/NIKE+VOMERO+18.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3507c7a8-83db-4c4b-9220-f1eabf4f716d/NIKE+VOMERO+18.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fda4fc6e-2698-4909-874d-b5bbe1ce9fe7/NIKE+VOMERO+18.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "283g", suela: "Goma con patillas de goma durable" },
        rating: 4.7,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "La mejor zapatilla de running que he probado. El ZoomX es increíble." },
            { name: "Miguel A.", stars: 5, text: "Hice un medio maratón con estas y mi tiempo mejoró 3 minutos." },
            { name: "Roberto F.", stars: 4, text: "Excelente amortiguación, algo pesada para carreras cortas." }
        ]
    },
    {
        id: 32,
        name: "Nike Pegasus 42",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        featured: true,
        price: 3299.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d54cdbe2-be00-44e3-902f-bcd07128896b/AIR+ZOOM+PEGASUS+42.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-pegasus-42-yKhguOhl/IB1873-008",
        description: "La Pegasus 42 es el caballo de batalla de Nike Running. Espuma React más suave que la versión anterior, malla transpirable rediseñada y acolchado Zoom Air en el antepie. Perfecta para el día a día y entrenamientos largos.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/05ec70cd-8657-4918-8b25-373257c318b9/AIR+ZOOM+PEGASUS+42.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d9899b80-fbef-48f9-af9d-45b1b441ee13/AIR+ZOOM+PEGASUS+42.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a3d4acc1-0c2c-443b-9554-ab83c6ffe150/AIR+ZOOM+PEGASUS+42.png"
        ],
        specs: { material: "Malla React + Zoom Air", peso: "285g", suela: "Goma con patillas de goma" },
        rating: 4.5,
        reviews: [
            { name: "Diego L.", stars: 5, text: "Mi zapatilla de entrenamiento diaria, confiable y cómoda." },
            { name: "Fernando G.", stars: 4, text: "Muy buena actualización, el upper está más transpirable." }
        ]
    },
    {
        id: 33,
        name: "Nike Pegasus 42",
        type: "Sneaker Running",
        brand: "Nike",
        category: "women",
        price: 3299.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cef2f20b-3d25-4074-b6fc-89a630499e51/W+NIKE+AIR+ZOOM+PEGASUS+42.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-mujer-nike-pegasus-42-mPVFivd4/IB1881-400",
        description: "La Pegasus 42 para mujer combina amortiguación Zoom Air con una malla suave y flexible. El ajuste anatómico se adapta al pie femenino para mayor comodidad. Diseño vibrante que no pasa desapercibido.",
        sizes: ["22", "23", "24", "25", "26", "27"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b309af49-bcdc-4c6d-b80c-7d7044207c9e/W+NIKE+AIR+ZOOM+PEGASUS+42.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fae6f020-ad9f-4089-97e5-200db1cb0c23/W+NIKE+AIR+ZOOM+PEGASUS+42.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/42d77dac-da8c-4257-b8b8-a96d42420ea9/W+NIKE+AIR+ZOOM+PEGASUS+42.png"
        ],
        specs: { material: "Malla transpirable + Zoom Air", peso: "250g", suela: "Goma con patillas de goma" },
        rating: 4.6,
        reviews: [
            { name: "Laura P.", stars: 5, text: "Las mejores zapatillas de running que he tenido, súper ligeras." },
            { name: "Ana S.", stars: 5, text: "Perfectas para mis tiradas de 10K, muy cómodas." }
        ]
    },
    {
        id: 34,
        name: "Nike Vomero Premium",
        type: "Sneaker Running",
        brand: "Nike",
        category: "women",
        price: 5099.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a64ee009-6ea1-460b-889d-d1abf9c719ad/W+NIKE+VOMERO+PREMIUM.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-mujer-nike-vomero-premium-7UL7O0v8/HM5973-302",
        description: "La Vomero Premium lleva la amortiguación ZoomX a otro nivel con una plantilla acolchada de lujo y un upper de Flyknit premium. Diseñada para corredoras que exigen lo máximo en comodidad y estilo.",
        sizes: ["22", "23", "24", "25", "26", "27"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aced2933-06d8-4a65-90e1-7e5c026e58b6/W+NIKE+VOMERO+PREMIUM.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/08547bba-12db-476c-9db1-5b642c24aebe/W+NIKE+VOMERO+PREMIUM.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ffbd34ec-2fb6-4923-9978-df46f15e7619/W+NIKE+VOMERO+PREMIUM.png"
        ],
        specs: { material: "Flyknit premium + ZoomX", peso: "270g", suela: "Goma con patillas de goma" },
        rating: 4.8,
        reviews: [
            { name: "Valentina M.", stars: 5, text: "Increíbles, la amortiguación ZoomX es como caminar en nubes." },
            { name: "Carolina R.", stars: 5, text: "Worth every penny, son las zapatillas más cómodas que he tenido." }
        ]
    },
    {
        id: 35,
        name: "Nike ACG Pegasus Trail",
        type: "Sneaker Trail",
        brand: "Nike",
        category: "men",
        price: 3099.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e61da39c-1f95-4e1b-a51c-96260bdbf256/NIKE+ACG+PEGASUS+TRAIL.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-trail-running-para-hombre-nike-acg-pegasus-trail-59KaIsTb/HV8116-301",
        description: "La ACG Pegasus Trail combina la comodidad de la Pegasus con una suela agresiva para senderos. Impermeable con tecnología GORE-TEX, protege tus pies en terreno mojado y rocoso. Aventura sin límites.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e80fd12d-350a-44fe-a5b6-7e16690237ca/NIKE+ACG+PEGASUS+TRAIL.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/457a6cc5-0620-4417-80ba-87b9f8d0f5d8/NIKE+ACG+PEGASUS+TRAIL.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed427902-7c1a-4ca2-b8e0-8109af8241b9/NIKE+ACG+PEGASUS+TRAIL.png"
        ],
        specs: { material: "GORE-TEX + malla resistente", peso: "310g", suela: "Goma con clavos para sendero" },
        rating: 4.5,
        reviews: [
            { name: "Sergio V.", stars: 5, text: "Las usé en el Popocatépetl y aguantaron perfecto. Impermeables de verdad." },
            { name: "Manuel R.", stars: 4, text: "Excelentes para trail, el agarre en roca mojada es increíble." }
        ]
    },
    {
        id: 36,
        name: "Nike Air Force 1 '07",
        type: "Sneaker Clásico",
        brand: "Nike",
        category: "men",
        featured: true,
        price: 2399.00,
        oldPrice: 2599.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc94cc9b-aa4e-4640-81f3-3aec80fb8d6a/AIR+FORCE+1+%2707+TECH+ESS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-air-force107-Xm80HDys/IR5599-001",
        description: "El ícono absoluto del streetwear. La Air Force 1 '07 mantiene el diseño clásico de 1982 con la tecnología Air oculta en la suela. Cuero premium, versatilidad total y un look que nunca pasa de moda.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f06ec451-dede-48f1-8d75-a05a70fd71aa/AIR+FORCE+1+%2707+TECH+ESS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0885f475-a07b-4c5e-a24b-a8353575f47f/AIR+FORCE+1+%2707+TECH+ESS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3f98cc28-4905-4f8a-988e-a4fa6ffa26f3/AIR+FORCE+1+%2707+TECH+ESS.png"
        ],
        specs: { material: "Cuero sintético premium", peso: "370g", suela: "Goma con encapsulado Air" },
        rating: 4.6,
        reviews: [
            { name: "Pedro T.", stars: 5, text: "Un clásico que nunca falla. La calidad del cuero es excelente." },
            { name: "Javier B.", stars: 5, text: "Tengo 3 pares, son las zapatillas más versátiles que existen." },
            { name: "Alejandro F.", stars: 4, text: "Muy bonitas pero tardan en ablandar un poco." }
        ]
    },
    {
        id: 37,
        name: "Nike Pegasus Premium",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3799.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07806c8d-2983-4d17-9810-5091a03ac858/NIKE+PEGASUS+PREMIUM.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-pegasus-premium-DC1Cxh/HQ2592-019",
        description: "Los Pegasus Premium potencian amortiguación responsiva con tres capas apiladas de nuestras tecnologías más potentes para correr: espuma ZoomX Foam, una unidad Air Zoom esculpida y espuma ReactX Foam.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07806c8d-2983-4d17-9810-5091a03ac858/NIKE+PEGASUS+PREMIUM.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1cc099f7-45cb-4757-9331-fe6de5399e46/NIKE+PEGASUS+PREMIUM.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7192220a-2660-47ac-866f-b71b90eda8db/NIKE+PEGASUS+PREMIUM.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c1d1252c-50f9-4905-8b11-3e504762ca59/NIKE+PEGASUS+PREMIUM.png",
        ],
        specs: { material: "Flyknit reforzado + ZoomX", peso: "275g", suela: "Goma durable con patillas" },
        rating: 4.7,
        reviews: [
            { name: "Ricardo N.", stars: 5, text: "La versión mejorada del Vomero, vale cada centavo extra." },
            { name: "Gustavo P.", stars: 5, text: "Perfecta para maratones, la amortiguación no decae." }
        ]
    },
    {
        id: 38,
        name: "Nike Vomero 18",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3399.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f778547d-36b9-43ac-8fab-b19954992b76/NIKE+VOMERO+18+DSRPT.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-18-9RUYolZq/IQ3925-001",
        description: "La máxima amortiguación de los Vomero proporciona una pisada cómoda para las carreras del día a día. Nuestra pisada más suave y amortiguada cuenta con ligera espuma ZoomX Foam apilada sobre espuma ReactX Foam responsiva en la entresuela.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f778547d-36b9-43ac-8fab-b19954992b76/NIKE+VOMERO+18+DSRPT.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/262341df-ee38-478c-af16-cd8eb0323aa8/NIKE+VOMERO+18+DSRPT.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/52c4d4be-f808-41d0-a05e-af75e55e5e1e/NIKE+VOMERO+18+DSRPT.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/bc36dded-a90a-40ff-ae21-993b3e3855c2/NIKE+VOMERO+18+DSRPT.png"
        ],
        specs: { material: "Malla Flyknit + ZoomX", peso: "290g", suela: "Goma con soporte medial" },
        rating: 4.5,
        reviews: [
            { name: "Fernando G.", stars: 5, text: "La mejor zapatilla de estabilidad que he usado, sin ser pesada." },
            { name: "Carlos M.", stars: 4, text: "Excelente para pronadores, el soporte es sutil pero efectivo." }
        ]
    },

    // ========== ADIDAS (5) ==========
    {
        id: 39,
        name: "Adidas Superstar",
        type: "Sneaker Clásico",
        brand: "Adidas",
        category: "men",
        featured: true,
        price: 1599.00,
        oldPrice: 1999.00,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7e1026dbe8248fbbc31ae02002e1a62_9366/Tenis_Superstar_ADV_Blanco_GW6930_01_00_standard.jpg",
        buyLink: "https://www.adidas.mx/tenis-superstar/EG4958.html",
        description: "La Superstar es un ícono del calzado deportivo desde 1969. La punta de concha de marisco, el logotipo de las 3 tiras y la suela de goma plana la han convertido en un símbolo del streetwear mundial. Cómoda, duradera y atemporal.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/w_400,f_auto,q_auto,fl_lossy,c_fill,g_auto/adidas/Superstar_Homepage_Hero_Squid_7a5e8e5b5e5b/Superstar_Homepage_Hero_Squid_7a5e8e5b5e5b.jpg",
            "https://assets.adidas.com/images/w_400,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c0b35e3f98f4b62a8e0a2b800d8d4b2_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
            "https://assets.adidas.com/images/w_400,f_auto,q_auto,fl_lossy,c_fill,g_auto/f28b1e2d71b54e47b0d8a3e800d8d4b2_9366/Superstar_Shoes_White_EG4958_02_standard.jpg"
        ],
        specs: { material: "Cuero sintético + punta de concha", peso: "350g", suela: "Goma plana clásica" },
        rating: 4.4,
        reviews: [
            { name: "Luis P.", stars: 5, text: "Las Superstar son atemporales, tengo como 5 pares." },
            { name: "Miguel R.", stars: 4, text: "Muy cómodas y versátiles, van con cualquier outfit." },
            { name: "Oscar D.", stars: 5, text: "La rebaja estuvo genial, excelente relación calidad-precio." }
        ]
    },
    {
        id: 40,
        name: "Adidas Superstar II",
        type: "Sneaker Clásico",
        brand: "Adidas",
        category: "women",
        price: 1241.00,
        oldPrice: 2299.00,
        isNew: false,
        imageUrl: "https://www.shopwss.com/cdn/shop/files/JH7033_1.jpg",
        buyLink: "https://www.adidas.mx/ten-superstar-ii-mujer/JH7033.html",
        description: "La Superstar II para mujer es la evolución del clásico. Mantiene la icónica punta de concha y las 3 tiras, pero con un ajuste más fino y materiales suaves. Comodidad estilo retro para el día a día.",
        sizes: ["22", "23", "24", "25", "26", "27"],
        images: [
            "https://www.shopwss.com/cdn/shop/files/JH7033_1.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH7033_2.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH7033_3.jpg",
            "https://www.shopwss.com/cdn/shop/files/JH7033_4.jpg"
        ],
        specs: { material: "Cuero sintético suave + punta de concha", peso: "320g", suela: "Goma plana clásica" },
        rating: 4.3,
        reviews: [
            { name: "Patricia R.", stars: 5, text: "Muy bonitas y cómodas, el descuento fue espectacular." },
            { name: "Sofía L.", stars: 4, text: "Me encantan, perfectas para el día a día." }
        ]
    },
    {
        id: 41,
        name: "ADIZERO EVO SL EXO",
        type: "Sneaker Running",
        brand: "Adidas",
        category: "men",
        featured: true,
        price: 3599.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6dc0c0b8f405471bac8b18615543e908_9366/Zapatillas_ADIZERO_EVO_SL_EXO_Negro_KI4764_HM1.jpg",
        buyLink: "https://www.adidas.mx/zapatillas-adizero-evo-sl-exo/KI4764.html",
        description: "La Adizero SL combina ligereza extrema con amortiguación responsiva. Espuma Lightstrike en la entresuela y malla ultrabreathable. Diseñada para ritmos rápidos y entrenamientos intensos.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec2d393ca2974fc2b8973e36eb57c0d8_9366/Zapatillas_ADIZERO_EVO_SL_EXO_Negro_KI4764_HM4.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b95068cb65a452d9846af6534a24aa7_9366/Zapatillas_ADIZERO_EVO_SL_EXO_Negro_KI4764_HM5.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4219743737d044d589f531578c238c9c_9366/Zapatillas_ADIZERO_EVO_SL_EXO_Negro_KI4764_HM7.jpg"
        ],
        specs: { material: "Malla ultrabreathable + Lightstrike", peso: "240g", suela: "Goma Continental" },
        rating: 4.4,
        reviews: [
            { name: "Diego A.", stars: 5, text: "Súper ligeras y con buena amortiguación, perfectas para tempo runs." },
            { name: "Jorge M.", stars: 4, text: "Buenas zapatillas de running, el precio está bien." }
        ]
    },
    {
        id: 42,
        name: "Adidas Switch Move",
        type: "Sneaker Training",
        brand: "Adidas",
        category: "men",
        price: 1499.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/86c988db99e2450bb7cec16dea8aa1c7_9366/Tenis_de_Running_Switch_Move_Negro_ID5253_01_standard.jpg",
        buyLink: "https://www.adidas.mx/tenis-de-running-switch-move/ID5253.html",
        description: "La Switch Move es versatilidad pura para entrenamiento funcional. Suela multidireccional con Bounce, soporte lateral y malla reforzada. Va del gimnasio a la calle sin problemas.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/86c988db99e2450bb7cec16dea8aa1c7_9366/Tenis_de_Running_Switch_Move_Negro_ID5253_01_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9de54c5a6e44a4f91556a2a30dab4e7_9366/Tenis_de_Running_Switch_Move_Negro_ID5253_04_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c37621d2361d4b308d2212669e49e43e_9366/Tenis_de_Running_Switch_Move_Negro_ID5253_05_standard.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9b7581afe5d4ddfb9eac5eb41d044ce_9366/Tenis_de_Running_Switch_Move_Negro_ID5253_09_standard.jpg"
        ],
        specs: { material: "Malla reforzada + TPU", peso: "290g", suela: "Bounce multidireccional" },
        rating: 4.2,
        reviews: [
            { name: "Sergio M.", stars: 4, text: "Buenas para entrenamiento, el agarre es excelente." },
            { name: "Arturo V.", stars: 4, text: "Versátiles, las uso para todo: gym, running y casual." }
        ]
    },
    {
        id: 43,
        name: "Adidas Adizero SL2",
        type: "Sneaker Running",
        brand: "Adidas",
        category: "men",
        price: 1592.00,
        oldPrice: 2699.00,
        isNew: false,
        imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d1c3a610dd9439ba8457686193f2dfe_9366/Tenis_de_Running_Adizero_Sl2_Gris_IH8193_HM1.jpg",
        buyLink: "https://www.adidas.mx/tenis-de-running-adizero-sl2/IH8193.html",
        description: "La Adizero SL2 es la evolución de la SL con más espuma Lightstrike y una sensación más rápida. Parte superior de malla reciclada y suela Continental para tracción en cualquier superficie. -40% de descuento.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d1c3a610dd9439ba8457686193f2dfe_9366/Tenis_de_Running_Adizero_Sl2_Gris_IH8193_HM1.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cea740db81a473fbfcf424477513188_9366/Tenis_de_Running_Adizero_Sl2_Gris_IH8193_HM4.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6e996412b3d469ba31f1518044f6919_9366/Tenis_de_Running_Adizero_Sl2_Gris_IH8193_HM5.jpg",
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e50133a4a9a493d9bd5de82809a24a4_9366/Tenis_de_Running_Adizero_Sl2_Gris_IH8193_HM6.jpg"

        ],
        specs: { material: "Malla reciclada + Lightstrike", peso: "235g", suela: "Continental" },
        rating: 4.3,
        reviews: [
            { name: "Roberto L.", stars: 5, text: "A este precio es una ganga, excelente zapatilla de running." },
            { name: "Héctor L.", stars: 4, text: "Buena relación calidad-precio, el descuento hizo la diferencia." }
        ]
    },

    // ========== ON RUNNING (4) ==========
    {
        id: 44,
        name: "On Cloudmonster 3",
        type: "Sneaker Running",
        brand: "On",
        category: "men",
        featured: true,
        price: 3800.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://images.ctfassets.net/hnk2vsx53n6l/1BaYtAjih0Qxa4hz6EHISO/8ed1b93e3700381433e8aef300d66ade/f42e8d419cc5109976b9a6c7e63a4103d2a7da6e.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        buyLink: "https://www.on.com/es-us/products/cloudmonster-3-m-3mg1005/mens/black-black-shoes-3MG10051043",
        description: "El Cloudmonster 3 lleva el concepto de amortiguación máxima de On al siguiente nivel. Helion™ superfoam con cápsulas CloudTec® XL gigantes que absorben impacto y devuelven energía. Para corredores que aman la caucho.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://images.ctfassets.net/hnk2vsx53n6l/2g8nGxv6dI3zwWhvsxExbI/5dcc4ae5d355548b18d86e34e2c18581/a7d1a008346c47894e795a510aac940829cb6244.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/53NLMBvIOyH6TbF7gg1zoZ/771a93b6379627d95399fa861e668e52/48ef3aaf005bdb422a2d058c346cb0f0012accf0.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/TpTcpjt2aJjqZTUHT5biZ/160ec07afde599d00a15776b84d7490b/9a8693b10337964aeab9acdcf9b2db68bc38542b.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80"
        ],
        specs: { material: "Malla reciclada + Helion™ superfoam", peso: "295g", suela: "CloudTec® XL + Speedboard®" },
        rating: 4.6,
        reviews: [
            { name: "Andrés C.", stars: 5, text: "Las nubes de On son otra cosa, amortiguación brutal." },
            { name: "Diego F.", stars: 5, text: "Perfectas para tiradas largas, muy estables para ser tan altas." },
            { name: "Marco A.", stars: 4, text: "Excelentes pero el precio es fuerte." }
        ]
    },
    {
        id: 45,
        name: "On Cloudmonster 2",
        type: "Sneaker Running",
        brand: "On",
        category: "men",
        price: 3600.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://images.ctfassets.net/hnk2vsx53n6l/7DtWul0QIHtTMusCzc1onr/8650b3d5f78d3c03c1a1c79c5395fe43/a32ece00640c9667f3b44681e6f307e43e77815a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        buyLink: "https://www.on.com/es-us/products/cloudmonster-2-m-3mf3115/mens/ivory-steel-shoes-3MF31154571",
        description: "La Cloudmonster 2 refina la fórmula original con cápsulas CloudTec® más grandes y una suela Speedboard® mejorada. Helion™ superfoam para rebote explosivo. Running con personalidad.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://images.ctfassets.net/hnk2vsx53n6l/7DtWul0QIHtTMusCzc1onr/8650b3d5f78d3c03c1a1c79c5395fe43/a32ece00640c9667f3b44681e6f307e43e77815a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/6lDhpbJbMPhStC6Nl2h3cH/eee524e16281165c0a1dadf557c5c8a6/0c6caacd599f3de708d389653a3b4f98e13bfa0c.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/CgoHVEhEnoBT3s9NLI4dp/844b60dc0592f2ee0bea9c2fb68bc0c0/98308a97bd2c961398b50302bcd4c1999854d18c.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/2MryLO36uyIGXzydRrjJzi/a74b51c16720653e95cfc3801d76f60b/c72430f7942fab5b4f54640d0656666827f45009.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80"
        ],
        specs: { material: "Malla + Helion™ superfoam", peso: "300g", suela: "CloudTec® + Speedboard®" },
        rating: 4.5,
        reviews: [
            { name: "Ricardo S.", stars: 5, text: "La versión 2 es mejor que la original en todo." },
            { name: "Fernando T.", stars: 4, text: "Muy buenas para日常 running, el diseño es único." }
        ]
    },
    {
        id: 46,
        name: "On Cloudmonster Void",
        type: "Sneaker Running",
        brand: "On",
        category: "men",
        price: 3400.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://images.ctfassets.net/hnk2vsx53n6l/65mmlj1ps7kXxzdK3AzHMJ/3944e4e04f513f1500583c387433adb6/9860445fa09c75f2e65f92f45d12e7770b174870.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        buyLink: "https://www.on.com/es-us/products/cloudmonster-void-m-3mf1001/mens",
        description: "La Cloudmonster Void es la versión oscura y misteriosa de la Cloudmonster. Mismo rendimiento con Helion™ superfoam y CloudTec®, pero con un diseño en tonos negros y grises que domina la pista.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://images.ctfassets.net/hnk2vsx53n6l/65mmlj1ps7kXxzdK3AzHMJ/3944e4e04f513f1500583c387433adb6/9860445fa09c75f2e65f92f45d12e7770b174870.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/9uod0oEHgASGF9bUvzh7v/bb5e12099f5342d92df2863335b325c0/c0a021643f80d4e9f4c5d93f502b0e1f80b0a9aa.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/5nnFGkDZgzgy6PeYAmJ3w8/7a8d74a95b68e2227b32229cafbc310b/9d617a09f8b1290dd8b3a875091cd7b3614f5ba5.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/24uMi4cdWKFPiEEZWhFIJb/c2ad3864486bea17bff628666ba2a20b/1c2c44b1b764e8c6fe809727ffa43ff17413e8ef.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80"
        ],
        specs: { material: "Malla oscura + Helion™ superfoam", peso: "295g", suela: "CloudTec® + Speedboard®" },
        rating: 4.4,
        reviews: [
            { name: "Javier N.", stars: 5, text: "El color all-black es increíble, van perfectas con cualquier outfit." },
            { name: "Cristian V.", stars: 4, text: "Buen rendimiento y diseño único." }
        ]
    },
    {
        id: 47,
        name: "Cloud X 5",
        type: "Sneaker Running",
        brand: "On",
        category: "men",
        featured: true,
        price: 3400.00,
        oldPrice: 3600.00,
        isNew: false,
        imageUrl: "https://images.ctfassets.net/hnk2vsx53n6l/s7wP4K0Z2xsOR1ZJNhtGN/3c3974bcacb149a243385bd7a30b0ca3/4b2407b831ba51f43b65b3d129e0ed7cd661ffbd.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        buyLink: "https://www.on.com/es-us/products/cloud-x-5-m-3mg3008/mens/black-black-shoes-3MG30081043",
        description: "Las Cloud X 5 de On están diseñadas para el entrenamiento híbrido. Combinan ligereza, estabilidad y amortiguación reactiva con tecnología CloudTec® y Speedboard®. Ideales para corredores que buscan versatilidad sin sacrificar rendimiento.",
        sizes: ["25", "26", "27", "28", "29", "30"],
        images: [
            "https://images.ctfassets.net/hnk2vsx53n6l/3kSP2MaZHJWvqvz8wDYO5O/e4080b2d574f4ef67eeb76b9c0581462/0d297bf0eea59a52bc72f180ddab5ce5d92c2a48.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/2VeR8KWOrAF6tt9IHhVyb0/c4e59c9e4f8a53f3cfb87d95e30108f4/41d0235498c1d6acd705cc28ffae2d8d2c235a23.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
            "https://images.ctfassets.net/hnk2vsx53n6l/1b90jizeLbFfKVG8gEkyBq/94200ab54fd9b9c1afcfffa02d329005/05eae40e4191569e09ca11bf204f9b86f953eb44.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80"
        ],
        specs: { material: "Malla transpirable + Helion™", peso: "295g", suela: "CloudTec® + Speedboard®" },
        rating: 4.5,
        reviews: [
            { name: "Pedro L.", stars: 5, text: "La que empezó todo, aún sigue siendo genial." },
            { name: "Sandra P.", stars: 4, text: "Excelente amortiguación, el descuento estuvo bien." }
        ]
    },

    // ========== GOLDEN GOOSE (8) ==========
    {
        id: 48,
        name: "Golden Goose Super-Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "men",
        featured: true,
        price: 12200.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F000317-10273.jpg?im=Resize=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/super-star-para-hombre-con-tal%C3%B3n-y-mensaje-plateado-cod-GMF00102.F000317.10273.html",
        description: "La Super-Star es el modelo insignia de Golden Goose. Piel de vacuno italiana, estrella de ante, refuerzo del talón plateado y acabado vintage hecho a mano. Cada par es único, hecho en Italia.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F000317-10273-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F000317-10273-5.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F000317-10273-4.jpg?im=Resize=(1200)"
        ],
        specs: { material: "Piel de vacuno 100% + ante", peso: "340g", suela: "Goma 100%" },
        rating: 4.7,
        reviews: [
            { name: "Francisco J.", stars: 5, text: "Hecho a mano, se nota la calidad en cada detalle. Imperdibles." },
            { name: "Enrique R.", stars: 5, text: "El tratamiento vintage es hermoso, cada par es una obra de arte." }
        ]
    },
    {
        id: 49,
        name: "Golden Goose Super-Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "men",
        price: 14930.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GMF00101.F008924-60727.jpg?im=Resisze=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/super-star-para-hombre-con-estrella-de-ante-y-tal%C3%B3n-azul-cod-GMF00102.F000311.10270.html",
        description: "Super-Star en ante rojo con estrella GGDB y talón azul marino. La combinación de colores y la estrella de ante hacen de este modelo una pieza Statement. Acabado vintage artesanal.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00101.F008924-60727-2.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00101.F008924-60727-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00101.F008924-60727-5.jpg?im=Resize=(1200)"
        ],
        specs: { material: "Ante + piel de vacuno", peso: "335g", suela: "Goma 100%" },
        rating: 4.6,
        reviews: [
            { name: "Andrés H.", stars: 5, text: "El ante rojo es espectacular, reciben muchos cumplidos." },
            { name: "Eduardo M.", stars: 5, text: "La calidad de los materiales es insuperable." }
        ]
    },
    {
        id: 50,
        name: "Golden Goose Super-Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "women",
        price: 14930.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GWF00102.F003971-11353.jpg?im=Resize=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/super-star-mujer-ante-beige-cod-GMF00102.F000930.10234.html",
        description: "Super-Star para mujer en ante beige con estrella blanca y talón dorado. Un modelo suave y versátil que combina con todo. Hecho a mano en Italia con tratamiento vintage exclusivo.",
        sizes: ["35", "36", "37", "38", "39", "40"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GWF00102.F003971-11353-2.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GWF00102.F003971-11353-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GWF00102.F003971-11353-5.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GWF00102.F003971-11353-3.jpg?im=Resize=(1200)"
        ],
        specs: { material: "Ante + piel de vacuno", peso: "310g", suela: "Goma 100%" },
        rating: 4.7,
        reviews: [
            { name: "Camila D.", stars: 5, text: "Hermosas, el ante beige es perfecto para combinar con todo." },
            { name: "Isabella M.", stars: 5, text: "Las uso todos los días, son cómodas y elegantes." }
        ]
    },
    {
        id: 51,
        name: "Golden Goose Ball Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "men",
        price: 14690.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F000325-10502.jpg?im=Resize=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/ball-star-de-hombre-de-napa-blanca-con-estrella-y-refuerzo-del-tal%C3%B3n-de-piel-verde-cod-8050235336476.html",
        description: "La Ball Star es la versión basketball de Golden Goose. Suela más gruesa, diseño retro deportivo y ante amarillo vibrante. Estrella lateral en cuero y acabado vintage que la hace única.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F000325-10502-2.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F000325-10502-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F000325-10502-5.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F000325-10502-6.jpg?im=Resize=(1200)"
        ],
        specs: { material: "Ante + cuero", peso: "380g", suela: "Goma gruesa estilo basketball" },
        rating: 4.5,
        reviews: [
            { name: "Héctor M.", stars: 5, text: "El estilo basketball es genial, llaman mucha atención." },
            { name: "Ricardo N.", stars: 4, text: "Bonitas pero la suela es más gruesa de lo esperado." }
        ]
    },
    {
        id: 52,
        name: "Golden Goose Super-Star LTD",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "men",
        price: 19360.00,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GMF00659.F007901-70269.jpg?im=Resize=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/super-star-ltd-de-hombre-de-ante-laminado-plateado-con-estrella-de-piel-y-refuerzo-del-tal%C3%B3n-de-ante-cod-GMF00659.F007901.70269.html?xse_prod_code=GMF00659.F007901.70269&xse=92a71e13-5ac0-4997-b629-0d2d24078c7f",
        description: "Super-Star Limited Edition en lona beige con detalles de ante y cadenas metálicas. Edición limitada con elementos premium que la hacen una pieza de colección. Hecha a mano en Italia.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00659.F007901-70269.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00659.F007901-70269-2.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00659.F007901-70269-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00659.F007901-70269-5.jpg?im=Resize=(1200)"
        ],
        specs: { material: "Lona premium + ante + cadenas metálicas", peso: "350g", suela: "Goma 100%" },
        rating: 4.8,
        reviews: [
            { name: "Arturo G.", stars: 5, text: "Las cadenas y los detalles las hacen únicas, pieza de colección." },
            { name: "Julia C.", stars: 5, text: "Edición limitada que vale cada centavo." }
        ]
    },
    {
        id: 53,
        name: "Golden Goose Ball Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "men",
        featured: true,
        price: 16210.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F003771-10283.jpg?im=Resize=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/ball-star-para-hombre-de-napa-blanca-con-estrella-negra-cod-GMF00117.F003771.10283.html?xse_prod_code=GMF00117.F003771.10283&xse=92a71e13-5ac0-4997-b629-0d2d24078c7f",
        description: "Super-Star en piel negra con estrella negra mate y talón plateado. Todo el charismo de la Super-Star en un colorway oscuro y versátil. Acabado vintage en piel de vacuno italiano.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F003771-10283-2.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F003771-10283-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F003771-10283-5.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00117.F003771-10283-6.jpg?im=Resize=(1200)"
        ],
        specs: { material: "Piel de vacuno negra 100%", peso: "340g", suela: "Goma 100%" },
        rating: 4.6,
        reviews: [
            { name: "Sergio V.", stars: 5, text: "El all-black es perfecto, van con todo y se ven elegantes." },
            { name: "Diego A.", stars: 5, text: "La piel negra tiene una textura increíble." }
        ]
    },
    {
        id: 54,
        name: "Golden Goose Super-Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "women",
        price: 14690.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://www.goldengoose.com/on/demandware.static/-/Sites-gg-master-catalog/default/dw3a3c4d01/images/hi-res/GMF00102_F000317_10273_w.png",
        buyLink: "https://www.goldengoose.com/mx/es/super-star-mujer-piel-blanca-cod-GMF00102.F000317.10273.html",
        description: "Super-Star para mujer en piel blanca con estrella de ante y letras metálicas de plata. El modelo más icónico de Golden Goose en su versión femenina. Made in Italy, treatment vintage.",
        sizes: ["35", "36", "37", "38", "39", "40"],
        images: [
            "https://www.goldengoose.com/on/demandware.static/-/Sites-gg-master-catalog/default/dw3a3c4d01/images/hi-res/GMF00102_F000317_10273_w.png",
            "https://www.goldengoose.com/on/demandware.static/-/Sites-gg-master-catalog/default/dw3a3c4d01/images/hi-res/GMF00102_F000317_10273_w2.png",
            "https://www.goldengoose.com/on/demandware.static/-/Sites-gg-master-catalog/default/dw3a3c4d01/images/hi-res/GMF00102_F000317_10273_w3.png"
        ],
        specs: { material: "Piel de vacuno 100% + ante", peso: "310g", suela: "Goma 100%" },
        rating: 4.8,
        reviews: [
            { name: "Natalia F.", stars: 5, text: "Las Super-Star blancas son un must-have, las amo." },
            { name: "Laura G.", stars: 5, text: "Perfectas para todo, cómodas y hermosas." }
        ]
    },
    {
        id: 55,
        name: "Golden Goose Super-Star",
        type: "Sneaker Premium",
        brand: "Golden Goose",
        category: "men",
        price: 14930.00,
        oldPrice: 17380.00,
        isNew: false,
        imageUrl: "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F003987-11357.jpg?im=Resize=(1200)",
        buyLink: "https://www.goldengoose.com/mx/es/super-star-con-estrella-de-ante-rojo-y-refuerzo-del-tal%C3%B3n-de-piel-verde-cod-GMF00102.F003987.11357.html?xse_prod_code=GMF00102.F003987.11357&xse=92a71e13-5ac0-4997-b629-0d2d24078c7f",
        description: "Super-Star en ante verde oliva con estrella blanca y talón de piel. Color earthy que combina con tonos neutros y oscuros. Acabado vintage artesanal que da un look relajado y sofisticado.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        images: [
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F003987-11357.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F003987-11357-2.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F003987-11357-4.jpg?im=Resize=(1200)",
            "https://static2.goldengoose.com/public/Style/ECOMM/GMF00102.F003987-11357-5.jpg?im=Resize=(1200)"    
        ],
        specs: { material: "Ante verde oliva + piel", peso: "340g", suela: "Goma 100%" },
        rating: 4.5,
        reviews: [
            { name: "Manuel R.", stars: 5, text: "El verde oliva es un color diferente y muy elegante." },
            { name: "Fernando T.", stars: 4, text: "Buen descuento, el color es muy versátil." }
        ]
    },
    {
        id: 56,
        name: "Air Jordan 1 Mid",
        type: "Sneaker Urbano",
        brand: "Nike",
        category: "men",
        price: 3299.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da637ca2-1d97-4c79-b164-8150690293b1/AIR+JORDAN+1+MID.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-air-jordan-1-mid-f8W9ns/DQ8426-007",
        description: "Icónico sneaker de baloncesto con diseño mid-top. Cuero premium con detalles en la Wings logo, amortiguación Air en el talón y suela duradera para uso diario. Un clásico atemporal del streetwear.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da637ca2-1d97-4c79-b164-8150690293b1/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be002d4e-5d9e-4c99-9298-b35dc283355a/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5bf6cff5-cc19-48e6-a0fc-9c92d0ae9fc6/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c15608f3-a440-4896-a525-3c5a0807b649/AIR+JORDAN+1+MID.png"
        ],
        specs: { material: "Cuero sintético 100%", peso: "340g", suela: "Goma con tracción circular" },
        rating: 4.6,
        reviews: [
            { name: "Andrés M.", stars: 5, text: "El diseño es increíble, la calidad del cuero se siente premium. Mis favoritas para el día a día." },
            { name: "Luis H.", stars: 5, text: "Las Jordan 1 Mid nunca fallan, muy cómodas y con mucho estilo." }
        ]
    },
    {
        id: 57,
        name: "Air Jordan 1 Mid",
        type: "Sneaker Urbano",
        brand: "Nike",
        category: "men",
        price: 3299.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/133dc679-8247-4e2b-99f0-1b554ee246d8/AIR+JORDAN+1+MID.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-air-jordan-1-mid-f8W9ns/DQ8426-005",
        description: "Icónico sneaker de baloncesto con diseño mid-top. Cuero premium con detalles en la Wings logo, amortiguación Air en el talón y suela duradera para uso diario. Un clásico atemporal del streetwear.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/133dc679-8247-4e2b-99f0-1b554ee246d8/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5c8da47d-51c4-4c42-b15e-900ad4f90c24/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc0c2e67-4035-4ada-9326-f5f7a999ef5f/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4ea55ca-669e-465d-b66a-2216bc842788/AIR+JORDAN+1+MID.png"
        ],
        specs: { material: "Cuero sintético 100%", peso: "340g", suela: "Goma con tracción circular" },
        rating: 4.5,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "Excelente colorway, el negro y blanco combina con todo. Muy ligeras." },
            { name: "Javier P.", stars: 4, text: "Buenas zapatillas, el cuero se siente de buena calidad." }
        ]
    },
    {
        id: 58,
        name: "Air Jordan 1 Mid",
        type: "Sneaker Urbano",
        brand: "Nike",
        category: "men",
        price: 3299.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/42cf42b2-9b25-4c3b-a8ba-e130f916f2e5/AIR+JORDAN+1+MID.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-air-jordan-1-mid-f8W9ns/DQ8426-008",
        description: "Icónico sneaker de baloncesto con diseño mid-top. Cuero premium con detalles en la Wings logo, amortiguación Air en el talón y suela duradera para uso diario. Un clásico atemporal del streetwear.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/42cf42b2-9b25-4c3b-a8ba-e130f916f2e5/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3c23c0f0-aafd-499e-8a00-ba3dc4eb804c/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c8b8545b-0e0a-4d63-82eb-f9201d295815/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b2843d6a-b182-4f35-86f8-d791e85bbfbc/AIR+JORDAN+1+MID.png"
        ],
        specs: { material: "Cuero sintético 100%", peso: "340g", suela: "Goma con tracción circular" },
        rating: 4.4,
        reviews: [
            { name: "Miguel A.", stars: 5, text: "Las Jordan 1 Mid son perfectas para combinar, muy versátiles." },
            { name: "Fernando T.", stars: 4, text: "Buen calce, ligeramente ajustadas al principio pero se acomodan." }
        ]
    },
    {
        id: 59,
        name: "Air Jordan 1 Mid",
        type: "Sneaker Urbano",
        brand: "Nike",
        category: "men",
        price: 2672.00,
        oldPrice: 3299.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/98c828e6-cd7e-4775-b143-176fdfbf7b56/AIR+JORDAN+1+MID.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-air-jordan-1-mid-f8W9ns/DQ8426-405",
        description: "Icónico sneaker de baloncesto con diseño mid-top. Cuero premium con detalles en la Wings logo, amortiguación Air en el talón y suela duradera para uso diario. Un clásico atemporal del streetwear.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/98c828e6-cd7e-4775-b143-176fdfbf7b56/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/69183eda-6a9a-4219-afa2-5859d49acb96/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/455b27ff-6f2b-45fa-bd76-9f34de3d837a/AIR+JORDAN+1+MID.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cbbda095-447b-4964-833e-0590423a91bb/AIR+JORDAN+1+MID.png"
        ],
        specs: { material: "Cuero sintético 100%", peso: "340g", suela: "Goma con tracción circular" },
        rating: 4.7,
        reviews: [
            { name: "Roberto F.", stars: 5, text: "Excelente precio con descuento, el color azul es espectacular." },
            { name: "Diego L.", stars: 5, text: "Las compré en oferta y no me arrepiento, súper bonitas." }
        ]
    },
    {
        id: 60,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f922d8be-a544-4f21-bee8-1d078b7a86e4/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-005",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f922d8be-a544-4f21-bee8-1d078b7a86e4/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/34dffe34-55b0-4fff-9c1f-91cc07c03793/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bd6011d-5026-4366-af57-98300c1217ac/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4faa66ff-ae5f-44dd-bcbf-a2efe280dc8e/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.6,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "La mejor zapatilla de entrenamiento, estabilidad y flexibilidad en uno." },
            { name: "Miguel A.", stars: 5, text: "Las uso para CrossFit y funcionan perfecto, la suela es muy estable." },
            { name: "Javier P.", stars: 4, text: "Muy buenas para gimnasio, el talón es firme para sentadillas." }
        ]
    },
    {
        id: 61,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c22d2e8b-3c4c-4297-b530-b198a73565a2/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-401",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c22d2e8b-3c4c-4297-b530-b198a73565a2/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e3ebe938-889c-4175-98e8-6ea67d849048/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4e6efa39-f468-4268-99bf-abc07f22e782/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7b7967cb-3165-41b2-a9d6-5565054003fc/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.5,
        reviews: [
            { name: "Andrés M.", stars: 5, text: "Nuevo colorway muy bonito, la Metcon sigue siendo la mejor del gym." },
            { name: "Luis H.", stars: 4, text: "Excelente para entrenamiento, muy estable y cómoda." }
        ]
    },
    {
        id: 62,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed351537-173b-4e15-acb1-b5e894f78ca3/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-001",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed351537-173b-4e15-acb1-b5e894f78ca3/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03fd87bc-03bc-420c-8b6c-d5ad4e505fd7/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/10b8096d-a0ca-48f3-9916-9d07a35ace73/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1dabcf3d-1ae6-421d-9472-b49926dd6e9c/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.4,
        reviews: [
            { name: "Fernando G.", stars: 5, text: "El color negro es perfecto para el gym, no se ensucia fácil." },
            { name: "Diego L.", stars: 4, text: "Muy buena zapatilla de entreno, la recomiendo." }
        ]
    },
    {
        id: 63,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/448311e0-fd8d-4d2d-9613-2bba83da7e2a/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-002",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/448311e0-fd8d-4d2d-9613-2bba83da7e2a/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/34e95df5-da04-49a9-b4c0-ea9c4ba73525/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f628ee5a-59ba-467d-b4e3-89ba5d1ab191/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/34439b28-4779-44c1-abe3-c0dbfc912cca/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.3,
        reviews: [
            { name: "Roberto F.", stars: 4, text: "Buena zapatilla, el verde le da un toque diferente." },
            { name: "Carlos R.", stars: 5, text: "Perfectas para HIIT y levantamiento, muy estables." }
        ]
    },
    {
        id: 64,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2429.00,
        oldPrice: 2999.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a4c0e39-d8aa-4af7-9c9d-8cfa5e515419/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-003",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a4c0e39-d8aa-4af7-9c9d-8cfa5e515419/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ec42a4f1-e0ac-4542-9fef-52e145ebf5b8/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6690a835-b4f7-43b5-90fc-38770c56fe94/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7bb5ed8f-c8e4-45c7-a47b-8d7a0d8f7dbb/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.6,
        reviews: [
            { name: "Miguel A.", stars: 5, text: "Las compré en oferta, excelente relación calidad-precio para el gym." },
            { name: "Andrés M.", stars: 5, text: "Gran descuento en una zapatilla top de entrenamiento." }
        ]
    },
    {
        id: 65,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2429.00,
        oldPrice: 2999.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c8143ea5-a843-4aae-9b5e-2e2154a7ad24/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-101",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c8143ea5-a843-4aae-9b5e-2e2154a7ad24/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a01f62cb-4481-4205-80c4-008ceb10fe64/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cba2fad9-9b45-4b0d-8195-f879163dcbe8/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/47a0a644-dda2-4772-9222-18bfb809d717/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.5,
        reviews: [
            { name: "Javier P.", stars: 5, text: "El color blanco es limpio y elegante, perfectas para entrenar." },
            { name: "Fernando T.", stars: 4, text: "Muy buenas para el gym, se ensucian un poco rápido pero se limpian fácil." }
        ]
    },
    {
        id: 66,
        name: "Nike Free Metcon 7",
        type: "Sneaker Entrenamiento",
        brand: "Nike",
        category: "men",
        price: 2429.00,
        oldPrice: 2999.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/017da3fb-e462-4a24-9d79-c4c1aa4ef1a2/NIKE+FREE+METCON+7.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-entrenamiento-para-hombre-nike-free-metcon-7-1IwQn9Sg/II7405-102",
        description: "Tenis de entrenamiento versátil con estabilidad en el talón y flexibilidad en el antepie. Suela plana para levantamiento de pesas y entreno funcional. Malla transpirable con refuerzos estratégicos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/017da3fb-e462-4a24-9d79-c4c1aa4ef1a2/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ddb9c7b9-17c1-4f22-8f67-49c04cd3a8f9/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6d0285d-6359-4e34-a08b-1f9f8b762d57/NIKE+FREE+METCON+7.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/69a28915-ed40-4d74-b450-7fce1562b3bc/NIKE+FREE+METCON+7.png"
        ],
        specs: { material: "Malla transpirable + refuerzos sintéticos", peso: "310g", suela: "Goma durable con patillas de tracción" },
        rating: 4.4,
        reviews: [
            { name: "Diego L.", stars: 4, text: "Buena zapatilla, el gris claro combina con todo en el gym." },
            { name: "Carlos R.", stars: 5, text: "Excelente descuento, la Metcon 7 es imbatible para entrenamiento." }
        ]
    },
    {
        id: 67,
        name: "Nike Zoom Skylon 11",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b131dc71-7fae-48c5-a552-bbb67174c5c4/NIKE+ZOOM+SKYLON+11.png",
        buyLink: "https://www.nike.com/mx/t/tenis-nike-zoom-skylon-11-jtznoprY/IU1869-101",
        description: "Tenis de running con amortiguación Zoom Air reactiva. Diseño retro-inspirado con tecnología moderna. Malla ligera y suela con patillas para transiciones suaves en cada carrera.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58f27a10-096e-4e27-8f32-1cd360154b6b/NIKE+ZOOM+SKYLON+11.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/163b8c11-e450-48fe-af26-010c19320403/NIKE+ZOOM+SKYLON+11.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/59135142-a96e-4767-9242-3eda8bf670f6/NIKE+ZOOM+SKYLON+11.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cee6cbcd-16f4-4a51-94dc-082ea67f0986/NIKE+ZOOM+SKYLON+11.png"
        ],
        specs: { material: "Malla ligera + sintéticos", peso: "280g", suela: "Goma con patillas de goma durable" },
        rating: 4.5,
        reviews: [
            { name: "Andrés M.", stars: 5, text: "Diseño retro que encanta, la amortiguación Zoom es perfecta para distancias medias." },
            { name: "Luis H.", stars: 4, text: "Muy ligeras y cómodas, ideales para correr en la ciudad." }
        ]
    },
    {
        id: 68,
        name: "Nike Air Max Dn8",
        type: "Sneaker Lifestyle",
        brand: "Nike",
        category: "men",
        price: 4299.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/46161a1e-1332-4cc4-90a9-4be88957f056/AIR+MAX+DN8.png",
        buyLink: "https://www.nike.com/mx/t/tenis-air-max-dn8-Id6xJy7F/IO7846-400",
        description: "Air Max con tecnología Dynamic Air de nuevo nivel. Ocho tubos de doble cámara con presión ajustada que reaccionan a cada paso para una amortiguación personalizada. Diseño futurista de perfil bajo con flujo de aire y estilo urbano.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/46161a1e-1332-4cc4-90a9-4be88957f056/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/63ea6047-d1da-46bf-875d-f041f85550e8/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/02e0831a-37d5-4386-8abd-058d3159ca36/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/522a618d-e320-4c2c-ae01-e38f30e3a006/AIR+MAX+DN8.png"
        ],
        specs: { material: "Malla y sintético con unidades Dynamic Air", peso: "350g", suela: "Goma con patillas de tracción" },
        rating: 4.7,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "La tecnología Dynamic Air es increíble, se siente como caminar sobre nubes." },
            { name: "Miguel A.", stars: 5, text: "Diseño futurista, las Air Max nunca decepcionan." },
            { name: "Fernando G.", stars: 4, text: "Un poco caras pero valen cada peso, la amortiguación es superior." }
        ]
    },
    {
        id: 69,
        name: "Nike Air Max Dn8",
        type: "Sneaker Lifestyle",
        brand: "Nike",
        category: "men",
        price: 3009.00,
        oldPrice: 4299.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d79dee26-0d97-4712-b719-9f61e251b4c3/AIR+MAX+DN8.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-nike-air-max-dn8-Id6xJy7F/IO7846-001",
        description: "Air Max con tecnología Dynamic Air de nuevo nivel. Ocho tubos de doble cámara con presión ajustada que reaccionan a cada paso para una amortiguación personalizada. Diseño futurista de perfil bajo con flujo de aire y estilo urbano.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d79dee26-0d97-4712-b719-9f61e251b4c3/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc9409e6-05eb-4aca-a1f7-55c75c810c47/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/94baa8b2-04b8-46f7-8d0a-cddbf13cd8fb/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/55881c03-2dea-495b-9791-a7bf7d3cec1f/AIR+MAX+DN8.png"
        ],
        specs: { material: "Malla y sintético con unidades Dynamic Air", peso: "350g", suela: "Goma con patillas de tracción" },
        rating: 4.6,
        reviews: [
            { name: "Javier P.", stars: 5, text: "Excelente descuento en las Dn8, el color negro es muy elegante." },
            { name: "Diego L.", stars: 5, text: "Las compré con el 30% off, una ganga para la calidad que tienen." }
        ]
    },
    {
        id: 70,
        name: "Nike Air Max Dn8",
        type: "Sneaker Lifestyle",
        brand: "Nike",
        category: "men",
        price: 2794.00,
        oldPrice: 4299.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0b313018-da77-4696-a335-340fe123b8e2/AIR+MAX+DN8.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-nike-air-max-dn8-Id6xJy7F/IO7846-100",
        description: "Air Max con tecnología Dynamic Air de nuevo nivel. Ocho tubos de doble cámara con presión ajustada que reaccionan a cada paso para una amortiguación personalizada. Diseño futurista de perfil bajo con flujo de aire y estilo urbano.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0b313018-da77-4696-a335-340fe123b8e2/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/99189bed-c312-46ed-89bc-bb72a30cbc05/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/653b0a3d-d697-4e30-9431-954077645dc7/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7207848a-d406-4cc7-b6da-9c66e6eca63c/AIR+MAX+DN8.png"
        ],
        specs: { material: "Malla y sintético con unidades Dynamic Air", peso: "350g", suela: "Goma con patillas de tracción" },
        rating: 4.5,
        reviews: [
            { name: "Roberto F.", stars: 5, text: "El color blanco es limpio y la Dynamic Air se siente increíble." },
            { name: "Andrés M.", stars: 4, text: "Gran descuento, las Dn8 blancas son perfectas para el verano." }
        ]
    },
    {
        id: 71,
        name: "Nike Air Max Dn8",
        type: "Sneaker Lifestyle",
        brand: "Nike",
        category: "men",
        price: 2579.00,
        oldPrice: 4299.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eb65ab78-127c-4ea8-ac22-e71e487b735f/AIR+MAX+DN8.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-nike-air-max-dn8-Id6xJy7F/IO7846-002",
        description: "Air Max con tecnología Dynamic Air de nuevo nivel. Ocho tubos de doble cámara con presión ajustada que reaccionan a cada paso para una amortiguación personalizada. Diseño futurista de perfil bajo con flujo de aire y estilo urbano.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eb65ab78-127c-4ea8-ac22-e71e487b735f/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aa34dcc9-9514-409c-88e2-789dfc6a7b0f/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed17032e-3795-478b-afcf-d18f92a6c4a0/AIR+MAX+DN8.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2dd04202-1b1b-4fca-a7db-8b9a50ec5352/AIR+MAX+DN8.png"
        ],
        specs: { material: "Malla y sintético con unidades Dynamic Air", peso: "350g", suela: "Goma con patillas de tracción" },
        rating: 4.7,
        reviews: [
            { name: "Luis H.", stars: 5, text: "40% de descuento en unas Dn8, no lo podía creer. Excelente compra." },
            { name: "Miguel A.", stars: 5, text: "El mejor deal que he encontrado, la amortiguación Dynamic Air es adictiva." }
        ]
    },
    {
        id: 72,
        name: "Nike SB Zoom Tennis Classic",
        type: "Sneaker Skate",
        brand: "Nike",
        category: "men",
        price: 2199.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8025429b-dd00-461b-9dc3-48019df135eb/NIKE+SB+ZOOM+TENNIS+CLASSIC.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-skateboarding-nike-sb-zoom-tennis-classic-QZcR5ZGm/HF7386-200",
        description: "Clásico de skateboarding con amortiguación Zoom Air oculta. Upper de lona resistente con suela vulcanizada para excelente sensación del tablero. Diseño retro inspirado en el tenis, perfecto para el skate y el día a día.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/882bc701-97eb-4e40-b5dc-1d15aa583a99/NIKE+SB+ZOOM+TENNIS+CLASSIC.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0d0d5941-b4c8-4ab1-ab3d-9b54d2faea66/NIKE+SB+ZOOM+TENNIS+CLASSIC.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0f7a08c-7cd8-48ad-bba3-b90fd7214286/NIKE+SB+ZOOM+TENNIS+CLASSIC.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/26d2322d-84fa-4be4-a67b-aa1f74e72f52/NIKE+SB+ZOOM+TENNIS+CLASSIC.png"
        ],
        specs: { material: "Lona resistente + refuerzos de cuero", peso: "290g", suela: "Vulcanizada con Zoom Air oculta" },
        rating: 4.4,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "El diseño retro es hermoso, la Zoom Air oculta las hace súper cómodas para skate." },
            { name: "Fernando T.", stars: 4, text: "Muy bonitas para el día a día, la suela vulcanizada da buena sensación." }
        ]
    },
    {
        id: 73,
        name: "KD19 \"Candy Apple\"",
        type: "Sneaker Basketball",
        brand: "Nike",
        category: "men",
        price: 3799.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/64fd2b49-0a26-4265-93b8-0fe287c2ab43/KD19.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-basquetbol-kd19-candy-apple-smwkQCyS/IH1117-600",
        description: "Zapatilla de baloncesto de Kevin Durant con amortiguación Zoom Air a toda la suela. Diseño de malla con estabilidad lateral para movimientos explosivos en la cancha. Colorway Candy Apple en rojo vibrante.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cde2c3a8-6293-4a42-8fd3-d2d09aa9e9ce/KD19.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3a8e93eb-3b9e-4645-a267-d3c6a7bc4c96/KD19.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/43c51965-aefb-4781-8572-b4a0ae43bf23/KD19.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7097f62c-36f0-4328-af90-61c0776694c8/KD19.png"
        ],
        specs: { material: "Malla técnica + Zoom Air a toda la suela", peso: "330g", suela: "Goma con patillas de tracción multidireccional" },
        rating: 4.6,
        reviews: [
            { name: "Andrés M.", stars: 5, text: "Las KD19 son increíbles para cancha, la amortiguación Zoom es lo máximo." },
            { name: "Javier P.", stars: 5, text: "El color Candy Apple es espectacular, mucha tracción y comodidad." }
        ]
    },
    {
        id: 74,
        name: "KD19 \"Purple Stuff\"",
        type: "Sneaker Basketball",
        brand: "Nike",
        category: "men",
        price: 3699.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a29eaa38-46a8-4e54-8c48-25c689d5b412/KD19.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-basquetbol-kd19-purple-stuff-smwkQCyS/IH1117-500",
        description: "Zapatilla de baloncesto de Kevin Durant con amortiguación Zoom Air a toda la suela. Diseño de malla con estabilidad lateral para movimientos explosivos en la cancha. Colorway Purple Stuff en tonos púrpura.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4ad615a6-be00-436c-833d-a679e5a47b66/KD19.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b78e4ade-45a5-4273-bbea-b43e4855c844/KD19.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/afcb1827-7aee-4836-8b73-fcac752c4496/KD19.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9d4dead0-1fe5-400e-aa95-2598d3340b89/KD19.png"
        ],
        specs: { material: "Malla técnica + Zoom Air a toda la suela", peso: "330g", suela: "Goma con patillas de tracción multidireccional" },
        rating: 4.5,
        reviews: [
            { name: "Diego L.", stars: 5, text: "El color púrpura es único, las KD19 son las mejores de baloncesto." },
            { name: "Roberto F.", stars: 4, text: "Muy buenas para juego exterior, la tracción es excelente." }
        ]
    },
    {
        id: 75,
        name: "Nike P-6000",
        type: "Sneaker Lifestyle",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/427c256b-a65d-4b13-a295-8c1c0b7d8aff/NIKE+P-6000.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-nike-p-6000-O3KXy8AA/IR5279-100",
        description: "Runner retro inspirado en los modelos P de los 2000s. Capas de malla y sintético con amortiguación Air Max. Diseño nostálgico que combina estilo y comodidad para el uso diario.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/427c256b-a65d-4b13-a295-8c1c0b7d8aff/NIKE+P-6000.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/75a8aeb8-57ff-4ad7-8687-52645e56d9a7/NIKE+P-6000.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8f91e07a-a612-4209-bfde-f56d21783cb1/NIKE+P-6000.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4fa302ad-6324-4ff7-8879-e0fbf88d9b7e/NIKE+P-6000.png"
        ],
        specs: { material: "Malla y sintético con Air Max", peso: "300g", suela: "Goma con unidad Air Max visible" },
        rating: 4.5,
        reviews: [
            { name: "Miguel A.", stars: 5, text: "Diseño retro que me encanta, las capas de malla le dan mucho estilo." },
            { name: "Carlos R.", stars: 4, text: "Muy cómodas para caminar todo el día, el Air Max se siente genial." }
        ]
    },
    {
        id: 76,
        name: "Nike P-6000",
        type: "Sneaker Lifestyle",
        brand: "Nike",
        category: "men",
        price: 2999.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0708260a-b8ae-4cde-b40d-ce9d420eb58a/NIKE+P-6000.png",
        buyLink: "https://www.nike.com/mx/t/tenis-para-hombre-nike-p-6000-O3KXy8AA/IR5279-003",
        description: "Runner retro inspirado en los modelos P de los 2000s. Capas de malla y sintético con amortiguación Air Max. Diseño nostálgico que combina estilo y comodidad para el uso diario.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0708260a-b8ae-4cde-b40d-ce9d420eb58a/NIKE+P-6000.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/087dbfb9-bd80-43ff-80fe-2592be4d7599/NIKE+P-6000.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/75064abc-e849-4ca4-8285-45dcb3bda384/NIKE+P-6000.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b9e32e27-4a02-4641-ba1b-521a9a0e7f60/NIKE+P-6000.png"
        ],
        specs: { material: "Malla y sintético con Air Max", peso: "300g", suela: "Goma con unidad Air Max visible" },
        rating: 4.4,
        reviews: [
            { name: "Fernando G.", stars: 5, text: "El color negro es versátil, combina con cualquier outfit casual." },
            { name: "Luis H.", stars: 4, text: "Retro y cómodas, perfectas para un look nostálgico." }
        ]
    },
    {
        id: 77,
        name: "Nike Vomero Plus",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3799.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65d689e7-317f-4848-9beb-64a7be81605b/NIKE+VOMERO+PLUS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-plus-LuStVXN8/HV8150-017",
        description: "Zapatilla de running premium con espuma ZoomX y amortiguación maximizada. Para corredores que buscan comodidad en distancias largas. Malla Flyknit adaptable y retorno de energía excepcional.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65d689e7-317f-4848-9beb-64a7be81605b/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5d44bae1-b926-469c-9683-a5e3879b5b03/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0b5f1bcc-c0fe-42d1-a553-1a6bc83b073d/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ad103e86-fd81-4844-9e08-3b9de406d572/NIKE+VOMERO+PLUS.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "290g", suela: "Goma durable con patillas de goma" },
        rating: 4.8,
        reviews: [
            { name: "Andrés M.", stars: 5, text: "La mejor zapatilla de running que he probado, el ZoomX es pura energía." },
            { name: "Carlos R.", stars: 5, text: "Hice un maratón con estas y mi tiempo mejoró enormemente." },
            { name: "Miguel A.", stars: 5, text: "Precio alto pero vale cada peso, la comodidad es incomparable." }
        ]
    },
    {
        id: 78,
        name: "Nike Vomero Plus",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3799.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30fd3343-b5c3-4473-bae0-86aeccb4aef7/NIKE+VOMERO+PLUS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-plus-LuStVXN8/HV8150-109",
        description: "Zapatilla de running premium con espuma ZoomX y amortiguación maximizada. Para corredores que buscan comodidad en distancias largas. Malla Flyknit adaptable y retorno de energía excepcional.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30fd3343-b5c3-4473-bae0-86aeccb4aef7/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5c24318d-3614-4221-9317-10e4d17b52b7/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/021db635-84a9-4222-8d39-6e9f12347aab/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/140a0aff-72e1-4748-9fb9-e23a6ce1a18f/NIKE+VOMERO+PLUS.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "290g", suela: "Goma durable con patillas de goma" },
        rating: 4.6,
        reviews: [
            { name: "Diego L.", stars: 5, text: "El color blanco es elegante, perfectas para distancias largas." },
            { name: "Javier P.", stars: 4, text: "Muy buenas para running diario, la ZoomX es adictiva." }
        ]
    },
    {
        id: 79,
        name: "Nike Vomero Plus",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3799.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/731cd1fe-6891-4535-9989-0877bb0b7a58/NIKE+VOMERO+PLUS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-plus-LuStVXN8/HV8150-108",
        description: "Zapatilla de running premium con espuma ZoomX y amortiguación maximizada. Para corredores que buscan comodidad en distancias largas. Malla Flyknit adaptable y retorno de energía excepcional.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/731cd1fe-6891-4535-9989-0877bb0b7a58/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7e492530-9c6f-40e2-904d-02737e95ed1b/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0aef10d4-1c56-48c8-ab5c-5a9e24514653/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7d87460d-8076-4c7a-a331-44aa5864f488/NIKE+VOMERO+PLUS.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "290g", suela: "Goma durable con patillas de goma" },
        rating: 4.5,
        reviews: [
            { name: "Fernando T.", stars: 4, text: "Buenas para running diario, el Flyknit es muy transpirable." },
            { name: "Roberto F.", stars: 5, text: "La amortiguación ZoomX es la mejor del mercado, súper ligeras." }
        ]
    },
    {
        id: 80,
        name: "Nike Vomero Plus",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3799.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab581537-fbd1-41c8-bded-200fa4f49db0/NIKE+VOMERO+PLUS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-plus-LuStVXN8/HV8150-003",
        description: "Zapatilla de running premium con espuma ZoomX y amortiguación maximizada. Para corredores que buscan comodidad en distancias largas. Malla Flyknit adaptable y retorno de energía excepcional.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab581537-fbd1-41c8-bded-200fa4f49db0/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2b40ce3d-b2e1-498c-8412-564666199e53/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8c272a0f-8148-4144-82fb-a42d0efaea95/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4c62ca72-0602-48ef-a681-32a06a78581e/NIKE+VOMERO+PLUS.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "290g", suela: "Goma durable con patillas de goma" },
        rating: 4.7,
        reviews: [
            { name: "Luis H.", stars: 5, text: "El color verde es llamativo y la ZoomX es increíble para largas distancias." },
            { name: "Andrés M.", stars: 5, text: "Las Vomero Plus son mi zapatilla favorita para running." }
        ]
    },
    {
        id: 81,
        name: "Nike Vomero Plus",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3077.00,
        oldPrice: 3799.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7bdd841a-57eb-4c01-86d3-657790c24c30/NIKE+VOMERO+PLUS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-plus-LuStVXN8/HV8150-301",
        description: "Zapatilla de running premium con espuma ZoomX y amortiguación maximizada. Para corredores que buscan comodidad en distancias largas. Malla Flyknit adaptable y retorno de energía excepcional.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7bdd841a-57eb-4c01-86d3-657790c24c30/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6f21ce09-68d2-4c32-ba9e-14d52da351c3/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6de51a97-66fd-4143-b71e-e8bfa9c8fad4/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6abf9cdf-b02f-4501-8214-f98d67a8fa29/NIKE+VOMERO+PLUS.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "290g", suela: "Goma durable con patillas de goma" },
        rating: 4.6,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "Excelente descuento en una zapatilla premium, el púrpura es hermoso." },
            { name: "Diego L.", stars: 5, text: "Las compré con 19% off, súper contento con mi compra." }
        ]
    },
    {
        id: 82,
        name: "Nike Vomero Plus",
        type: "Sneaker Running",
        brand: "Nike",
        category: "men",
        price: 3077.00,
        oldPrice: 3799.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4ae9c790-1583-418a-aace-8f9464e3275e/NIKE+VOMERO+PLUS.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-correr-en-pavimento-para-hombre-nike-vomero-plus-LuStVXN8/HV8150-702",
        description: "Zapatilla de running premium con espuma ZoomX y amortiguación maximizada. Para corredores que buscan comodidad en distancias largas. Malla Flyknit adaptable y retorno de energía excepcional.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4ae9c790-1583-418a-aace-8f9464e3275e/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/121b01ed-02b7-4bf5-8530-82ec381eda5f/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/55898998-eec3-4bc8-9543-87c433a0596c/NIKE+VOMERO+PLUS.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d443d0c-18e1-4be6-a3eb-11ebb4a64d0e/NIKE+VOMERO+PLUS.png"
        ],
        specs: { material: "Flyknit + espuma ZoomX", peso: "290g", suela: "Goma durable con patillas de goma" },
        rating: 4.5,
        reviews: [
            { name: "Miguel A.", stars: 4, text: "Buen precio con descuento, el naranja es un color diferente." },
            { name: "Javier P.", stars: 5, text: "Las Vomero Plus son las mejores zapatillas de running que he tenido." }
        ]
    },
    {
        id: 83,
        name: "Luka 77",
        type: "Sneaker Basketball",
        brand: "Nike",
        category: "men",
        price: 2299.00,
        oldPrice: null,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6e30be3e-2429-4b06-b335-6afddd1af870/JORDAN+LUKA+77.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-basquetbol-luka-77-qE11RLcf/IF1610-003",
        description: "Zapatilla de baloncesto de Luka Doncic con amortiguación React y tracción multidireccional. Diseño que combina estilo personal con rendimiento de élite en la cancha. Soporte lateral para cambios de dirección explosivos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6e30be3e-2429-4b06-b335-6afddd1af870/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f0732a44-a6fd-4c6f-837e-3cbd52fd41fc/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/05f58f48-662a-4f82-a669-cd4d6dc986c9/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7fa2ba06-169e-4b6d-9473-3c2319af9e53/JORDAN+LUKA+77.png"
        ],
        specs: { material: "Malla técnica + espuma React", peso: "320g", suela: "Goma con tracción multidireccional" },
        rating: 4.5,
        reviews: [
            { name: "Carlos R.", stars: 5, text: "Las Luka 77 son increíbles para jugar, mucha tracción y comodidad." },
            { name: "Andrés M.", stars: 4, text: "Excelente zapatilla de baloncesto, el React se siente genial." }
        ]
    },
    {
        id: 84,
        name: "Luka 77",
        type: "Sneaker Basketball",
        brand: "Nike",
        category: "men",
        price: 2299.00,
        oldPrice: null,
        isNew: true,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b97637b5-37ba-4219-b198-4b3f62620c89/JORDAN+LUKA+77.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-basquetbol-luka-77-qE11RLcf/IF1610-103",
        description: "Zapatilla de baloncesto de Luka Doncic con amortiguación React y tracción multidireccional. Diseño que combina estilo personal con rendimiento de élite en la cancha. Soporte lateral para cambios de dirección explosivos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b97637b5-37ba-4219-b198-4b3f62620c89/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a289b8c9-d246-4b6c-b39d-00280a7a541a/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ad797edd-40e6-45d8-853d-3f7ac4db9634/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/11647116-3b3a-4686-8442-201e1c838b0f/JORDAN+LUKA+77.png"
        ],
        specs: { material: "Malla técnica + espuma React", peso: "320g", suela: "Goma con tracción multidireccional" },
        rating: 4.6,
        reviews: [
            { name: "Diego L.", stars: 5, text: "Nuevo colorway, el blanco es limpio y la zapatilla es top para baloncesto." },
            { name: "Fernando T.", stars: 5, text: "Las Luka 77 son las mejores en relación calidad-precio para cancha." }
        ]
    },
    {
        id: 85,
        name: "Luka 77",
        type: "Sneaker Basketball",
        brand: "Nike",
        category: "men",
        price: 1862.00,
        oldPrice: 2299.00,
        isNew: false,
        imageUrl: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ca3a4eb6-a4a9-45b0-a7f2-ce7d086a6bac/JORDAN+LUKA+77.png",
        buyLink: "https://www.nike.com/mx/t/tenis-de-basquetbol-luka-77-qE11RLcf/IF1610-600",
        description: "Zapatilla de baloncesto de Luka Doncic con amortiguación React y tracción multidireccional. Diseño que combina estilo personal con rendimiento de élite en la cancha. Soporte lateral para cambios de dirección explosivos.",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        images: [
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ca3a4eb6-a4a9-45b0-a7f2-ce7d086a6bac/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2f2004be-6a17-43cf-bc06-c3ced667af48/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2144a4fa-a5b9-481d-8c91-5e1174f62e7b/JORDAN+LUKA+77.png",
            "https://static.nike.com/a/images/t_web_pdp_535_v2/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/53c8c2b6-5eda-4cad-ae20-7ddab1c3894e/JORDAN+LUKA+77.png"
        ],
        specs: { material: "Malla técnica + espuma React", peso: "320g", suela: "Goma con tracción multidireccional" },
        rating: 4.7,
        reviews: [
            { name: "Roberto F.", stars: 5, text: "Las compré con descuento, el rojo es espectacular para cancha." },
            { name: "Miguel A.", stars: 5, text: "Excelente precio con el 19% off, las Luka 77 son imbatibles." }
        ]
    }
];

// =============================================
// DETECCIÓN DE PÁGINA
// =============================================

function getCurrentPage() {
    let path = window.location.pathname;
    let filename = path.split('/').pop();
    let base = filename.replace(/\.(php|html)$/, '');
    if (!base || base === '' || base === 'index') return 'index';
    if (base === 'hombre') return 'men';
    if (base === 'mujer') return 'women';
    if (base === 'novedades') return 'new';
    if (base === 'ofertas') return 'sale';
    if (base === 'producto') return 'detail';
    return 'index';
}

function getProductsForPage(page) {
    switch (page) {
        case 'men':
            return products.filter(function(p) { return p.category === 'men'; });
        case 'women':
            return products.filter(function(p) { return p.category === 'women'; });
        case 'new':
            return products.filter(function(p) { return p.isNew === true; });
        case 'sale':
            return products.filter(function(p) { return p.oldPrice !== null; });
        case 'detail':
        case 'index':
        default:
            return products.filter(function(p) { return p.featured === true; });
    }
}

// =============================================
// RENDERIZADO DE PRODUCTOS
// =============================================

function buildProductCard(product) {
    let card = document.createElement('div');
    card.className = 'product-card';

    let badgeHTML = product.isNew
        ? '<span class="new-badge">Nuevo</span>'
        : '';

    let saleBadgeHTML = '';
    if (product.oldPrice) {
        let discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
        saleBadgeHTML = '<span class="sale-badge">-' + discount + '%</span>';
    }

    let priceHTML = product.oldPrice
        ? '<span class="old-price">$' + product.oldPrice.toFixed(2) + '</span>'
        : '';

    let detailLink = 'producto.php?id=' + product.id;

    let starsHTML = '';
    if (product.rating) {
        let fullStars = Math.floor(product.rating);
        let halfStar = product.rating % 1 >= 0.5;
        starsHTML = '<div class="card-stars">';
        for (let s = 0; s < 5; s++) {
            if (s < fullStars) starsHTML += '<span class="star filled">&#9733;</span>';
            else if (s === fullStars && halfStar) starsHTML += '<span class="star filled">&#9733;</span>';
            else starsHTML += '<span class="star">&#9734;</span>';
        }
        starsHTML += '</div>';
    }

    let brandHTML = product.brand
        ? '<span class="product-brand">' + product.brand + '</span>'
        : '';

    card.innerHTML =
        '<a href="' + detailLink + '" class="product-card-link">' +
            '<div class="product-image-wrap">' +
                badgeHTML + saleBadgeHTML +
                '<img src="' + product.imageUrl + '" alt="' + product.name + ', ' + product.type + (product.brand ? ' de ' + product.brand : '') + '" class="product-card-image" loading="lazy" width="400" height="300">' +
            '</div>' +
            '<div class="product-info">' +
                brandHTML +
                '<p class="product-type">' + product.type + '</p>' +
                '<h3 class="product-title">' + product.name + '</h3>' +
                starsHTML +
                '<div class="price-wrap">' + priceHTML +
                    '<span class="current-price">$' + product.price.toFixed(2) + '</span>' +
                '</div>' +
            '</div>' +
        '</a>' +
        '<div class="product-card-actions">' +
            '<a href="' + product.buyLink + '" target="_blank" rel="noopener noreferrer" class="buy-btn">Comprar Ahora</a>' +
        '</div>';

    return card;
}

function updateProductCount(count) {
    let subtitle = document.querySelector('.shop-section .section-subtitle');
    if (!subtitle) return;
    let page = getCurrentPage();
    let label = '';
    switch (page) {
        case 'men': label = count + ' producto' + (count !== 1 ? 's' : '') + ' disponible' + (count !== 1 ? 's' : ''); break;
        case 'women': label = count + ' producto' + (count !== 1 ? 's' : '') + ' disponible' + (count !== 1 ? 's' : ''); break;
        case 'new': label = count + ' producto' + (count !== 1 ? 's' : '') + ' nuevo' + (count !== 1 ? 's' : ''); break;
        case 'sale': label = count + ' producto' + (count !== 1 ? 's' : '') + ' con descuento'; break;
        default: label = count + ' producto' + (count !== 1 ? 's' : '') + ' destacado' + (count !== 1 ? 's' : '');
    }
    subtitle.textContent = label;
}

function renderProducts(list) {
    let grid = document.getElementById('product-list');
    if (!grid) return;
    grid.innerHTML = '';
    updateProductCount(list.length);

    if (list.length === 0) {
        grid.innerHTML = '<p class="no-products-msg">No se encontraron productos.</p>';
        return;
    }

    let fragment = document.createDocumentFragment();
    list.forEach(function(p, i) {
        let card = buildProductCard(p);
        card.style.animationDelay = (i * 0.07) + 's';
        card.classList.add('stagger-item');
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
}

// =============================================
// FILTROS DE TIPO + PRECIO
// =============================================

let currentTypeFilter = 'all';
let currentPriceFilter = 'all';
let currentPageProducts = [];

function updateProductGrid() {
    let filtered = currentPageProducts;

    if (currentTypeFilter !== 'all') {
        filtered = filtered.filter(function(p) {
            return p.type.toLowerCase().includes(currentTypeFilter.toLowerCase());
        });
    }

    if (currentPriceFilter !== 'all') {
        filtered = filtered.filter(function(p) {
            switch (currentPriceFilter) {
                case 'under1500': return p.price < 1500;
                case '1500-2500': return p.price >= 1500 && p.price <= 2500;
                case 'over2500': return p.price > 2500;
                default: return true;
            }
        });
    }

    renderProducts(filtered);
}

function setupFilters() {
    let btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            btns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentTypeFilter = btn.getAttribute('data-filter');
            updateProductGrid();
        });
    });

    let priceBtns = document.querySelectorAll('.price-filter-btn');
    priceBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            priceBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentPriceFilter = btn.getAttribute('data-price');
            updateProductGrid();
        });
    });
}

// =============================================
// MODO OSCURO
// =============================================

function setupThemeToggle() {
    let toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    let saved = localStorage.getItem('naerdex-theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
        toggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }

    updateThemeIcon();

    toggle.addEventListener('click', function() {
        let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('naerdex-theme', 'light');
            toggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('naerdex-theme', 'dark');
            toggle.setAttribute('aria-label', 'Cambiar a modo claro');
        }
        updateThemeIcon();
    });
}

function updateThemeIcon() {
    let toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggle.innerHTML = isDark
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

// =============================================
// BÚSQUEDA
// =============================================

function setupSearch() {
    let searchBtns = document.querySelectorAll('.search-btn');
    let overlay = document.getElementById('search-overlay');
    if (!overlay) return;

    let input = overlay.querySelector('.search-input');
    let resultsContainer = overlay.querySelector('.search-results');
    let closeBtn = overlay.querySelector('.search-close');

    function openSearch() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(function() { input.focus(); }, 200);
    }

    function closeSearch() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        input.value = '';
        resultsContainer.innerHTML = '';
    }

    searchBtns.forEach(function(btn) {
        btn.addEventListener('click', openSearch);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeSearch();
    });

    input.addEventListener('input', function() {
        let query = input.value.trim().toLowerCase();
        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            return;
        }

        let results = products.filter(function(p) {
            return p.name.toLowerCase().includes(query) ||
                   p.type.toLowerCase().includes(query) ||
                   (p.brand && p.brand.toLowerCase().includes(query)) ||
                   p.category &&
                   ((p.category === 'men' && 'hombre'.includes(query)) ||
                    (p.category === 'women' && 'mujer'.includes(query)) ||
                    (p.category === 'kids' && 'niños kids'.includes(query)));
        }).slice(0, 8);

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="search-no-results">No se encontraron productos para "' + input.value.trim() + '"</p>';
            return;
        }

        let html = '<div class="search-results-grid">';
        results.forEach(function(p) {
            let searchBrand = p.brand ? '<span class="search-result-brand">' + p.brand + '</span>' : '';
            html += '<a href="producto.php?id=' + p.id + '" class="search-result-card">' +
                '<img src="' + p.imageUrl + '" alt="' + p.name + '" loading="lazy" width="80" height="60">' +
                '<div class="search-result-info">' +
                    searchBrand +
                    '<span class="search-result-type">' + p.type + '</span>' +
                    '<span class="search-result-name">' + p.name + '</span>' +
                    '<span class="search-result-price">$' + p.price.toFixed(2) + '</span>' +
                '</div>' +
            '</a>';
        });
        html += '</div>';
        resultsContainer.innerHTML = html;
    });
}

// =============================================
// PÁGINA DE DETALLE
// =============================================

function renderProductDetail() {
    let page = getCurrentPage();
    if (page !== 'detail') return;

    let params = new URLSearchParams(window.location.search);
    let id = parseInt(params.get('id'));
    let product = products.find(function(p) { return p.id === id; });

    if (!id || !product) {
        document.title = 'Producto no encontrado | Naerdex';
        let main = document.querySelector('.product-detail');
        if (main) main.innerHTML =
            '<div class="detail-not-found">' +
                '<h2>Producto no encontrado</h2>' +
                '<p>El producto que buscas no existe o ha sido removido.</p>' +
                '<a href="index.php" class="btn btn-primary">Volver al Inicio</a>' +
            '</div>';
        return;
    }

    document.title = product.name + ' | Naerdex';

    let main = document.querySelector('.product-detail');
    if (!main) return;

    let starsHTML = '';
    if (product.rating) {
        let fullStars = Math.floor(product.rating);
        let halfStar = product.rating % 1 >= 0.5;
        starsHTML = '<div class="detail-rating">';
        for (let s = 0; s < 5; s++) {
            if (s < fullStars) starsHTML += '<span class="star filled">&#9733;</span>';
            else if (s === fullStars && halfStar) starsHTML += '<span class="star filled">&#9733;</span>';
            else starsHTML += '<span class="star">&#9734;</span>';
        }
        starsHTML += '<span class="rating-number">' + product.rating + '</span>';
        starsHTML += '<span class="review-count">(' + product.reviews.length + ' reseñas)</span>';
        starsHTML += '</div>';
    }

    let oldPriceHTML = product.oldPrice
        ? '<span class="old-price">$' + product.oldPrice.toFixed(2) + '</span>'
        : '';

    let sizesHTML = '<div class="size-selector">';
    product.sizes.forEach(function(size) {
        sizesHTML += '<button class="size-btn" type="button">' + size + '</button>';
    });
    sizesHTML += '</div>';

    let thumbsHTML = '<div class="detail-thumbnails">';
    product.images.forEach(function(img, i) {
        thumbsHTML += '<button class="thumb-btn ' + (i === 0 ? 'active' : '') + '" data-img="' + img + '"><img src="' + img + '" alt="Vista ' + (i + 1) + '" width="80" height="60" loading="lazy"></button>';
    });
    thumbsHTML += '</div>';

    let specsHTML = '<div class="detail-specs">';
    if (product.specs) {
        if (product.specs.material) specsHTML += '<div class="spec-row"><span class="spec-label">Material</span><span class="spec-value">' + product.specs.material + '</span></div>';
        if (product.specs.peso) specsHTML += '<div class="spec-row"><span class="spec-label">Peso</span><span class="spec-value">' + product.specs.peso + '</span></div>';
        if (product.specs.suela) specsHTML += '<div class="spec-row"><span class="spec-label">Suela</span><span class="spec-value">' + product.specs.suela + '</span></div>';
    }
    specsHTML += '</div>';

    let reviewsHTML = '';
    if (product.reviews && product.reviews.length > 0) {
        reviewsHTML = '<div class="detail-reviews"><h3 class="detail-reviews-title">Reseñas</h3>';
        product.reviews.forEach(function(r) {
            let rStars = '';
            for (let rs = 0; rs < 5; rs++) {
                rStars += rs < r.stars ? '<span class="star filled">&#9733;</span>' : '<span class="star">&#9734;</span>';
            }
            reviewsHTML += '<div class="review-card">' +
                '<div class="review-header">' +
                    '<span class="review-author">' + r.name + '</span>' +
                    '<div class="review-stars">' + rStars + '</div>' +
                '</div>' +
                '<p class="review-text">' + r.text + '</p>' +
            '</div>';
        });
        reviewsHTML += '</div>';
    }

    let categoryLabel = '';
    if (product.category === 'men') categoryLabel = 'Hombre';
    else if (product.category === 'women') categoryLabel = 'Mujer';
    else if (product.category === 'kids') categoryLabel = 'Kids';
    else categoryLabel = 'Destacado';

    let categoryName = '';
    if (product.category === 'men') categoryName = 'hombre.php';
    else if (product.category === 'women') categoryName = 'mujer.php';
    else if (product.category === 'kids') categoryName = 'novedades.php';
    else categoryName = 'index.php';

    main.innerHTML =
        '<div class="container">' +
            '<nav class="breadcrumb" aria-label="Breadcrumb">' +
                '<a href="index.php">Inicio</a> &rsaquo; ' +
                '<a href="' + categoryName + '">' + categoryLabel + '</a> &rsaquo; ' +
                '<span>' + product.name + '</span>' +
            '</nav>' +
            '<div class="detail-layout">' +
                '<div class="detail-gallery">' +
                    '<div class="detail-main-image">' +
                        (product.isNew ? '<span class="new-badge">Nuevo</span>' : '') +
                        (product.oldPrice ? '<span class="sale-badge">-' + Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) + '%</span>' : '') +
                        '<img src="' + product.images[0] + '" alt="' + product.name + '" id="detail-main-img">' +
                    '</div>' +
                    thumbsHTML +
                '</div>' +
                '<div class="detail-info">' +
                    (product.brand ? '<p class="detail-brand">' + product.brand + '</p>' : '') +
                    '<p class="detail-type">' + product.type + '</p>' +
                    '<h1 class="detail-name">' + product.name + '</h1>' +
                    starsHTML +
                    '<div class="detail-price">' + oldPriceHTML +
                        '<span class="current-price">$' + product.price.toFixed(2) + '</span>' +
                    '</div>' +
                    '<p class="detail-description">' + product.description + '</p>' +
                    '<div class="detail-sizes">' +
                        '<span class="detail-label">Tallas disponibles</span>' +
                        sizesHTML +
                    '</div>' +
                    '<a href="' + product.buyLink + '" target="_blank" rel="noopener noreferrer" class="buy-btn detail-buy-btn">' +
                        (product.brand && product.brand !== 'Naerdex' ? 'Ver en ' + product.brand : 'Comprar Ahora en la Tienda') +
                    '</a>' +
                    '<p class="detail-disclaimer">' +
                        (product.brand && product.brand !== 'Naerdex'
                            ? 'Serás redirigido a la tienda oficial de ' + product.brand + ' para completar tu compra.'
                            : 'Serás redirigido a la tienda del vendedor para completar tu compra.') +
                    '</p>' +
                    specsHTML +
                '</div>' +
            '</div>' +
            reviewsHTML +
        '</div>';

    // Thumbnail click
    let thumbBtns = main.querySelectorAll('.thumb-btn');
    let mainImg = document.getElementById('detail-main-img');
    thumbBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            thumbBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            mainImg.src = btn.getAttribute('data-img');
        });
    });

    // Size selector
    let sizeBtns = main.querySelectorAll('.size-btn');
    sizeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            sizeBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
        });
    });
}

// =============================================
// MENÚ MÓVIL
// =============================================

function setupMobileMenu() {
    let menuBtn = document.getElementById('mobile-menu-btn');
    let nav = document.getElementById('nav');
    let overlay = document.getElementById('mobile-overlay');
    if (!menuBtn || !nav || !overlay) return;

    let menuIcon = menuBtn.querySelector('.menu-icon');
    let closeIcon = menuBtn.querySelector('.close-icon');

    function openMenu() {
        nav.classList.add('active');
        overlay.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', function() {
        if (nav.classList.contains('active')) closeMenu();
        else openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) closeMenu();
    });

    nav.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
}

// =============================================
// BOTÓN VOLVER ARRIBA
// =============================================

function setupBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    }, { passive: true });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================
// ANIMACIONES FADE-IN
// =============================================

function setupScrollAnimations() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(function(el) {
        observer.observe(el);
    });
}

// =============================================
// PARALLAX
// =============================================

function setupParallax() {
    let hero = document.querySelector('.hero');
    if (!hero) return;

    hero.style.backgroundPositionY = '0px';

    window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;
        let rect = hero.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            hero.style.backgroundPositionY = (scrolled * 0.3) + 'px';
        }
    }, { passive: true });
}

// =============================================
// TRANSICIONES ENTRE PÁGINAS
// =============================================

function setupPageTransitions() {
    let transition = document.getElementById('page-transition');
    if (!transition) return;

    document.querySelectorAll('a[href]').forEach(function(link) {
        let href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;

        link.addEventListener('click', function(e) {
            e.preventDefault();
            transition.classList.add('active');
            setTimeout(function() {
                window.location.href = href;
            }, 350);
        });
    });

    window.addEventListener('pageshow', function() {
        transition.classList.remove('active');
    });
}

// =============================================
// NEWSLETTER
// =============================================

function setupNewsletter() {
    let form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let input = form.querySelector('input[type="email"]');
        let msg = document.getElementById('newsletter-msg');
        if (input.value && input.validity.valid) {
            msg.textContent = '\u00a1Gracias por suscribirte! Pronto recibir\u00e1s nuestras novedades.';
            msg.classList.add('success');
            input.value = '';
        } else {
            msg.textContent = 'Por favor ingresa un correo v\u00e1lido.';
            msg.classList.remove('success');
        }
    });
}

// =============================================
// PAGINACION (CARGAR MAS)
// =============================================

let ITEMS_PER_PAGE = 12;
let currentPageOffset = 0;
let currentDisplayCount = 12;

function renderProductsPaginated(list, reset) {
    let grid = document.getElementById('product-list');
    if (!grid) return;

    if (reset) {
        currentPageOffset = 0;
        grid.innerHTML = '';
    }

    updateProductCount(list.length);

    if (list.length === 0) {
        grid.innerHTML = '<p class="no-products-msg">No se encontraron productos.</p>';
        removeLoadMoreBtn();
        return;
    }

    let displayCount = (currentDisplayCount === 'all') ? list.length : parseInt(currentDisplayCount);
    let pageSize = reset ? displayCount : ITEMS_PER_PAGE;
    let end = Math.min(currentPageOffset + pageSize, list.length);
    let visible = list.slice(currentPageOffset, end);
    let fragment = document.createDocumentFragment();
    visible.forEach(function(p, i) {
        let card = buildProductCard(p);
        card.style.animationDelay = (i * 0.07) + 's';
        card.classList.add('stagger-item');
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);

    currentPageOffset = end;
    renderLoadMoreBtn(list.length);
}

function renderLoadMoreBtn(totalCount) {
    removeLoadMoreBtn();
    if (currentPageOffset >= totalCount) return;

    let grid = document.getElementById('product-list');
    if (!grid) return;

    let wrap = document.createElement('div');
    wrap.className = 'load-more-wrap';
    wrap.id = 'load-more-wrap';
    wrap.innerHTML = '<button class="load-more-btn" id="load-more-btn">Cargar Mas</button>';
    grid.parentNode.insertBefore(wrap, grid.nextSibling);
}

function removeLoadMoreBtn() {
    let wrap = document.getElementById('load-more-wrap');
    if (wrap) wrap.remove();
}

function setupLoadMore() {
    document.addEventListener('click', function(e) {
        if (e.target.id === 'load-more-btn') {
            let grid = document.getElementById('product-list');
            if (!grid) return;
            let list = currentPageProductsFiltered.length ? currentPageProductsFiltered : currentPageProducts;
            grid.classList.add('fading');
            setTimeout(function() {
                renderProductsPaginated(list, false);
                grid.classList.remove('fading');
            }, 250);
        }
    });
}

// =============================================
// TRANSICIONES DE FILTRADO
// =============================================

let updateProductGridOriginal = updateProductGrid;
updateProductGrid = function() {
    let grid = document.getElementById('product-list');
    if (!grid) return;
    grid.classList.add('fading');
    setTimeout(function() {
        let filtered = currentPageProducts;

        if (currentTypeFilter !== 'all') {
            filtered = filtered.filter(function(p) {
                return p.type.toLowerCase().includes(currentTypeFilter.toLowerCase());
            });
        }

        if (currentPriceFilter !== 'all') {
            filtered = filtered.filter(function(p) {
                switch (currentPriceFilter) {
                    case 'under1500': return p.price < 1500;
                    case '1500-2500': return p.price >= 1500 && p.price <= 2500;
                    case 'over2500': return p.price > 2500;
                    default: return true;
                }
            });
        }

        currentPageProductsFiltered = filtered;
        renderProductsPaginated(filtered, true);
        grid.classList.remove('fading');
    }, 250);
};

let currentPageProductsFiltered = [];

// =============================================
// CANTIDAD DE PRODUCTOS EN VISTA
// =============================================

function setupDisplayCount() {
    let select = document.getElementById('display-count');
    if (!select) return;
    select.addEventListener('change', function() {
        currentDisplayCount = this.value;
        updateProductGrid();
    });
}

// =============================================
// INICIALIZACIÓN
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    let page = getCurrentPage();

    if (page === 'detail') {
        renderProductDetail();
    } else {
        currentPageProducts = getProductsForPage(page);
        renderProductsPaginated(currentPageProducts, true);
    }

    setupFilters();
    setupMobileMenu();
    setupBackToTop();
    setupScrollAnimations();
    setupParallax();
    setupPageTransitions();
    setupThemeToggle();
    setupSearch();
    setupNewsletter();
    setupLoadMore();
    setupDisplayCount();
});
