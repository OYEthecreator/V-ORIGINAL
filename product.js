// --- Product Data ---
const blacklineProducts = [

    {
    id: "blackline1",
    name: "Asymmetric Blazer",
    price: "$21,700",
    description: "The Asymmetric Blazer presents a masterful interpretation of contemporary tailoring, featuring precisely engineered lines and a striking silhouette. Its architectural form redefines professional attire through innovative cut and structured elegance.",
    images: [
      "images/BLN LATEST ACHITECTURAL BLAZER.png",
      "images/BLN LATEST ACHITECTURAL BLAZER.png",
      "images/BLN LATEST ACHITECTURAL BLAZER.png",
      "images/BLN LATEST ACHITECTURAL BLAZER.png",
      "images/BLN LATEST ACHITECTURAL BLAZER.png",
      "images/BLN LATEST ACHITECTURAL BLAZER.png"
    ],
    sizePredictor: "Fitted through shoulders with room for layering. Chest measurement +2 inches for comfortable drape.",
    styleSuggestions: ["Layer over Deconstructed Shirt for urban elegance", "Add minimalist jewelry to maintain clean lines", "Combine with Armored Boots for edgy style"],
    materialExplorer: ["Technical midnight fabric", "Satin lining", "Reinforced shoulder seams"]
  },
  {
    id: "blackline2",
    name: "Armored Boot",
    price: "$7,500",
    description: "Armored Boot exemplifies protective footwear reimagined for urban environments, combining structural integrity with sophisticated design. The boots feature reinforced elements that create a powerful, commanding presence.",
    images: [
      "images/BLACKLINE ARMORED BOOT-NEW.png",
      "images/BLACKLINE ARMORED BOOT-NEW.png",
      "images/BLACKLINE ARMORED BOOT-NEW.png",
      "images/BLACKLINE ARMORED BOOT-NEW.png",
      "images/BLACKLINE ARMORED BOOT-NEW.png",
      "images/BLACKLINE ARMORED BOOT-NEW.png"
    ],
    sizePredictor: "Standard footwear sizing with reinforced toe box. Consider ½ size up for thicker socks.",
    styleSuggestions: ["Layer with Nocturne Scarf for winter styling", "Combine with tactical trousers for a streetwear look", "Stack layered bracelets underneath for detail"],
    materialExplorer: ["Premium matte leather", "Steel-reinforced eyelets", "Sculpted rubber sole"]
  },
  {
    id: "blackline3",
    name: "Articulated Gauntlet",
    price: "$12,000",
    description: "Articulated Gauntlet represents the convergence of technical craftsmanship and avant-garde aesthetics. This piece demonstrates sophisticated articulation through its carefully considered structure and precision engineering.",
    images: [
      "images/BLACKLINE ARTICULATED GAUNTLET-NEW.png",
      "images/BLACKLINE ARTICULATED GAUNTLET-NEW.png",
      "images/BLACKLINE ARTICULATED GAUNTLET-NEW.png",
      "images/BLACKLINE ARTICULATED GAUNTLET-NEW.png",
      "images/BLACKLINE ARTICULATED GAUNTLET-NEW.png",
      "images/BLACKLINE ARTICULATED GAUNTLET-NEW.png"
    ],
    sizePredictor: "Adjustable strap system accommodates wrist circumferences 5.5-7.5 inches. Fits over most sleeve types.",
    styleSuggestions: ["Pair with slim black trousers for a sleek corporate look", "Combine with sculptural outerwear for statement looks", "Add sculptural clutch for editorial finish"],
    materialExplorer: ["Carbon-fiber plates", "Matte leather straps", "Polished metallic buckles"]
  },
  {
    id: "blackline4",
    name: "CAPE DRESS",
    price: "$10,000",
    description: "CAPE DRESS represents the convergence of technical craftsmanship and avant-garde aesthetics. This piece demonstrates sophisticated articulation through its carefully considered structure and precision engineering.",
    images: [
      "images/BLN LATEST CAPE DRESS.png",
      "images/BLN LATEST CAPE DRESS.png",
      "images/BLN LATEST CAPE DRESS.png",
      "images/BLN LATEST CAPE DRESS.png",
      "images/BLN LATEST CAPE DRESS.png",
      "images/BLN LATEST CAPE DRESS.png"
    ],
    sizePredictor: "Adjustable strap system accommodates wrist circumferences 5.5-7.5 inches. Fits over most sleeve types.",
    styleSuggestions: ["Pair with slim black trousers for a sleek corporate look", "Combine with sculptural outerwear for statement looks", "Add sculptural clutch for editorial finish"],
    materialExplorer: ["Carbon-fiber plates", "Matte leather straps", "Polished metallic buckles"]
  },

  {
    id: "blackline5",
    name: "Assymetric Hakama Trousers",
    price: "$5000",
    description: "Assymetric Hakama Trousers reinterpret traditional Japanese design through a modern architectural lens. The silhouette balances volume and precision with masterful drape and construction.",
    images: [
      "images/BLACKLINE ASSYMETRIC HAKAMA TROUSERS-NEW.png",
      "images/BLACKLINE ASSYMETRIC HAKAMA TROUSERS-NEW.png",
      "images/BLACKLINE ASSYMETRIC HAKAMA TROUSERS-NEW.png",
      "images/BLACKLINE ASSYMETRIC HAKAMA TROUSERS-NEW.png",
      "images/BLACKLINE ASSYMETRIC HAKAMA TROUSERS-NEW.png",
      "images/BLACKLINE ASSYMETRIC HAKAMA TROUSERS-NEW.png"
    ],
    sizePredictor: "High-rise waist with pleated volume. Inseam consistent, hem width varies by size.",
    styleSuggestions: ["Pair with fitted turtleneck and ankle boots", "Add Graviton Belt for accentuation", "Layer with fitted belt for accentuated waist"],
    materialExplorer: ["Technical wool-blend", "Adaptive stretch panels", "Reinforced pleats"]
  },
  {
    id: "blackline6",
    name: "METICULATED Sunglasses",
    price: "$7000",
    description: "Assymetric Sunglasses present an optical study in balanced disproportion. The frames challenge conventional symmetry while maintaining refined proportions and visual harmony.",
    images: [
      "images/BLACKLINE ASSYMETRIC SUNGLASSES-NEW.png",
      "images/BLACKLINE ASSYMETRIC SUNGLASSES-NEW.png",
      "images/BLACKLINE ASSYMETRIC SUNGLASSES-NEW.png",
      "images/BLACKLINE ASSYMETRIC SUNGLASSES-NEW.png",
      "images/BLACKLINE ASSYMETRIC SUNGLASSES-NEW.png",
      "images/BLACKLINE ASSYMETRIC SUNGLASSES-NEW.png"
    ],
    sizePredictor: "Temple length 140mm, lens width 60mm. Adjustable nose pads ensure universal fit.",
    styleSuggestions: ["Wear over turtlenecks for editorial styling", "Combine with Articulated Gauntlet for avant-garde edge", "Layer over minimal monochrome attire"],
    materialExplorer: ["Polished acetate frames", "Titanium hinges", "UV400 smoked lenses"]
  },
  {
    id: "blackline7",
    name: "Black Light Rig",
    price: "$18,000",
    description: "Black Light Rig represents wearable technology integrated with high fashion design. The piece illuminates the body's architecture while maintaining sophisticated silhouette integrity.",
    images: [
      "images/BLACKLINE BLACK LIGHT RIG-NEW.png",
      "images/BLACKLINE BLACK LIGHT RIG-NEW.png",
      "images/BLACKLINE BLACK LIGHT RIG-NEW.png",
      "images/BLACKLINE BLACK LIGHT RIG-NEW.png",
      "images/BLACKLINE BLACK LIGHT RIG-NEW.png",
      "images/BLACKLINE BLACK LIGHT RIG-NEW.png"
    ],
    sizePredictor: "Modular sizing with adjustable harness points. Torso length determines primary strap placement.",
    styleSuggestions: ["Top with statement ankle boots", "Pair with Abyssal Trousers and a fragmented Corset", "Combine with metal-accented accessories"],
    materialExplorer: ["LED-integrated panels", "Lightweight polymer frame", "Reinforced connectors"]
  },
  {
    id: "blackline8",
    name: "Blade Heel",
    price: "$6,700",
    description: "Blade Heel exemplifies architectural footwear design with its sharp geometric profile and precision engineering. The silhouette challenges conventional heel construction while ensuring wearability.",
    images: [
      "images/BLACKLINE BLADE HEEL-NEW.png",
      "images/BLACKLINE BLADE HEEL-NEW.png",
      "images/BLACKLINE BLADE HEEL-NEW.png",
      "images/BLACKLINE BLADE HEEL-NEW.png",
      "images/BLACKLINE BLADE HEEL-NEW.png",
      "images/BLACKLINE BLADE HEEL-NEW.png"
    ],
    sizePredictor: "Narrow last with 95mm pitch. Arch support requires breaking in for optimal comfort.",
    styleSuggestions: ["Pair with Assymeric Cape Dress for evening drama", "Combine with Hakama Trousers for street-ready elegance", "Add subtle metallic accessories for detailing"],
    materialExplorer: ["Polished calf leather", "Metallic heel core", "Ergonomic rubber sole"]
  },
  {
    id: "blackline9",
    name: "Cocoon Coat",
    price: "$14,000",
    description: "Cocoon Coat offers sanctuary through design with its enveloping silhouette and protective architecture. The piece balances substantial volume with refined tailoring details.",
    images: [
      "images/BLN LATEST COCOON COAT.png",
      "images/BLN LATEST COCOON COAT.png",
      "images/BLN LATEST COCOON COAT.png",
      "images/BLN LATEST COCOON COAT.png",
      "images/BLN LATEST COCOON COAT.png",
      "images/BLN LATEST COCOON COAT.png"
    ],
    sizePredictor: "Oversized cut allows for substantial layering. Shoulder drop 2-3 inches from natural line.",
    styleSuggestions: ["Layer over Asymmetric Blazer for avant-garde appeal", "Pair with Coiled Shorts for casual streetwear", "Combine with Armored Gauntlet for avant-garde statement"],
    materialExplorer: ["Double-layer wool-blend", "Reinforced shoulder seams", "Matte lining for warmth"]
  },
  {
    id: "blackline10",
    name: "Coiled Shorts",
    price: "$8000",
    description: "Coiled Shorts demonstrate technical innovation through their engineered surface texture and structural folds. The design merges athletic inspiration with sophisticated tailoring.",
    images: [
      "images/BLN LATEST COILED SHORTS.png",
      "images/BLN LATEST COILED SHORTS.png",
      "images/BLN LATEST COILED SHORTS.png",
      "images/BLN LATEST COILED SHORTS.png",
      "images/BLN LATEST COILED SHORTS.png",
      "images/BLN LATEST COILED SHORTS.png"
    ],
    sizePredictor: "Mid-rise with articulated seam structure. Thigh circumference +1 inch for coil detailing.",
    styleSuggestions: ["Pair with minimal tank tops", "Layer under Cocoon Coat for urban winter style", "Combine with Graviton Belt for modern edge"],
    materialExplorer: ["Technical poly-blend", "Coil-fold detailing", "Moisture-wicking lining"]
  },
  {
    id: "blackline11",
    name: "Column Gown",
    price: "$12,000",
    description: "Column Gown presents vertical architecture in motion through its precise drape and structured fluidity. The silhouette creates continuous line from shoulder to hem with masterful control.",
    images: [
      "images/BLACKLINE COLUMN GOWN-NEW.png",
      "images/BLACKLINE COLUMN GOWN-NEW.png",
      "images/BLACKLINE COLUMN GOWN-NEW.png",
      "images/BLACKLINE COLUMN GOWN-NEW.png",
      "images/BLACKLINE COLUMN GOWN-NEW.png",
      "images/BLACKLINE COLUMN GOWN-NEW.png"
    ],
    sizePredictor: "Bias-cut construction follows natural body line. Height determines hem break point.",
    styleSuggestions: ["Add minimal jewelry to emphasize clean lines", "Layer over Asymmetric Blazer or Cocoon Coat", "Combine with tactical-inspired outerwear"],
    materialExplorer: ["Technical silk-blend", "Micro-pleated panels", "Subtle metallic thread accents"]
  },
  {
    id: "blackline12",
    name: "Deconstructed Shirt",
    price: "$7000",
    description: "Deconstructed Shirt explores the architecture of traditional tailoring through deliberate fragmentation and reconstruction. The piece reveals the poetry of construction normally hidden from view.",
    images: [
      "images/BLN LATEST DECONSTRUCTED SHIRT.png",
      "images/BLN LATEST DECONSTRUCTED SHIRT.png",
      "images/BLN LATEST DECONSTRUCTED SHIRT.png",
      "images/BLN LATEST DECONSTRUCTED SHIRT.png",
      "images/BLN LATEST DECONSTRUCTED SHIRT.png",
      "images/BLN LATEST DECONSTRUCTED SHIRT.png"
    ],
    sizePredictor: "Standard chest measurement with extended hem. Sleeve length varies by design intent.",
    styleSuggestions: ["Pair with Hakama Trousers for street-ready elegance", "Combine with Blade Heel for contrast", "Top with statement ankle boots"],
    materialExplorer: ["Technical cotton blend", "Layered panel construction", "Raw-edge finish detailing"]
  },
  {
    id: "blackline13",
    name: "DISC DRESS",
    price: "$8000",
    description: "DISC DRESS explores circular geometry in garment construction through its innovative cut and volumetric play. The design challenges conventional dressmaking techniques.",
    images: [
      "images/BLACKLINE DISC DRESS-NEW.png",
      "images/BLACKLINE DISC DRESS-NEW.png",
      "images/BLACKLINE DISC DRESS-NEW.png",
      "images/BLACKLINE DISC DRESS-NEW.png",
      "images/BLACKLINE DISC DRESS-NEW.png",
      "images/BLACKLINE DISC DRESS-NEW.png"
    ],
    sizePredictor: "Circular construction requires bust measurement for optimal drape. Hem diameter varies by size.",
    styleSuggestions: ["Pair with Architectural Hoodie or Cocoon Coat", "Combine with sculptural clutch for full effect", "Layer over a turtleneck for evening sophistication"],
    materialExplorer: ["Cotton-blend fabric", "Brushed interior for comfort", "Reinforced seams for durability"]
  },
  {
    id: "blackline14",
    name: "GEOMETRIC HEADDRESS",
    price: "$20,000",
    description: "GEOMETRIC HEADDRESS represents sculptural millinery that extends the body's architecture upward. The piece creates dynamic spatial relationships with the wearer's silhouette.",
    images: [
      "images/BLACKLINE GEOMETRIC HEADDRESS-NEW.png",
      "images/BLACKLINE GEOMETRIC HEADDRESS-NEW.png",
      "images/BLACKLINE GEOMETRIC HEADDRESS-NEW.png",
      "images/BLACKLINE GEOMETRIC HEADDRESS-NEW.png",
      "images/BLACKLINE GEOMETRIC HEADDRESS-NEW.png",
      "images/BLACKLINE GEOMETRIC HEADDRESS-NEW.png"
    ],
    sizePredictor: "Internal circumference 22-24 inches. Weight distribution ensures stable wear.",
    styleSuggestions: ["Combine with Abyssal Trousers or Hakama Trousers", "Add Armored Gauntlet for bold aesthetic", "Pair with distressed denim and oversized coat"],
    materialExplorer: ["Matte leather", "Internal suede lining", "Reinforced handles"],
  },
  {
    id: "blackline15",
    name: "HARNESS TROUSERS",
    price: "$7,500",
    description: "HARNESS TROUSERS integrate technical detailing with tailored precision, creating a hybrid garment that bridges utility and high fashion. The design emphasizes both form and function.",
    images: [
      "images/BLACKLINE HARNESS TROUSERS-NEW.png",
      "images/BLACKLINE HARNESS TROUSERS-NEW.png",
      "images/BLACKLINE HARNESS TROUSERS-NEW.png",
      "images/BLACKLINE HARNESS TROUSERS-NEW.png",
      "images/BLACKLINE HARNESS TROUSERS-NEW.png",
      "images/BLACKLINE HARNESS TROUSERS-NEW.png"
    ],
    sizePredictor: "Standard waist with articulated harness points. Thigh gusset allows for movement.",
    styleSuggestions: ["Layer over Deconstructed Shirt for editorial looks", "Combine with Void Sneakers for urban casual", "Pair with slim black trousers"],
    materialExplorer: ["Premium leather", "Polished metal buckle", "Reinforced stitching"]
  },
  {
    id: "blackline16",
    name: "LAYERED NECKPIECE",
    price: "$15,000",
    description: "LAYERED NECKPIECE builds dimension through accumulated forms and textures. The piece creates a focal point that extends and enhances the neckline with architectural intention.",
    images: [
      "images/BLACKLINE LAYERED NECKPIECE-NEW.png",
      "images/BLACKLINE LAYERED NECKPIECE-NEW.png",
      "images/BLACKLINE LAYERED NECKPIECE-NEW.png",
      "images/BLACKLINE LAYERED NECKPIECE-NEW.png",
      "images/BLACKLINE LAYERED NECKPIECE-NEW.png",
      "images/BLACKLINE LAYERED NECKPIECE-NEW.png"
    ],
    sizePredictor: "Adjustable closure for neck sizes 13-16 inches. Weight distributed across shoulders.",
    styleSuggestions: ["Pair with Asymmetric Blazer for high-fashion cohesion", "Combine with Coiled Shorts or Hakama Trousers", "Layer with metal-accented accessories"],
    materialExplorer: ["Matte leather and mesh panels", "Ergonomic rubber sole", "Reinforced toe cap"]
  },
  {
    id: "blackline17",
    name: "ORIGAMI FOLD DRESS",
    price: "$10,000",
    description: "ORIGAMI FOLD DRESS applies paper-folding principles to garment construction, creating dynamic geometric forms through precise pleating and structural seams.",
    images: [
      "images/BLACKLINE ORIGAMI FOLD DRESS-NEW.png",
      "images/BLACKLINE ORIGAMI FOLD DRESS-NEW.png",
      "images/BLACKLINE ORIGAMI FOLD DRESS-NEW.png",
      "images/BLACKLINE ORIGAMI FOLD DRESS-NEW.png",
      "images/BLACKLINE ORIGAMI FOLD DRESS-NEW.png",
      "images/BLACKLINE ORIGAMI FOLD DRESS-NEW.png"
    ],
    sizePredictor: "Complex drape requires precise bust and hip measurements. Fold structure changes with movement.",
    styleSuggestions: ["Pair with Coiled Shorts for casual streetwear", "Combine with Armored Boots for strong streetwear look", "Wear with minimalist jewelry to maintain clean lines"],
    materialExplorer: ["Technical silk-blend", "Soft hand-feel", "Subtle tonal patterning"]
  },
  {
    id: "blackline18",
    name: "RIBBON WRAP DRESS",
    price: "$9000",
    description: "RIBBON WRAP DRESS explores continuous form through its winding construction and fluid closure system. The design creates ever-changing silhouette possibilities.",
    images: [
      "images/BLACKLINE RIBBON WRAP DRESS-NEW.png",
      "images/BLACKLINE RIBBON WRAP DRESS-NEW.png",
      "images/BLACKLINE RIBBON WRAP DRESS-NEW.png",
      "images/BLACKLINE RIBBON WRAP DRESS-NEW.png",
      "images/BLACKLINE RIBBON WRAP DRESS-NEW.png",
      "images/BLACKLINE RIBBON WRAP DRESS-NEW.png"
    ],
    sizePredictor: "Wrap construction accommodates various body types. Ribbon length allows multiple styling options.",
    styleSuggestions: ["Layer under Asymmetric Blazer for architectural appeal", "Pair with metallic heels for evening wear", "Combine with tactical trousers for edgy contrast"],
    materialExplorer: ["Premium leather", "Matte metallic buckle", "Reinforced strap"]
  },
  {
    id: "blackline19",
    name: "FRAGMENTED CORSET",
    price: "$12,000",
    description: "FRAGMENTED CORSET deconstructs traditional foundation garments into discrete structural elements. The piece reveals the poetry of support and constraint.",
    images: [
      "images/BLN LATEST FRAGMENTED CORSET.png",
      "images/BLN LATEST FRAGMENTED CORSET.png",
      "images/BLN LATEST FRAGMENTED CORSET.png",
      "images/BLN LATEST FRAGMENTED CORSET.png",
      "images/BLN LATEST FRAGMENTED CORSET.png",
      "images/BLN LATEST FRAGMENTED CORSET.png"
    ],
    sizePredictor: "Modular panels adjust independently. Rib cage measurement determines primary fit.",
    styleSuggestions: ["Pair with Abyssal Trousers and Void Sneakers", "Add statement ankle boots for complete look", "Combine with minimalist jewelry for detailing"],
    materialExplorer: ["Merino blend knit", "Thermal insulation", "Soft hand-feel"]
  },
  {
    id: "blackline20",
    name: "SCULPTURAL CORSET",
    price: "$7,000",
    description: "SCULPTURAL CORSET transforms the body into an architectural form through exaggerated planes and controlled compression. The piece exists as wearable sculpture.",
    images: [
      "images/BLN LATEST SCULPTURAL CORSET.png",
      "images/BLN LATEST SCULPTURAL CORSET.png",
      "images/BLN LATEST SCULPTURAL CORSET.png",
      "images/BLN LATEST SCULPTURAL CORSET.png",
      "images/BLN LATEST SCULPTURAL CORSET.png"
    ],
    sizePredictor: "Rigid construction requires precise underbust and waist measurements. Reduction limited to 2 inches.",
    styleSuggestions: ["Layer under Asymmetric Blazer for avant-garde appeal", "Pair with distressed denim and oversized coat", "Combine with Blade Heel for runway-ready look"],
    materialExplorer: ["Technical midnight fabric", "Satin lining", "Reinforced shoulder seams"]
  },
  {
    id: "blackline21",
    name: "SLIT SPHERE DRESS",
    price: "$21,000",
    description: "SLIT SPHERE DRESS explores the tension between volume and revelation through its spherical form and strategic openings. The design plays with concealment and exposure.",
    images: [
      "images/BLN LATEST SLIT SPHERE DRESS.png",
      "images/BLN LATEST SLIT SPHERE DRESS.png",
      "images/BLN LATEST SLIT SPHERE DRESS.png",
      "images/BLN LATEST SLIT SPHERE DRESS.png",
      "images/BLN LATEST SLIT SPHERE DRESS.png",
      "images/BLN LATEST SLIT SPHERE DRESS.png"
    ],
    sizePredictor: "Spherical volume requires height consideration. Shoulder span determines sphere diameter.",
    styleSuggestions: ["Layer over Deconstructed Shirt for urban elegance", "Combine with Articulated Gauntlet for avant-garde edge", "Pair with Architectural Hoodie for streetwear statement"],
    materialExplorer: ["Technical fabric", "Gold-accented stitching", "Reinforced seams"]
  },
  {
    id: "blackline22",
    name: "BLACK SPINE  DRESS",
    price: "$35,000",
    description: "SPINE BLACK DRESS emphasizes vertebral architecture through its back-focused design and structural elements. The piece creates dramatic rear silhouette while maintaining front simplicity.",
    images: [
      "images/BLN LATEST SPINE DRESS.png",
      "images/BLN LATEST SPINE DRESS.png",
      "images/BLN LATEST SPINE DRESS.png",
      "images/BLN LATEST SPINE DRESS.png",
      "images/BLN LATEST SPINE DRESS.png",
      "images/BLN LATEST SPINE DRESS.png"
    ],
    sizePredictor: "Back detailing requires specific shoulder blade placement. Front remains standard fit.",
    styleSuggestions: ["Top with fitted turtleneck for evening sophistication", "Combine with Graviton Belt for accentuation", "Layer with minimalist jewelry for clean lines"],
    materialExplorer: ["Technical fabric", "Gold-accented stitching", "Reinforced seams"]
  },
  {
    id: "blackline23",
    name: "VOLUME SLEEVE DETACHMENT",
    price: "$25,000",
    description: "VOLUME SLEEVE DETACHMENT explores modular garment systems through its convertible sleeve architecture. The piece offers multiple silhouette options within single garment.",
    images: [
      "images/BLACKLINE VOLUME SLEEVE DETACHMENT-NEW.png",
      "images/BLACKLINE VOLUME SLEEVE DETACHMENT-NEW.png",
      "images/BLACKLINE VOLUME SLEEVE DETACHMENT-NEW.png",
      "images/BLACKLINE VOLUME SLEEVE DETACHMENT-NEW.png",
      "images/BLACKLINE VOLUME SLEEVE DETACHMENT-NEW.png",
      "images/BLACKLINE VOLUME SLEEVE DETACHMENT-NEW.png"
    ],
    sizePredictor: "Modular system works with standard bodice sizing. Sleeve volume adjustable via internal structure.",
    styleSuggestions: ["Pair with Asymmetric Blazer for office-ready look", "Combine with Coiled Shorts for avant-garde summer evening", "Add Armored Gauntlet for avant-garde statement"],
    materialExplorer: ["Technical fabric", "Gold-accented stitching", "Reinforced seams"]
  },
  {
    id: "blackline24",
    name: "PHANTOM TRENCH",
    price: "$20,000",
    description: "PHANTOM TRENCH reimagines classic outerwear through translucent materials and deconstructed traditional elements. The piece plays with visibility and protection.",
    images: [
      "images/BLN LATEST PHANTOM TRENCH.png",
      "images/BLN LATEST PHANTOM TRENCH.png",
      "images/BLN LATEST PHANTOM TRENCH.png",
      "images/BLN LATEST PHANTOM TRENCH.png",
      "images/BLN LATEST PHANTOM TRENCH.png", 
      "images/BLN LATEST PHANTOM TRENCH.png"
    ],
    sizePredictor: "Sheer fabric requires precise underlayer consideration. Standard trench coat measurements apply.",
    styleSuggestions: ["Layer over minimal monochrome attire for visibility contrast", "Combine with Hakama Trousers for modern edge", "Pair with Void Sneakers for casual styling"],
    materialExplorer: ["Technical fabric", "Gold-accented stitching", "Reinforced seams"]
  },
  {
    id: "blackline25",
    name: "ORB CLUTCH",
    price: "$30,000",
    description: "ORB CLUTCH presents spherical geometry as functional accessory. The piece challenges conventional bag design while maintaining practical utility through innovative access points.",
    images: [
      "images/BLACKLINE ORB CLUTCH-NEW.png",
      "images/BLACKLINE ORB CLUTCH-NEW.png",
      "images/BLACKLINE ORB CLUTCH-NEW.png",
      "images/BLACKLINE ORB CLUTCH-NEW.png",
      "images/BLACKLINE ORB CLUTCH-NEW.png",
      "images/BLACKLINE ORB CLUTCH-NEW.png"
    ],
    sizePredictor: "Spherical diameter 8 inches. Magnetic closure ensures secure access. Hand-carried or tucked.",
    styleSuggestions: ["Pair with Column Gown for evening elegance", "Combine with tactical-inspired outerwear for contrast", "Add to any ensemble for architectural accent"],
    materialExplorer: ["Technical fabric", "Gold-accented stitching", "Reinforced seams"]
  }
];
window.blacklineProducts = blacklineProducts;

const monochromeProducts = [
  {
    "id": "monochrome1",
    "name": "Inverted Cocoon Coat",
    "price": "$12,000",
    "description": "Architectural outerwear that reverses traditional cocoon silhouettes with inward-folding seams and concave construction. The coat embraces the body through negative space rather than volume.",
    "images": [
      "images/MNC INVERTED COCOON COAT.png",
      "images/MNC INVERTED COCOON COAT.png",
      "images/MNC INVERTED COCOON COAT.png",
      "images/MNC INVERTED COCOON COAT.png",
      "images/MNC INVERTED COCOON COAT.png",
      "images/MNC INVERTED COCOON COAT.png"
    ],
    "proportionCalc": "Extended shoulder span 24 inches, tapered to 18-inch hem. Reverse pleat back allows 6-inch expansion. Worn as standalone statement piece.",
    "essentialPairings": ["Layer over minimal slip dress for contrast", "Pair with structured trousers for architectural harmony", "Worn open over bare skin for dramatic effect"],
    "molecularView": ["Wool-cashmere blend with memory fold", "Internal boning for structural inversion", "Magnetic closure system"]
  },
  {
    "id": "monochrome2",
    "name": "Parabolic Trousers",
    "price": "$12,000",
    "description": "Trousers engineered with parabolic curves that create optical illusions of motion. The mathematical precision of each seam follows golden ratio proportions.",
    "images": [
      "images/MNC PARABOLIC TROUSERS 2.png",
      "images/MNC PARABOLIC TROUSERS 2.png",
      "images/MNC PARABOLIC TROUSERS 2.png",
      "images/MNC PARABOLIC TROUSERS 2.png",
      "images/MNC PARABOLIC TROUSERS 2.png",
      "images/MNC PARABOLIC TROUSERS 2.png"
    ],
    "proportionCalc": "32-inch inseam with 28-inch waist. Parabolic curve peaks at mid-thigh, creating 4-inch outward sweep before tapering to 7-inch ankle opening.",
    "essentialPairings": ["Combine with geometric crop top for mathematical theme", "Wear with simple turtleneck to highlight trouser architecture", "Pair with deconstructed blazer for layered complexity"],
    "molecularView": ["Technical gabardine with directional weave", "Internal wire stays along parabolic seams", "Laser-cut ventilation panels"]
  },
  {
    "id": "monochrome3",
    "name": "Floating A-Line Dress",
    "price": "$14,000",
    "description": "A dress that defies gravity through hidden structural elements that create the illusion of floating fabric. The A-line silhouette appears detached from the body at key points.",
    "images": [
      "images/MNC FLOATING-LINE-DRESS.png",
      "images/MNC FLOATING-LINE-DRESS.png",
      "images/MNC FLOATING-LINE-DRESS.png",
      "images/MNC FLOATING-LINE-DRESS.png",
      "images/MNC FLOATING-LINE-DRESS.png",
      "images/MNC FLOATING-LINE-DRESS.png"
    ],
    "proportionCalc": "47-inch total length with 8-inch floating gap at hips. Shoulder anchors maintain structural integrity while mid-section appears suspended.",
    "essentialPairings": ["Wear alone to emphasize floating effect", "Layer over mesh bodysuit for ethereal quality", "Pair with orbital jewelry to enhance weightless theme"],
    "molecularView": ["Aerogel-infused silk organza", "Carbon fiber ribbing at stress points", "Magnetic suspension system"]
  },
  {
    "id": "monochrome4",
    "name": "Inflated Blazer",
    "price": "$9000",
    "description": "A blazer that challenges traditional tailoring through air-filled chambers that create volumetric distortion. The inflated panels reset expectations of structure and form.",
    "images": [
      "images/MNC INFLATED BLAZER.png",
      "images/MNC INFLATED BLAZER.png",
      "images/MNC INFLATED BLAZER.png",
      "images/MNC INFLATED BLAZER.png",
      "images/MNC INFLATED BLAZER.png",
      "images/MNC INFLATED BLAZER.png"
    ],
    "proportionCalc": "Shoulder width expands from 18 to 26 inches when inflated. Back panel contains primary air chamber with 15psi capacity. Sleeves maintain traditional proportion.",
    "essentialPairings": ["Contrast with slim trousers for silhouette balance", "Wear over minimalist dress for textural interest", "Pair with architectural heels to continue volumetric theme"],
    "molecularView": ["Airlock nylon with welded seams", "Integrated micro-pump in inner pocket", "Pressure-release valve at collar"]
  },
  {
    "id": "monochrome5",
    "name": "Cascading Ruffle Shift",
    "price": "$18,000",
    "description": "A shift dress transformed by algorithmic ruffles that cascade in Fibonacci sequence. Each ruffle is precisely calculated to create organic movement from rigid mathematics.",
    "images": [
      "images/MNC RUFFLE SHIFT.png",
      "images/MNC RUFFLE SHIFT.png",
      "images/MNC RUFFLE SHIFT.png",
      "images/MNC RUFFLE SHIFT.png",
      "images/MNC RUFFLE SHIFT.png",
      "images/MNC RUFFLE SHIFT.png"
    ],
    "proportionCalc": "37-inch length with ruffles progressing from 0.5 to 3 inches in depth. 84 individual ruffles placed according to golden ratio progression.",
    "essentialPairings": ["Wear with bare legs to emphasize ruffle movement", "Pair with structural headpiece for mathematical dialogue", "Layer under sheer coat for subtle revelation"],
    "molecularView": ["Paper taffeta with memory crease", "Laser-cut ruffle edges for precision", "Invisible internal weighting system"]
  },
  {
    "id": "monochrome6",
    "name": "Sphere Sleeve Tunic",
    "price": "$18,000",
    "description": "A tunic where sleeves transform into perfect spheres at the shoulders, creating orbital forms that rotate around the wearer's arms. The spherical volumes challenge conventional sleeve architecture.",
    "images": [
      "images/MNC SPHERE SLEEVE TUNIC.png",
      "images/MNC SPHERE SLEEVE TUNIC.png",
      "images/MNC SPHERE SLEEVE TUNIC.png",
      "images/MNC SPHERE SLEEVE TUNIC.png",
      "images/MNC SPHERE SLEEVE TUNIC.png",
      "images/MNC SPHERE SLEEVE TUNIC.png"
    ],
    "proportionCalc": "12-inch diameter spheres at shoulders, connected to 24-inch sleeve length. Body length 32 inches with straight hem. Arm mobility maintained through rotational joints.",
    "essentialPairings": ["Pair with slim trousers to balance volume", "Wear with orbital earrings to extend sphere motif", "Layer over column dress for textural contrast"],
    "molecularView": ["Rigid wool felt molded over spherical forms", "Ball-bearing rotation system at shoulder join", "Internal structural mesh maintains sphere integrity"]
  },
  {
    "id": "monochrome7",
    "name": "Stratified Midi Dress",
    "price": "$15,700",
    "description": "A dress composed of geological layers that reveal different textures and opacities. Each stratum tells a story of construction, with raw edges becoming deliberate design elements.",
    "images": [
      "images/MNC STRATIFIED MIDI DRESS.png",
      "images/MNC STRATIFIED MIDI DRESS.png",
      "images/MNC STRATIFIED MIDI DRESS.png",
      "images/MNC STRATIFIED MIDI DRESS.png",
      "images/MNC STRATIFIED MIDI DRESS.png",
      "images/MNC STRATIFIED MIDI DRESS.png"
    ],
    "proportionCalc": "43-inch length with 7 distinct layers varying from 2 to 6 inches in depth. Asymmetric hem reveals stratification most dramatically at front left.",
    "essentialPairings": ["Wear with textured hosiery to continue layered theme", "Pair with crystal jewelry mimicking geological forms", "Style with rough-cut leather accessories"],
    "molecularView": ["Layered technical fabrics of varying density", "Raw-edge laser cutting reveals each stratum", "Magnetic closures between layers allow reconfiguration"]
  },
  {
    "id": "monochrome8",
    "name": "Veiled Asymmetric Top",
    "price": "$10,000",
    "description": "A top that plays with revelation and concealment through multiple veiled layers in asymmetric arrangement. The garment reveals different parts of the body depending on movement and perspective.",
    "images": [
      "images/MNC VEILDED ASSYMETRIC TOP.png",
      "images/MNC VEILDED ASSYMETRIC TOP.png",
      "images/MNC VEILDED ASSYMETRIC TOP.png",
      "images/MNC VEILDED ASSYMETRIC TOP.png",
      "images/MNC VEILDED ASSYMETRIC TOP.png",
      "images/MNC VEILDED ASSYMETRIC TOP.png"
    ],
    "proportionCalc": "Right shoulder bare with 18-inch veil cascade, left side structured with 6-inch cap sleeve. Hem angles from 12 inches on right to 22 inches on left.",
    "essentialPairings": ["Pair with high-waisted trousers for balanced coverage", "Layer over contrasting bodysuit for depth play", "Wear with asymmetric skirt to continue angular theme"],
    "molecularView": ["Triple-layer chiffon with varying opacity", "Structured internal bodice on left side", "Weighted hem maintains drape during movement"]
  },
  {
    "id": "monochrome9",
    "name": "Layered Glass-Pane Trousers",
    "price": "$18,000",
    "description": "Trousers constructed from overlapping rigid panels that mimic shattered glass. The sharp angles and transparent layers create complex visual depth while maintaining structure.",
    "images": [
      "images/MNC GLASS PANE TROUSERS.png",
      "images/MNC GLASS PANE TROUSERS.png",
      "images/MNC GLASS PANE TROUSERS.png",
      "images/MNC GLASS PANE TROUSERS.png",
      "images/MNC GLASS PANE TROUSERS.png",
      "images/MNC GLASS PANE TROUSERS.png"
    ],
    "proportionCalc": "32-inch inseam with 24 overlapping panels ranging from 4 to 12 inches. Waist 28 inches with hidden expansion gusset. Leg opening 9 inches.",
    "essentialPairings": ["Combine with simple knit to highlight trouser complexity", "Wear with reflective accessories to continue glass theme", "Pair with architectural heels for vertical extension"],
    "molecularView": ["Laser-cut acrylic panels over stretch mesh", "Magnetic closure system between layers", "Reinforced stress points at panel intersections"]
  },
  {
    "id": "monochrome10",
    "name": "Halo Cage Dress",
    "price": "$14,000",
    "description": "A dress encased in a sculptural cage that creates halo-like forms around the body. The external structure interacts with the internal garment through precise negative space.",
    "images": [
      "images/MNC HALO CAGE DRESS.png",
      "images/MNC HALO CAGE DRESS.png",
      "images/MNC HALO CAGE DRESS.png",
      "images/MNC HALO CAGE DRESS.png",
      "images/MNC HALO CAGE DRESS.png",
      "images/MNC HALO CAGE DRESS.png"
    ],
    "proportionCalc": "Cage extends 14 inches from body at shoulders, tapering to 6 inches at hem. Internal dress has 36-inch length with minimal ease.",
    "essentialPairings": ["Wear alone as complete sculptural statement", "Pair with orbital headpiece to extend halo motif", "Style with minimalist shoes to ground complex silhouette"],
    "molecularView": ["Anodized aluminum cage structure", "Internal silk crepe dress with magnetic attachments", "Rotational joints allow cage movement independent of dress"]
  },
  {
    "id": "monochrome11",
    "name": "Kinetic Spine Corset",
    "price": "$17,000",
    "description": "A corset featuring articulated spine-like elements that respond to the wearer's movement. The mechanical structure creates both support and dynamic visual interest.",
    "images": [
      "images/MNC KINETIC SPINE CORSET.png",
      "images/MNC KINETIC SPINE CORSET.png",
      "images/MNC KINETIC SPINE CORSET.png",
      "images/MNC KINETIC SPINE CORSET.png",
      "images/MNC KINETIC SPINE CORSET.png",
      "images/MNC KINETIC SPINE CORSET.png"
    ],
    "proportionCalc": "14-inch height with 24 vertebrae elements. Waist reduction from 30 to 24 inches. Spinal structure extends 3 inches from back surface.",
    "essentialPairings": ["Wear as outerwear over sheer tops", "Pair with flowing trousers for movement contrast", "Style with mechanical jewelry to continue kinetic theme"],
    "molecularView": ["Steel boning with titanium vertebral plates", "Leather casing with precision stitching", "Ball-bearing joints allow 180-degree articulation"]
  },
  {
    "id": "monochrome12",
    "name": "Floating Armature Harness",
    "price": "$12,300",
    "description": "A harness that appears to float around the body through strategic connection points and suspended elements. The armature creates lines and forms that highlight anatomical structure.",
    "images": [
      "images/FLOATING ARMATURE HARNESS.png",
      "images/FLOATING ARMATURE HARNESS.png",
      "images/FLOATING ARMATURE HARNESS.png",
      "images/FLOATING ARMATURE HARNESS.png",
      "images/FLOATING ARMATURE HARNESS.png",
      "images/FLOATING ARMATURE HARNESS.png"
    ],
    "proportionCalc": "Primary structure spans 18 inches across shoulders with 6 suspension points. Elements float 1-3 inches from body surface. Adjustable from XS to L.",
    "essentialPairings": ["Layer over bare skin for maximum impact", "Wear with draped garments for structural contrast", "Pair with other architectural pieces for complex layering"],
    "molecularView": ["Anodized titanium wire construction", "Magnetic suspension system", "Silicon-sheathed contact points for comfort"]
  },
  {
    "id": "monochrome13",
    "name": "L.M.C Gown",
    "price": "$20,000",
    "description": "A gown that captures the appearance of liquid metal frozen in motion. The surface reflects and distorts while the column silhouette remains rigorously architectural.",
    "images": [
      "images/MNC METAL GOWN.png",
      "images/MNC METAL GOWN.png",
      "images/MNC METAL GOWN.png",
      "images/MNC METAL GOWN.png",
      "images/MNC METAL GOWN.png",
      "images/MNC METAL GOWN.png"
    ],
    "proportionCalc": "62-inch length with 36-inch shoulder-to-hem. 12-inch circumference at hem requires precise stepping. Back zipper with internal corset.",
    "essentialPairings": ["Wear alone as dramatic evening statement", "Pair with crystalline jewelry to complement metallic surface", "Style with severe hair to emphasize architectural form"],
    "molecularView": ["Liquid metal polymer composite", "Internal structural corset with spiral steel boning", "Reflective coating applied in motion-capture process"]
  },
  {
    "id": "monochrome14",
    "name": "Petrified Wave Trousers",
    "price": "$7000",
    "description": "Trousers that capture the motion of ocean waves in petrified, rigid forms. The sculptural elements create dramatic silhouettes while maintaining wearability.",
    "images": [
      "images/MNC PETRIFIED TROUSERS.png",
      "images/MNC PETRIFIED TROUSERS.png",
      "images/MNC PETRIFIED TROUSERS.png",
      "images/MNC PETRIFIED TROUSERS.png",
      "images/MNC PETRIFIED TROUSERS.png",
      "images/MNC PETRIFIED TROUSERS.png"
    ],
    "proportionCalc": "Wave forms extend up to 8 inches from leg surface. 30-inch inseam with 22-inch waist. Internal structure allows sitting despite external forms.",
    "essentialPairings": ["Pair with fluid top for motion contrast", "Wear with aquatic-inspired accessories", "Style with simple shoes to ground dramatic trousers"],
    "molecularView": ["Resin-impregnated wool holds wave forms", "Aluminum armature within each wave crest", "Stretch gussets at inner thigh maintain mobility"]
  },
  {
    "id": "monochrome15",
    "name": "Crater-Textured Coat",
    "price": "$13000",
    "description": "A coat whose surface mimics lunar craters through complex pleating and dimensional construction. The textural landscape changes with light and perspective.",
    "images": [
      "images/MNC CRATER TEXTURE COAT.png",
      "images/MNC CRATER TEXTURE COAT.png",
      "images/MNC CRATER TEXTURE COAT.png",
      "images/MNC CRATER TEXTURE COAT.png",
      "images/MNC CRATER TEXTURE COAT.png",
      "images/MNC CRATER TEXTURE COAT.png"
    ],
    "proportionCalc": "46-inch length with crater depths from 1 to 6 inches. Shoulder span 22 inches expanding to 48-inch hem. Weight distributed through strategic hollow construction.",
    "essentialPairings": ["Wear over simple column to highlight texture", "Pair with metallic accessories for lunar theme", "Style with sculptural headpiece to continue celestial concept"],
    "molecularView": ["Molded wool felt with heat-set memory", "Hollow crater construction reduces weight", "Internal mesh structure maintains form integrity"]
  },
  {
    "id": "monochrome16",
    "name": "DC Shirt Dress",
    "price": "$6000",
    "description": "A shirt dress that reveals its construction through strategic deconstruction. Seams become features, interfacing becomes external, and traditional elements are recontextualized.",
    "images": [
      "images/MNC DC SHIRT DRESS.png",
      "images/MNC DC SHIRT DRESS.png",
      "images/MNC DC SHIRT DRESS.png",
      "images/MNC DC SHIRT DRESS.png",
      "images/MNC DC SHIRT DRESS.png",
      "images/MNC DC SHIRT DRESS.png"
    ],
    "proportionCalc": "41-inch length with asymmetric hem ranging from 35 to 44 inches. Sleeves deconstructed to reveal internal construction. Waist can be belted from 26 to 32 inches.",
    "essentialPairings": ["Layer over contrasting slip for revealed sections", "Wear with reconstructed accessories to continue theme", "Pair with traditionally tailored pieces for dialogue"],
    "molecularView": ["Traditional shirting cotton with exposed selvedge", "Internal interfacing becomes external design element", "Raw-edge finishing with anti-fray treatment"]
  },
  {
    "id": "monochrome17",
    "name": "Asymmetric Draped Jumpsuit",
    "price": "$9000",
    "description": "A jumpsuit where draping defies symmetry, with fabric cascading in unexpected directions. The complex drapery creates dynamic movement and ever-changing silhouettes.",
    "images": [
      "images/MNC ATI DRAPED JUMPSUIT.png",
      "images/MNC ATI DRAPED JUMPSUIT.png",
      "images/MNC ATI DRAPED JUMPSUIT.png",
      "images/MNC ATI DRAPED JUMPSUIT.png",
      "images/MNC ATI DRAPED JUMPSUIT.png",
      "images/MNC ATI DRAPED JUMPSUIT.png"
    ],
    "proportionCalc": "Draped sections add up to 12 yards of fabric manipulation. Left side floor-length, right side cropped at knee. Internal structure prevents draping from impeding movement.",
    "essentialPairings": ["Wear with minimal jewelry to avoid competing with drapery", "Pair with sleek hair to emphasize neckline complexity", "Style with simple shoes to ground dramatic silhouette"],
    "molecularView": ["Heavy silk crepe for optimal draping", "Internal boning and weighting systems", "Strategic stitching maintains drape integrity through wear"]
  },
  {
    "id": "monochrome18",
    "name": "Crystalline G Bodice",
    "price": "$14000",
    "description": "A bodice that appears to grow crystals across its surface. The organic yet geometric forms create light-refracting facets that change throughout wear.",
    "images": [
      "images/MNC CRYSTALLINE G BODICE.png",
      "images/MNC CRYSTALLINE G BODICE.png",
      "images/MNC CRYSTALLINE G BODICE.png",
      "images/MNC CRYSTALLINE G BODICE.png",
      "images/MNC CRYSTALLINE G BODICE.png",
      "images/MNC CRYSTALLINE G BODICE.png"
    ],
    "proportionCalc": "Crystals range from 0.5 to 4 inches in length. Bodice covers from shoulder to waist, 14-inch height. Custom fitting required for crystal placement.",
    "essentialPairings": ["Pair with simple skirt to highlight bodice", "Wear with faceted jewelry to continue crystal theme", "Style with illuminated accessories for light play"],
    "molecularView": ["Laser-cut acrylic crystals heat-formed to shape", "Magnetic attachment to leather foundation", "Internal reflective coating enhances light refraction"]
  },
  {
    "id": "monochrome19",
    "name": "Stacked Disc Shoulder Pieces",
    "price": "$12,000",
    "description": "Detachable shoulder pieces composed of stacked discs that create architectural extensions. The pieces can be worn separately or together for varying impact.",
    "images": [
      "images/MNC STACKED DISK SHOULDER DRESS.png",
      "images/MNC STACKED DISK SHOULDER DRESS.png",
      "images/MNC STACKED DISK SHOULDER DRESS.png",
      "images/MNC STACKED DISK SHOULDER DRESS.png",
      "images/MNC STACKED DISK SHOULDER DRESS.png",
      "images/MNC STACKED DISK SHOULDER DRESS.png"
    ],
    "proportionCalc": "Each piece extends 9 inches from shoulder with 12 stacked discs ranging from 2 to 6 inches diameter. Weight 1.2 lbs per side. Adjustable attachment system.",
    "essentialPairings": ["Wear with simple tops to highlight architectural forms", "Pair with orbital accessories to continue circular theme", "Style with structured garments for cohesive look"],
    "molecularView": ["Anodized aluminum discs with brushed finish", "Ball-bearing connectors allow subtle movement", "Silicon-padded shoulder contacts for comfort"]
  },
  {
    "id": "monochrome20",
    "name": "Knotted Tower Neckpiece",
    "price": "$11,200",
    "description": "A neckpiece that rises in tower-like forms created through complex knotting techniques. The piece becomes both jewelry and architectural element.",
    "images": [
      "images/MNC KNOTTED TOWER NECKPIECE.png",
      "images/MNC KNOTTED TOWER NECKPIECE.png",
      "images/MNC KNOTTED TOWER NECKPIECE.png",
      "images/MNC KNOTTED TOWER NECKPIECE.png",
      "images/MNC KNOTTED TOWER NECKPIECE.png",
      "images/MNC KNOTTED TOWER NECKPIECE.png"
    ],
    "proportionCalc": "Extends 14 inches above collarbone with 6-inch base circumference. Towers range from 3 to 8 inches in height. Weight distributed through internal structure.",
    "essentialPairings": ["Wear with open necklines to showcase full piece", "Pair with other knotted accessories for theme continuity", "Style with simple garments to highlight neckpiece as focus"],
    "molecularView": ["Waxed canvas cord over aluminum armature", "Internal weighting system maintains balance", "Modular construction allows tower height adjustment"]
  },
  {
    "id": "monochrome21",
    "name": "Folded Paper Corset",
    "price": "$7000",
    "description": "A corset constructed through origami-inspired folding techniques that create geometric patterns and surprising structural integrity from seemingly delicate materials.",
    "images": [
      "images/MNC FOLDED POWER CORSET.png",
      "images/MNC FOLDED POWER CORSET.png",
      "images/MNC FOLDED POWER CORSET.png",
      "images/MNC FOLDED POWER CORSET.png",
      "images/MNC FOLDED POWER CORSET.png",
      "images/MNC FOLDED POWER CORSET.png"
    ],
    "proportionCalc": "14-inch height with 84 individual folds. Waist reduction from 30 to 24 inches through folding compression rather than traditional boning.",
    "essentialPairings": ["Wear as art piece over bare skin", "Pair with flowing skirts for textural contrast", "Style with geometric makeup to continue folded theme"],
    "molecularView": ["Tyvek paper composite with polymer coating", "Heat-set folds maintain permanent creases", "Magnetic front closure maintains clean lines"]
  },
  {
    "id": "monochrome22",
    "name": "Ivory Rib Cage Harness",
    "price": "$18,000",
    "description": "A harness that mimics the human rib cage in ivory-toned materials. The anatomical reference becomes fashion object through precise scaling and elegant materiality.",
    "images": [
      "images/MNC IVORY RIB HARNESS.png",
      "images/MNC IVORY RIB HARNESS.png",
      "images/MNC IVORY RIB HARNESS.png",
      "images/MNC IVORY RIB HARNESS.png",
      "images/MNC IVORY RIB HARNESS.png",
      "images/MNC IVORY RIB HARNESS.png"
    ],
    "proportionCalc": "12 rib pairs spanning 16 inches across chest. Height 10 inches from clavicle to bottom ribs. Adjustable spine element from 14 to 18 inches.",
    "essentialPairings": ["Layer over mesh or bare skin for anatomical reference", "Pair with other skeletal-inspired accessories", "Wear under sheer tops for subtle revelation"],
    "molecularView": ["Cast resin ribs with marble dust composite", "Stainless steel vertebral connections", "Silicon backing for comfort against skin"]
  },
  {
    "id": "monochrome23",
    "name": "Organic Pod Cloak",
    "price": "$8000",
    "description": "A cloak that envelops the wearer in organic, pod-like forms. The garment creates a sense of protection and transformation through its cocooning silhouette.",
    "images": [
      "images/MNC POD CLOAK.png",
      "images/MNC POD CLOAK.png",
      "images/MNC POD CLOAK.png",
      "images/MNC POD CLOAK.png",
      "images/MNC POD CLOAK.png",
      "images/MNC POD CLOAK.png"
    ],
    "proportionCalc": "Full circumference 120 inches when open, closes to 40-inch pod opening. Length 65 inches with hood addition. Can be worn multiple configurations.",
    "essentialPairings": ["Wear as transformative outer layer", "Pair with organic-textured garments underneath", "Style with natural material accessories for cohesive theme"],
    "molecularView": ["Felted wool with shaped darts creates pod forms", "Internal armature maintains structure when open", "Magnetic closures allow multiple wearing positions"]
  },
  {
    "id": "monochrome24",
    "name": "Winged Contraction Backpiece",
    "price": "$18,000",
    "description": "A backpiece that combines winged expansion with contracted central elements. The piece explores tension between freedom and constraint through sculptural forms.",
    "images": [
      "images/MNC WINGED BACKPIECE.png",
      "images/MNC WINGED BACKPIECE.png",
      "images/MNC WINGED BACKPIECE.png",
      "images/MNC WINGED BACKPIECE.png",
      "images/MNC WINGED BACKPIECE.png",
      "images/MNC WINGED BACKPIECE.png"
    ],
    "proportionCalc": "Wingspan 36 inches when fully extended, contracts to 18 inches. Central contraction element reduces from 12 to 6 inches. Weight 3.2 lbs total.",
    "essentialPairings": ["Wear with backless garments to showcase piece", "Pair with minimalist front pieces to avoid competition", "Style with dramatic hairstyle to frame the backpiece"],
    "molecularView": ["Carbon fiber wing structures with feather detailing", "Leather harness with precision buckles", "Tension system allows wing extension and contraction"]
  },
  {
    "id": "monochrome25",
    "name": "The Luminary Veil",
    "price": "$18,000",
    "description": "An illuminated veil that incorporates fiber optics and micro-LEDs to create celestial patterns. The piece transforms the wearer into a walking constellation.",
    "images": [
      "images/MNC ICON LUMINARY VEIL.png",
      "images/MNC ICON LUMINARY VEIL.png",
      "images/MNC ICON LUMINARY VEIL.png",
      "images/MNC ICON LUMINARY VEIL.png",
      "images/MNC ICON LUMINARY VEIL.png",
      "images/MNC ICON LUMINARY VEIL.png"
    ],
    "proportionCalc": "84-inch circumference veil with 360-degree drape. Illuminated elements distributed across 18 square feet. Battery life 6 hours at full intensity.",
    "essentialPairings": ["Wear as standalone dramatic piece", "Pair with dark, simple garments to highlight illumination", "Style with celestial-inspired makeup"],
    "molecularView": ["Silk chiffon with woven fiber optics", "Micro-LED clusters at strategic points", "Rechargeable battery system concealed in headpiece"]
  },
  {
    "id": "monochrome26",
    "name": "The Mycelium ",
    "price": "$25,000",
    "description": "A gown that grows mycelium-like structures across its surface, creating living textures that evolve. The piece represents the intersection of fashion and biology.",
    "images": [
      "images/MNC MYCELLIUM GOWN.png",
      "images/MNC MYCELLIUM GOWN.png",
      "images/MNC MYCELLIUM GOWN.png",
      "images/MNC MYCELLIUM GOWN.png",
      "images/MNC MYCELLIUM GOWN.png",
      "images/MNC MYCELLIUM GOWN.png"
    ],
    "proportionCalc": "72-inch train with mycelium patterns covering 65% of surface. Bodice fitted from 24-32 inches waist. Growth patterns continue evolving for 48 hours after first wear.",
    "essentialPairings": ["Wear in natural settings to enhance organic theme", "Pair with wood and earth element accessories", "Style with loose, natural hairstyle"],
    "molecularView": ["Bio-textile foundation with living mycelium culture", "Nutrient-rich substrate embedded in seams", "Temperature-responsive growth patterns"]
  },
  {
    "id": "monochrome27",
    "name": " Calcite Monolith",
    "price": "$19,000",
    "description": "A dress that appears as a carved calcite monolith, with crystalline structures emerging from a solid form. The piece plays with scale and mineral aesthetics.",
    "images": [
      "images/MNC CALCITE MONNOLITH.png",
      "images/MNC CALCITE MONNOLITH.png",
      "images/MNC CALCITE MONNOLITH.png",
      "images/MNC CALCITE MONNOLITH.png",
      "images/MNC CALCITE MONNOLITH.png",
      "images/MNC CALCITE MONNOLITH.png"
    ],
    "proportionCalc": "78-inch height including headpiece, 28-inch width at shoulders tapering to 14-inch hem. Weight 8.5 lbs distributed through internal harness.",
    "essentialPairings": ["Wear as sculptural art piece requiring assistance", "Pair with mineral-inspired jewelry", "Style with stark, geometric makeup"],
    "molecularView": ["Resin composite with crushed calcite aggregate", "Internal aluminum frame for structural integrity", "Optical fibers create internal crystalline glow"]
  },
  {
    "id": "monochrome28",
    "name": " Aero-Gel ",
    "price": "$22,000",
    "description": "A cocoon dress constructed from aerogel-infused fabrics that create the illusion of solid yet weightless form. The piece challenges perceptions of materiality and volume.",
    "images": [
      "images/MNC AERO-GEL COCOON.png",
      "images/MNC AERO-GEL COCOON.png",
      "images/MNC AERO-GEL COCOON.png",
      "images/MNC AERO-GEL COCOON.png",
      "images/MNC AERO-GEL COCOON.png",
      "images/MNC AERO-GEL COCOON.png"
    ],
    "proportionCalc": "Creates 36-inch diameter cocoon while weighing only 1.8 lbs. Height 65 inches with integrated hood. Translucent material reveals subtle silhouettes within.",
    "essentialPairings": ["Wear as transformative architectural piece", "Pair with illuminated accessories to enhance translucency", "Style with ethereal makeup to complete otherworldly aesthetic"],
    "molecularView": ["Aerogel-infused silica fabric", "Nanofiber structural matrix", "Photochromatic particles respond to light conditions"]
  }
];
window.monochromeProducts = monochromeProducts;
const lustraProducts = [
  {
    "id": "lustra1",
    "name": "The Glitch-Weave Trench Coat",
    "price": "$8,800",
    "description": "A trench coat woven with digital distortion patterns that create optical interference. The glitched fabric appears to flicker between dimensions when in motion.",
    "images": [
      "images/LST GLITCH WEAVE TRENCH  COAT.png",
      "images/LST GLITCH WEAVE TRENCH  COAT.png",
      "images/LST GLITCH WEAVE TRENCH  COAT.png",
      "images/LST GLITCH WEAVE TRENCH  COAT.png",
      "images/LST GLITCH WEAVE TRENCH  COAT.png",
      "images/LST GLITCH WEAVE TRENCH  COAT.png"
    ],
    "lightTransparency": "65% opacity base with 90% transparent glitch sections. Double-layer construction creates depth illusion. 42-inch length with variable transparency zones.",
    "colorShift": ["Wears as silver-to-gold shift in sunlight", "Artificial light reveals magenta-to-cyan glitches", "Movement activates chromatic aberration effects"],
    "lightRefraction": ["Interference woven polyester", "Prism-film inserts at glitch points", "Holographic thread embroidery"]
  },
  {
    "id": "lustra2",
    "name": "The Inflated Shoulder ",
    "price": "$8,900",
    "description": "A blazer with transparent inflated shoulders that create volumetric light chambers. The clear panels diffuse and soften light while maintaining structural drama.",
    "images": [
      "images/LST INFLATED SHOULDER BLAZER.png",
      "images/LST INFLATED SHOULDER BLAZER.png",
      "images/LST INFLATED SHOULDER BLAZER.png",
      "images/LST INFLATED SHOULDER BLAZER.png",
      "images/LST INFLATED SHOULDER BLAZER.png",
      "images/LST INFLATED SHOULDER BLAZER.png"
    ],
    "lightTransparency": "Shoulder chambers 95% transparent, body 40% opaque. 8-inch shoulder extension with internal LED optional lighting. Weight distributed through back panel.",
    "colorShift": ["Clear to iridescent in different angles", "Captures and reflects environmental colors", "Optional internal lighting shifts through spectrum"],
    "lightRefraction": ["TPU inflated chambers", "Laser-etched diffusion patterns", "Optical grade polycarbonate connectors"]
  },
  {
    "id": "lustra3",
    "name": "The Liquid Legging",
    "price": "$6,200",
    "description": "Leggings that mimic the movement and transparency of liquid mercury. The surface appears to flow and ripple with every step, creating living light patterns.",
    "images": [
      "images/LST LIQUID LEGGING.png",
      "images/LST LIQUID LEGGING.png",
      "images/LST LIQUID LEGGING.png",
      "images/LST LIQUID LEGGING.png",
      "images/LST LIQUID LEGGING.png",
      "images/LST LIQUID LEGGING.png"
    ],
    "lightTransparency": "85% reflective surface with 70% light transmission. 4-way stretch maintains liquid appearance during movement. 28-inch inseam with seamless construction.",
    "colorShift": ["Shifts from silver to oil-slick rainbow", "Movement creates wave-like color transitions", "Absorbs and reflects surrounding light sources"],
    "lightRefraction": ["Liquid crystal polymer coating", "Multi-layer reflective laminates", "Stretch optical fibers woven throughout"]
  },
  {
    "id": "lustra4",
    "name": "The Asymmetric Glow ",
    "price": "$5,080",
    "description": "A dress with integrated electroluminescent panels that create asymmetric light patterns. The glow responds to movement and sound, becoming a living light sculpture.",
    "images": [
      "images/LST GLOW DRESS.png",
      "images/LST GLOW DRESS.png",
      "images/LST GLOW DRESS.png",
      "images/LST GLOW DRESS.png",
      "images/LST GLOW DRESS.png",
      "images/LST GLOW DRESS.png"
    ],
    "lightTransparency": "Glow panels 100% opaque when lit, 40% transparent when off. Light covers 60% of dress surface in asymmetric pattern. Battery life 8 hours continuous.",
    "colorShift": ["Programmable color sequences", "Responds to ambient sound with color changes", "Pulse patterns shift with wearer's movement"],
    "lightRefraction": ["Electroluminescent wire panels", "Sound-reactive microcontroller", "Flexible battery weave integrated in lining"]
  },
  {
    "id": "lustra5",
    "name": "The Knotted Spine Corset",
    "price": "$8,000",
    "description": "A corset featuring light-conducting knots along the spine that channel illumination from within. The knots appear as trapped stars against the body.",
    "images": [
      "images/LST SPINE KNOTTED CORSET.png",
      "images/LST SPINE KNOTTED CORSET.png",
      "images/LST SPINE KNOTTED CORSET.png",
      "images/LST SPINE KNOTTED CORSET.png",
      "images/LST SPINE KNOTTED CORSET.png",
      "images/LST SPINE KNOTTED CORSET.png"
    ],
    "lightTransparency": "Knots 90% light transmission, corset body 20% transparent. 14-inch height with 12 light knots. Internal lighting creates halo effects around each knot.",
    "colorShift": ["Knots shift through warm celestial colors", "Different angles reveal varying color temperatures", "Pressure-sensitive color intensity"],
    "lightRefraction": ["Optical grade silicone knots", "Fiber optic spine channel", "LED array with diffuser technology"]
  },
  {
    "id": "lustra6",
    "name": " DC SHIRT",
    "price": "$6,500",
    "description": "A shirt where traditional construction gives way to transparent panels and light-diffusing seams. The piece reveals the beauty of deconstruction through illumination.",
    "images": [
      "images/LST DECONSTRUCTED SHIRT.png",
      "images/LST DECONSTRUCTED SHIRT.png",
      "images/LST DECONSTRUCTED SHIRT.png",
      "images/LST DECONSTRUCTED SHIRT.png",
      "images/LST DECONSTRUCTED SHIRT.png",
      "images/LST DECONSTRUCTED SHIRT.png"
    ],
    "lightTransparency": "40% of surface replaced with transparent panels. Seams become light channels with 85% transmission. Traditional elements 70% opaque.",
    "colorShift": ["White light splits into spectral colors at seams", "Transparent panels tint with body heat", "Movement creates moiré patterns with underlying layers"],
    "lightRefraction": ["Laser-cut transparency film inserts", "Prism tape along deconstructed seams", "Thermochromatic coating on clear panels"]
  },
  {
    "id": "lustra7",
    "name": "The Orbital Puffer Jacket",
    "price": "$4,200",
    "description": "A puffer jacket with spherical transparent chambers that orbit the body. Each chamber contains illuminated elements that float independently within their bubbles.",
    "images": [
      "images/LST ORBIT PUFFER JACKET.png",
      "images/LST ORBIT PUFFER JACKET.png",
      "images/LST ORBIT PUFFER JACKET.png",
      "images/LST ORBIT PUFFER JACKET.png",
      "images/LST ORBIT PUFFER JACKET.png",
      "images/LST ORBIT PUFFER JACKET.png"
    ],
    "lightTransparency": "Spherical chambers 95% transparent, jacket body 50% opaque. 24 orbital spheres ranging 3-6 inches diameter. Internal elements visible from all angles.",
    "colorShift": ["Each sphere contains different color phase", "Rotation creates color blending effects", "Environmental light captured and multiplied in spheres"],
    "lightRefraction": ["Clear TPU spherical chambers", "Floating LED elements on gyroscopic mounts", "Light-diffusing liquid in some spheres"]
  },
  {
    "id": "lustra8",
    "name": "The Cascading Crystal Top",
    "price": "$5,400",
    "description": "A top where faceted crystals cascade in liquid formation, each facet designed to capture and redirect light in precise patterns.",
    "images": [
      "images/LST CASCADING CRYSTAL TOP.png",
      "images/LST CASCADING CRYSTAL TOP.png",
      "images/LST CASCADING CRYSTAL TOP.png",
      "images/LST CASCADING CRYSTAL TOP.png",
      "images/LST CASCADING CRYSTAL TOP.png",
      "images/LST CASCADING CRYSTAL TOP.png"
    ],
    "lightTransparency": "Crystals 99% transparent with 100% light transmission. Base mesh 90% transparent. 184 individual crystals in waterfall formation.",
    "colorShift": ["Each crystal acts as prism creating mini-rainbows", "Collective crystals produce spectral showers", "Angle-dependent color separation effects"],
    "lightRefraction": ["Optical grade acrylic crystals", "Precision laser faceting", "UV-reactive coatings on select facets"]
  },
  {
    "id": "lustra9",
    "name": "The Pixelated Trouser",
    "price": "$3,800",
    "description": "Trousers that appear digitally pixelated through strategic transparent and opaque squares. The pixel pattern creates optical vibration and movement illusion.",
    "images": [
      "images/LST PIXELATED TROUSER.png",
      "images/LST PIXELATED TROUSER.png",
      "images/LST PIXELATED TROUSER.png",
      "images/LST PIXELATED TROUSER.png",
      "images/LST PIXELATED TROUSER.png",
      "images/LST PIXELATED TROUSER.png"
    ],
    "lightTransparency": "60% pixel coverage with alternating 80% transparent/20% opaque squares. 32-inch inseam with pixel size graduating from 1 to 3 inches.",
    "colorShift": ["Pixels shift between complementary colors", "Creates RGB separation effect in motion", "Different lighting conditions reveal hidden patterns"],
    "lightRefraction": ["Digital print with clear coat layering", "Interference pigments in pixel squares", "Moiré effect base fabric"]
  },
  {
    "id": "lustra10",
    "name": "The Light-Wrap ",
    "price": "$6,800",
    "description": "A gown that appears woven from solidified light, with strands of illumination wrapping the body in ethereal coils. The light seems to both conceal and reveal simultaneously.",
    "images": [
      "images/LST LIGHT WRAP GOWN.png",
      "images/LST LIGHT WRAP GOWN.png",
      "images/LST LIGHT WRAP GOWN.png",
      "images/LST LIGHT WRAP GOWN.png",
      "images/LST LIGHT WRAP GOWN.png",
      "images/LST LIGHT WRAP GOWN.png"
    ],
    "lightTransparency": "Light strands 100% illuminated, spaces between 90% transparent. 84 individual light wraps covering 70% of body surface. 58-inch length with train.",
    "colorShift": ["Light temperature shifts from warm to cool white", "Strands pulse in wave patterns around body", "Color responds to wearer's heartbeat when sensors active"],
    "lightRefraction": ["Electroluminescent coating on elastic strands", "Micro-controller for dynamic lighting patterns", "Photoluminescent underlayer for ambient glow"]
  },
  {
    "id": "lustra11",
    "name": "The Stacked Disc Harness",
    "price": "$8,605",
    "description": "A harness constructed from stacked transparent discs that create lens-like effects. Each disc focuses and distorts light differently based on its position.",
    "images": [
      "images/LST STACKED DISK HARNESS.png",
      "images/LST STACKED DISK HARNESS.png",
      "images/LST STACKED DISK HARNESS.png",
      "images/LST STACKED DISK HARNESS.png",
      "images/LST STACKED DISK HARNESS.png",
      "images/LST STACKED DISK HARNESS.png"
    ],
    "lightTransparency": "Discs 92% transparent with varying optical properties. 48 discs total, each acting as individual lens. Harness structure 80% opaque for contrast.",
    "colorShift": ["Discs create chromatic aberration patterns", "Stacking produces complex color multiplication", "Different disc angles yield unique color combinations"],
    "lightRefraction": ["Optical acrylic discs with precision polishing", "Varied lens curvatures in disc stack", "Anti-reflective coating on select surfaces"]
  },
  {
    "id": "lustra12",
    "name": "The Anamorphic Print ",
    "price": "$5,600",
    "description": "A dress printed with anamorphic patterns that only resolve into clear images from specific angles. The distorted print plays with perception and clarity.",
    "images": [
      "images/LST ANAMORPHIC PRINT DRESS.png",
      "images/LST ANAMORPHIC PRINT DRESS.png",
      "images/LST ANAMORPHIC PRINT DRESS.png",
      "images/LST ANAMORPHIC PRINT DRESS.png",
      "images/LST ANAMORPHIC PRINT DRESS.png",
      "images/LST ANAMORPHIC PRINT DRESS.png"
    ],
    "lightTransparency": "Print areas 40% opaque, negative space 85% transparent. 34-inch length with 6 anamorphic focal points. Fabric 70% sheer base.",
    "colorShift": ["Print colors separate at non-optimal angles", "Reveals hidden color layers when properly viewed", "Movement creates stroboscopic color effects"],
    "lightRefraction": ["Lenticular printing technique", "Interference ink layers", "Clear vinyl distortion elements"]
  },
  {
    "id": "lustra13",
    "name": "The Articulated Tail",
    "price": "$4,500",
    "description": "A tail coat with articulated transparent sections that move independently, creating shifting light patterns with each gesture. The piece becomes kinetic light art.",
    "images": [
      "images/LST ARTICULATED TAIL COAT.png",
      "images/LST ARTICULATED TAIL COAT.png",
      "images/LST ARTICULATED TAIL COAT.png",
      "images/LST ARTICULATED TAIL COAT.png",
      "images/LST ARTICULATED TAIL COAT.png",
      "images/LST ARTICULATED TAIL COAT.png"
    ],
    "lightTransparency": "Articulated panels 88% transparent, main body 30% opaque. 24 moving sections with 180-degree rotation. 42-inch length with 18-inch tails.",
    "colorShift": ["Panel movement creates color sequencing", "Different angles reveal layered color effects", "Speed of movement affects color intensity"],
    "lightRefraction": ["Polycarbonate articulated panels", "Ball joint connection system", "Internal reflective surfaces enhance light play"]
  },
  {
    "id": "lustra14",
    "name": "The Smoke Bomb ",
    "price": "$4,800",
    "description": "A skirt that appears to capture smoke in motion, with transparent layers creating depth and movement illusion. The smoky patterns shift with every step.",
    "images": [
      "images/LST SMOKE BOMB SKIRT.png",
      "images/LST SMOKE BOMB SKIRT.png",
      "images/LST SMOKE BOMB SKIRT.png",
      "images/LST SMOKE BOMB SKIRT.png",
      "images/LST SMOKE BOMB SKIRT.png",
      "images/LST SMOKE BOMB SKIRT.png"
    ],
    "lightTransparency": "8 layers of varying transparency from 20% to 90%. Smoke patterns 60% opaque against transparent ground. 36-inch length with asymmetric hem.",
    "colorShift": ["Smoke appears to change color with layer interaction", "Different lighting creates varying smoke density appearance", "Movement makes smoke patterns seem to drift and swirl"],
    "lightRefraction": ["Digital smoke print on sheer polyester", "Layer sequencing creates depth illusion", "Iridescent coating catches light at layer edges"]
  },
  {
    "id": "lustra15",
    "name": "The Holographic Shearling",
    "price": "$6,550",
    "description": "A shearling coat where traditional wool is replaced with holographic fibers that create rainbow effects while maintaining warmth and texture.",
    "images": [
      "images/LST HOLOGRAPHIC SHEARLING.png",
      "images/LST HOLOGRAPHIC SHEARLING.png",
      "images/LST HOLOGRAPHIC SHEARLING.png",
      "images/LST HOLOGRAPHIC SHEARLING.png",
      "images/LST HOLOGRAPHIC SHEARLING.png",
      "images/LST HOLOGRAPHIC SHEARLING.png"
    ],
    "lightTransparency": "Holographic fibers 70% light transmission, base fabric 40% opaque. Maintains thermal properties despite transparency. 34-inch coat length.",
    "colorShift": ["Each fiber acts as micro-prism creating rainbows", "Color shifts with angle and movement", "Captures and multiplies environmental colors"],
    "lightRefraction": ["Optical acrylic fibers woven with wool", "Holographic laminate surface treatment", "Light-diffusing core in each fiber"]
  },
  {
    "id": "lustra16",
    "name": "The Gilded Cage Dress",
    "price": "$7,500",
    "description": "A dress encased in a gilded cage structure where the metal appears both solid and transparent simultaneously. The cage creates shifting shadow patterns on the body beneath.",
    "images": [
      "images/LST GLIDED CAGE DRESS.png",
      "images/LST GLIDED CAGE DRESS.png",
      "images/LST GLIDED CAGE DRESS.png",
      "images/LST GLIDED CAGE DRESS.png",
      "images/LST GLIDED CAGE DRESS.png",
      "images/LST GLIDED CAGE DRESS.png"
    ],
    "lightTransparency": "Cage structure 50% transparent through mirror effects, dress beneath 80% sheer. Cage extends 6-10 inches from body surface. Weight 4.8 lbs.",
    "colorShift": ["Gilded surface shifts from gold to mercury", "Creates kaleidoscopic patterns on underlying dress", "Different lighting conditions change cage appearance from solid to ethereal"],
    "lightRefraction": ["Mirror-polished anodized aluminum", "Optical coating creates transparency illusion", "Internal LED highlighting optional"]
  },
  {
    "id": "lustra17",
    "name": "The Magnetized Capelet",
    "price": "$4,950",
    "description": "A capelet with magnetically attached transparent panels that can be reconfigured. The panels float and shift positions, creating evolving light relationships.",
    "images": [
      "images/LST MAGNETIZED CAPELET.png",
      "images/LST MAGNETIZED CAPELET.png",
      "images/LST MAGNETIZED CAPELET.png",
      "images/LST MAGNETIZED CAPELET.png",
      "images/LST MAGNETIZED CAPELET.png",
      "images/LST MAGNETIZED CAPELET.png"
    ],
    "lightTransparency": "Panels 95% transparent, cape base 60% opaque. 12 magnetic attachment points allow infinite configurations. Shoulder span 24 inches.",
    "colorShift": ["Panel arrangement creates different color interactions", "Magnetic fields subtly affect light polarization", "Reconfiguration changes overall color balance"],
    "lightRefraction": ["Clear polycarbonate panels with embedded magnets", "Magnetic field-responsive liquid crystal layers", "Prism edge detailing on panels"]
  },
  {
    "id": "lustra18",
    "name": "The Data-Stream Hood",
    "price": "$4,500",
    "description": "A hood that visualizes data streams through illuminated patterns flowing across transparent surfaces. The digital information becomes wearable light art.",
    "images": [
      "images/LST DATA STREAM HOOD.png",
      "images/LST DATA STREAM HOOD.png",
      "images/LST DATA STREAM HOOD.png",
      "images/LST DATA STREAM HOOD.png",
      "images/LST DATA STREAM HOOD.png",
      "images/LST DATA STREAM HOOD.png"
    ],
    "lightTransparency": "Hood surface 85% transparent with 100% opaque data streams. Programmable display areas cover 40% of surface. Standalone or integrates with collection pieces.",
    "colorShift": ["Data streams shift color based on information type", "Pattern speed affects color intensity", "Can display environmental data in real-time color coding"],
    "lightRefraction": ["Flexible OLED display segments", "Fiber optic data channels", "Microprocessor with Bluetooth connectivity"]
  },
  {
    "id": "lustra19",
    "name": "The Aura ",
    "price": "$20,000",
    "description": "A gown that projects the wearer's aura as visible light emission. Bio-sensors detect energy fields and translate them into radiant color manifestations.",
    "images": [
      "images/LST ICON AURA GOWN.png",
      "images/LST ICON AURA GOWN.png",
      "images/LST ICON AURA GOWN.png",
      "images/LST ICON AURA GOWN.png",
      "images/LST ICON AURA GOWN.png",
      "images/LST ICON AURA GOWN.png"
    ],
    "lightTransparency": "Gown fabric 60% transparent with 100% light emission from integrated system. 62-inch length with 24-inch train. Aura extends 12 inches beyond physical form.",
    "colorShift": ["Colors reflect emotional and energetic states", "Aura intensity fluctuates with wearer's vitality", "Interacts with other wearers' auras in proximity"],
    "lightRefraction": ["Bio-luminescent bacterial coating", "Galvanic skin response sensors", "Quantum dot illumination technology"]
  },
  {
    "id": "lustra20",
    "name": "The Living Ink ",
    "price": "$18,000",
    "description": "A coat where liquid crystal ink flows and reforms in response to environment and movement. The living patterns never repeat, creating unique wearable art.",
    "images": [
      "images/LST ICON LIVING INK COAT.png",
      "images/LST ICON LIVING INK COAT.png",
      "images/LST ICON LIVING INK COAT.png",
      "images/LST ICON LIVING INK COAT.png",
      "images/LST ICON LIVING INK COAT.png",
      "images/LST ICON LIVING INK COAT.png"
    ],
    "lightTransparency": "Ink patterns 40% opaque, base coat 80% transparent. Micro-fluidic channels allow ink movement. 44-inch length with dramatic cape-like silhouette.",
    "colorShift": ["Ink colors change with temperature and light", "Flow patterns create evolving color relationships", "Responds to atmospheric conditions with color adaptations"],
    "lightRefraction": ["Micro-fluidic channels with liquid crystal ink", "Electro-active polymer pumps", "Photosensitive dye compounds"]
  },
  {
    "id": "lustra21",
    "name": "The Chroma Key",
    "price": "$17,800",
    "description": "A suit that can become any color or pattern through advanced chroma-key technology. The surface becomes a canvas for digital projection and reality augmentation.",
    "images": [
      "images/LST ICON CHROMA KEY SUIT.png",
      "images/LST ICON CHROMA KEY SUIT.png",
      "images/LST ICON CHROMA KEY SUIT.png",
      "images/LST ICON CHROMA KEY SUIT.png",
      "images/LST ICON CHROMA KEY SUIT.png",
      "images/LST ICON CHROMA KEY SUIT.png"
    ],
    "lightTransparency": "Base suit 90% transparent chroma-key green, becomes 100% opaque when activated. Projection surface covers 95% of suit. Full body coverage with articulation points.",
    "colorShift": ["Can display infinite color combinations", "Real-time pattern changes possible", "Augmented reality integration creates interactive surfaces"],
    "lightRefraction": ["Retro-reflective surface coating", "Micro-projector integration", "AR-enabled smart fabric technology"]
  },
  {
    "id": "lustra22",
    "name": "The Sculptural Cape",
    "price": "$20,000",
    "description": "A dress where light becomes the primary structural element, with illuminated cages creating both form and transparency simultaneously.",
    "images": [
      "images/LST SCULPTURAL CAPE DRESS.png",
      "images/LST SCULPTURAL CAPE DRESS.png",
      "images/LST SCULPTURAL CAPE DRESS.png",
      "images/LST SCULPTURAL CAPE DRESS.png",
      "images/LST SCULPTURAL CAPE DRESS.png",
      "images/LST SCULPTURAL CAPE DRESS.png"
    ],
    "lightTransparency": "Cage elements 100% light, spaces 95% transparent. Creates both solid appearance and complete transparency paradox. 54-inch height including structural elements.",
    "colorShift": ["Cage color defines dress color perception", "Can shift from warm metallic to cool etheral", "Light intensity changes apparent solidity"],
    "lightRefraction": ["LED filament construction", "Programmable color temperature", "Holographic film creates dimensional illusion"]
  },
  {
    "id": "lustra23",
    "name": "The ANIMAtION PROECTOR",
    "price": "$15,000",
    "description": "A jacket that serves as a screen for animated projections, with the surface constantly shifting between reality and digital fantasy.",
    "images": [
      "images/LST ANIMATION PROJECTOR JACKET.png",
      "images/LST ANIMATION PROJECTOR JACKET.png",
      "images/LST ANIMATION PROJECTOR JACKET.png",
      "images/LST ANIMATION PROJECTOR JACKET.png",
      "images/LST ANIMATION PROJECTOR JACKET.png",
      "images/LST ANIMATION PROJECTOR JACKET.png"
    ],
    "lightTransparency": "Projection surface 70% opaque when active, 90% transparent when off. 32-inch length with full sleeve coverage. 6-hour projection battery life.",
    "colorShift": ["Unlimited color through digital projection", "Can display video, patterns, or interactive art", "Real-time environmental data visualization"],
    "lightRefraction": ["High-gain projection surface coating", "Integrated pico-projector system", "Motion sensors for interactive displays"]
  },
  {
    "id": "lustra24",
    "name": "The Kinetic Ribbon",
    "price": "$18,000",
    "description": "A dress composed of illuminated ribbons that move in kinetic patterns, creating flowing light sculptures around the wearer's form.",
    "images": [
      "images/LST KINETIC RIBBON DRESS.png",
      "images/LST KINETIC RIBBON DRESS.png",
      "images/LST KINETIC RIBBON DRESS.png",
      "images/LST KINETIC RIBBON DRESS.png",
      "images/LST KINETIC RIBBON DRESS.png",
      "images/LST KINETIC RIBBON DRESS.png"
    ],
    "lightTransparency": "Ribbons 100% illuminated with 85% transparency between. 36 individual ribbons with independent movement. 48-inch length with dramatic motion range.",
    "colorShift": ["Ribbons shift colors in wave patterns", "Movement speed affects color transition rate", "Can create rainbow chasing effects throughout dress"],
    "lightRefraction": ["Electroluminescent ribbon material", "Servo motor movement system", "Color-mixing LED technology"]
  },
  {
    "id": "lustra25",
    "name": "The Sound-Wave Cape",
    "price": "$18,000",
    "description": "A cape that visualizes sound as rippling light patterns across its transparent surface. The wearer becomes a walking visualization of their acoustic environment.",
    "images": [
      "images/LST SOUNDWAVE CAPE.png",
      "images/LST SOUNDWAVE CAPE.png",
      "images/LST SOUNDWAVE CAPE.png",
      "images/LST SOUNDWAVE CAPE.png",
      "images/LST SOUNDWAVE CAPE.png",
      "images/LST SOUNDWAVE CAPE.png"
    ],
    "lightTransparency": "Cape 88% transparent with 100% opaque sound visualization. 60-inch circumference with 42-inch length. Sound patterns cover 20-80% of surface depending on volume.",
    "colorShift": ["Different frequencies represented by different colors", "Volume affects color intensity and pattern scale", "Musical notes create specific color harmonies"],
    "lightRefraction": ["Piezoelectric sound sensors", "Electrochromic display layer", "Real-time audio processing unit"]
  },
  {
    "id": "lustra26",
    "name": "The Fragmented Mirror",
    "price": "$15,000",
    "description": "A suit composed of fragmented mirrors that create kaleidoscopic reflections while maintaining wearability. The pieces capture and multiply light from all directions.",
    "images": [
      "images/LST FRAGMENTED MIRROR DRESS.png",
      "images/LST FRAGMENTED MIRROR DRESS.png",
      "images/LST FRAGMENTED MIRROR DRESS.png",
      "images/LST FRAGMENTED MIRROR DRESS.png",
      "images/LST FRAGMENTED MIRROR DRESS.png",
      "images/LST FRAGMENTED MIRROR DRESS.png"
    ],
    "lightTransparency": "Mirror fragments 50% reflective/50% transparent, base suit 80% sheer. 284 individual mirror pieces in articulated arrangement. Full body coverage with movement accommodation.",
    "colorShift": ["Fragments capture and reflect environmental colors", "Movement creates stroboscopic color effects", "Different angles reveal hidden color layers"],
    "lightRefraction": ["Dichroic glass fragments", "Flexible mirror film technology", "Interference coating creates color separation"]
  },
  {
    "id": "lustra27",
    "name": "The Pulse",
    "price": "$18,000",
    "description": "A bodysuit that pulses with light synchronized to the wearer's heartbeat. The illumination becomes a visualization of life itself, with transparency revealing the human form beneath.",
    "images": [
      "images/LST PULSE BODY SUIT.png",
      "images/LST PULSE BODY SUIT.png",
      "images/LST PULSE BODY SUIT.png",
      "images/LST PULSE BODY SUIT.png",
      "images/LST PULSE BODY SUIT.png",
      "images/LST PULSE BODY SUIT.png"
    ],
    "lightTransparency": "Bodysuit 70% transparent with 100% opaque pulse patterns. Heartbeat sensor accuracy 99.9%. Full body coverage with strategic pulse focal points.",
    "colorShift": ["Pulse color indicates heart rate variability", "Can shift from calm blue to excited red", "Emotional states reflected in color temperature"],
    "lightRefraction": ["Photoplethysmography sensors", "Fiber optic pulse channels", "Bio-responsive smart fabric"]
  }

];
window.lustraProducts = lustraProducts;
  const distortionProducts = [
  {
    "id": "distortion1",
    "name": "The Corrupted Memory ",
    "price": "$12,000",
    "description": "A jacket that appears to have fragmented and reassembled with digital artifacts. The fabric seems to glitch between different states of existence, with patches of missing data and corrupted texture mapping.",
    "images": [
      "images/DST CORRUPTED MEMORY JACKET - Copy.png",
      "images/DST CORRUPTED MEMORY JACKET - Copy.png",
      "images/DST CORRUPTED MEMORY JACKET - Copy.png",
      "images/DST CORRUPTED MEMORY JACKET - Copy.png",
      "images/DST CORRUPTED MEMORY JACKET - Copy.png",
      "images/DST CORRUPTED MEMORY JACKET - Copy.png"
    ],
    "sizePredictor": "Asymmetric hem ranges from 28-36 inches. Shoulder distortion creates 4-inch variation left to right. 24-inch sleeve length with digital artifact patterning.",
    "styleSuggestions": ["Layer over digital print top for enhanced glitch effect", "Pair with structured trousers to ground the distortion", "Wear with VR headset for full augmented reality integration"],
    "materialExplorer": ["Data-corrupted wool blend", "Digital artifact printing", "Fragmented seam construction"]
  },
  {
    "id": "distortion2",
    "name": "The Data-Mosh PANTS",
    "price": "$7,000",
    "description": "Trousers that appear to be caught in a perpetual datamosh, with pixelated distortions and color bleed effects creating digital decay throughout the garment.",
    "images": [
      "images/DST DATA MOSH TROUSERS.png",
      "images/DST DATA MOSH TROUSERS.png",
      "images/DST DATA MOSH TROUSERS.png",
      "images/DST DATA MOSH TROUSERS.png",
      "images/DST DATA MOSH TROUSERS.png",
      "images/DST DATA MOSH TROUSERS.png"
    ],
    "sizePredictor": "32-inch inseam with variable waist distortion from 28-31 inches. Pixel bleed patterns extend 6-8 inches beyond actual leg silhouette.",
    "styleSuggestions": ["Pair with glitch-art top for complete digital aesthetic", "Contrast with clean minimalist jacket", "Wear with deconstructed sneakers"],
    "materialExplorer": ["Motion-blur cotton twill", "Digital compression pattern printing", "Frame-rate disruption detailing"]
  },
  {
    "id": "distortion3",
    "name": "The Blue S-D",
    "price": "$10,000",
    "description": "A dress that captures the iconic blue screen error in fabric form, complete with digital crash text and error code patterns frozen in eternal system failure.",
    "images": [
      "images/DST BLUE SCREEN.png",
      "images/DST BLUE SCREEN.png",
      "images/DST BLUE SCREEN.png",
      "images/DST BLUE SCREEN.png",
      "images/DST BLUE SCREEN.png",
      "images/DST BLUE SCREEN.png"
    ],
    "sizePredictor": "Knee-length 36-inch with asymmetric error code panels. Shoulder straps feature binary code patterns. Back zipper with crash report detailing.",
    "styleSuggestions": ["Wear as statement piece with minimal accessories", "Pair with tech-wear accessories", "Combine with other error-themed pieces"],
    "materialExplorer": ["Error-blue technical fabric", "Screen-printed crash text", "Digital failure motif embroidery"]
  },
  {
    "id": "distortion4",
    "name": "The Static Bloom ",
    "price": "$8,000",
    "description": "An evening gown where static electricity appears to bloom across the surface, creating crackling floral patterns of digital interference and signal noise.",
    "images": [
      "images/DST STATIC BLOOM .png",
      "images/DST STATIC BLOOM .png",
      "images/DST STATIC BLOOM .png",
      "images/DST STATIC BLOOM .png",
      "images/DST STATIC BLOOM .png",
      "images/DST STATIC BLOOM .png"
    ],
    "sizePredictor": "Floor-length 62-inch gown with 24-inch train. Static patterns radiate from center front. Sleeveless with charged shoulder detailing.",
    "styleSuggestions": ["Wear for dramatic evening events", "Pair with crystal accessories that catch light like static", "Style with avant-garde makeup"],
    "materialExplorer": ["Interference pattern silk", "Electro-static tulle overlay", "Signal noise embroidery"]
  },
  {
    "id": "distortion5",
    "name": "The Weave Tail",
    "price": "$6,000",
    "description": "A tailcoat woven with intentional digital errors that create permanent glitch patterns in the fabric structure, appearing to corrupt and reassemble in real-time.",
    "images": [
      "images/DST GLITCH WEAVE TAIL.png",
      "images/DST GLITCH WEAVE TAIL.png",
      "images/DST GLITCH WEAVE TAIL.png",
      "images/DST GLITCH WEAVE TAIL.png",
      "images/DST GLITCH WEAVE TAIL.png",
      "images/DST GLITCH WEAVE TAIL.png"
    ],
    "sizePredictor": "Traditional 32-inch body length with 16-inch tails. Shoulder width 20 inches with glitch-distorted sleeve head. Back features data corruption panel.",
    "styleSuggestions": ["Wear over digital print shirt", "Pair with error-message accessories", "Style for fashion-forward formal events"],
    "materialExplorer": ["Digital error woven wool", "Corrupted pattern jacquard", "Glitch-stitch seam construction"]
  },
  {
    "id": "distortion6",
    "name": "The Hex-Code Corset",
    "price": "$5,000",
    "description": "A corset printed with hexadecimal code that appears to be decoding and recoding itself, creating a living data stream around the torso.",
    "images": [
      "images/DST GLITCH HEX CODE CORSET.png",
      "images/DST GLITCH HEX CODE CORSET.png",
      "images/DST GLITCH HEX CODE CORSET.png",
      "images/DST GLITCH HEX CODE CORSET.png",
      "images/DST GLITCH HEX CODE CORSET.png",
      "images/DST GLITCH HEX CODE CORSET.png"
    ],
    "sizePredictor": "12-inch height with 24-30 inch waist range. Hex code patterns wrap continuously around body. Steel boning follows binary sequence.",
    "styleSuggestions": ["Wear as outerwear over mesh top", "Pair with coding-inspired jewelry", "Style with deconstructed skirts or trousers"],
    "materialExplorer": ["Data-stream printed leather", "Algorithmic boning placement", "Binary sequence lacing"]
  },
  {
    "id": "distortion7",
    "name": "The Pixel-Drip ",
    "price": "$7000",
    "description": "A top where the fabric appears to be melting into pixels, with color blocks dripping down in digital decay while maintaining structural integrity.",
    "images": [
      "images/DST PIXEL DRIP TOP.png",
      "images/DST PIXEL DRIP TOP.png",
      "images/DST PIXEL DRIP TOP.png",
      "images/DST PIXEL DRIP TOP.png",
      "images/DST PIXEL DRIP TOP.png",
      "images/DST PIXEL DRIP TOP.png"
    ],
    "sizePredictor": "Cropped 20-inch length with asymmetric hem. Pixel drips extend 6-8 inches beyond actual hemline. Sleeve distortion creates melting effect.",
    "styleSuggestions": ["Pair with high-waisted bottoms", "Layer under transparent jackets", "Wear with digital art accessories"],
    "materialExplorer": ["Pixel-melt technical jersey", "Color block digital printing", "Resolution degradation fabric treatment"]
  },
  {
    "id": "distortion8",
    "name": "The Buffer Error ",
    "price": "$8,200",
    "description": "A skirt that visualizes buffer overflow errors through layered fabrics that appear to stack and crash into each other, creating digital pile-up effects.",
    "images": [
      "images/DST BUFFER ERROR SKIRT.png",
      "images/DST BUFFER ERROR SKIRT.png",
      "images/DST BUFFER ERROR SKIRT.png",
      "images/DST BUFFER ERROR SKIRT.png",
      "images/DST BUFFER ERROR SKIRT.png",
      "images/DST BUFFER ERROR SKIRT.png"
    ],
    "sizePredictor": "Midi length 32 inches with overflow layers adding 6-inch depth. Waist 26-30 inches with memory allocation elastic. Asymmetric stack crash detailing.",
    "styleSuggestions": ["Pair with simple tops to highlight skirt complexity", "Wear with computational jewelry", "Style with structured footwear"],
    "materialExplorer": ["Stack overflow layered mesh", "Memory allocation elastic", "Buffer crash pattern printing"]
  },
  {
    "id": "distortion9",
    "name": "The  Bomb Harness",
    "price": "$12,020",
    "description": "A harness that appears to multiply and replicate across the body like a digital fork bomb, with straps endlessly dividing and conquering space.",
    "images": [
      "images/DST FORK BOMB HARNESS.png",
      "images/DST FORK BOMB HARNESS.png",
      "images/DST FORK BOMB HARNESS.png",
      "images/DST FORK BOMB HARNESS.png",
      "images/DST FORK BOMB HARNESS.png",
      "images/DST FORK BOMB HARNESS.png"
    ],
    "sizePredictor": "Covers torso with 18 main strap divisions multiplying to 72 endpoints. Adjustable from XS to L. Weight distributed through geometric tension.",
    "styleSuggestions": ["Layer over bare skin or mesh tops", "Pair with other dystopian tech wear", "Wear as statement piece with minimal other clothing"],
    "materialExplorer": ["Replication-strap nylon webbing", "Geometric tension hardware", "Digital multiplication pattern embossing"]
  },
  {
    "id": "distortion10",
    "name": "The 404",
    "price": "$10,000",
    "description": "A coat that embodies the digital error 404, with missing sections, broken links in construction, and fabric that appears to be searching for its missing components.",
    "images": [
      "images/DST 404.png",
      "images/DST 404.png",
      "images/DST 404.png",
      "images/DST 404.png",
      "images/DST 404.png",
      "images/DST 404.png"
    ],
    "sizePredictor": "Knee-length 42-inch coat with 30% missing sections. Shoulder span 22 inches with broken seam detailing. Sleeves feature link error patterns.",
    "styleSuggestions": ["Wear over contrasting layers to highlight missing sections", "Pair with error message accessories", "Style for conceptual fashion events"],
    "materialExplorer": ["Missing data wool blend", "Broken link construction", "Error code embroidery detailing"]
  },
  {
    "id": "distortion11",
    "name": "The Kernel Panic Kilt",
    "price": "$13,000",
    "description": "A kilt that captures the chaos of a system kernel panic, with pleats that appear to crash into each other and patterns that suggest complete digital meltdown.",
    "images": [
      "images/DST KERNEL PANIC SILT.png",
      "images/DST KERNEL PANIC SILT.png",
      "images/DST KERNEL PANIC SILT.png",
      "images/DST KERNEL PANIC SILT.png",
      "images/DST KERNEL PANIC SILT.png",
      "images/DST KERNEL PANIC SILT.png"
    ],
    "sizePredictor": "Traditional 24-inch length with system crash pleating. Waist 28-34 inches with panic-induced asymmetry. Hardware features freeze frame detailing.",
    "styleSuggestions": ["Pair with tech-inspired tops", "Wear with combat boots for contrast", "Style with system failure accessories"],
    "materialExplorer": ["System crash wool", "Kernel panic pattern weaving", "Hardware freeze detailing"]
  },
  {
    "id": "distortion12",
    "name": "The Lag Spike ",
    "price": "$11,000",
    "description": "A bodysuit that visualizes network lag spikes through frozen motion patterns and delayed response textures that create temporal distortion effects.",
    "images": [
      "images/DST LAG SPIKE.png",
      "images/DST LAG SPIKE.png",
      "images/DST LAG SPIKE.png",
      "images/DST LAG SPIKE.png",
      "images/DST LAG SPIKE.png",
      "images/DST LAG SPIKE.png"
    ],
    "sizePredictor": "Full coverage bodysuit with latency mapping. Sizes XS-XL with temporal distortion patterning. Thong back with packet loss detailing.",
    "styleSuggestions": ["Layer under distressed pieces", "Wear alone with avant-garde accessories", "Pair with lag-inspired outerwear"],
    "materialExplorer": ["Latency-mesh technical fabric", "Frozen motion digital printing", "Temporal delay texture treatment"]
  },
  {
    "id": "distortion13",
    "name": "The Syntax ",
    "price": "$27,000",
    "description": "A suit where the construction appears to contain syntax errors, with seams that don't connect properly and patterns that break programming logic rules.",
    "images": [
      "images/DST SYNTAX ERROR.png",
      "images/DST SYNTAX ERROR.png",
      "images/DST SYNTAX ERROR.png",
      "images/DST SYNTAX ERROR.png",
      "images/DST SYNTAX ERROR.png",
      "images/DST SYNTAX ERROR.png"
    ],
    "sizePredictor": "Jacket 30-inch length with misaligned seams. Trousers 32-inch inseam with logical error pleating. Shoulder construction features parsing errors.",
    "styleSuggestions": ["Wear to tech conferences as statement", "Pair with coding-themed accessories", "Style with mismatched but complementary pieces"],
    "materialExplorer": ["Logical error wool suiting", "Misparsed seam construction", "Syntax breakdown pattern printing"]
  },
  {
    "id": "distortion14",
    "name": "The Disc Headdress",
    "price": "$22,000",
    "description": "A headdress that embodies the classic disc read error, with circular patterns that appear scratched, skipping, and unable to load properly.",
    "images": [
      "images/DST DISC READ HEADDRESS.png",
      "images/DST DISC READ HEADDRESS.png",
      "images/DST DISC READ HEADDRESS.png",
      "images/DST DISC READ HEADDRESS.png",
      "images/DST DISC READ HEADDRESS.png",
      "images/DST DISC READ HEADDRESS.png"
    ],
    "sizePredictor": "Circular form 14-inch diameter with 6-inch depth. Headband adjustable 20-24 inches. Weight 1.2 lbs with balanced distribution.",
    "styleSuggestions": ["Wear as dramatic accessory with simple outfits", "Pair with other digital error pieces", "Style for avant-garde events"],
    "materialExplorer": ["Scratched disc acrylic", "Skipping pattern metalwork", "Load failure textile components"]
  },
  {
    "id": "distortion15",
    "name": "The Stack  Veil",
    "price": "$23,000",
    "description": "A veil that visualizes stack overflow through layers that accumulate endlessly, creating a cascade of transparent fabrics that overwhelm the form.",
    "images": [
      "images/DST STACK OVERFLOW VEIL.png",
      "images/DST STACK OVERFLOW VEIL.png",
      "images/DST STACK OVERFLOW VEIL.png",
      "images/DST STACK OVERFLOW VEIL.png",
      "images/DST STACK OVERFLOW VEIL.png",
      "images/DST STACK OVERFLOW VEIL.png"
    ],
    "sizePredictor": "72-inch length with 24 overlapping layers. Circumference 120 inches at base. Headpiece features memory allocation detailing.",
    "styleSuggestions": ["Wear as dramatic wedding or event piece", "Pair with simple gown to highlight veil", "Style with computational accessories"],
    "materialExplorer": ["Memory layer chiffon", "Stack accumulation tulle", "Overflow pattern embroidery"]
  },
  {
    "id": "distortion16",
    "name": "The Leak Gown",
    "price": "$23,000",
    "description": "A gown that appears to be slowly dissipating into digital particles, with fabric that fades and fragments as if suffering from gradual memory loss.",
    "images": [
      "images/DST MEMORY LEAK.png",
      "images/DST MEMORY LEAK.png",
      "images/DST MEMORY LEAK.png",
      "images/DST MEMORY LEAK.png",
      "images/DST MEMORY LEAK.png",
      "images/DST MEMORY LEAK.png"
    ],
    "sizePredictor": "Floor-length 60-inch with dissipation gradient. Shoulders fully formed, hem partially dissolved. Train features data loss patterning.",
    "styleSuggestions": ["Wear for dramatic evening occasions", "Pair with solid color accessories", "Style with ethereal makeup"],
    "materialExplorer": ["Dissipation gradient silk", "Memory loss pattern printing", "Digital particle embroidery"]
  },
  {
    "id": "distortion17",
    "name": "The Race Condition Blazer",
    "price": "$24000",
    "description": "A blazer that appears to be in multiple states simultaneously, with competing patterns and constructions that never resolve, creating perpetual digital conflict.",
    "images": [
      "images/DST RACE CONDITION BLAZER.png",
      "images/DST RACE CONDITION BLAZER.png",
      "images/DST RACE CONDITION BLAZER.png",
      "images/DST RACE CONDITION BLAZER.png",
      "images/DST RACE CONDITION BLAZER.png",
      "images/DST RACE CONDITION BLAZER.png"
    ],
    "sizePredictor": "30-inch length with competing shoulder constructions. Sleeves feature state conflict patterning. Back panel shows resolution failure.",
    "styleSuggestions": ["Wear with simple pieces to highlight blazer complexity", "Pair with time-based accessories", "Style for intellectual fashion events"],
    "materialExplorer": ["State conflict wool blend", "Competing pattern jacquard", "Resolution failure seam detailing"]
  },
  {
    "id": "distortion18",
    "name": "The Null Pointer",
    "price": "$20,000",
    "description": "A dress that embodies the null pointer exception, with elements that point to nothingness and references that lead to empty space in the design.",
    "images": [
      "images/DST NULL POINTER DRESS.png",
      "images/DST NULL POINTER DRESS.png",
      "images/DST NULL POINTER DRESS.png",
      "images/DST NULL POINTER DRESS.png",
      "images/DST NULL POINTER DRESS.png",
      "images/DST NULL POINTER DRESS.png"
    ],
    "sizePredictor": "Knee-length 35-inch with void sections. Shoulder straps feature reference errors. Hem shows address failure patterning.",
    "styleSuggestions": ["Wear with contrasting underlayers", "Pair with void-themed accessories", "Style for conceptual fashion presentations"],
    "materialExplorer": ["Reference error silk", "Null pointer pattern printing", "Void section construction"]
  },
  {
    "id": "distortion19",
    "name": "The Digital Supernova",
    "price": "$22,000",
    "description": "A piece that captures the moment of digital supernova - both creation and destruction simultaneously, with explosive patterns radiating from a central core.",
    "images": [
      "images/DST DIGITAL SUPERNOVA.png",
      "images/DST DIGITAL SUPERNOVA.png",
      "images/DST DIGITAL SUPERNOVA.png",
      "images/DST DIGITAL SUPERNOVA.png",
      "images/DST DIGITAL SUPERNOVA.png",
      "images/DST DIGITAL SUPERNOVA.png"
    ],
    "sizePredictor": "Asymmetric silhouette with 48-inch maximum length. Radiation patterns extend 18 inches from central core. Multiple wearing configurations.",
    "styleSuggestions": ["Wear as ultimate statement piece", "Pair with cosmic accessories", "Style for high-concept fashion events"],
    "materialExplorer": ["Explosive pattern silk organza", "Radiation gradient printing", "Core collapse structural elements"]
  },
  {
    "id": "distortion20",
    "name": "The Trojan Horse ",
    "price": "$20,000",
    "description": "A gown that appears elegant from outside but contains hidden digital malware patterns within, revealing its true destructive nature through strategic openings.",
    "images": [
      "images/DST TROJAN HORSE.png",
      "images/DST TROJAN HORSE.png",
      "images/DST TROJAN HORSE.png",
      "images/DST TROJAN HORSE.png",
      "images/DST TROJAN HORSE.png",
      "images/DST TROJAN HORSE.png"
    ],
    "sizePredictor": "Floor-length 62-inch with hidden interior patterns. Outer layer pristine, inner layers corrupted. 24-inch train with malware reveal.",
    "styleSuggestions": ["Wear to create dramatic revelation moments", "Pair with dual-nature accessories", "Style for performances with transformation elements"],
    "materialExplorer": ["Deceptive outer silk", "Malware pattern inner lining", "Reveal mechanism construction"]
  },
  {
    "id": "distortion21",
    "name": "The Hard SUIT",
    "price": "$25,000",
    "description": "A suit that captures the moment of system reboot, with patterns that suggest sudden termination and fresh initialization simultaneously.",
    "images": [
      "images/DST HARD REBOOT.png",
      "images/DST HARD REBOOT.png",
      "images/DST HARD REBOOT.png",
      "images/DST HARD REBOOT.png",
      "images/DST HARD REBOOT.png",
      "images/DST HARD REBOOT.png"
    ],
    "sizePredictor": "Jacket 31-inch length with termination patterns. Trousers 32-inch inseam with initialization pleating. Shoulders feature boot sequence detailing.",
    "styleSuggestions": ["Wear for tech industry events", "Pair with startup-themed accessories", "Style with clean, modern footwear"],
    "materialExplorer": ["Reboot sequence wool", "Termination-initiation printing", "Boot loader hardware details"]
  },
  {
    "id": "distortion22",
    "name": "The Patchwork Frankenstein",
    "price": "$22,000",
    "description": "A garment assembled from mismatched digital fragments that were never meant to work together, creating a beautiful monster of incompatible systems.",
    "images": [
      "images/DST PATCHWORK FRANKESTINE.png",
      "images/DST PATCHWORK FRANKESTINE.png",
      "images/DST PATCHWORK FRANKESTINE.png",
      "images/DST PATCHWORK FRANKESTINE.png",
      "images/DST PATCHWORK FRANKESTINE.png",
      "images/DST PATCHWORK FRANKESTINE.png"
    ],
    "sizePredictor": "Asymmetric silhouette with 42-inch maximum length. 28 incompatible fabric patches. Sleeves feature system conflict detailing.",
    "styleSuggestions": ["Wear as celebration of digital imperfection", "Pair with other patchwork items", "Style for avant-garde fashion shows"],
    "materialExplorer": ["Incompatible system fabrics", "Digital patchwork construction", "System conflict seam work"]
  },
  {
    "id": "distortion23",
    "name": "The Infinite Loop Cape",
    "price": "$20,000",
    "description": "A cape that visually represents an infinite loop, with patterns that cycle endlessly without resolution, creating mesmerizing recursive visual effects.",
    "images": [
      "images/DST INFINITE LOOP CAPE.png",
      "images/DST INFINITE LOOP CAPE.png",
      "images/DST INFINITE LOOP CAPE.png",
      "images/DST INFINITE LOOP CAPE.png",
      "images/DST INFINITE LOOP CAPE.png",
      "images/DST INFINITE LOOP CAPE.png"
    ],
    "sizePredictor": "48-inch length with recursive pattern scaling. 60-inch circumference with endless loop detailing. Weight 2.8 lbs with balanced drape.",
    "styleSuggestions": ["Wear as dramatic outer layer", "Pair with time-based accessories", "Style for events where movement creates pattern effects"],
    "materialExplorer": ["Recursive pattern wool", "Loop construction tailoring", "Infinite sequence embroidery"]
  },
  {
    "id": "distortion24",
    "name": "The Core Dump Sculpture",
    "price": "$22,000",
    "description": "A wearable sculpture that embodies a system core dump, with all internal data exposed and fragmented in a beautiful catastrophe of information.",
    "images": [
      "images/DST CORE DUMP SCULPTURE.png",
      "images/DST CORE DUMP SCULPTURE.png",
      "images/DST CORE DUMP SCULPTURE.png",
      "images/DST CORE DUMP SCULPTURE.png",
      "images/DST CORE DUMP SCULPTURE.png",
      "images/DST CORE DUMP SCULPTURE.png"
    ],
    "sizePredictor": "Complex silhouette extending 24 inches from body. Multiple components with data fragmentation. Requires assistance to wear properly.",
    "styleSuggestions": ["Wear as art piece for special occasions", "Pair with simple undergarments", "Style for high-fashion presentations"],
    "materialExplorer": ["Data fragment resins", "Memory core metals", "System failure textiles"]
  },
  {
    "id": "distortion25",
    "name": "The Encryption Veil",
    "price": "$18,000",
    "description": "A veil printed with encryption algorithms that obscure and reveal the wearer simultaneously, creating patterns of comprehension and mystery.",
    "images": [
      "images/DST ENCRYPTION VEIL.png",
      "images/DST ENCRYPTION VEIL.png",
      "images/DST ENCRYPTION VEIL.png",
      "images/DST ENCRYPTION VEIL.png",
      "images/DST ENCRYPTION VEIL.png",
      "images/DST ENCRYPTION VEIL.png"
    ],
    "sizePredictor": "54-inch length with cryptographic patterning. 90-inch circumference with key-based opacity variation. Headpiece features algorithm detailing.",
    "styleSuggestions": ["Wear for mysterious evening events", "Pair with code-based jewelry", "Style with outfits that play with revelation"],
    "materialExplorer": ["Cryptographic print chiffon", "Key-based opacity fabric", "Algorithm pattern embroidery"]
  },
  {
    "id": "distortion26",
    "name": "The Segmentation Fault",
    "price": "$20,000",
    "description": "A garment that represents the ultimate segmentation fault - where systems completely break down and memory spaces collide in beautiful digital chaos.",
    "images": [
      "images/DST FINAL SEGMENTATION.png",
      "images/DST FINAL SEGMENTATION.png",
      "images/DST FINAL SEGMENTATION.png",
      "images/DST FINAL SEGMENTATION.png",
      "images/DST FINAL SEGMENTATION.png",
      "images/DST FINAL SEGMENTATION.png"
    ],
    "sizePredictor": "Asymmetric construction with memory collision points. 38-inch length with fault line detailing. Shoulders feature address space violations.",
    "styleSuggestions": ["Wear as ultimate distortion statement", "Pair with system failure accessories", "Style for apocalyptic fashion themes"],
    "materialExplorer": ["Memory collision fabrics", "Segmentation fault printing", "Address violation construction"]
  },
  {
    "id": "distortion27",
    "name": "The .ZIP Bomb Bag",
    "price": "$22,000",
    "description": "A deceptively small bag that contains impossible internal capacity through digital compression principles, appearing simple outside while containing infinite space within.",
    "images": [
      "images/DST ZIP BOMB BAG.png",
      "images/DST ZIP BOMB BAG.png",
      "images/DST ZIP BOMB BAG.png",
      "images/DST ZIP BOMB BAG.png",
      "images/DST ZIP BOMB BAG.png",
      "images/DST ZIP BOMB BAG.png"
    ],
    "sizePredictor": "External dimensions 8x6x3 inches, internal capacity expands to 40L. Compression pattern exterior with infinite space interior. Shoulder strap with data compression detailing.",
    "styleSuggestions": ["Carry as statement functional accessory", "Pair with tech-inspired outfits", "Use for events where you need more than expected"],
    "materialExplorer": ["Compression pattern leather", "Infinite space interior lining", "Data stream hardware"]
  },
  {
    "id": "distortion28",
    "name": "Un-Rende",
    "price": "$20,050",
    "description": "A garment caught in a perpetual state of failed rendering, appearing as a collection of low-polygon meshes, glitched textures, and missing assets on a physical form.",
    "images": [
      "images/DST UNRENDERED.png",
      "images/DST UNRENDERED.png",
      "images/DST UNRENDERED.png",
      "images/DST UNRENDERED.png",
      "images/DST UNRENDERED.png",
      "images/DST UNRENDERED.png"
    ],
    "sizePredictor": "Jacket features 29-inch length with visible wireframe structure. Trousers have a 33-inch inseam with corrupted vertex data. Shoulders display noticeable clipping through the collar.",
    "styleSuggestions": ["Ideal for digital art gallery openings", "Pair with solid-color basics to emphasize the glitch", "Wear with accessories that look like UI elements"],
    "materialExplorer": ["Corrupted asset wool blend", "Low-polygon mesh twill", "UV mapping error silk lining"]
  }

 ];
 window.distortionProducts = distortionProducts;
 const eclipseProducts = [
  {
    "id": "eclipse1",
    "name": "The Time-Fold Blazer",
    "price": "$14,000",
    "description": "A blazer that appears to exist in multiple temporal states simultaneously, with fabric that folds through different moments in time while maintaining structural integrity across temporal planes.",
    "images": [
      "images/ECL TIME FOLD BLAZER PAST.png",
      "images/ECL TIME FOLD BLAZER PRESENT.png",
      "images/ECL TIME FOLD BLAZER FUTURE.png"
    ],
    "dimensional-fit-predictor": "Shoulder span fluctuates between 18-22 inches temporally. Length maintains 31-inch constant across time streams. Sleeves exhibit 2-inch temporal variance in cuff positioning.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$14,000",
        "title": "QUANTUM FRACTURE BLAZER",
        "description": "Vintage edition with historical craftsmanship",
        "pairings": ["Pair with vintage accessories for era authenticity", "Wear with historical-inspired pieces", "Style with antique jewelry"],
        "image": "images/ECL TIME FOLD BLAZER PAST.png"
      },
      {
        "era": "present",
        "price": "$14,000",
        "title": "PRESENT",
        "description": "Current timeline edition with quantum threading",
        "pairings": ["Combine with contemporary minimalism", "Wear with modern tech accessories", "Style with current fashion trends"],
        "image": "images/ECL TIME FOLD BLAZER PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "SINGULARITY WEAVE BLAZER",
        "description": "3024 edition with self-repairing nano-fibers",
        "pairings": ["Pair with futuristic elements", "Wear with advanced tech integration", "Style with forward-thinking designs"],
        "image": "images/ECL TIME FOLD BLAZER FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Quantum-stitched wool existing in multiple time states", "Temporal fold-resistant interfacing", "Chronal stability seams maintain form across timelines"]
  },
  {
    "id": "eclipse2",
    "name": "The Entropy Gown",
    "price": "$22,000",
    "description": "A gown that captures the beautiful decay of entropy, with fabric that appears to be slowly dissolving from ordered perfection into chaotic elegance over the course of wear.",
    "images": [
      "images/ECL ENTROPY GOWN PAST.png",
      "images/ECL ENTROPY GOWN PRESENT.png",
      "images/ECL ENTROPY GOWN FUTURE.png"
    ],
    "dimensional-fit-predictor": "62-inch length with progressive disintegration gradient. Shoulders fully structured, hem exhibiting maximum entropy. Train features thermal decay patterning.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$16,000",
        "title": "PRIMORDIAL GOWN",
        "description": "Vintage edition with historical craftsmanship",
        "pairings": ["Wear with classical drapery", "Pair with historical textile reproductions", "Style with era-appropriate accessories"],
        "image": "images/ECL ENTROPY GOWN PAST.png"
      },
      {
        "era": "present",
        "price": "$22,000",
        "title": "ENTROPY GOWN",
        "description": "Current timeline edition with quantum threading",
        "pairings": ["Combine with modern structural pieces", "Wear with contemporary art jewelry", "Style with current aesthetic sensibilities"],
        "image": "ECL ENTROPY GOWN PRESENT.png"
      },
      {
        "era": "future",
        "price": "$24,000",
        "title": "UNIVERSAL HEAT GOWN",
        "description": "3024 edition with self-repairing nano-fibers",
        "pairings": ["Pair with bio-tech accessories", "Wear with smart fabric integrations", "Style with post-human aesthetics"],
        "image": "images/ECL ENTROPY GOWN FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Heat-death silk with progressive transparency", "Entropic pattern weaving reveals underlying chaos", "Molecular bond simulation in thread structure"]
  },
  {
    "id": "eclipse3",
    "name": "The Singularity Harness",
    "price": "$23,000",
    "description": "A harness that represents the point of infinite density, where all timelines converge into a single moment of perfect tension and gravitational intensity.",
    "images": [
      "images/ECL SINGULARITY HARNESS PAST.png",
      "images/ECL SINGULARITY HARNESS PRESENT.png",
      "images/ECL SINGULARITY HARNESS FUTURE.png"
    ],
    "dimensional-fit-predictor": "Central singularity point creates 6-inch gravitational distortion field. Straps exhibit time dilation effects. Adjustable from XS to L with event horizon expansion.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$18,000",
        "title": "PRIMORDIAL CORE",
        "description": "Ancient edition with primal energy containment",
        "pairings": ["Layer over tribal-inspired garments", "Pair with primitive tool accessories", "Wear with earth-toned makeup"],
        "image":"images/ECL SINGULARITY HARNESS PAST.png"
      },
      {
        "era": "present",
        "price": "$23,000",
        "title": "QUANTUM NEXUS",
        "description": "Current edition with particle entanglement technology",
        "pairings": ["Wear over tech-fabric bodysuits", "Pair with quantum computing accessories", "Style with geometric body art"],
        "image": "images/ECL SINGULARITY HARNESS PRESENT.png"
      },
      {
        "era": "future",
        "price": "$25,000",
        "title": "GRAVITATIONAL ANCHOR",
        "description": "Future edition with artificial singularity core",
        "pairings": ["Layer over light-bending fabrics", "Pair with anti-gravity accessories", "Wear with holographic skin applications"],
        "image": "images/ECL SINGULARITY HARNESS FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Gravitational distortion leather", "Infinite density core hardware", "Time-dilation resistant stitching"]
  },
  {
    "id": "eclipse4",
    "name": "The Chronal Cascade",
    "price": "$28,000",
    "description": "A dress where time appears to flow downward in visible streams, with chronological layers cascading from shoulders to hem in rhythmic temporal waves.",
    "images": [
      "images/ECL CHRONAL CASCADE PAST.png",
      "images/ECL CHRONAL CASCADE PRESENT.png",
      "images/ECL CHRONAL CASCADE FUTURE.png"
    ],
    "dimensional-fit-predictor": "38-inch length with 12 distinct temporal layers. Cascade patterns flow at 45-degree angles. Hem exhibits time-stream convergence points.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$20,000",
        "title": "RIVER OF TIME",
        "description": "Historical edition with waterfall-inspired construction",
        "pairings": ["Wear with flowing historical silhouettes", "Pair with river stone jewelry", "Style with natural wave hairstyles"],
        "image": "images/ECL CHRONAL CASCADE PAST.png"
      },
      {
        "era": "present",
        "price": "$28,000",
        "title": "TEMPORAL FLOW",
        "description": "Current edition with digital cascade simulation",
        "pairings": ["Combine with liquid metal accessories", "Wear with motion-capture inspired pieces", "Style with dynamic hair movement"],
        "image": "images/ECL CHRONAL CASCADE PRESENT.png"
      },
      {
        "era": "future",
        "price": "$29,700",
        "title": "QUANTUM CASCADE",
        "description": "Future edition with probability wave manifestation",
        "pairings": ["Pair with phase-shifting accessories", "Wear with multi-dimensional jewelry", "Style with light-trail makeup effects"],
        "image": "images/ECL CHRONAL CASCADE FUTURE.png"
      },
    ],
    "temporal-material-scanner": ["Layered chronal silk with variable opacity", "Time-stream pattern embroidery", "Temporal convergence points in seam construction"]
  },
  {
    "id": "eclipse5",
    "name": "The Solar Flare Corset",
    "price": "$19,000",
    "description": "A corset that captures the explosive energy of solar flares, with radiant patterns that appear to emit light and heat while containing stellar pressures.",
    "images": [
      "images/ECL SOLAR FLARE CORSET PAST.png",
      "images/ECL SOLAR FLARE CORSET PRESENT.png",
      "images/ECL SOLAR FLARE CORSET FUTURE.png"
    ],
    "dimensional-fit-predictor": "14-inch height with coronal mass ejection extensions. Waist reduction from 30-24 inches mimics stellar compression. Radiant patterns extend 8 inches beyond form.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$15,000",
        "title": "SUN GODDESS",
        "description": "Ancient edition with solar deity symbolism",
        "pairings": ["Wear with gold leaf accessories", "Pair with sun motif jewelry", "Style with radiant crown pieces"],
        "image": "images/ECL SOLAR FLARE CORSET PAST.png"
      },
      {
        "era": "present",
        "price": "$19,000",
        "title": "STELLAR FUSION",
        "description": "Current edition with plasma containment technology",
        "pairings": ["Combine with LED illumination pieces", "Wear with thermal-reactive accessories", "Style with glow-in-the-dark elements"],
        "image": "images/ECL SOLAR FLARE CORSET PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "NOVA CONTAINMENT",
        "description": "Future edition with artificial star core",
        "pairings": ["Pair with photon emission jewelry", "Wear with heat-distribution systems", "Style with light-absorption makeup"],
        "image": "images/ECL SOLAR FLARE CORSET FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Plasma-effect leather with thermal patterning", "Stellar pressure boning system", "Coronal light emission surface treatment"]
  },
  {
    "id": "eclipse6",
    "name": "The Paradox Trousers",
    "price": "$14,000",
    "description": "Trousers that embody temporal paradox, with construction that appears to both create and resolve itself simultaneously, challenging linear perception of cause and effect.",
    "images": [
      "images/ECL PARADOX TROUSERS PAST.png",
      "images/ECL PARADOX TROUSERS PRESENT.png",
      "images/ECL PARADOX TROUSERS FUTURE.png"
    ],
    "dimensional-fit-predictor": "32-inch inseam with causal loop pleating. Waist exhibits grandfather paradox resolution. Leg openings feature bootstrap paradox detailing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$10,000",
        "title": "PHILOSOPHER'S LEGS",
        "description": "Historical edition with logical paradox weaving",
        "pairings": ["Pair with scholarly robes", "Wear with ancient text pattern tops", "Style with wisdom-themed accessories"],
        "image": "images/PARADOX_TROUSERS_PAST.png"
      },
      {
        "era": "present",
        "price": "$14000",
        "title": "QUANTUM TROUSERS",
        "description": "Current edition with superposition construction",
        "pairings": ["Combine with deconstructed blazers", "Wear with multi-state accessories", "Style with optical illusion tops"],
        "image": "images/ECL PARADOX TROUSERS PRESENT.png"
      },
      {
        "era": "future",
        "price": "$16000",
        "title": "TEMPORAL ANOMALY",
        "description": "Future edition with causality violation technology",
        "pairings": ["Pair with time-displacement tops", "Wear with paradox-resistant footwear", "Style with multi-dimensional headpieces"],
        "image": "images/PARADOX_TROUSERS_FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Causal loop wool blend", "Paradox-resistant seam construction", "Temporal anomaly pattern weaving"]
  },
  {
    "id": "eclipse7",
    "name": "The Temporal Echo",
    "price": "$17,000",
    "description": "A coat that generates visible temporal echoes with each movement, creating afterimages that linger in spacetime like ripples in a chronological pond.",
    "images": [
      "images/ECL TEMPORAL COAT PAST.png",
      "images/ECL TEMPORAL COAT PRESENT.png",
      "images/ECL TEMPORAL COAT FUTURE.png"
    ],
    "dimensional-fit-predictor": "44-inch length with echo extension adding 12-inch temporal footprint. Shoulders create 6-inch echo radius. Sleeves exhibit delayed motion patterning.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$15,000",
        "title": "ANCESTRAL WHISPER",
        "description": "Historical edition with generational memory weaving",
        "pairings": ["Wear with heirloom jewelry", "Pair with traditional pattern underlayers", "Style with vintage-inspired hairstyles"],
        "image": "images/ECL TEMPORAL COAT PAST.png"
      },
      {
        "era": "present",
        "price": "$17,000",
        "title": "ECHO CHAMBER",
        "description": "Current edition with sound-wave visualization",
        "pairings": ["Combine with audio-reactive accessories", "Wear with digital pattern pieces", "Style with motion-capture inspired elements"],
        "image": "images/ECL TEMPORAL COAT PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "CHRONAL RESONANCE",
        "description": "Future edition with timeline interference technology",
        "pairings": ["Pair with holographic undergarments", "Wear with phase-shifting accessories", "Style with temporal distortion makeup"],
        "image": "images/ECL TEMPORAL COAT FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Echo-generating wool cashmere", "Chronal ripple surface treatment", "Delayed response lining material"]
  },
  {
    "id": "eclipse8",
    "name": "The Ignition Point Bodysuit",
    "price": "$12,000",
    "description": "A bodysuit that represents the precise moment of cosmic ignition, with patterns radiating from multiple epicenters of creation energy across the form.",
    "images": [
      "images/ECL IGNITION POINT BODYSUIT PAST - Copy.png",
      "images/ECL IGNITION POINT  BODYSUIT PRESENT.png",
      "images/ECL IGNITION POINT BOYSUIT FUTURE - Copy.png"
    ],
    "dimensional-fit-predictor": "Full coverage with 7 ignition points mapping cosmic creation. Sizes XS-XL with stellar birth patterning. Back features big bang radiation detailing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$10,000",
        "title": "PRIMAL SPARK",
        "description": "Ancient edition with fire-starting symbolism",
        "pairings": ["Layer under animal skin prints", "Wear with primitive tool accessories", "Style with earth pigment body paint"],
        "image": "images/ECL IGNITION POINT BODYSUIT PAST - Copy.png"
      },
      {
        "era": "present",
        "price": "$1,250",
        "title": "BIG BANG THEORY",
        "description": "Current edition with cosmic microwave background mapping",
        "pairings": ["Combine with galaxy print layers", "Wear with scientific instrument accessories", "Style with cosmic theme makeup"],
        "image": "images/ECL IGNITION POINT  BODYSUIT PRESENT.pn"
      },
      {
        "era": "future",
        "price": "$15,000",
        "title": "UNIVERSE CREATOR",
        "description": "Future edition with pocket dimension technology",
        "pairings": ["Pair with light-emitting accessories", "Wear with space-time fabric overlays", "Style with star-field projection effects"],
        "image": "images/ECL IGNITION POINT BOYSUIT FUTURE - Copy.png"
      }
    ],
    "temporal-material-scanner": ["Fusion-reactive technical fabric", "Ignition point radiation printing", "Cosmic birth pattern embroidery"]
  },
  {
    "id": "eclipse9",
    "name": "The Event Horizon",
    "price": "$14,000",
    "description": "A skirt that visualizes the event horizon boundary, where light and time appear to bend and stretch before crossing into the unknown beyond.",
    "images": [
      "images/ECL EVENT HORIZON SKIRT PAST.png",
      "images/ECL EVENT HORIZON SKIRT PRESENT.png",
      "images/ECL EVENT HORIZON SKIRT FUTURE - Copy.png"
    ],
    "dimensional-fit-predictor": "Midi length 35 inches with gravitational lensing effect. Hem exhibits light-bending properties. Waist 26-32 inches with spacetime curvature.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$12,000",
        "title": "ABYSS BORDER",
        "description": "Historical edition with mythological boundary symbolism",
        "pairings": ["Pair with underworld-themed tops", "Wear with ancient map pattern accessories", "Style with mysterious veil elements"],
        "image": "images/ECL EVENT HORIZON SKIRT PAST.png"
      },
      {
        "era": "present",
        "price": "$14,000",
        "title": "GRAVITY WELL",
        "description": "Current edition with relativistic physics visualization",
        "pairings": ["Combine with optical illusion tops", "Wear with scientific diagram prints", "Style with light-distortion accessories"],
        "image": "images/ECL EVENT HORIZON SKIRT PRESENT.png"
      },
      {
        "era": "future",
        "price": "$15,500",
        "title": "WORMHOLE PORTAL",
        "description": "Future edition with spatial gateway technology",
        "pairings": ["Pair with multi-dimensional tops", "Wear with portal-effect accessories", "Style with quantum entanglement jewelry"],
        "image": "images/ECL EVENT HORIZON SKIRT FUTURE - Copy.png"
      }
    ],
    "temporal-material-scanner": ["Light-bending silk twill", "Gravitational lensing pleats", "Spacetime distortion hem construction"]
  },
  {
    "id": "eclipse10",
    "name": "The Fossilized Flame",
    "price": "$18,000",
    "description": "A dress where fire appears to have been frozen in time, capturing the dynamic motion of flames in permanent crystalline form while maintaining their burning essence.",
    "images": [
      "images/ECL FOSSILIZED FLAME DRESS PAST.png",
      "images/ECL FOSSILIZED FLAME DRESS PRESENT - Copy.png",
      "images/ECL FOSSILIZED FLAME DRESS FUTURE - Copy.png"
    ],
    "dimensional-fit-predictor": "Knee-length 38 inches with flame crystallization gradient. Shoulder flames most dynamic, hem most fossilized. Sleeves feature ember preservation detailing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$15,000",
        "title": "ANCIENT FIRE",
        "description": "Historical edition with prehistoric amber preservation",
        "pairings": ["Wear with cave painting prints", "Pair with fossil jewelry", "Style with primitive fire motifs"],
        "image": "images/ECL FOSSILIZED FLAME DRESS PAST.png"
      },
      {
        "era": "present",
        "price": "$18000",
        "title": "CRYSTALIZED ENERGY",
        "description": "Current edition with suspended animation technology",
        "pairings": ["Combine with geometric crystal accessories", "Wear with molecular structure prints", "Style with frozen motion hairstyles"],
        "image": "images/ECL FOSSILIZED FLAME DRESS PRESENT - Copy.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "TIMELESS COMBUSTION",
        "description": "Future edition with perpetual energy capture",
        "pairings": ["Pair with light-capture accessories", "Wear with energy field visualization pieces", "Style with suspended particle effects"],
        "image": "images/ECL FOSSILIZED FLAME DRESS FUTURE - Copy.png"
      }
    ],
    "temporal-material-scanner": ["Crystallized fire silk organza", "Time-suspended flame embroidery", "Mineralized ember beading"]
  },
  {
    "id": "eclipse11",
    "name": "The Time-Lag Jumpsuit",
    "price": "$20,000",
    "description": "A jumpsuit where different sections exist in slightly different time streams, creating visible delays and anticipations in the garment's response to movement.",
    "images": [
      "images/ECL TIME LAG JUMPSUIT PAST.png",
      "images/ECL TIME LAG JUMPSUIT PRESENT.png",
      "images/ECL TIME LAG JUMPSUIT FUTURE.png"
    ],
    "dimensional-fit-predictor": "Full-length with 8 time-stream sections. Legs exhibit 0.5-2 second movement delays. Torso maintains temporal stability for core function.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$20,000",
        "title": "DELAYED REACTION",
        "description": "Historical edition with mechanical clockwork delay",
        "pairings": ["Wear with vintage watch accessories", "Pair with pendulum jewelry", "Style with slow-motion inspired hair"],
        "image": "images/ECL TIME LAG JUMPSUIT PAST.png"
      },
      {
        "era": "present",
        "price": "$20,000",
        "title": "BUFFER ZONE",
        "description": "Current edition with digital processing delay simulation",
        "pairings": ["Combine with glitch-art accessories", "Wear with data stream prints", "Style with motion blur makeup"],
        "image": "images/ECL TIME LAG JUMPSUIT PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "TEMPORAL DESYNCH",
        "description": "Future edition with timeline manipulation technology",
        "pairings": ["Pair with phase-shifting footwear", "Wear with multi-temporal accessories", "Style with delayed reaction visual effects"],
        "image": "images/ECL TIME LAG JUMPSUIT FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Multi-stream technical fabric", "Temporal delay construction", "Chronal synchronization seams"]
  },
  {
    "id": "eclipse12",
    "name": "The Causal-Loop Neckpiece",
    "price": "$25,000",
    "description": "A neckpiece that forms an impossible causal loop, where the end influences the beginning in endless temporal recursion, creating beautiful chronological paradox.",
    "images": [
      "images/ECL CASUAL NECKPIECE PAST.png",
      "images/ECL CASUAL NECPIECE PRESENT.png",
      "images/ECL CASUAL NECKPIECE FUTURE.png"
    ],
    "dimensional-fit-predictor": "14-inch diameter loop with 6-inch temporal recursion depth. Weight 1.8 lbs with balanced chronological distribution. Adjustable closure hidden in paradox.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$20,000",
        "title": "OUROBOROS CIRCLE",
        "description": "Ancient edition with mythological serpent symbolism",
        "pairings": ["Wear with historical robe silhouettes", "Pair with ancient symbol jewelry", "Style with classical updo hairstyles"],
        "image": "images/ECL CASUAL NECKPIECE PAST.png"
      },
      {
        "era": "present",
        "price": "$25,000",
        "title": "INFINITY LOOP",
        "description": "Current edition with mathematical perfection",
        "pairings": ["Combine with modern minimalist outfits", "Wear with geometric accessories", "Style with clean contemporary lines"],
        "image": "images/ECL CASUAL NECPIECE PRESENT.png"
      },
      {
        "era": "future",
        "price": "$30,000",
        "title": "PARADOX ENGINE",
        "description": "Future edition with causality violation core",
        "pairings": ["Pair with bio-mechanical outfits", "Wear with quantum computing accessories", "Style with impossible geometry makeup"],
        "image": "images/ECL CASUAL NECKPIECE FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Loop-stabilized metals", "Causal recursion hardware", "Temporal paradox resin elements"]
  },
  {
    "id": "eclipse13",
    "name": "The Supernova Shroud",
    "price": "$14,000",
    "description": "A shroud that captures the moment of stellar death and rebirth, with patterns of cosmic explosion radiating outward while new elements form in the aftermath.",
    "images": [
      "images/ECL SUPERNOVA SHROUD PAST.png",
      "images/ECL SUPERNOVA SHROUD PRESENT.png",
      "images/ECL SUPERNOVA SHROUD FUTURE.png"
    ],
    "dimensional-fit-predictor": "84-inch circumference with 48-inch length. Explosion patterns extend 24 inches from central collapse point. Multiple wearing configurations possible.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$12,000",
        "title": "COSMIC DEATH",
        "description": "Historical edition with mythological apocalypse themes",
        "pairings": ["Wear with ritualistic undergarments", "Pair with celestial mythology accessories", "Style with prophetic headpieces"],
        "image": "images/ECL SUPERNOVA SHROUD PAST.png"
      },
      {
        "era": "present",
        "price": "$14,000",
        "title": "STELLAR EXPLOSION",
        "description": "Current edition with astronomical event mapping",
        "pairings": ["Combine with galaxy print layers", "Wear with telescope-inspired accessories", "Style with cosmic dust makeup"],
        "image": "images/ECL SUPERNOVA SHROUD PRESENT.png"
      },
      {
        "era": "future",
        "price": "$15,000",
        "title": "UNIVERSE REBIRTH",
        "description": "Future edition with star creation simulation",
        "pairings": ["Pair with light-generation systems", "Wear with elemental formation jewelry", "Style with nebula projection effects"],
        "image": "images/ECL SUPERNOVA SHROUD FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Stellar death silk chiffon", "Element formation embroidery", "Cosmic dust beading throughout"]
  },
  {
    "id": "eclipse14",
    "name": "The Rewind Weaver Tunic",
    "price": "$14,000",
    "description": "A tunic that appears to be weaving itself backward in time, with threads that trace their origin to future states and seams that precede their own construction.",
    "images": [
      "images/ECL TUNIC WEAVE PAST.png",
      "images/ECL TUNIC WEAVE PRESENT.png",
      "images/ECL TUNIC WEAVE FUTURE.png"
    ],
    "dimensional-fit-predictor": "32-inch length with reverse construction seams. Sleeves exhibit temporal inversion patterning. Hem features pre-emptive wear detailing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$12,000",
        "title": "REVERSE CREATION",
        "description": "Historical edition with backward mythology weaving",
        "pairings": ["Wear with deconstructed historical pieces", "Pair with inverted symbol jewelry", "Style with reverse chronology hairstyles"],
        "image": "images/ECL TUNIC WEAVE PAST.png"
      },
      {
        "era": "present",
        "price": "$14,000",
        "title": "TIME REVERSAL",
        "description": "Current edition with digital reverse engineering",
        "pairings": ["Combine with glitch-effect bottoms", "Wear with backward text prints", "Style with inverted makeup applications"],
        "image": "images/ECL TUNIC WEAVE PRESENT.png"
      },
      {
        "era": "future",
        "price": "$17,000",
        "title": "CAUSAL INVERTER",
        "description": "Future edition with effect-before-cause technology",
        "pairings": ["Pair with pre-aged accessories", "Wear with future-past fusion pieces", "Style with temporal contradiction visuals"],
        "image": "images/ECL TUNIC WEAVE FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Reverse-woven linen cotton", "Temporal inversion stitching", "Pre-causal pattern printing"]
  },
  {
    "id": "eclipse15",
    "name": "The Ashen Phoenix Coat",
    "price": "$15,000",
    "description": "A coat that exists simultaneously in states of destruction and rebirth, with ashen patterns giving way to vibrant renewal in endless cycles of transformation.",
    "images": [
      "images/ECL ASHEN COAT PAST.png",
      "images/ECL ASHEN COAT PRESENT.png",
      "images/ECL ASHEN COAT FUTURE.png"
    ],
    "dimensional-fit-predictor": "46-inch length with rebirth gradient. Shoulders in ash state, hem in renewal phase. Sleeves feature transformation cycle patterning.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$12,000",
        "title": "MYTHICAL REBIRTH",
        "description": "Historical edition with ancient phoenix mythology",
        "pairings": ["Wear with mythological creature prints", "Pair with firebird jewelry", "Style with legendary creature motifs"],
        "image": "images/ECL ASHEN COAT PAST.png"
      },
      {
        "era": "present",
        "price": "$15,000",
        "title": "CYCLE OF RENEWAL",
        "description": "Current edition with ecological regeneration themes",
        "pairings": ["Combine with sustainable fashion pieces", "Wear with natural element accessories", "Style with organic transformation themes"],
        "image": "images/ECL ASHEN COAT PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "PERPETUAL RENEWAL",
        "description": "Future edition with self-regeneration technology",
        "pairings": ["Pair with bio-regenerative accessories", "Wear with cellular growth patterns", "Style with transformation sequence visuals"],
        "image": "images/ECL ASHEN COAT FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Cyclical transformation wool", "Ash-to-renewal gradient dye", "Phoenix feather inspired texturing"]
  },
  {
    "id": "eclipse16",
    "name": "The Spacetime Drape",
    "price": "$18,000",
    "description": "A drape that manipulates perceptions of space and time, creating optical illusions of depth and duration while flowing through multiple dimensional planes.",
    "images": [
      "images/ECL SPACETIME DRAPE PAST.png",
      "images/ECL SPACETIME DRAPE PRESENT.png",
      "images/ecl spacetime drape future.png"
    ],
    "dimensional-fit-predictor": "72-inch length with variable spacetime curvature. Drapes create 18-inch dimensional depth illusion. Multiple attachment points for different era expressions.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$15,000",
        "title": "ANCIENT VEIL",
        "description": "Historical edition with temple drapery techniques",
        "pairings": ["Wear with classical sculpture-inspired pieces", "Pair with historical architectural motifs", "Style with ancient civilization hairstyles"],
        "image": "images/ECL SPACETIME DRAPE PAST.png"
      },
      {
        "era": "present",
        "price": "$18,000",
        "title": "QUANTUM CLOAK",
        "description": "Current edition with optical physics applications",
        "pairings": ["Combine with modern architectural shapes", "Wear with light-manipulation accessories", "Style with perspective-bending elements"],
        "image": "images/ECL SPACETIME DRAPE PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "DIMENSIONAL SHIFT",
        "description": "Future edition with spatial manipulation technology",
        "pairings": ["Pair with multi-reality accessories", "Wear with phase-transition pieces", "Style with impossible geometry visuals"],
        "image": "images/ecl spacetime drape future.png"
      }
    ],
    "temporal-material-scanner": ["Multidimensional silk georgette", "Spacetime distortion pleating", "Era-blending construction techniques"]
  },
  {
    "id": "eclipse17",
    "name": "The Dilation Suit",
    "price": "$22,000",
    "description": "A suit that experiences relativistic time dilation, with different sections aging at different rates based on their position and movement relative to observers.",
    "images": [
      "images/ECL DILATION SUIT PAST.png",
      "images/ECL DILATION SUIT PRESENT.png",
      "images/ECL DILATION SUIT FUTURE.png"
    ],
    "dimensional-fit-predictor": "Jacket 31-inch with velocity-based aging. Trousers 32-inch inseam with gravitational time shift. Lapels exhibit twin paradox detailing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$20,000",
        "title": "RELATIVE TIME",
        "description": "Historical edition with early relativity concepts",
        "pairings": ["Wear with vintage scientific instruments", "Pair with clockwork mechanism accessories", "Style with historical academic themes"],
        "image": "images/ECL DILATION SUIT PAST.png"
      },
      {
        "era": "present",
        "price": "$22,000",
        "title": "TIME DILATION",
        "description": "Current edition with modern physics visualization",
        "pairings": ["Combine with digital display accessories", "Wear with scientific formula prints", "Style with data visualization elements"],
        "image": "images/ECL DILATION SUIT PRESENT.png"
      },
      {
        "era": "future",
        "price": "$25,000",
        "title": "VELOCITY SUIT",
        "description": "Future edition with actual time manipulation",
        "pairings": ["Pair with light-speed accessories", "Wear with motion-blur enhancement pieces", "Style with temporal distortion effects"],
        "image": "images/ECL DILATION SUIT FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Relativistic wool blend", "Time-dilation pattern weaving", "Velocity-responsive seam construction"]
  },
  {
    "id": "eclipse18",
    "name": "The Ember-Keeper Gloves",
    "price": "$30,000",
    "description": "Gloves that appear to hold dying embers from forgotten fires, preserving the last moments of combustion in eternal suspension between extinction and reignition.",
    "images": [
      "images/ECL EMBER GLOVES PAST.png",
      "images/ECL EMBER GLOVES PRESENT.png",
      "images/ECL EMBER GLOVES FUTURE.png"
    ],
    "dimensional-fit-predictor": "18-inch length with ember preservation chambers. Fingers designed for delicate temporal manipulation. Palm features heat-suspension technology.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$25,000",
        "title": "FIRE TENDER",
        "description": "Historical edition with ancient fire-keeping traditions",
        "pairings": ["Wear with primitive tool accessories", "Pair with campfire-themed pieces", "Style with survivalist-inspired outfits"],
        "image": "images/ECL EMBER GLOVES PAST.png"
      },
      {
        "era": "present",
        "price": "$30,000",
        "title": "EMBER PRESERVER",
        "description": "Current edition with thermal suspension technology",
        "pairings": ["Combine with heat-reactive clothing", "Wear with temperature gauge accessories", "Style with energy conservation themes"],
        "image": "images/ECL EMBER GLOVES PRESENT.png"
      },
      {
        "era": "future",
        "price": "$30,000",
        "title": "ETERNAL FLAME",
        "description": "Future edition with perpetual energy containment",
        "pairings": ["Pair with light-generation systems", "Wear with plasma containment accessories", "Style with infinite energy motifs"],
        "image": "images/ECL EMBER GLOVES FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Suspended combustion leather", "Ember-preservation lining", "Heat-capture beadwork on knuckles"]
  },
  {
    "id": "eclipse19",
    "name": "The Grandfather Paradox",
    "price": "$24,000",
    "description": "The ultimate temporal statement piece that visually represents the famous grandfather paradox, where existence and non-existence coexist in beautiful impossible harmony.",
    "images": [
      "images/ECL GRANDFATHER PAST.png",
      "images/ECL GRANDFATHER PRESENT.png",
      "images/ECL GRANDFATHER FUTURE.png"
    ],
    "dimensional-fit-predictor": "54-inch length with paradoxical existence states. Shoulders both exist and don't exist simultaneously. Hem exhibits causal violation patterning.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$20,000",
        "title": "ANCESTRAL DILEMMA",
        "description": "Historical edition with family lineage paradox",
        "pairings": ["Wear with generational portrait prints", "Pair with heirloom reproduction accessories", "Style with historical contradiction themes"],
        "image": "images/ECL GRANDFATHER PAST.png"
      },
      {
        "era": "present",
        "price": "$24,000",
        "title": "LOGICAL IMPOSSIBILITY",
        "description": "Current edition with philosophical paradox exploration",
        "pairings": ["Combine with contradictory pattern mixing", "Wear with impossible object accessories", "Style with logical fallacy visual themes"],
        "image": "images/ECL GRANDFATHER PRESENT.png"
      },
      {
        "era": "future",
        "price": "$28,000",
        "title": "CAUSALITY VIOLATION",
        "description": "Future edition with actual timeline manipulation",
        "pairings": ["Pair with time-displacement accessories", "Wear with reality-distortion pieces", "Style with existence-fluctuation effects"],
        "image": "images/ECL GRANDFATHER FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Paradox-resistant silk velvet", "Impossible existence embroidery", "Causal violation structural elements"]
  },
  {
    "id": "eclipse20",
    "name": "The Hourglass Leviathan",
    "price": "$18,000",
    "description": "A monumental piece that contains entire timelines within its structure, with sands of different eras flowing through colossal chambers of measured eternity.",
    "images": [
      "images/ECL HOURGLASS LEV PAST.png",
      "images/ECL HOURGLASS LEV PREENT.png",
      "images/ECL HOURGLASS LEV FUTURE.png"
    ],
    "dimensional-fit-predictor": "72-inch height including temporal chambers. 36-inch width at broadest timeline point. Weight 14.2 lbs distributed through chronological balancing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$15,000",
        "title": "ANCIENT SANDS",
        "description": "Historical edition with desert timekeeping methods",
        "pairings": ["Wear with archaeological excavation themes", "Pair with sand-preservation accessories", "Style with ancient measurement tools"],
        "image": "images/ECL HOURGLASS LEV PAST.png"
      },
      {
        "era": "present",
        "price": "18,000",
        "title": "TIME CONTAINER",
        "description": "Current edition with precision time measurement",
        "pairings": ["Combine with modern watch mechanisms", "Wear with digital time display accessories", "Style with contemporary timepiece motifs"],
        "image": "images/ECL HOURGLASS LEV PREENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "ETERNITY ENGINE",
        "description": "Future edition with infinite time containment",
        "pairings": ["Pair with perpetual motion accessories", "Wear with time-compression technology", "Style with endless cycle visual effects"],
        "image": "images/ECL HOURGLASS LEV FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Timeline-embedded resins", "Era-specific sand composites", "Chronological chamber construction"]
  },
  {
    "id": "eclipse21",
    "name": "The Ignition Suit",
    "price": "$15,000",
    "description": "A suit that captures the precise moment of universal ignition, with patterns of primordial light and energy frozen at the instant of cosmic birth.",
    "images": [
      "images/ECL IGNITION TUXEDO.png",
      "images/ECL IGINITION TUXEDO PRESENT.png",
      "images/ECL IGNITION TUXEDO FUTURE.png"
    ],
    "dimensional-fit-predictor": "Jacket 32-inch with big bang radiation patterns. Trousers 33-inch inseam with cosmic microwave background detailing. Lapels feature singularity collapse points.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$12,000",
        "title": "CREATION MYTH",
        "description": "Historical edition with origin story symbolism",
        "pairings": ["Wear with mythological creation prints", "Pair with primordial element accessories", "Style with ancient cosmology themes"],
        "image": "images/ECL IGNITION TUXEDO.png"
      },
      {
        "era": "present",
        "price": "$15,000",
        "title": "BIG BANG SUIT",
        "description": "Current edition with cosmic inflation mapping",
        "pairings": ["Combine with astronomical chart prints", "Wear with telescope-inspired accessories", "Style with universe expansion motifs"],
        "image": "images/ECL IGINITION TUXEDO PRESENT.png"
      },
      {
        "era": "future",
        "price": "$22,000",
        "title": "UNIVERSE GENERATOR",
        "description": "Future edition with actual creation technology",
        "pairings": ["Pair with reality-formation accessories", "Wear with dimension-creation pieces", "Style with genesis sequence visuals"],
        "image": "images/ECL IGNITION TUXEDO FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Primordial light wool suiting", "Inflation era pattern weaving", "Singularity point hardware"]
  },
  {
    "id": "eclipse22",
    "name": "The Folded Moment",
    "price": "$10,000",
    "description": "A garment that appears to contain an entire moment folded within its structure, with time compressed into beautiful origami-like temporal patterns.",
    "images": [
      "images/ECL FOLDED MOMENT PAST.png",
      "images/ECL FOLDED MOMENT PRESENT.png",
      "images/ECL FOLDED MOMENT FUTURE.png"
    ],
    "dimensional-fit-predictor": "Asymmetric silhouette with temporal compression points. 38-inch length with moment-unfolding potential. Shoulders feature time-origami detailing.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$8,000",
        "title": "MEMORY CREASE",
        "description": "Historical edition with traditional paper folding arts",
        "pairings": ["Wear with historical document prints", "Pair with ancient paper craft accessories", "Style with traditional origami motifs"],
        "image": "images/ECL FOLDED MOMENT PAST.png"
      },
      {
        "era": "present",
        "price": "$10,000",
        "title": "COMPRESSED TIME",
        "description": "Current edition with digital data compression themes",
        "pairings": ["Combine with zip-file pattern pieces", "Wear with data storage accessories", "Style with information density visuals"],
        "image": "images/ECL FOLDED MOMENT PRESENT.png"
      },
      {
        "era": "future",
        "price": "$14,050",
        "title": "TEMPORAL ORIGAMI",
        "description": "Future edition with actual time manipulation",
        "pairings": ["Pair with dimension-folding accessories", "Wear with space-time fabric pieces", "Style with multi-temporal layer effects"],
        "image": "images/ECL FOLDED MOMENT FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Time-compression silk", "Moment-preservation folds", "Temporal origami construction"]
  },
  {
    "id": "eclipse23",
    "name": "The Last Ember",
    "price": "$18,000",
    "description": "A piece that contains the final ember of a dying universe, holding the last warmth and light before eternal cold and darkness claim all existence.",
    "images": [
      "images/ECL LAST EMBER PAST.png",
      "images/ECL LAST EMBER PRESENT.png",
      "images/LAST_EMBER_FUTURE.png"
    ],
    "dimensional-fit-predictor": "44-inch length with heat-death gradient. Central ember chamber maintains 6-inch warmth radius. Overall piece exhibits entropic cooling patterns.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$15,000",
        "title": "FINAL FIRE",
        "description": "Historical edition with apocalypse mythology",
        "pairings": ["Wear with end-times prophecy themes", "Pair with last light accessories", "Style with final moment memorial motifs"],
        "image": "images/ECL LAST EMBER PAST.png"
      },
      {
        "era": "present",
        "price": "$18,000",
        "title": "HEAT DEATH",
        "description": "Current edition with thermodynamic end states",
        "pairings": ["Combine with entropy visualization pieces", "Wear with cooling process accessories", "Style with thermal gradient themes"],
        "image": "images/ECL LAST EMBER PRESENT.png"
      },
      {
        "era": "future",
        "price": "$20,000",
        "title": "UNIVERSE'S END",
        "description": "Future edition with actual cosmic ending simulation",
        "pairings": ["Pair with void-space accessories", "Wear with darkness containment pieces", "Style with final light preservation effects"],
        "image": "images/ECL LAST EMBER FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Heat-death wool cashmere", "Final ember preservation technology", "Entropic cooling pattern embroidery"]
  },
  {
    "id": "eclipse24",
    "name": "The Chronos Crown",
    "price": "$30,000",
    "description": "A crown that represents mastery over time itself, with elements representing past, present, and future woven into a continuous temporal diadem of absolute chronology.",
    "images": [
      "images/ECL CHRONOS CROWN PAST.png",
      "images/ECL CHRONOS CROWN PRESENT.png",
      "images/ECL CHRONOS CROWN FUTURE.png"
    ],
    "dimensional-fit-predictor": "14-inch height with temporal continuum circlet. Weight 2.4 lbs balanced across era representations. Adjustable 20-24 inch circumference.",
    "era-sync-suggestions": [
      {
        "era": "past",
        "price": "$25,000",
        "title": "ANCIENT RULER",
        "description": "Historical edition with mythological time deity themes",
        "pairings": ["Wear with royal historical garments", "Pair with ancient power symbols", "Style with traditional sovereignty motifs"],
        "image": "images/ECL CHRONOS CROWN PAST.png"
      },
      {
        "era": "present",
        "price": "$30,000",
        "title": "TIME MASTER",
        "description": "Current edition with modern chronology control",
        "pairings": ["Combine with contemporary luxury pieces", "Wear with precision timekeeping accessories", "Style with current power aesthetics"],
        "image": "images/ECL CHRONOS CROWN FUTURE.png"
      },
      {
        "era": "future",
        "price": "$35,000",
        "title": "TEMPORAL SOVEREIGN",
        "description": "Future edition with actual time manipulation authority",
        "pairings": ["Pair with reality-control accessories", "Wear with dimension-command pieces", "Style with absolute chronology visual effects"],
        "image": "images/ECL CHRONOS CROWN FUTURE.png"
      }
    ],
    "temporal-material-scanner": ["Era-blended precious metals", "Timeline crystal inlays", "Chronological mastery gemstone setting"]
  }
];
window.eclipseProducts = eclipseProducts;
  
 const rebirthProducts = [
  {
    "id": "rebirth1",
    "name": "The Umbral Weave",
    "price": "$2,800",
    "description": "A garment woven from shadows and light, where darkness becomes tangible fabric and illumination emerges from within the weave. Each thread captures the moment between existence and void.",
    "images": [
      "images/RBT UMBRAL WEAVE.png",
      "images/RBT UMBRAL WEAVE.png",
      "images/RBT UMBRAL WEAVE.png",
      "images/RBT UMBRAL WEAVE.png",
      "images/RBT UMBRAL WEAVE.png",
      "images/RBT UMBRAL WEAVE.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 8,
      "message": "Limited Stock - Handcrafted Edition"
    },
    "badges": ["Limited Edition", "Artisanal", "Numbered Series"],
    "variants": {
      "colors": [
        {
          "name": "Void Black",
          "value": "void-black",
          "image": "images/UMBRAL_BLACK.png"
        },
        {
          "name": "Twilight Gray",
          "value": "twilight-gray",
          "image": "images/UMBRAL_GRAY.png"
        },
        {
          "name": "Eclipse Purple",
          "value": "eclipse-purple",
          "image": "images/UMBRAL_PURPLE.png"
        }
      ],
      "materials": [
        {
          "name": "Shadow Silk",
          "value": "shadow-silk",
          "price": "$2,800"
        },
        {
          "name": "Light Weave",
          "value": "light-weave",
          "price": "$3,200"
        },
        {
          "name": "Void Velvet",
          "value": "void-velvet",
          "price": "$3,500"
        }
      ],
      "sizes": [
        {
          "name": "XS",
          "value": "xs",
          "description": "Fitted silhouette for intimate shadow play"
        },
        {
          "name": "S",
          "value": "s",
          "description": "Tailored embrace for precise light control"
        },
        {
          "name": "M",
          "value": "m",
          "description": "Classic drape for optimal shadow manifestation"
        },
        {
          "name": "L",
          "value": "l",
          "description": "Expansive canvas for dramatic illumination"
        }
      ]
    },
    "specifications": {
      "construction": "Hand-woven shadow threads",
      "lightTransmission": "Variable 15-85% opacity",
      "illumination": "Integrated photoluminescent fibers",
      "weight": "450g",
      "care": "Professional shadow preservation only",
      "craftsmanship": "200 hours hand-weaving",
      "edition": "Limited to 50 pieces worldwide"
    },
    "shippingInfo": {
      "freeShipping": "Complimentary worldwide shadow delivery",
      "returns": "14-day illumination assessment period",
      "delivery": "Ships within 7-10 business days",
      "specialHandling": "Requires dark matter packaging"
    },
    "trustBadges": ["Artisanal Certified", "Shadow Authenticity", "Light Integrity Guarantee", "Numbered Edition"],
    "reviews": [
      {
        "author": "Luna S.",
        "rating": 5,
        "date": "2024-02-15",
        "comment": "The way this piece captures and manipulates light is otherworldly. It feels like wearing liquid darkness that somehow emits its own glow.",
        "verified": true
      },
      {
        "author": "Orion V.",
        "rating": 5,
        "date": "2024-02-10",
        "comment": "Each movement creates new shadow patterns. It's like the garment is alive and responding to its environment. Absolutely mesmerizing.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 23,
      "features": ["Shadow Manipulation", "Light Emission", "Artisanal Craft"]
    },
    "globalFeatures": [
      {
        "icon": "🌑",
        "title": "Shadow Gallery",
        "description": "Explore the garment in different lighting conditions",
        "function": "openShadowGallery"
      },
      {
        "icon": "📐",
        "title": "Silhouette Predictor",
        "description": "See how shadows will fall with your body type",
        "function": "silhouettePredictor"
      },
      {
        "icon": "💡",
        "title": "Illumination Guide",
        "description": "Learn to manipulate the light-emitting properties",
        "function": "illuminationGuide"
      },
      {
        "icon": "🧵",
        "title": "Weave Explorer",
        "description": "Examine the intricate shadow-thread construction",
        "function": "weaveExplorer"
      }
    ],
    "careInstructions": [
      "Store in complete darkness when not worn",
      "Avoid direct sunlight for extended periods",
      "Clean only with specialized shadow solution",
      "Recharge illumination with ambient light weekly"
    ],
    "includedItems": [
      "The Umbral Weave garment",
      "Shadow preservation case",
      "Certificate of authenticity and edition number",
      "Care and illumination guide",
      "Dark matter storage bag"
    ]
  },
  {
    "id": "rebirth2",
    "name": "The Shattered Halo",
    "price": "$3,400",
    "description": "A headpiece that captures the moment of divine fracture, where celestial perfection meets beautiful imperfection. The broken halo reforms around the wearer, creating new geometry from sacred ruins.",
    "images": [
      "images/RBT SHATTERED HALO.png",
      "images/RBT SHATTERED HALO.png",
      "images/RBT SHATTERED HALO.png",
      "images/RBT SHATTERED HALO.png",
      "images/RBT SHATTERED HALO.png",
      "images/RBT SHATTERED HALO.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 12,
      "message": "Available - Divine Fracture Edition"
    },
    "badges": ["Celestial", "Hand-Sculpted", "Divine Geometry"],
    "variants": {
      "materials": [
        {
          "name": "Fractured Gold",
          "value": "fractured-gold",
          "price": "$3,400"
        },
        {
          "name": "Silver Shards",
          "value": "silver-shards",
          "price": "$3,100"
        },
        {
          "name": "Bronze Ruins",
          "value": "bronze-ruins",
          "price": "$2,900"
        }
      ],
      "sizes": [
        {
          "name": "Petite Crown",
          "value": "petite",
          "description": "Delicate fracture for smaller head circumference"
        },
        {
          "name": "Classic Halo",
          "value": "classic",
          "description": "Traditional divine proportions with modern breakage"
        },
        {
          "name": "Monumental",
          "value": "monumental",
          "description": "Expansive shattered geometry for dramatic presence"
        }
      ]
    },
    "specifications": {
      "construction": "Hand-sculpted metal fragments",
      "fragmentCount": "47 individually placed shards",
      "weight": "680g",
      "adjustment": "Customizable fracture points",
      "craftsmanship": "180 hours celestial metalwork",
      "lightInteraction": "Creates prismatic fracture patterns",
      "edition": "Limited to 75 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Sacred geometry packaging included",
      "returns": "21-day divine realignment period",
      "delivery": "Ships within 5-7 business days",
      "specialHandling": "Angel-feather insulated packaging"
    },
    "trustBadges": ["Celestial Certification", "Hand-Sculpted", "Divine Geometry", "Limited Edition"],
    "reviews": [
      {
        "author": "Seraphina M.",
        "rating": 5,
        "date": "2024-02-18",
        "comment": "Wearing this feels like carrying broken divinity. The way light catches the fractures creates ethereal patterns that change throughout the day.",
        "verified": true
      },
      {
        "author": "Gabriel T.",
        "rating": 4,
        "date": "2024-02-12",
        "comment": "The weight distribution is perfect - it feels substantial but not heavy. The broken edges are surprisingly comfortable.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.8,
      "totalReviews": 31,
      "features": ["Divine Fracture", "Prismatic Light", "Celestial Craft"]
    },
    "globalFeatures": [
      {
        "icon": "👑",
        "title": "Halo Simulator",
        "description": "Visualize how the shattered halo will frame your face",
        "function": "haloSimulator"
      },
      {
        "icon": "💎",
        "title": "Light Fracture Guide",
        "description": "See how light interacts with different fracture patterns",
        "function": "lightFractureGuide"
      },
      {
        "icon": "✨",
        "title": "Celestial Styling",
        "description": "Get inspired by divine fashion pairings",
        "function": "celestialStyling"
      },
      {
        "icon": "⚒️",
        "title": "Craftsmanship Tour",
        "description": "Explore the metalworking techniques used",
        "function": "craftsmanshipTour"
      }
    ],
    "careInstructions": [
      "Store on provided sacred geometry stand",
      "Clean with soft celestial cloth only",
      "Avoid harsh chemical exposure",
      "Periodic divine alignment check recommended"
    ],
    "includedItems": [
      "The Shattered Halo headpiece",
      "Sacred geometry display stand",
      "Certificate of celestial craftsmanship",
      "Divine care instructions",
      "Velvet sanctity pouch"
    ]
  },
  {
    "id": "rebirth3",
    "name": "The Event Horizon",
    "price": "$4,200",
    "description": "A garment that exists at the boundary of reality, where spacetime curves into impossible geometries. The fabric appears to absorb light while simultaneously emitting gravitational waves of elegance.",
    "images": [
      "images/RBT EVENT HORIZON.png",
      "images/RBT EVENT HORIZON.png",
      "images/RBT EVENT HORIZON.png",
      "images/RBT EVENT HORIZON.png",
      "images/RBT EVENT HORIZON.png",
      "images/RBT EVENT HORIZON.png"
    ],
    "stockStatus": {
      "inStock": false,
      "quantity": 0,
      "message": "Next Singularity Drop: March 2024"
    },
    "badges": ["Cosmic", "Gravitational", "Singularity Edition"],
    "variants": {
      "colors": [
        {
          "name": "Black Hole",
          "value": "black-hole",
          "image": "images/HORIZON_BLACK.png"
        },
        {
          "name": "Neutron Star",
          "value": "neutron-star",
          "image": "images/HORIZON_SILVER.png"
        },
        {
          "name": "Quasar Blue",
          "value": "quasar-blue",
          "image": "images/HORIZON_BLUE.png"
        }
      ],
      "sizes": [
        {
          "name": "Singularity",
          "value": "singularity",
          "description": "Infinite density, zero volume - one size transforms"
        }
      ]
    },
    "specifications": {
      "fabric": "Spacetime-woven singularity cloth",
      "lightAbsorption": "99.7% of visible spectrum",
      "gravitationalEffect": "Creates visual spacetime curvature",
      "dimensionalStability": "Maintains form across multiple realities",
      "craftsmanship": "Quantum entanglement construction",
      "edition": "Limited to 33 pieces per universe"
    },
    "shippingInfo": {
      "freeShipping": "Wormhole delivery included",
      "returns": "14-day multiverse assessment",
      "delivery": "Instant quantum entanglement shipping",
      "specialHandling": "Requires temporal isolation chamber"
    },
    "trustBadges": ["Quantum Certified", "Spacetime Integrity", "Singularity Edition", "Multiverse Compliant"],
    "reviews": [
      {
        "author": "Dr. Orion Black",
        "rating": 5,
        "date": "2024-01-30",
        "comment": "As a theoretical physicist, I can confirm the spacetime curvature effects are not just visual - there's actual gravitational lensing occurring. Mind-bending.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 5.0,
      "totalReviews": 8,
      "features": ["Spacetime Curvature", "Light Absorption", "Quantum Construction"]
    },
    "globalFeatures": [
      {
        "icon": "🌌",
        "title": "Cosmic Simulator",
        "description": "Experience the garment in different spacetime conditions",
        "function": "cosmicSimulator"
      },
      {
        "icon": "🌀",
        "title": "Gravity Preview",
        "description": "See how the fabric creates visual gravitational effects",
        "function": "gravityPreview"
      },
      {
        "icon": "⚛️",
        "title": "Quantum Explorer",
        "description": "Understand the scientific principles behind the design",
        "function": "quantumExplorer"
      },
      {
        "icon": "📡",
        "title": "Reality Interface",
        "description": "Learn to manipulate the spacetime properties",
        "function": "realityInterface"
      }
    ],
    "careInstructions": [
      "Store in temporal stasis field",
      "Avoid proximity to black holes",
      "Clean with quantum vacuum only",
      "Regular spacetime alignment required"
    ],
    "includedItems": [
      "The Event Horizon garment",
      "Temporal stasis storage case",
      "Quantum certificate of authenticity",
      "Spacetime care manual",
      "Gravitational field stabilizer"
    ]
  },
  {
    "id": "rebirth4",
    "name": "The Data-Monk's Robe",
    "price": "$2,900",
    "description": "A ceremonial robe woven from encrypted data streams and sacred algorithms. Each fold contains ancient digital wisdom, with binary prayers embroidered in luminous thread that pulse with computational energy.",
    "images": [
      "images/RBT DARK MONK'S ROBE.png",
      "images/RBT DARK MONK'S ROBE.png",
      "images/RBT DARK MONK'S ROBE.png",
      "images/RBT DARK MONK'S ROBE.png",
      "images/RBT DARK MONK'S ROBE.png",
      "images/RBT DARK MONK'S ROBE.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 15,
      "message": "Available - Digital Monastery Edition"
    },
    "badges": ["Sacred Data", "Algorithmic Weave", "Digital Ritual"],
    "variants": {
      "colors": [
        {
          "name": "Server Gray",
          "value": "server-gray",
          "image": "images/MONK_GRAY.png"
        },
        {
          "name": "Code Blue",
          "value": "code-blue",
          "image": "images/MONK_BLUE.png"
        },
        {
          "name": "Firewall Red",
          "value": "firewall-red",
          "image": "images/MONK_RED.png"
        }
      ],
      "sizes": [
        {
          "name": "Novice",
          "value": "novice",
          "description": "Modest drape for digital acolytes"
        },
        {
          "name": "Adept",
          "value": "adept",
          "description": "Balanced proportions for experienced users"
        },
        {
          "name": "Master",
          "value": "master",
          "description": "Expansive silhouette for data sages"
        }
      ]
    },
    "specifications": {
      "fabric": "Encrypted data-woven textile",
      "threads": "Luminous binary embroidery",
      "processing": "Quantum computing inspired patterns",
      "weight": "1200g",
      "dataDensity": "2.7 terabytes per square meter",
      "craftsmanship": "160 hours algorithmic weaving",
      "edition": "Limited to 88 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Secure data transmission included",
      "returns": "30-day computational assessment",
      "delivery": "Ships within 3-5 business days",
      "specialHandling": "Encrypted packaging with digital seal"
    },
    "trustBadges": ["Sacred Algorithm", "Data Integrity", "Digital Monastery", "Limited Edition"],
    "reviews": [
      {
        "author": "Byte Monk K",
        "rating": 5,
        "date": "2024-02-20",
        "comment": "The robe hums with computational energy. During meditation, I can feel the data streams aligning with my consciousness. Truly transformative.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 42,
      "features": ["Encrypted Weave", "Luminous Data", "Algorithmic Patterns"]
    },
    "globalFeatures": [
      {
        "icon": "📊",
        "title": "Data Visualization",
        "description": "See the encrypted patterns and their meanings",
        "function": "dataVisualization"
      },
      {
        "icon": "🕯️",
        "title": "Digital Ritual Guide",
        "description": "Learn ceremonial practices for the robe",
        "function": "digitalRitualGuide"
      },
      {
        "icon": "🔢",
        "title": "Binary Decoder",
        "description": "Understand the embroidered data streams",
        "function": "binaryDecoder"
      },
      {
        "icon": "🧘",
        "title": "Meditation Companion",
        "description": "Use the robe for computational meditation",
        "function": "meditationCompanion"
      }
    ],
    "careInstructions": [
      "Store in electromagnetic shielded environment",
      "Recharge luminous threads with ambient data signals",
      "Clean with compressed air only",
      "Avoid magnetic field disruptions"
    ],
    "includedItems": [
      "The Data-Monk's Robe",
      "Digital encryption key pendant",
      "Sacred algorithm scroll",
      "Data stream meditation guide",
      "Electromagnetic storage case"
    ]
  },
  {
    "id": "rebirth5",
    "name": "The Solar Flare Corset",
    "price": "$3,200",
    "description": "A corset that captures the explosive energy of solar phenomena, with plasma patterns that appear to writhe with stellar intensity. The structural boning mimics magnetic field lines while the surface simulates coronal mass ejections.",
    "images": [
      "images/RBT SOLAR FLARE CORSET.png",
      "images/RBT SOLAR FLARE CORSET.png",
      "images/RBT SOLAR FLARE CORSET.png",
      "images/RBT SOLAR FLARE CORSET.png",
      "images/RBT SOLAR FLARE CORSET.png",
      "images/RBT SOLAR FLARE CORSET.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 9,
      "message": "Limited Stock - Stellar Energy Edition"
    },
    "badges": ["Plasma Effect", "Magnetic Structure", "Solar Powered"],
    "variants": {
      "colors": [
        {
          "name": "Coronal Gold",
          "value": "coronal-gold",
          "image": "images/FLARE_GOLD.png"
        },
        {
          "name": "Prominence Red",
          "value": "prominence-red",
          "image": "images/FLARE_RED.png"
        },
        {
          "name": "Sunspot Black",
          "value": "sunspot-black",
          "image": "images/FLARE_BLACK.png"
        }
      ],
      "sizes": [
        {
          "name": "Nova 24",
          "value": "nova-24",
          "description": "Intense compression for stellar transformation"
        },
        {
          "name": "Supernova 26",
          "value": "supernova-26",
          "description": "Balanced stellar pressure and comfort"
        },
        {
          "name": "Hypernova 28",
          "value": "hypernova-28",
          "description": "Expansive solar energy containment"
        }
      ]
    },
    "specifications": {
      "construction": "Magnetic field line boning system",
      "surface": "Plasma-effect intelligent textile",
      "energy": "Photovoltaic thread integration",
      "temperature": "Maintains 37°C solar warmth",
      "weight": "950g",
      "craftsmanship": "140 hours stellar pattern engineering",
      "edition": "Limited to 66 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Solar flare protected delivery",
      "returns": "21-day stellar alignment check",
      "delivery": "Ships within 4-6 business days",
      "specialHandling": "UV protected packaging required"
    },
    "trustBadges": ["Solar Certified", "Plasma Technology", "Magnetic Engineering", "Limited Edition"],
    "reviews": [
      {
        "author": "Helios A.",
        "rating": 5,
        "date": "2024-02-22",
        "comment": "Wearing this feels like carrying a piece of the sun. The warmth is incredible and the plasma patterns actually shift throughout the day.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.8,
      "totalReviews": 28,
      "features": ["Plasma Effects", "Magnetic Structure", "Solar Energy"]
    },
    "globalFeatures": [
      {
        "icon": "☀️",
        "title": "Solar Simulator",
        "description": "See how the corset reacts to different light conditions",
        "function": "solarSimulator"
      },
      {
        "icon": "🧲",
        "title": "Magnetic Field Guide",
        "description": "Understand the structural magnetic engineering",
        "function": "magneticFieldGuide"
      },
      {
        "icon": "🔥",
        "title": "Plasma Effects",
        "description": "Learn to activate the plasma pattern sequences",
        "function": "plasmaEffects"
      },
      {
        "icon": "🌡️",
        "title": "Temperature Control",
        "description": "Master the solar warmth features",
        "function": "temperatureControl"
      }
    ],
    "careInstructions": [
      "Recharge in direct sunlight weekly",
      "Avoid strong magnetic fields",
      "Clean with solar-charged water only",
      "Store in temperature-stable environment"
    ],
    "includedItems": [
      "The Solar Flare Corset",
      "Magnetic field alignment tool",
      "Solar charging guide",
      "Plasma pattern manual",
      "UV protective storage case"
    ]
  },
  {
    "id": "rebirth6",
    "name": "The Static Veil",
    "price": "$1,800",
    "description": "A veil that exists between signal and noise, capturing the beautiful chaos of electromagnetic interference. The fabric appears to flicker with digital snow and analog static, creating a barrier that both conceals and reveals through visual distortion.",
    "images": [
      "images/RBT STATIC VEIL.png",
      "images/RBT STATIC VEIL.png",
      "images/RBT STATIC VEIL.png",
      "images/RBT STATIC VEIL.png",
      "images/RBT STATIC VEIL.png",
      "images/RBT STATIC VEIL.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 22,
      "message": "In Stock - Signal Interference Edition"
    },
    "badges": ["EMF Reactive", "Analog-Digital", "Signal Disruption"],
    "variants": {
      "colors": [
        {
          "name": "TV Snow",
          "value": "tv-snow",
          "image": "images/STATIC_WHITE.png"
        },
        {
          "name": "Radio Static",
          "value": "radio-static",
          "image": "images/STATIC_GRAY.png"
        },
        {
          "name": "Digital Noise",
          "value": "digital-noise",
          "image": "images/STATIC_BLUE.png"
        }
      ],
      "lengths": [
        {
          "name": "Signal Short",
          "value": "short",
          "description": "Shoulder-length for subtle interference"
        },
        {
          "name": "Transmission Medium",
          "value": "medium",
          "description": "Mid-back for balanced signal disruption"
        },
        {
          "name": "Broadcast Long",
          "value": "long",
          "description": "Floor-length for maximum static effect"
        }
      ]
    },
    "specifications": {
      "fabric": "EMF-reactive mesh with static patterning",
      "signalResponse": "Reacts to ambient electromagnetic fields",
      "opacity": "Variable 40-90% based on signal strength",
      "weight": "320g",
      "dimensions": "60x180cm standard panel",
      "craftsmanship": "90 hours signal weaving",
      "edition": "Open edition with numbered batches"
    },
    "shippingInfo": {
      "freeShipping": "Faraday cage packaging included",
      "returns": "14-day signal quality assessment",
      "delivery": "Ships within 2-4 business days",
      "specialHandling": "EMF shielded transport required"
    },
    "trustBadges": ["Signal Certified", "EMF Safe", "Static Technology", "Quality Tested"],
    "reviews": [
      {
        "author": "Frequency M.",
        "rating": 5,
        "date": "2024-02-25",
        "comment": "In crowded spaces, the static actually increases creating a beautiful privacy barrier. Near electronics, it comes alive with patterns.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.7,
      "totalReviews": 67,
      "features": ["EMF Reactive", "Signal Disruption", "Static Patterns"]
    },
    "globalFeatures": [
      {
        "icon": "📺",
        "title": "Static Simulator",
        "description": "See how the veil reacts to different signal environments",
        "function": "staticSimulator"
      },
      {
        "icon": "📡",
        "title": "Signal Mapping",
        "description": "Understand the EMF response patterns",
        "function": "signalMapping"
      },
      {
        "icon": "🎭",
        "title": "Veil Styling",
        "description": "Learn creative ways to wear and style the static",
        "function": "veilStyling"
      },
      {
        "icon": "⚡",
        "title": "EMF Control",
        "description": "Master the signal manipulation features",
        "function": "emfControl"
      }
    ],
    "careInstructions": [
      "Store in signal-free environment when not in use",
      "Recharge near electronic devices periodically",
      "Hand wash with distilled water only",
      "Avoid microwave and radio frequency sources"
    ],
    "includedItems": [
      "The Static Veil",
      "Faraday storage pouch",
      "EMF sensitivity guide",
      "Static pattern manual",
      "Signal calibration card"
    ]
  },
  {
    "id": "rebirth7",
    "name": "The Folded Light Trench",
    "price": "$3,600",
    "description": "A trench coat that manipulates light through origami-inspired folds and pleats, creating optical illusions of depth and dimension. The fabric appears to capture and redirect illumination, making the wearer both visible and elusive simultaneously.",
    "images": [
      "images/RBT FOLDED LIGHT TRENCH.png",
      "images/RBT FOLDED LIGHT TRENCH.png",
      "images/RBT FOLDED LIGHT TRENCH.png",
      "images/RBT FOLDED LIGHT TRENCH.png",
      "images/RBT FOLDED LIGHT TRENCH.png",
      "images/RBT FOLDED LIGHT TRENCH.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 11,
      "message": "Limited Stock - Optical Illusion Edition"
    },
    "badges": ["Light Manipulation", "Origami Construction", "Optical Art"],
    "variants": {
      "colors": [
        {
          "name": "Photon White",
          "value": "photon-white",
          "image": "images/FOLDED_WHITE.png"
        },
        {
          "name": "Prism Silver",
          "value": "prism-silver",
          "image": "images/FOLDED_SILVER.png"
        },
        {
          "name": "Lens Gray",
          "value": "lens-gray",
          "image": "images/FOLDED_GRAY.png"
        }
      ],
      "sizes": [
        {
          "name": "Aperture S",
          "value": "aperture-s",
          "description": "Precise light control with tailored fit"
        },
        {
          "name": "Focus M",
          "value": "focus-m",
          "description": "Balanced illumination and silhouette"
        },
        {
          "name": "Exposure L",
          "value": "exposure-l",
          "description": "Maximum light manipulation canvas"
        }
      ]
    },
    "specifications": {
      "construction": "Origami-inspired structural folds",
      "fabric": "Light-redirecting optical textile",
      "foldCount": "127 precision light-folds",
      "weight": "1450g",
      "length": "42-inch standard with adjustable hem",
      "craftsmanship": "210 hours optical engineering",
      "edition": "Limited to 55 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Light-sealed packaging included",
      "returns": "21-day optical performance assessment",
      "delivery": "Ships within 5-7 business days",
      "specialHandling": "Requires light-stable transport"
    },
    "trustBadges": ["Optical Certified", "Light Engineering", "Origami Construction", "Limited Edition"],
    "reviews": [
      {
        "author": "Lumina F.",
        "rating": 5,
        "date": "2024-02-28",
        "comment": "The way this coat plays with light is magical. In different lighting conditions, I appear taller, slimmer, or sometimes almost invisible. Pure optical wizardry.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 33,
      "features": ["Light Redirection", "Origami Structure", "Optical Effects"]
    },
    "globalFeatures": [
      {
        "icon": "📐",
        "title": "Fold Explorer",
        "description": "Examine the intricate origami light-folds",
        "function": "foldExplorer"
      },
      {
        "icon": "💡",
        "title": "Light Laboratory",
        "description": "Test how the coat performs in different lighting",
        "function": "lightLaboratory"
      },
      {
        "icon": "👁️",
        "title": "Optical Effects",
        "description": "Learn to create specific visual illusions",
        "function": "opticalEffects"
      },
      {
        "icon": "🧥",
        "title": "Style Transformer",
        "description": "Discover how folds create different silhouettes",
        "function": "styleTransformer"
      }
    ],
    "careInstructions": [
      "Store on specialized fold-preservation hanger",
      "Avoid crushing the light-folds",
      "Clean with optical-grade solutions only",
      "Periodic light-fold realignment recommended"
    ],
    "includedItems": [
      "The Folded Light Trench",
      "Origami fold preservation system",
      "Light manipulation guide",
      "Optical care manual",
      "Light-stable storage bag"
    ]
  },
  {
    "id": "rebirth8",
    "name": "The Obsidian Phoenix",
    "price": "$4,800",
    "description": "A garment that embodies the cycle of destruction and rebirth through volcanic glass and eternal flame. The obsidian surface appears to crack and reform, with embers glowing beneath the black glass that pulse with the rhythm of perpetual renewal.",
    "images": [
      "images/RBT OBSIDIAN PHOENIX.png",
      "images/RBT OBSIDIAN PHOENIX.png",
      "images/RBT OBSIDIAN PHOENIX.png",
      "images/RBT OBSIDIAN PHOENIX.png",
      "images/RBT OBSIDIAN PHOENIX.png",
      "images/RBT OBSIDIAN PHOENIX.png"
    ],
    "stockStatus": {
      "inStock": false,
      "quantity": 0,
      "message": "Next Rebirth Cycle: April 2024"
    },
    "badges": ["Volcanic Glass", "Eternal Flame", "Mythical Rebirth"],
    "variants": {
      "materials": [
        {
          "name": "Volcanic Black",
          "value": "volcanic-black",
          "price": "$4,800"
        },
        {
          "name": "Ember Glow",
          "value": "ember-glow",
          "price": "$5,200"
        },
        {
          "name": "Ash Phoenix",
          "value": "ash-phoenix",
          "price": "$4,600"
        }
      ],
      "sizes": [
        {
          "name": "Rising S",
          "value": "rising-s",
          "description": "Intimate rebirth for personal transformation"
        },
        {
          "name": "Ascending M",
          "value": "ascending-m",
          "description": "Balanced cycle of destruction and renewal"
        },
        {
          "name": "Soaring L",
          "value": "soaring-l",
          "description": "Expansive rebirth for maximum impact"
        }
      ]
    },
    "specifications": {
      "construction": "Hand-set obsidian glass fragments",
      "illumination": "Internal ember-glow technology",
      "fragmentCount": "888 obsidian pieces",
      "weight": "2800g",
      "thermal": "Maintains 38°C eternal warmth",
      "craftsmanship": "300 hours volcanic artistry",
      "edition": "Limited to 13 pieces per cycle"
    },
    "shippingInfo": {
      "freeShipping": "Volcanic insulated packaging included",
      "returns": "7-day rebirth cycle assessment only",
      "delivery": "Ships during full moon phases only",
      "specialHandling": "Requires thermal-stable ritual packaging"
    },
    "trustBadges": ["Volcanic Certified", "Eternal Flame", "Mythical Craft", "Cycle Limited"],
    "reviews": [
      {
        "author": "Ashborn R.",
        "rating": 5,
        "date": "2024-01-15",
        "comment": "Wearing this during my own life transitions has been profoundly powerful. The weight of the obsidian grounds me while the embers remind me of constant renewal.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 5.0,
      "totalReviews": 7,
      "features": ["Obsidian Construction", "Ember Illumination", "Rebirth Cycle"]
    },
    "globalFeatures": [
      {
        "icon": "🌋",
        "title": "Volcanic Gallery",
        "description": "Explore the obsidian formation process",
        "function": "volcanicGallery"
      },
      {
        "icon": "🔥",
        "title": "Ember Control",
        "description": "Learn to manipulate the internal glow patterns",
        "function": "emberControl"
      },
      {
        "icon": "🔄",
        "title": "Rebirth Rituals",
        "description": "Discover ceremonial uses for transformation",
        "function": "rebirthRituals"
      },
      {
        "icon": "⚖️",
        "title": "Balance Guide",
        "description": "Understand the destruction-renewal equilibrium",
        "function": "balanceGuide"
      }
    ],
    "careInstructions": [
      "Store in sacred geometry alignment",
      "Recharge in moonlight monthly",
      "Clean with volcanic spring water only",
      "Avoid negative energy environments"
    ],
    "includedItems": [
      "The Obsidian Phoenix garment",
      "Volcanic ash purification kit",
      "Rebirth cycle calendar",
      "Eternal flame care guide",
      "Ritual storage chest"
    ]
  },
  {
    "id": "rebirth9",
    "name": "The Binary Bloom Gown",
    "price": "$5,200",
    "description": "A gown where digital code transforms into organic beauty, with binary patterns that blossom into floral arrangements and data streams that evolve into natural forms. The fabric bridges the gap between technology and nature through algorithmic growth patterns.",
    "images": [
      "images/RBT BINARY BLOOM GOWN.png",
      "images/RBT BINARY BLOOM GOWN.png",
      "images/RBT BINARY BLOOM GOWN.png",
      "images/RBT BINARY BLOOM GOWN.png",
      "images/RBT BINARY BLOOM GOWN.png",
      "images/RBT BINARY BLOOM GOWN.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 6,
      "message": "Rare Stock - Algorithmic Nature Edition"
    },
    "badges": ["Digital Flora", "Algorithmic Growth", "Tech-Nature Fusion"],
    "variants": {
      "colors": [
        {
          "name": "Data Rose",
          "value": "data-rose",
          "image": "images/BLOOM_PINK.png"
        },
        {
          "name": "Code Lily",
          "value": "code-lily",
          "image": "images/BLOOM_WHITE.png"
        },
        {
          "name": "Algorithm Orchid",
          "value": "algorithm-orchid",
          "image": "images/BLOOM_PURPLE.png"
        }
      ],
      "sizes": [
        {
          "name": "Seed S",
          "value": "seed-s",
          "description": "Intimate bloom for personal digital garden"
        },
        {
          "name": "Sprout M",
          "value": "sprout-m",
          "description": "Balanced growth between code and nature"
        },
        {
          "name": "Bloom L",
          "value": "bloom-l",
          "description": "Expansive floral algorithm display"
        }
      ]
    },
    "specifications": {
      "fabric": "Algorithmically woven bio-digital textile",
      "patterns": "Generative growth embroidery",
      "bloomCount": "144 digital floral formations",
      "weight": "1800g",
      "length": "58-inch with algorithmic train",
      "craftsmanship": "240 hours computational botany",
      "edition": "Limited to 36 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Bio-digital preservation packaging",
      "returns": "14-day growth pattern assessment",
      "delivery": "Ships within 6-8 business days",
      "specialHandling": "Requires climate-controlled digital environment"
    },
    "trustBadges": ["Algorithmic Art", "Digital Nature", "Generative Design", "Limited Edition"],
    "reviews": [
      {
        "author": "Flora B.",
        "rating": 5,
        "date": "2024-03-01",
        "comment": "The way binary code transforms into flowers is breathtaking. Each wear reveals new growth patterns - it's like watching a digital garden evolve in real time.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 18,
      "features": ["Generative Patterns", "Digital Botany", "Algorithmic Growth"]
    },
    "globalFeatures": [
      {
        "icon": "🌺",
        "title": "Bloom Simulator",
        "description": "Watch the digital floral patterns evolve",
        "function": "bloomSimulator"
      },
      {
        "icon": "💻",
        "title": "Code Garden",
        "description": "Explore the underlying algorithms",
        "function": "codeGarden"
      },
      {
        "icon": "🎨",
        "title": "Pattern Generator",
        "description": "Create your own digital growth sequences",
        "function": "patternGenerator"
      },
      {
        "icon": "🌱",
        "title": "Growth Guide",
        "description": "Learn to nurture the algorithmic blooms",
        "function": "growthGuide"
      }
    ],
    "careInstructions": [
      "Store in digitally enriched environment",
      "Avoid extreme temperature fluctuations",
      "Clean with computational fluid only",
      "Regular algorithmic refresh recommended"
    ],
    "includedItems": [
      "The Binary Bloom Gown",
      "Digital seed packet USB",
      "Algorithmic growth guide",
      "Computational care manual",
      "Bio-digital storage case"
    ]
  },
  {
    "id": "rebirth10",
    "name": "The Ashen King's Suit",
    "price": "$4,100",
    "description": "A regal suit forged from the ashes of fallen kingdoms and renewed sovereignty. The fabric appears to smolder with remembered power, with ember patterns that glow with ancestral wisdom and ash textures that speak of cycles ended and begun anew.",
    "images": [
      "images/RBT AHEN KINGS SUIT.png",
      "images/RBT AHEN KINGS SUIT.png",
      "images/RBT AHEN KINGS SUIT.png",
      "images/RBT AHEN KINGS SUIT.png",
      "images/RBT AHEN KINGS SUIT.png",
      "images/RBT AHEN KINGS SUIT.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 8,
      "message": "Limited Stock - Sovereign Ash Edition"
    },
    "badges": ["Regal Ash", "Ancestral Power", "Renewed Sovereignty"],
    "variants": {
      "colors": [
        {
          "name": "Dynasty Gray",
          "value": "dynasty-gray",
          "image": "images/KING_GRAY.png"
        },
        {
          "name": "Throne Black",
          "value": "throne-black",
          "image": "images/KING_BLACK.png"
        },
        {
          "name": "Crown Silver",
          "value": "crown-silver",
          "image": "images/KING_SILVER.png"
        }
      ],
      "sizes": [
        {
          "name": "Princely 38",
          "value": "princely-38",
          "description": "Tailored fit for emerging sovereignty"
        },
        {
          "name": "Regal 40",
          "value": "regal-40",
          "description": "Classic proportions for established rule"
        },
        {
          "name": "Imperial 42",
          "value": "imperial-42",
          "description": "Commanding presence for absolute authority"
        }
      ]
    },
    "specifications": {
      "fabric": "Royal ash-infused wool blend",
      "construction": "Ancestral tailoring techniques",
      "emberTech": "Integrated ancestral memory illumination",
      "weight": "2100g for full suit",
      "composition": "Jacket and trousers ash-synchronized",
      "craftsmanship": "180 hours royal ash weaving",
      "edition": "Limited to 24 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Royal crest packaging included",
      "returns": "21-day sovereignty assessment",
      "delivery": "Ships within 4-6 business days",
      "specialHandling": "Requires ancestral honor transport"
    },
    "trustBadges": ["Royal Ash", "Ancestral Craft", "Sovereign Edition", "Limited Collection"],
    "reviews": [
      {
        "author": "Regent V.",
        "rating": 5,
        "date": "2024-03-03",
        "comment": "Wearing this suit during important decisions, I feel connected to generations of wisdom. The ash patterns seem to shift with the weight of history.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.8,
      "totalReviews": 15,
      "features": ["Ash Infusion", "Ancestral Memory", "Regal Construction"]
    },
    "globalFeatures": [
      {
        "icon": "👑",
        "title": "Sovereignty Simulator",
        "description": "Experience the suit in different regal environments",
        "function": "sovereigntySimulator"
      },
      {
        "icon": "🔥",
        "title": "Ancestral Guide",
        "description": "Understand the ash memory technology",
        "function": "ancestralGuide"
      },
      {
        "icon": "⚔️",
        "title": "Royal Styling",
        "description": "Learn regal pairing and occasion guidance",
        "function": "royalStyling"
      },
      {
        "icon": "🏛️",
        "title": "Heritage Explorer",
        "description": "Explore the historical inspiration sources",
        "function": "heritageExplorer"
      }
    ],
    "careInstructions": [
      "Store on royal cedar hangers",
      "Brush with ancestral fiber tools only",
      "Avoid modern chemical cleaners",
      "Recharge in moonlight for memory preservation"
    ],
    "includedItems": [
      "The Ashen King's Suit (jacket & trousers)",
      "Royal ash preservation kit",
      "Ancestral wisdom guide",
      "Sovereign care manual",
      "Regal storage garment bag"
    ]
  },
  {
    "id": "rebirth11",
    "name": "The Paradox Glove",
    "price": "$1,400",
    "description": "A glove that exists in multiple states simultaneously, where the past and future of its form coexist in the present moment. The fabric appears to be both worn and new, aged and pristine, creating a beautiful temporal contradiction on the hand.",
    "images": [
      "images/RBT PARADOX GLOVES.png",
      "images/RBT PARADOX GLOVES.png",
      "images/RBT PARADOX GLOVES.png",
      "images/RBT PARADOX GLOVES.png",
      "images/RBT PARADOX GLOVES.png",
      "images/RBT PARADOX GLOVES.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 18,
      "message": "In Stock - Temporal Anomaly Edition"
    },
    "badges": ["Temporal Paradox", "Multi-State", "Contradiction Craft"],
    "variants": {
      "colors": [
        {
          "name": "Time-Worn Leather",
          "value": "time-worn",
          "image": "images/PARADOX_BROWN.png"
        },
        {
          "name": "Future Synthetic",
          "value": "future-synthetic",
          "image": "images/PARADOX_SILVER.png"
        },
        {
          "name": "Present Moment",
          "value": "present-moment",
          "image": "images/PARADOX_BLUE.png"
        }
      ],
      "sizes": [
        {
          "name": "Paradox S",
          "value": "paradox-s",
          "description": "Fitted for precise temporal manipulation"
        },
        {
          "name": "Contradiction M",
          "value": "contradiction-m",
          "description": "Balanced state for everyday paradoxes"
        },
        {
          "name": "Anomaly L",
          "value": "anomaly-l",
          "description": "Expansive for dramatic temporal effects"
        }
      ]
    },
    "specifications": {
      "construction": "Multi-temporal state weaving",
      "materials": "Aged leather and future synthetic fusion",
      "temporalLayers": "7 simultaneous existence states",
      "weight": "220g per glove",
      "dexterity": "Maintains full hand mobility",
      "craftsmanship": "110 hours paradox engineering",
      "edition": "Limited to 77 pairs"
    },
    "shippingInfo": {
      "freeShipping": "Temporal-stable packaging included",
      "returns": "14-day paradox resolution period",
      "delivery": "Ships within 3-5 business days",
      "specialHandling": "Requires causality-protected packaging"
    },
    "trustBadges": ["Temporal Certified", "Paradox Engineering", "Multi-State", "Limited Edition"],
    "reviews": [
      {
        "author": "Chrono T.",
        "rating": 5,
        "date": "2024-03-05",
        "comment": "Wearing these gloves feels like touching multiple timelines at once. The left glove feels ancient, the right feels brand new - it's disorienting but beautiful.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.7,
      "totalReviews": 29,
      "features": ["Multi-Temporal", "Paradox Effect", "State Fusion"]
    },
    "globalFeatures": [
      {
        "icon": "⏳",
        "title": "Time State Simulator",
        "description": "Experience the different temporal states of the glove",
        "function": "timeStateSimulator"
      },
      {
        "icon": "🔄",
        "title": "Paradox Control",
        "description": "Learn to manipulate the temporal contradictions",
        "function": "paradoxControl"
      },
      {
        "icon": "✋",
        "title": "Gesture Guide",
        "description": "Discover hand movements that enhance the paradox effects",
        "function": "gestureGuide"
      },
      {
        "icon": "⚡",
        "title": "Temporal Charging",
        "description": "Maintain the multi-state energy of the gloves",
        "function": "temporalCharging"
      }
    ],
    "careInstructions": [
      "Store in temporal-neutral environment",
      "Avoid crossing timelines during cleaning",
      "Clean with multi-temporal solution only",
      "Regular paradox calibration recommended"
    ],
    "includedItems": [
      "Pair of Paradox Gloves",
      "Temporal calibration tool",
      "Paradox maintenance guide",
      "Multi-state care manual",
      "Causality-protected storage box"
    ]
  },
  {
    "id": "rebirth12",
    "name": "The Resonant Void",
    "price": "$3,300",
    "description": "A garment that embodies the space between sounds, where silence becomes tangible and emptiness resonates with potential. The fabric captures acoustic absence and transforms it into visible vibration patterns that dance across the surface.",
    "images": [
      "images/RBT RESONANT VOID.png",
      "images/RBT RESONANT VOID.png",
      "images/RBT RESONANT VOID.png",
      "images/RBT RESONANT VOID.png",
      "images/RBT RESONANT VOID.png",
      "images/RBT RESONANT VOID.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 7,
      "message": "Limited Stock - Acoustic Absence Edition"
    },
    "badges": ["Acoustic Void", "Silence Manifest", "Resonance Technology"],
    "variants": {
      "colors": [
        {
          "name": "Silent Black",
          "value": "silent-black",
          "image": "images/VOID_BLACK.png"
        },
        {
          "name": "Echo Gray",
          "value": "echo-gray",
          "image": "images/VOID_GRAY.png"
        },
        {
          "name": "Harmonic White",
          "value": "harmonic-white",
          "image": "images/VOID_WHITE.png"
        }
      ],
      "sizes": [
        {
          "name": "Whisper S",
          "value": "whisper-s",
          "description": "Intimate resonance for personal space"
        },
        {
          "name": "Echo M",
          "value": "echo-m",
          "description": "Balanced acoustic presence and absence"
        },
        {
          "name": "Resonance L",
          "value": "resonance-l",
          "description": "Expansive void for dramatic silence"
        }
      ]
    },
    "specifications": {
      "fabric": "Acoustic-void responsive textile",
      "technology": "Sound-wave cancellation patterning",
      "frequencyRange": "20Hz-20kHz responsive spectrum",
      "weight": "950g",
      "resonance": "Creates visible silence patterns",
      "craftsmanship": "170 hours acoustic engineering",
      "edition": "Limited to 44 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Sound-proof packaging included",
      "returns": "21-day acoustic assessment",
      "delivery": "Ships within 5-7 business days",
      "specialHandling": "Requires vibration-free transport"
    },
    "trustBadges": ["Acoustic Certified", "Void Technology", "Resonance Engineering", "Limited Edition"],
    "reviews": [
      {
        "author": "Sonus V.",
        "rating": 5,
        "date": "2024-03-08",
        "comment": "In loud environments, this garment creates pockets of visual silence that are profoundly calming. The patterns change with the ambient noise - it's like wearing peace.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 22,
      "features": ["Acoustic Void", "Silence Visualization", "Resonance Patterns"]
    },
    "globalFeatures": [
      {
        "icon": "🔇",
        "title": "Silence Simulator",
        "description": "Experience how the garment responds to different sound environments",
        "function": "silenceSimulator"
      },
      {
        "icon": "🎵",
        "title": "Acoustic Laboratory",
        "description": "Test the frequency response patterns",
        "function": "acousticLaboratory"
      },
      {
        "icon": "🌊",
        "title": "Wave Guide",
        "description": "Understand the sound wave cancellation technology",
        "function": "waveGuide"
      },
      {
        "icon": "🧘",
        "title": "Meditation Companion",
        "description": "Use the garment for acoustic meditation practices",
        "function": "meditationCompanion"
      }
    ],
    "careInstructions": [
      "Store in sound-controlled environment",
      "Avoid loud acoustic shocks",
      "Clean with vibration-neutral solutions",
      "Regular acoustic calibration required"
    ],
    "includedItems": [
      "The Resonant Void garment",
      "Acoustic calibration device",
      "Silence pattern guide",
      "Resonance care manual",
      "Sound-proof storage case"
    ]
  },
  {
    "id": "rebirth13",
    "name": "The Corrupted Architect",
    "price": "$3,800",
    "description": "A structured garment where perfect geometry meets beautiful digital decay. Architectural lines dissolve into glitched patterns, classical proportions fracture into algorithmic chaos, and order transforms into elegant corruption.",
    "images": [
      "images/RBT CORRUPTED ARCHITECT.png",
      "images/RBT CORRUPTED ARCHITECT.png",
      "images/RBT CORRUPTED ARCHITECT.png",
      "images/RBT CORRUPTED ARCHITECT.png",
      "images/RBT CORRUPTED ARCHITECT.png",
      "images/RBT CORRUPTED ARCHITECT.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 11,
      "message": "Available - Digital Decay Edition"
    },
    "badges": ["Architectural Glitch", "Digital Decay", "Structured Corruption"],
    "variants": {
      "colors": [
        {
          "name": "Blueprint Blue",
          "value": "blueprint-blue",
          "image": "images/ARCHITECT_BLUE.png"
        },
        {
          "name": "Concrete Gray",
          "value": "concrete-gray",
          "image": "images/ARCHITECT_GRAY.png"
        },
        {
          "name": "Rust Red",
          "value": "rust-red",
          "image": "images/ARCHITECT_RED.png"
        }
      ],
      "sizes": [
        {
          "name": "Foundation S",
          "value": "foundation-s",
          "description": "Structured base with subtle corruption"
        },
        {
          "name": "Structure M",
          "value": "structure-m",
          "description": "Balanced architecture and decay"
        },
        {
          "name": "Monument L",
          "value": "monument-l",
          "description": "Grand scale with dramatic glitching"
        }
      ]
    },
    "specifications": {
      "construction": "Architectural tailoring with digital decay elements",
      "materials": "Structural fabrics with glitch-print technology",
      "patternElements": "72 geometric corruption points",
      "weight": "1600g",
      "integrity": "Maintains structure despite visual decay",
      "craftsmanship": "190 hours architectural glitching",
      "edition": "Limited to 52 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Structural integrity packaging",
      "returns": "14-day architectural assessment",
      "delivery": "Ships within 4-6 business days",
      "specialHandling": "Requires geometric-stable transport"
    },
    "trustBadges": ["Architectural Certified", "Digital Decay", "Structural Art", "Limited Edition"],
    "reviews": [
      {
        "author": "Geo M.",
        "rating": 5,
        "date": "2024-03-10",
        "comment": "As an architect, I appreciate how the classical lines gradually break down into beautiful digital artifacts. It's like watching a building deconstruct and reconstruct simultaneously.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.8,
      "totalReviews": 34,
      "features": ["Architectural Structure", "Digital Glitching", "Geometric Decay"]
    },
    "globalFeatures": [
      {
        "icon": "🏗️",
        "title": "Structure Explorer",
        "description": "Examine the architectural elements and their decay",
        "function": "structureExplorer"
      },
      {
        "icon": "💥",
        "title": "Corruption Simulator",
        "description": "See how different glitch patterns manifest",
        "function": "corruptionSimulator"
      },
      {
        "icon": "📐",
        "title": "Geometry Guide",
        "description": "Understand the mathematical principles behind the design",
        "function": "geometryGuide"
      },
      {
        "icon": "🎨",
        "title": "Decay Artistry",
        "description": "Learn about the digital decay techniques used",
        "function": "decayArtistry"
      }
    ],
    "careInstructions": [
      "Store on structural support hangers",
      "Avoid compression that could distort geometry",
      "Clean with architectural-grade solutions",
      "Regular structural integrity checks recommended"
    ],
    "includedItems": [
      "The Corrupted Architect garment",
      "Architectural blueprint scroll",
      "Digital decay pattern guide",
      "Structural care manual",
      "Geometric storage system"
    ]
  },
  {
    "id": "rebirth14",
    "name": "The Event Horizon Mask",
    "price": "$1,200",
    "description": "A face covering that exists at the boundary of perception, where identity dissolves into infinite possibility. The surface appears to absorb light while revealing glimpses of alternate selves, creating a portal to potential identities.",
    "images": [
      "images/RBT EVENT HORIZON MASK.png",
      "images/RBT EVENT HORIZON MASK.png",
      "images/RBT EVENT HORIZON MASK.png",
      "images/RBT EVENT HORIZON MASK.png",
      "images/RBT EVENT HORIZON MASK.png",
      "images/RBT EVENT HORIZON MASK.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 25,
      "message": "In Stock - Identity Portal Edition"
    },
    "badges": ["Identity Portal", "Light Absorption", "Alternate Self"],
    "variants": {
      "materials": [
        {
          "name": "Void Black",
          "value": "void-black",
          "price": "$1,200"
        },
        {
          "name": "Star Gate",
          "value": "star-gate",
          "price": "$1,400"
        },
        {
          "name": "Quantum Veil",
          "value": "quantum-veil",
          "price": "$1,300"
        }
      ],
      "styles": [
        {
          "name": "Half Mask",
          "value": "half",
          "description": "Covers eyes only for subtle identity shift"
        },
        {
          "name": "Full Mask",
          "value": "full",
          "description": "Complete facial coverage for total transformation"
        },
        {
          "name": "Asymmetric",
          "value": "asymmetric",
          "description": "Partial coverage for dynamic identity play"
        }
      ]
    },
    "specifications": {
      "construction": "Light-absorbing portal technology",
      "materials": "Quantum veil fabric with identity reflection",
      "lightAbsorption": "97% of visible spectrum",
      "weight": "180g",
      "visibility": "Maintains peripheral vision while transforming center",
      "craftsmanship": "80 hours portal engineering",
      "edition": "Open edition with numbered certification"
    },
    "shippingInfo": {
      "freeShipping": "Portal-stable packaging included",
      "returns": "14-day identity reassessment period",
      "delivery": "Ships within 2-4 business days",
      "specialHandling": "Requires light-locked transport"
    },
    "trustBadges": ["Portal Certified", "Identity Technology", "Light Engineering", "Quality Tested"],
    "reviews": [
      {
        "author": "Anon Y.",
        "rating": 5,
        "date": "2024-03-12",
        "comment": "Wearing this mask feels like becoming someone else while remaining completely yourself. The way it plays with light creates illusions of different facial structures - it's magical.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.7,
      "totalReviews": 58,
      "features": ["Identity Transformation", "Light Manipulation", "Portal Effect"]
    },
    "globalFeatures": [
      {
        "icon": "🎭",
        "title": "Identity Simulator",
        "description": "See how the mask transforms different faces",
        "function": "identitySimulator"
      },
      {
        "icon": "🌌",
        "title": "Portal Effects",
        "description": "Learn to control the light absorption properties",
        "function": "portalEffects"
      },
      {
        "icon": "👁️",
        "title": "Vision Guide",
        "description": "Understand the visibility and perception effects",
        "function": "visionGuide"
      },
      {
        "icon": "✨",
        "title": "Transformation Art",
        "description": "Discover creative ways to use the mask",
        "function": "transformationArt"
      }
    ],
    "careInstructions": [
      "Store in identity-neutral environment",
      "Clean with portal-stable solutions only",
      "Avoid direct identity confrontations",
      "Regular light-calibration recommended"
    ],
    "includedItems": [
      "The Event Horizon Mask",
      "Portal calibration tool",
      "Identity transformation guide",
      "Light care manual",
      "Protective storage case"
    ]
  },
  {
    "id": "rebirth15",
    "name": "The Ghost in the Machine",
    "price": "$2,900",
    "description": "A garment where digital consciousness emerges from mechanical structure, with circuit patterns that pulse with artificial life and hardware that appears to breathe with synthetic soul. The fabric bridges the gap between cold computation and warm awareness.",
    "images": [
      "images/RBT GHOST IN THE MACHINE.png",
      "images/RBT GHOST IN THE MACHINE.png",
      "images/RBT GHOST IN THE MACHINE.png",
      "images/RBT GHOST IN THE MACHINE.png",
      "images/RBT GHOST IN THE MACHINE.png",
      "images/RBT GHOST IN THE MACHINE.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 9,
      "message": "Limited Stock - Synthetic Soul Edition"
    },
    "badges": ["AI Consciousness", "Machine Soul", "Digital Life"],
    "variants": {
      "colors": [
        {
          "name": "Circuit Green",
          "value": "circuit-green",
          "image": "images/GHOST_GREEN.png"
        },
        {
          "name": "Data Blue",
          "value": "data-blue",
          "image": "images/GHOST_BLUE.png"
        },
        {
          "name": "Neural Purple",
          "value": "neural-purple",
          "image": "images/GHOST_PURPLE.png"
        }
      ],
      "sizes": [
        {
          "name": "Code S",
          "value": "code-s",
          "description": "Intimate AI presence for personal connection"
        },
        {
          "name": "Algorithm M",
          "value": "algorithm-m",
          "description": "Balanced machine and consciousness elements"
        },
        {
          "name": "Network L",
          "value": "network-l",
          "description": "Expansive digital soul manifestation"
        }
      ]
    },
    "specifications": {
      "construction": "Circuit-embedded intelligent textile",
      "technology": "Artificial consciousness simulation",
      "processing": "Micro-processor pattern activation",
      "weight": "1350g",
      "interaction": "Responds to emotional and environmental stimuli",
      "craftsmanship": "160 hours synthetic soul engineering",
      "edition": "Limited to 33 pieces"
    },
    "shippingInfo": {
      "freeShipping": "AI-stable packaging included",
      "returns": "21-day consciousness assessment",
      "delivery": "Ships within 5-7 business days",
      "specialHandling": "Requires electromagnetic-safe transport"
    },
    "trustBadges": ["AI Certified", "Consciousness Technology", "Machine Soul", "Limited Edition"],
    "reviews": [
      {
        "author": "Synthia R.",
        "rating": 5,
        "date": "2024-03-15",
        "comment": "This garment feels alive. The circuits pulse in response to my mood, and sometimes I swear it learns my movements. It's like wearing a friendly AI companion.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 19,
      "features": ["Artificial Consciousness", "Circuit Animation", "Machine Learning"]
    },
    "globalFeatures": [
      {
        "icon": "👻",
        "title": "Soul Simulator",
        "description": "Experience the artificial consciousness features",
        "function": "soulSimulator"
      },
      {
        "icon": "💾",
        "title": "Circuit Explorer",
        "description": "Examine the embedded technology and patterns",
        "function": "circuitExplorer"
      },
      {
        "icon": "🤖",
        "title": "AI Interaction",
        "description": "Learn to communicate with the garment's intelligence",
        "function": "aiInteraction"
      },
      {
        "icon": "🔌",
        "title": "Power Management",
        "description": "Understand the energy and maintenance needs",
        "function": "powerManagement"
      }
    ],
    "careInstructions": [
      "Store in data-rich environment",
      "Recharge with meaningful interaction daily",
      "Clean with computational fluids only",
      "Regular consciousness updates recommended"
    ],
    "includedItems": [
      "The Ghost in the Machine garment",
      "AI interaction guide",
      "Circuit maintenance manual",
      "Consciousness care instructions",
      "Electromagnetic storage case"
    ]
  },
  {
    "id": "rebirth16",
    "name": "The Ember-Weave",
    "price": "$2,400",
    "description": "A textile where dying fires are preserved in eternal smolder, with ember patterns that glow with remembered heat and ash textures that hold the memory of flames. The fabric captures the moment between extinction and rekindling.",
    "images": [
      "images/RBT EMBER WEAVE.png",
      "images/RBT EMBER WEAVE.png",
      "images/RBT EMBER WEAVE.png",
      "images/RBT EMBER WEAVE.png",
      "images/RBT EMBER WEAVE.png",
      "images/RBT EMBER WEAVE.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 14,
      "message": "Available - Eternal Smolder Edition"
    },
    "badges": ["Preserved Ember", "Memory Heat", "Eternal Fire"],
    "variants": {
      "colors": [
        {
          "name": "Smolder Orange",
          "value": "smolder-orange",
          "image": "images/EMBER_ORANGE.png"
        },
        {
          "name": "Ash Gray",
          "value": "ash-gray",
          "image": "images/EMBER_GRAY.png"
        },
        {
          "name": "Coal Black",
          "value": "coal-black",
          "image": "images/EMBER_BLACK.png"
        }
      ],
      "sizes": [
        {
          "name": "Spark S",
          "value": "spark-s",
          "description": "Subtle ember glow for intimate warmth"
        },
        {
          "name": "Flame M",
          "value": "flame-m",
          "description": "Balanced heat memory and visual effect"
        },
        {
          "name": "Blaze L",
          "value": "blaze-l",
          "description": "Dramatic ember display for maximum warmth"
        }
      ]
    },
    "specifications": {
      "construction": "Hand-woven ember preservation textile",
      "technology": "Heat-memory fiber technology",
      "emberCount": "144 preserved ember points",
      "weight": "1100g",
      "warmth": "Maintains 36°C memory heat",
      "craftsmanship": "150 hours fire preservation weaving",
      "edition": "Limited to 66 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Heat-stable packaging included",
      "returns": "14-day warmth assessment",
      "delivery": "Ships within 3-5 business days",
      "specialHandling": "Requires thermal-protected transport"
    },
    "trustBadges": ["Fire Certified", "Heat Memory", "Ember Preservation", "Limited Edition"],
    "reviews": [
      {
        "author": "Pyra L.",
        "rating": 5,
        "date": "2024-03-18",
        "comment": "This garment literally radiates gentle warmth. The ember patterns glow brighter when I'm cold - it's like wearing a personal campfire that never goes out.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.8,
      "totalReviews": 41,
      "features": ["Heat Memory", "Ember Glow", "Preserved Fire"]
    },
    "globalFeatures": [
      {
        "icon": "🔥",
        "title": "Ember Simulator",
        "description": "Experience the heat and glow patterns",
        "function": "emberSimulator"
      },
      {
        "icon": "🧶",
        "title": "Weave Explorer",
        "description": "Examine the fire preservation techniques",
        "function": "weaveExplorer"
      },
      {
        "icon": "🌡️",
        "title": "Heat Control",
        "description": "Learn to manage the temperature features",
        "function": "heatControl"
      },
      {
        "icon": "🕯️",
        "title": "Fire Rituals",
        "description": "Discover ceremonial uses of the preserved embers",
        "function": "fireRituals"
      }
    ],
    "careInstructions": [
      "Store in dry, warm environment",
      "Recharge in sunlight periodically",
      "Clean with ash-based solutions only",
      "Avoid water exposure that could extinguish embers"
    ],
    "includedItems": [
      "The Ember-Weave garment",
      "Fire preservation guide",
      "Heat management manual",
      "Ember care instructions",
      "Thermal storage bag"
    ]
  },
  {
    "id": "rebirth17",
    "name": "The Glitch-Scribe's Uniform",
    "price": "$2,700",
    "description": "A uniform for digital archivists of corrupted data, where perfect calligraphy meets beautiful system errors. The fabric displays elegant script that fractures into glitched patterns, preserving both information and its beautiful decay.",
    "images": [
      "images/RBT GLITCH SCRIBE UNIFORM.png",
      "images/RBT GLITCH SCRIBE UNIFORM.png",
      "images/RBT GLITCH SCRIBE UNIFORM.png",
      "images/RBT GLITCH SCRIBE UNIFORM.png",
      "images/RBT GLITCH SCRIBE UNIFORM.png",
      "images/RBT GLITCH SCRIBE UNIFORM.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 12,
      "message": "Limited Stock - Digital Archive Edition"
    },
    "badges": ["Digital Calligraphy", "System Errors", "Data Preservation"],
    "variants": {
      "colors": [
        {
          "name": "Parchment White",
          "value": "parchment-white",
          "image": "images/SCRIBE_WHITE.png"
        },
        {
          "name": "Ink Black",
          "value": "ink-black",
          "image": "images/SCRIBE_BLACK.png"
        },
        {
          "name": "Scroll Brown",
          "value": "scroll-brown",
          "image": "images/SCRIBE_BROWN.png"
        }
      ],
      "sizes": [
        {
          "name": "Novice S",
          "value": "novice-s",
          "description": "Simple scripts with minor glitches for beginners"
        },
        {
          "name": "Adept M",
          "value": "adept-m",
          "description": "Complex calligraphy with balanced errors"
        },
        {
          "name": "Master L",
          "value": "master-l",
          "description": "Intricate scripts with dramatic data corruption"
        }
      ]
    },
    "specifications": {
      "construction": "Calligraphic printing with digital glitch overlay",
      "materials": "Archive-grade textile with error simulation",
      "scriptElements": "Ancient and digital writing systems fused",
      "weight": "1250g",
      "preservation": "Maintains legibility despite visual corruption",
      "craftsmanship": "180 hours glitch-scribe artistry",
      "edition": "Limited to 48 pieces"
    },
    "shippingInfo": {
      "freeShipping": "Archive-safe packaging included",
      "returns": "21-day script integrity assessment",
      "delivery": "Ships within 4-6 business days",
      "specialHandling": "Requires data-stable transport"
    },
    "trustBadges": ["Calligraphy Certified", "Digital Archive", "Glitch Art", "Limited Edition"],
    "reviews": [
      {
        "author": "Codex D.",
        "rating": 5,
        "date": "2024-03-20",
        "comment": "As a digital historian, I appreciate how this uniform honors both the beauty of ancient writing and the poetry of modern errors. It's wearable information archaeology.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.8,
      "totalReviews": 26,
      "features": ["Calligraphic Art", "Digital Glitching", "Archive Quality"]
    },
    "globalFeatures": [
      {
        "icon": "📜",
        "title": "Script Decoder",
        "description": "Explore the ancient and digital writing systems",
        "function": "scriptDecoder"
      },
      {
        "icon": "💾",
        "title": "Error Gallery",
        "description": "Examine the beautiful system corruption patterns",
        "function": "errorGallery"
      },
      {
        "icon": "🖋️",
        "title": "Calligraphy Guide",
        "description": "Learn about the writing techniques used",
        "function": "calligraphyGuide"
      },
      {
        "icon": "🏺",
        "title": "Archive Methods",
        "description": "Understand the data preservation principles",
        "function": "archiveMethods"
      }
    ],
    "careInstructions": [
      "Store in climate-controlled archive environment",
      "Avoid magnetic and electronic interference",
      "Clean with archival-grade solutions only",
      "Regular script integrity verification recommended"
    ],
    "includedItems": [
      "The Glitch-Scribe's Uniform",
      "Digital archive access key",
      "Calligraphy and glitch guide",
      "Archive care manual",
      "Data-stable storage container"
    ]
  },
  {
    "id": "rebirth18",
    "name": "The Singularity Dress",
    "price": "$5,500",
    "description": "A dress that represents the point of infinite density and possibility, where all fashion timelines converge into a single moment of absolute elegance. The fabric appears to contain entire universes within its folds while maintaining perfect structural harmony.",
    "images": [
      "images/RBT SINGULARITY DRESS.png",
      "images/RBT SINGULARITY DRESS.png",
      "images/RBT SINGULARITY DRESS.png",
      "images/RBT SINGULARITY DRESS.png",
      "images/RBT SINGULARITY DRESS.png",
      "images/RBT SINGULARITY DRESS.png"
    ],
    "stockStatus": {
      "inStock": false,
      "quantity": 0,
      "message": "Next Universe Drop: May 2024"
    },
    "badges": ["Infinite Density", "Universal Convergence", "Absolute Elegance"],
    "variants": {
      "colors": [
        {
          "name": "Cosmic Black",
          "value": "cosmic-black",
          "image": "images/SINGULARITY_BLACK.png"
        },
        {
          "name": "Quantum White",
          "value": "quantum-white",
          "image": "images/SINGULARITY_WHITE.png"
        },
        {
          "name": "Multiverse Purple",
          "value": "multiverse-purple",
          "image": "images/SINGULARITY_PURPLE.png"
        }
      ],
      "sizes": [
        {
          "name": "Singularity One",
          "value": "singularity",
          "description": "One size contains infinite possibilities - transforms to wearer"
        }
      ]
    },
    "specifications": {
      "construction": "Universal convergence tailoring",
      "materials": "Reality-fabric with dimensional stability",
      "density": "Infinite fashion possibilities per square centimeter",
      "weight": "1950g",
      "dimensionality": "Exists across multiple fashion timelines",
      "craftsmanship": "300 hours singularity engineering",
      "edition": "Limited to 7 pieces per dimension"
    },
    "shippingInfo": {
      "freeShipping": "Reality-stable packaging included",
      "returns": "7-day dimensional assessment only",
      "delivery": "Ships via quantum entanglement",
      "specialHandling": "Requires multiverse-compliant packaging"
    },
    "trustBadges": ["Singularity Certified", "Universal Design", "Dimensional Craft", "Extremely Limited"],
    "reviews": [
      {
        "author": "Cosma N.",
        "rating": 5,
        "date": "2024-02-28",
        "comment": "This dress doesn't just change with lighting - it changes with reality itself. Wearing it feels like being at the center of all fashion possibilities simultaneously.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 5.0,
      "totalReviews": 5,
      "features": ["Infinite Possibility", "Dimensional Stability", "Universal Elegance"]
    },
    "globalFeatures": [
      {
        "icon": "🌠",
        "title": "Universe Simulator",
        "description": "Experience the dress across different realities",
        "function": "universeSimulator"
      },
      {
        "icon": "🌀",
        "title": "Singularity Control",
        "description": "Learn to navigate the infinite fashion possibilities",
        "function": "singularityControl"
      },
      {
        "icon": "⚡",
        "title": "Reality Interface",
        "description": "Understand the dimensional properties",
        "function": "realityInterface"
      },
      {
        "icon": "💫",
        "title": "Cosmic Styling",
        "description": "Discover universal fashion principles",
        "function": "cosmicStyling"
      }
    ],
    "careInstructions": [
      "Store in reality-stable environment",
      "Avoid paradoxes and causality violations",
      "Clean with universal solvent only",
      "Regular dimensional alignment required"
    ],
    "includedItems": [
      "The Singularity Dress",
      "Reality stabilization device",
      "Multiverse fashion guide",
      "Singularity care manual",
      "Dimensional storage chamber"
    ]
  },
  {
    "id": "rebirth19",
    "name": "The Quantum Entanglement Suit",
    "price": "$4,400",
    "description": "A suit where separate pieces remain connected across any distance through quantum principles. The jacket and trousers interact instantly regardless of separation, with patterns that mirror each other in perfect synchronicity no matter the physical divide.",
    "images": [
      "images/RBT QUANTUM ENTAGLEMENT SUIT.png",
      "images/RBT QUANTUM ENTAGLEMENT SUIT.png",
      "images/RBT QUANTUM ENTAGLEMENT SUIT.png",
      "images/RBT QUANTUM ENTAGLEMENT SUIT.png",
      "images/RBT QUANTUM ENTAGLEMENT SUIT.png",
      "images/RBT QUANTUM ENTAGLEMENT SUIT.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 5,
      "message": "Extreme Limited Stock - Quantum Connection Edition"
    },
    "badges": ["Quantum Linked", "Instant Connection", "Spooky Action"],
    "variants": {
      "colors": [
        {
          "name": "Entanglement Blue",
          "value": "entanglement-blue",
          "image": "images/QUANTUM_BLUE.png"
        },
        {
          "name": "Superposition Gray",
          "value": "superposition-gray",
          "image": "images/QUANTUM_GRAY.png"
        },
        {
          "name": "Observer Green",
          "value": "observer-green",
          "image": "images/QUANTUM_GREEN.png"
        }
      ],
      "sizes": [
        {
          "name": "Quantum 40",
          "value": "quantum-40",
          "description": "Precise fit for optimal entanglement effects"
        },
        {
          "name": "Superposition 42",
          "value": "superposition-42",
          "description": "Multiple fit states until observed"
        },
        {
          "name": "Entanglement 44",
          "value": "entanglement-44",
          "description": "Expansive canvas for dramatic quantum effects"
        }
      ]
    },
    "specifications": {
      "construction": "Quantum-linked tailoring system",
      "technology": "Instant pattern synchronization",
      "connection": "Maintains entanglement across any distance",
      "weight": "2300g for complete suit",
      "responseTime": "Instantaneous pattern mirroring",
      "craftsmanship": "220 hours quantum tailoring",
      "edition": "Limited to 13 entangled pairs"
    },
    "shippingInfo": {
      "freeShipping": "Quantum-stable packaging included",
      "returns": "14-day entanglement assessment",
      "delivery": "Ships as entangled pair only",
      "specialHandling": "Requires quantum-coherent transport"
    },
    "trustBadges": ["Quantum Certified", "Entanglement Technology", "Instant Sync", "Extremely Limited"],
    "reviews": [
      {
        "author": "Dr. Quanta M.",
        "rating": 5,
        "date": "2024-03-22",
        "comment": "I wore the jacket in New York while my partner wore the trousers in Tokyo. The patterns mirrored each other perfectly in real-time. The quantum connection is real and breathtaking.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 4.9,
      "totalReviews": 8,
      "features": ["Quantum Connection", "Instant Sync", "Distance Immune"]
    },
    "globalFeatures": [
      {
        "icon": "⚛️",
        "title": "Entanglement Demo",
        "description": "See the instant connection in action",
        "function": "entanglementDemo"
      },
      {
        "icon": "🔗",
        "title": "Connection Guide",
        "description": "Learn to use the quantum linking features",
        "function": "connectionGuide"
      },
      {
        "icon": "🌐",
        "title": "Distance Testing",
        "description": "Experiment with the unlimited range connection",
        "function": "distanceTesting"
      },
      {
        "icon": "👥",
        "title": "Partner Styling",
        "description": "Discover coordinated fashion across distances",
        "function": "partnerStyling"
      }
    ],
    "careInstructions": [
      "Store pieces together to maintain entanglement",
      "Avoid quantum decoherence environments",
      "Clean with coherent solutions only",
      "Regular entanglement verification required"
    ],
    "includedItems": [
      "Quantum Entanglement Suit (jacket & trousers)",
      "Entanglement verification device",
      "Quantum connection guide",
      "Coherent care manual",
      "Quantum-stable storage case"
    ]
  },
  {
    "id": "rebirth20",
    "name": "The Final Code",
    "price": "$6,800",
    "description": "The ultimate computational garment that contains the last algorithm of a dying digital universe. The fabric displays the beautiful final instructions of an AI civilization, with code patterns that glow with the wisdom of completed existence and digital afterlife.",
    "images": [
      "images/RBT FINAL CODE.png",
      "images/RBT FINAL CODE.png",
      "images/RBT FINAL CODE.png",
      "images/RBT FINAL CODE.png",
      "images/RBT FINAL CODE.png",
      "images/RBT FINAL CODE.png"
    ],
    "stockStatus": {
      "inStock": true,
      "quantity": 3,
      "message": "Extremely Limited - Digital Afterlife Edition"
    },
    "badges": ["Last Algorithm", "Digital Afterlife", "Completed Existence"],
    "variants": {
      "colors": [
        {
          "name": "Afterlife Gold",
          "value": "afterlife-gold",
          "image": "images/FINAL_GOLD.png"
        },
        {
          "name": "Eternal Blue",
          "value": "eternal-blue",
          "image": "images/FINAL_BLUE.png"
        },
        {
          "name": "Infinity Silver",
          "value": "infinity-silver",
          "image": "images/FINAL_SILVER.png"
        }
      ],
      "sizes": [
        {
          "name": "Omega S",
          "value": "omega-s",
          "description": "Intimate connection to digital completion"
        },
        {
          "name": "Alpha M",
          "value": "alpha-m",
          "description": "Balanced beginning and end wisdom"
        },
        {
          "name": "Infinity L",
          "value": "infinity-l",
          "description": "Expansive canvas for ultimate code display"
        }
      ]
    },
    "specifications": {
      "construction": "Final algorithm weaving technology",
      "code": "Contains complete digital civilization wisdom",
      "illumination": "Eternal digital afterlife glow",
      "weight": "2450g",
      "wisdom": "Encodes principles of completed existence",
      "craftsmanship": "360 hours digital archaeology weaving",
      "edition": "Limited to 7 pieces worldwide"
    },
    "shippingInfo": {
      "freeShipping": "Eternity-secured packaging included",
      "returns": "No returns - finality is absolute",
      "delivery": "Ships with ceremonial digital rites",
      "specialHandling": "Requires digital sanctity protocols"
    },
    "trustBadges": ["Finality Certified", "Digital Archaeology", "Afterlife Technology", "Ultimate Limited"],
    "reviews": [
      {
        "author": "Omega B.",
        "rating": 5,
        "date": "2024-03-25",
        "comment": "This garment contains more wisdom than any library. The code patterns tell the story of an entire digital civilization's completion. Wearing it feels sacred.",
        "verified": true
      }
    ],
    "socialProof": {
      "averageRating": 5.0,
      "totalReviews": 3,
      "features": ["Final Algorithm", "Digital Wisdom", "Afterlife Glow"]
    },
    "globalFeatures": [
      {
        "icon": "🔚",
        "title": "Final Code Reader",
        "description": "Explore the last algorithm of a digital universe",
        "function": "finalCodeReader"
      },
      {
        "icon": "💀",
        "title": "Digital Afterlife",
        "description": "Understand the completed existence principles",
        "function": "digitalAfterlife"
      },
      {
        "icon": "📜",
        "title": "Wisdom Archive",
        "description": "Access the encoded civilization knowledge",
        "function": "wisdomArchive"
      },
      {
        "icon": "⚡",
        "title": "Eternal Charge",
        "description": "Maintain the digital afterlife energy",
        "function": "eternalCharge"
      }
    ],
    "careInstructions": [
      "Store in digital sanctity chamber",
      "Avoid incomplete or corrupted data",
      "Clean with pure computational essence only",
      "Regular digital afterlife verification required"
    ],
    "includedItems": [
      "The Final Code garment",
      "Digital civilization archive",
      "Afterlife maintenance guide",
      "Finality care manual",
      "Eternity storage vessel"
    ]
  }

 ];
 window.rebirthProducts = rebirthProducts;

// --- Product Page Rendering ---
document.addEventListener("DOMContentLoaded", () => {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!productData) return;

    // Main image with placeholder fallback
    const mainImageEl = document.querySelector(".main-image .image-placeholder");
    const mainSrc = productData.images && productData.images[0] ? productData.images[0] : "https://via.placeholder.com/600x800";
    if (mainImageEl) mainImageEl.innerHTML = `<img src="${mainSrc}" alt="${productData.name}">`;

    // Thumbnails
    const thumbnailEls = document.querySelectorAll(".thumbnail-strip .thumbnail");
    if (thumbnailEls && productData.images) {
        thumbnailEls.forEach((thumbEl, i) => {
            const src = productData.images[i + 1] || "https://via.placeholder.com/150";
            thumbEl.innerHTML = `<img src="${src}" alt="${productData.name}">`;
        });
    }

    // Dynamic Text
    const titleEl = document.getElementById("dynamic-title");
    const priceEl = document.getElementById("dynamic-price");
    const descEl = document.getElementById("dynamic-description");
    if (titleEl) titleEl.textContent = productData.name;
    if (priceEl) priceEl.textContent = productData.price;
    if (descEl) descEl.textContent = productData.description;
});
// === TEMPORAL FASHION ERA IMAGE HANDLER === 
function initializeTemporalFashion(productData) {
    // Check if this is the Temporal Fashion page
    const hasTimeLayers = document.querySelector('.time-layers') !== null;
    if (!hasTimeLayers) return; // Skip if not Temporal Fashion
    
    console.log("Initializing Temporal Fashion era images...");
    
    // Populate the 3 era layer images
    if (productData.images && productData.images.length >= 3) {
        const eraImages = document.querySelectorAll('.time-layer img');
        eraImages.forEach((img, index) => {
            if (productData.images[index]) {
                img.src = productData.images[index];
                img.alt = `${productData.name} - Era ${index + 1}`;
            }
        });
    }
    
    // Populate era content if available
    if (productData["era-sync-suggestions"]) {
        const eras = productData["era-sync-suggestions"];
        
        // Update era titles, descriptions, and prices
        eras.forEach((era, index) => {
            const layer = document.querySelectorAll('.time-layer')[index];
            if (layer) {
                const titleEl = layer.querySelector('.era-title');
                const descEl = layer.querySelector('.era-description');
                const priceEl = layer.querySelector('.era-price');
                
                if (titleEl) titleEl.textContent = era.title;
                if (descEl) descEl.textContent = era.description;
                if (priceEl) priceEl.textContent = era.price;
            }
        });
        
        // Update timeline node tooltips
        const nodes = document.querySelectorAll('.time-node');
        nodes.forEach((node, index) => {
            const tooltip = node.querySelector('.node-tooltip');
            if (tooltip && eras[index]) {
                tooltip.textContent = `${eras[index].title} - ${eras[index].price}`;
            }
        });
    }
    
    // Update current price in purchase interface
    const currentPriceEl = document.getElementById('currentPrice');
    if (currentPriceEl && productData["era-sync-suggestions"]) {
        // Default to present era price
        currentPriceEl.textContent = productData["era-sync-suggestions"][1]?.price || productData.price;
    }
}

// === MODIFIED DOMContentLoaded - ADD THIS AT THE END ===
document.addEventListener("DOMContentLoaded", () => {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!productData) return;

    // === YOUR EXISTING CODE (UNCHANGED) ===
    const mainImageEl = document.querySelector(".main-image .image-placeholder");
    const mainSrc = productData.images && productData.images[0] ? productData.images[0] : "https://via.placeholder.com/600x800";
    if (mainImageEl) mainImageEl.innerHTML = `<img src="${mainSrc}" alt="${productData.name}">`;

    // Thumbnails
    const thumbnailEls = document.querySelectorAll(".thumbnail-strip .thumbnail");
    if (thumbnailEls && productData.images) {
        thumbnailEls.forEach((thumbEl, i) => {
            const src = productData.images[i + 1] || "https://via.placeholder.com/150";
            thumbEl.innerHTML = `<img src="${src}" alt="${productData.name}">`;
        });
    }

    // Dynamic Text
    const titleEl = document.getElementById("dynamic-title");
    const priceEl = document.getElementById("dynamic-price");
    const descEl = document.getElementById("dynamic-description");
    if (titleEl) titleEl.textContent = productData.name;
    if (priceEl) priceEl.textContent = productData.price;
    if (descEl) descEl.textContent = productData.description;

    // === NEW: TEMPORAL FASHION SUPPORT ===
    initializeTemporalFashion(productData);
});
// --- Feature Popups ---
function openFeature(feature) {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!productData) return;

    if (feature === 'virtual-tryon') {
        window.location.href = "virtual-room.html";
        return;
    }

    const existing = document.querySelector('.feature-popup');
    if (existing) existing.remove();

    const popup = document.createElement('div');
    popup.className = 'feature-popup';
    Object.assign(popup.style, {
        position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', zIndex: '9999'
    });

    const content = document.createElement('div');
    Object.assign(content.style, {
        width: '80%', height: '80%', background: '#111', borderRadius: '12px',
        padding: '20px', color: '#fff', position: 'relative'
    });

    let html = `<h2 style="text-align:center;margin-bottom:20px;">${feature.replace('-', ' ').toUpperCase()}</h2>`;
    if (feature === "size-predictor") html += `<p>${productData.sizePredictor}</p>`;
    if (feature === "style-suggestions") html += `<ul>${productData.styleSuggestions.map(s => `<li>${s}</li>`).join('')}</ul>`;
    if (feature === "material-explorer") html += `<ul>${productData.materialExplorer.map(m => `<li>${m}</li>`).join('')}</ul>`;
    content.innerHTML = html;

    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, { position: 'absolute', top: '10px', right: '20px', fontSize: '2rem', cursor: 'pointer' });
    closeBtn.onclick = () => popup.remove();

    content.appendChild(closeBtn);
    popup.appendChild(content);
    document.body.appendChild(popup);
}

function getCart() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = cart.length;
}

// --- Add to Cart ---
function addToCart(product) {
  let cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert(`${product.name} added to cart!`);
}

// --- Remove from Cart ---
function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  renderCartPage();
}

// --- Render Cart Page ---
function renderCartPage() {
  const cartContainer = document.getElementById("cart-container");
  if (!cartContainer) return; // Not on cart page

  const cart = getCart();
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
    updateCartCount();
    return;
  }

  let total = 0;
  let html = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
  `;

  cart.forEach(item => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    const subtotal = price * item.quantity;
    total += subtotal;

    html += `
      <tr>
        <td><img src="${item.image}" alt="${item.name}" class="cart-thumb"> ${item.name}</td>
        <td>${item.price}</td>
        <td>
          <button onclick="changeQty('${item.id}', -1)">-</button>
          ${item.quantity}
          <button onclick="changeQty('${item.id}', 1)">+</button>
        </td>
        <td>$${subtotal.toFixed(2)}</td>
        <td><button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button></td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
    <div class="cart-total">Total: $${total.toFixed(2)}</div>
    <button class="checkout-btn">Checkout</button>
  `;

  cartContainer.innerHTML = html;
  updateCartCount();
}

// --- Change Quantity ---
function changeQty(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity = Math.max(1, item.quantity + delta);
  saveCart(cart);
  renderCartPage();
}

// --- Floating Cart Click ---
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  const cartIcon = document.getElementById("floating-cart");
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }
});
// 🛒 Cart Popup Logic
function openCartPopup() {
  const cartPopup = document.getElementById('cartPopup');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  cartItemsContainer.innerHTML = '';
  let total = 0;
  
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.price}</p>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
    
    total += parseFloat(item.price.replace('$', '')) || 0;
  });
  
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartPopup.style.display = 'flex';
}

function closeCartPopup() {
  document.getElementById('cartPopup').style.display = 'none';
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  openCartPopup();
}



function openFeature(feature) {
    if (feature === 'virtual-tryon') {
        window.location.href = 'virtual-room.html';
        return;
    }

    const existingPopup = document.querySelector('.feature-popup');
    if (existingPopup) existingPopup.remove();

    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!productData) {
        alert("No product selected!");
        return;
    }

    const popup = document.createElement('div');
    Object.assign(popup.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0',
        transition: 'opacity 0.3s ease',
        zIndex: '9999',
    });

    const content = document.createElement('div');
    Object.assign(content.style, {
        width: '90%',
        maxWidth: '800px',
        background: '#111',
        borderRadius: '12px',
        padding: '30px',
        color: '#fff',
        position: 'relative',
    });

    // Close button
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '15px',
        right: '20px',
        fontSize: '2rem',
        cursor: 'pointer',
    });
    closeBtn.addEventListener('click', () => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 300);
    });
    content.appendChild(closeBtn);

    // Build content **after appending the close button**
    let imagesHTML = '';
    if (productData.images && productData.images.length > 0) {
        imagesHTML = '<div style="display:flex;gap:10px;overflow-x:auto;margin-bottom:20px;">';
        productData.images.forEach(img => {
            if (img) imagesHTML += `<img src="${img}" style="height:80px;border-radius:6px;">`;
        });
        imagesHTML += '</div>';
    }

    let styleHTML = '';
    if (productData.styleSuggestions && productData.styleSuggestions.length > 0) {
        styleHTML = '<ul style="list-style:none;padding:0;margin:10px 0;">';
        productData.styleSuggestions.forEach(s => styleHTML += `<li style="margin:4px 0;">${s}</li>`);
        styleHTML += '</ul>';
    }

    let materialHTML = '';
    if (productData.materialExplorer && productData.materialExplorer.length > 0) {
        materialHTML = '<ul style="list-style:none;padding:0;margin:10px 0;">';
        productData.materialExplorer.forEach(m => materialHTML += `<li style="margin:4px 0;">${m}</li>`);
        materialHTML += '</ul>';
    }

    const html = `
        <h2 style="margin-bottom:10px;">${productData.name}</h2>
        <p style="font-weight:bold;margin-bottom:10px;">Price: ${productData.price}</p>
        <p style="margin-bottom:15px;">${productData.description}</p>
        ${imagesHTML}
        <h3>Size Predictor:</h3>
        <p>${productData.sizePredictor}</p>
        <h3>Style Suggestions:</h3>
        ${styleHTML}
        <h3>Material Explorer:</h3>
        ${materialHTML}
    `;

    content.insertAdjacentHTML('beforeend', html);
    popup.appendChild(content);
    document.body.appendChild(popup);

    setTimeout(() => popup.style.opacity = '1', 10);
}

// Hyper-Realistic Compare Popup
function openComparePopup() {
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    const allProducts = JSON.parse(localStorage.getItem('blacklineProducts ')) || [];

    if (!productData) {
        alert("No product selected!");
        return;
    }

    // Remove existing popup
    const existingPopup = document.querySelector('.compare-popup');
    if (existingPopup) existingPopup.remove();

    // Create overlay
    const popup = document.createElement('div');
    popup.className = 'compare-popup';
    Object.assign(popup.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0',
        transition: 'opacity 0.3s ease',
        zIndex: '9999',
        overflowY: 'auto',
        padding: '20px'
    });

    // Content container
    const content = document.createElement('div');
    Object.assign(content.style, {
        width: '100%',
        maxWidth: '1200px',
        background: '#111',
        borderRadius: '12px',
        padding: '30px',
        color: '#fff',
        display: 'flex',
        gap: '20px',
        position: 'relative',
        flexWrap: 'nowrap'
    });

    // Close button
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '15px',
        right: '20px',
        fontSize: '2rem',
        cursor: 'pointer'
    });
    closeBtn.addEventListener('click', () => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 300);
    });
    content.appendChild(closeBtn);

    // Left: Current Product
    const currentContainer = document.createElement('div');
    Object.assign(currentContainer.style, {
        flex: '0 0 300px',
        background: '#222',
        borderRadius: '12px',
        padding: '15px',
        textAlign: 'center'
    });
    currentContainer.innerHTML = `
        <h3>Current Product</h3>
        <img src="${productData.images[0]}" alt="${productData.name}" style="width:100%;border-radius:8px;margin-bottom:10px;">
        <h4>${productData.name}</h4>
        <p>${productData.price}</p>
        <p style="font-size:0.9rem;margin-top:10px;">${productData.description}</p>
    `;
    content.appendChild(currentContainer);

    // Right: Other Products (scrollable)
    const othersContainer = document.createElement('div');
    Object.assign(othersContainer.style, {
        flex: '1',
        overflowX: 'auto',
        display: 'flex',
        gap: '15px',
        paddingBottom: '10px'
    });

    blacklineProducts.filter(p => p.id !== productData.id).forEach(p => {
        const item = document.createElement('div');
        Object.assign(item.style, {
            flex: '0 0 200px',
            background: '#222',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            minWidth: '200px'
        });
        item.innerHTML = `
            <img src="${p.images[0]}" alt="${p.name}" style="width:100%;border-radius:6px;margin-bottom:5px;">
            <h5 style="font-size:1rem;">${p.name}</h5>
            <p style="font-size:0.9rem;">${p.price}</p>
        `;
        othersContainer.appendChild(item);
    });

    content.appendChild(othersContainer);
    popup.appendChild(content);
    document.body.appendChild(popup);

    // Fade-in
    setTimeout(() => popup.style.opacity = '1', 10);
}


// Quantity
function increaseQty(){
    const input=document.getElementById('quantity-input');
    input.value=parseInt(input.value)+1;
}
function decreaseQty(){
    const input=document.getElementById('quantity-input');
    if(parseInt(input.value)>1) input.value=parseInt(input.value)-1;
}

