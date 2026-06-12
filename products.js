// ╔══════════════════════════════════════════════════════════════╗
// ║           ZEWIX STORE — CENTRAL PRODUCTS FILE               ║
// ║  popular: true  →  Most Popular section mein aayega         ║
// ║  topSelling: true → Top Selling section mein aayega         ║
// ║  salePrice: "XXXX PKR" → Mega Sale mein aayega             ║
// ╚══════════════════════════════════════════════════════════════╝

const ALL_PRODUCTS = [

  // ── AIRPODS & HEADSETS ──
  {
    name: "Apple AirPods Pro 2 — White",
    price: "2499 PKR",
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?auto=format&fit=crop&w=400&q=80",
    description: "Apple AirPods Pro 2 Hengxuan TC Charging — Like Original Packing White. Popup Message, Locate in Find My iPhone, ANC Active Noise Cancellation.",
    features: ["1st Copy","ANC","Find My iPhone","Popup Msg","Fast Charging","White"],
    category: "airpods-headsets",
    popular: true, topSelling: true
  },
  {
    name: "Apple AirPods Pro 2 — Black",
    price: "2799 PKR",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
    description: "Apple AirPods Pro 2 Hengxuan High Copy — Popup Msg & Locate in Find My iPhone. Black Color. ANC Active Noise Cancellation with Touch Control.",
    features: ["1st Copy","ANC","Find My iPhone","Popup Msg","Fast Charging","Black"],
    category: "airpods-headsets", topSelling: true
  },
  {
    name: "AirPods Max — Silver",
    price: "2999 PKR",
    salePrice: "2699 PKR",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80",
    description: "Apple AirPods Max Wireless ANC Headphone With Pouch — Silver Color. Over-ear premium headphones with Active Noise Cancellation & crystal clear sound.",
    features: ["1st Copy","ANC","Wireless","With Pouch","Over-Ear","Silver"],
    category: "airpods-headsets", popular: true
  },
  {
    name: "AirPods Max — Black",
    price: "2999 PKR",
     salePrice: "2699 PKR",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    description: "Apple AirPods Max Wireless ANC Headphone With Pouch — Black Color.",
    features: ["1st Copy","ANC","Wireless","With Pouch","Over-Ear","Black"],
    category: "airpods-headsets"
  },
  {
    name: "A9 Pro ANC/ENC Earbuds — Black",
    price: "2550 PKR",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2fee?auto=format&fit=crop&w=400&q=80",
    description: "A9 Pro App ANC/ENC Display Touch Control BT 5.4 Wireless Earbuds With Zwsvibe App — Black.",
    features: ["ANC","ENC","BT 5.4","Touch Control","Display Case","Black"],
    category: "airpods-headsets", popular: true
  },
  {
    name: "A9 Pro ANC/ENC Earbuds — White",
    price: "2500 PKR",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f42?auto=format&fit=crop&w=400&q=80",
    description: "A9 Pro App ANC/ENC Display Touch Control BT 5.4 Wireless Earbuds With Zwsvibe App — White.",
    features: ["ANC","ENC","BT 5.4","Touch Control","Display Case","White"],
    category: "airpods-headsets"
  },
  {
    name: "Samsung Galaxy Buds FE — White",
    price: "2340 PKR",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c5dcf57?auto=format&fit=crop&w=400&q=80",
    description: "Samsung Galaxy Buds FE SM-R400N True Wireless Bluetooth Earbuds — White.",
    features: ["ANC","3-Mic","30hr Battery","IPX2","True Wireless","White"],
    category: "airpods-headsets", topSelling: true
  },
  {
  name: "Speedx SP-S285 22.5W 20000mAh Super Fast Charging Power Bank",
  price: "3899 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/b472e980441775565166.jpg",
  description: "Speedx SP-S285 20000mAh Power Bank with 22.5W Super Fast Charging. High capacity slim power bank with built-in cable for easy portability. Smart power management system ensures safe and efficient charging for all your devices.",
  features: ["20000mAh", "22.5W Super Fast Charging", "Built-in Cable", "High Capacity", "Smart Protection", "LED Indicator", "Slim Design"],
  category: "power-banks",
  popular: false,
  topSelling: false
},
  {
    name: "Samsung Galaxy Buds FE — Black",
    price: "2340 PKR",
    image: "https://images.unsplash.com/photo-1598331668826-d9aedd3dcc8c?auto=format&fit=crop&w=400&q=80",
    description: "Samsung Galaxy Buds FE SM-R400N True Wireless Bluetooth Earbuds — Graphite Black.",
    features: ["ANC","3-Mic","30hr Battery","IPX2","True Wireless","Black"],
    category: "airpods-headsets"
  },
  {
    name: "Samsung Galaxy Buds 2 Pro — White",
    price: "2100 PKR",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f42?auto=format&fit=crop&w=400&q=80",
    description: "Samsung Galaxy Buds 2 Pro True Wireless — 24-bit Hi-Fi audio, ANC, 360° audio, IPX7.",
    features: ["Hi-Fi 24-bit","ANC","IPX7","360° Audio","29hr Battery","White"],
    category: "airpods-headsets", popular: true
  },
  {
    name: "Samsung Galaxy Buds 2 Pro — Black",
    price: "2120 PKR",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2fee?auto=format&fit=crop&w=400&q=80",
    description: "Samsung Galaxy Buds 2 Pro True Wireless Earbuds — Graphite Black.",
    features: ["Hi-Fi 24-bit","ANC","IPX7","360° Audio","29hr Battery","Black"],
    category: "airpods-headsets"
  },
  {
    name: "Joyroom EC06 Type-C Metal Earbuds",
    price: "1900 PKR",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80",
    description: "Joyroom EC06 Type-C Series In-Ear Metal Wired Earbuds. Premium metal housing, inline mic.",
    features: ["Type-C","Metal Housing","Inline Mic","Remote Control","Wired"],
    category: "airpods-headsets"
  },
  {
  name: "Xtrike Me HD-214 Wireless Bluetooth 5.3 Foldable Over-Ear Headphones",
  price: "2349 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/e746962af31773897750.jpg",
  description: "Xtrike Me HD-214 Wireless Bluetooth 5.3 Foldable Over-Ear Headphones in sleek Black. Enjoy deep bass, crystal clear sound, and all-day comfort with soft cushioned ear cups. Foldable design makes it perfect for travel and daily commute. Long battery life with easy Bluetooth pairing.",
  features: ["Bluetooth 5.3", "Foldable Design", "Over-Ear", "Deep Bass", "Wireless", "Travel Friendly", "Soft Cushion Ear Cups", "Long Battery Life"],
  category: "airpods-headsets",
  popular: false,
  topSelling: false
},
  {
  name: "P9 Wireless Bluetooth Headphones Fidelity Sound",
  price: "1499 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/28/20ecb6cb713bb1b58f6480782a4bf93c.jpg",
  description: "P9 Wireless Bluetooth Headphones with Fidelity Sound quality. Comfortable cushion ear pads for long listening sessions.",
  features: ["Wireless", "Bluetooth", "Fidelity Sound", "Cushion Ear Pads"],
  category: "airpods-headsets",
  popular: true,
  topSelling: false
},

{
  name: "Xtrike Me GH-606 RGB Wired Gaming Headset with Adjustable Microphone",
  price: "3649 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/98164bcfe51774350607.jpg",
  description: "Xtrike Me GH-606 RGB Wired Gaming Headset with adjustable noise-cancelling microphone. Stunning RGB lighting with deep bass surround sound makes every gaming session immersive. Soft cushioned ear cups and adjustable headband ensure maximum comfort during long gaming sessions.",
  features: ["RGB Lighting", "Wired", "Adjustable Mic", "Deep Bass", "Surround Sound", "Soft Cushion", "Gaming Headset", "Over-Ear"],
  category: "airpods-headsets",
  popular: false,
  topSelling: false
},

{
  name: "Speedx SP-S188L 3-in-1 22.5W 10000mAh Fast Charging Power Bank",
  price: "2499 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/91d6e6d5c81775564704.jpg",
  description: "Speedx SP-S188L 10000mAh Power Bank with 22.5W Super Fast Charging and 3-in-1 cable support. Compact and lightweight design with dual output ports. Perfect for keeping your devices charged on the go with reliable and fast power delivery.",
  features: ["10000mAh", "22.5W Fast Charging", "3-in-1 Cable", "Dual Output", "Compact Design", "LED Indicator", "Universal Compatible"],
  category: "power-banks",
  popular: false,
  topSelling: false
},

{
  name: "Xtrike Me GH-606 RGB Wired Gaming Headset with Adjustable Microphone",
  price: "3649 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/91d6e6d5c81775564704.jpg",
 
  description: "Xtrike Me GH-606 RGB Wired Gaming Headset with adjustable noise-cancelling microphone. Stunning RGB lighting with deep bass surround sound makes every gaming session immersive. Soft cushioned ear cups and adjustable headband ensure maximum comfort during long gaming sessions.",
  features: ["RGB Lighting", "Wired", "Adjustable Mic", "Deep Bass", "Surround Sound", "Soft Cushion", "Gaming Headset", "Over-Ear"],
  category: "airpods-headsets",
  popular: false,
  topSelling: false
},

{
  name: "Onikuma K19 RGB Wired Stereo Gaming Headset with Noise Cancellation",
  price: "4099 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/98164bcfe51774350607.jpg",
  description: "Onikuma K19 RGB Wired Stereo Gaming Headset with true noise cancellation microphone. Compatible with PS4, PC, and Xbox One. Features immersive RGB lighting, deep bass stereo sound, and a universal 3.5mm plug for wide compatibility. Soft ear cushions for long gaming comfort.",
  features: ["RGB Lighting", "Noise Cancellation", "Wired", "3.5mm Plug", "PS4/PC/Xbox Compatible", "Stereo Sound", "Adjustable Mic", "Over-Ear"],
  category: "airpods-headsets",
  popular: false,
  topSelling: false
},
{
  name: "Onikuma X15 Pro RGB Gaming Headset with Mic & 3.5mm Wired Earphones",
  price: "4549 PKR",
  salePrice: "4049 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/cb46eeeb811774350660.jpg",
  description: "Onikuma X15 Pro RGB Gaming Headset with headbeam design and built-in microphone. Features 3.5mm wired connectivity, deep bass surround sound, and vibrant RGB lighting. Perfect for PC, PS4, and mobile gaming with superior audio clarity and comfort.",
  features: ["RGB Lighting", "Deep Bass", "Surround Sound", "3.5mm Wired", "Built-in Mic", "Headbeam Design", "Gaming Headset", "Over-Ear"],
  category: "airpods-headsets",
  popular: true,
  topSelling: false
},

{
  name: "Romoss Pho10f 22.5W Fast Charging 10000mAh Power Bank",
  price: "2749 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/0101776510670.jpg",
  description: "Romoss Pho10f 10000mAh Power Bank with 22.5W Fast Charging technology. Slim and elegant white design with digital display showing real-time battery percentage. Supports multiple device charging simultaneously with smart power management for safe and efficient power delivery.",
  features: ["10000mAh", "22.5W Fast Charging", "Digital Display", "Slim Design", "Multiple Output", "Smart Protection", "Lightweight", "White Color"],
  category: "power-banks",
  popular: false,
  topSelling: false
},

{
  name: "Onikuma X25 Pro RGB Gaming Headset with Mic 3.5mm Stereo — Black",
  price: "3849 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/3d1e2eccf41774350762.jpg",
  description: "Onikuma X25 Pro RGB Gaming Headset in Black with headbeam design and built-in microphone. Features 3.5mm wired connectivity, durable stereo sound, and stunning RGB lighting. Comfortable over-ear cushions perfect for long gaming sessions on PC, PS4, and mobile.",
  features: ["RGB Lighting", "3.5mm Wired", "Built-in Mic", "Durable Stereo", "Headbeam Design", "Over-Ear", "Gaming Headset", "Black Color"],
  category: "airpods-headsets",
  popular: false,
  topSelling: false
},
{
  name: "Onikuma X25 Pro RGB Gaming Headset with Mic 3.5mm Stereo — White",
  price: "4349 PKR",
  salePrice: "3849 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/36430f6ee31774350874.jpg",
  description: "Onikuma X25 Pro RGB Gaming Headset in White with headbeam design and built-in microphone. Features 3.5mm wired connectivity, durable stereo sound, and stunning RGB lighting. Comfortable over-ear cushions perfect for long gaming sessions on PC, PS4, and mobile.",
  features: ["RGB Lighting", "3.5mm Wired", "Built-in Mic", "Durable Stereo", "Headbeam Design", "Over-Ear", "Gaming Headset", "White Color"],
  category: "airpods-headsets",
  popular: true,
  topSelling: true
},



{
  name: "Speedx SP-S288L 3-in-1 22.5W 20000mAh Fast Charging Power Bank",
  price: "3449 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/a2500a1b681775564852.jpg",
  description: "Speedx SP-S288L 20000mAh Power Bank with 22.5W Super Fast Charging and 3-in-1 cable support. High capacity battery for multiple device charges. Ideal for travel, outdoor activities, and heavy users who need reliable power all day long.",
  features: ["20000mAh", "22.5W Fast Charging", "3-in-1 Cable", "Dual Output", "High Capacity", "LED Indicator", "Universal Compatible"],
  category: "power-banks",
  popular: false,
  topSelling: false
},
{
  name: "Speedx SP-S185 22.5W 10000mAh Super Fast Charging Power Bank",
  price: "3049 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/68b8b967401775565059.jpg",
  description: "Speedx SP-S185 10000mAh Power Bank with 22.5W Super Fast Charging. Slim and portable design with built-in cable for hassle-free charging anywhere. Features smart power management to protect your devices from overcharging.",
  features: ["10000mAh", "22.5W Super Fast Charging", "Built-in Cable", "Slim Design", "Smart Protection", "LED Indicator", "Portable"],
  category: "power-banks",
  popular: false,
  topSelling: false
},


  // ── ELECTRONICS & APPLIANCES ──

{
  name: "Mini Jet Handheld Turbofan Brushless Powerful Violent Fan",
  price: "4799 PKR",
  salePrice: "4299 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/05/0712e4dc467774ab16d3232d0086fa95.jpg",
  description: "Mini Jet Handheld Turbofan with powerful brushless motor running at 10000 RPM. Wind speed up to 32 meters per second for ultra-powerful airflow. Super slim and compact design with dual battery capacity for extended use. USB charging compatible — perfect for outdoor adventures, travel, and everyday cooling.",
  features: ["Brushless Motor", "10000 RPM", "32m/s Wind Speed", "Dual Battery", "USB Charging", "Compact Design", "Handheld", "Powerful Airflow"],
  category: "electronics",
  popular: false,
  topSelling: true
},

{
  name: "AC73 Portable Wireless Bluetooth Speaker Compact RGB",
  price: "2799 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/01/b4dbdc21dcc378c3fd1ce2f34385c245.png",
  description: "AC73 Portable Wireless Bluetooth Speaker with vibrant RGB lighting and compact design. Delivers powerful 360-degree sound in a small package. Features a convenient carrying strap, long battery life, and easy Bluetooth pairing. Perfect for indoor and outdoor use.",
  features: ["Bluetooth Wireless", "RGB Lighting", "360 Sound", "Carrying Strap", "Long Battery", "Compact Design", "Indoor & Outdoor", "Easy Pairing"],
  category: "electronics",
  popular: true,
  topSelling: false
},
{
  name: "KTS-2310 Waterproof RGB Bluetooth Speaker",
  price: "2449 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/30/b4bc1c3f954c0c83a0e1094b53103b37.jpeg",
  description: "KTS-2310 Waterproof RGB Bluetooth Speaker built for outdoor adventures. Rugged waterproof design with stunning RGB lighting and powerful bass output. Wireless Bluetooth connectivity with long range and stable connection. Perfect for beach, camping, and outdoor activities.",
  features: ["Waterproof", "RGB Lighting", "Bluetooth Wireless", "Powerful Bass", "Long Range", "Rugged Design", "Outdoor Use", "Portable"],
  category: "electronics",
  popular: false,
  topSelling: false
},
{
  name: "Vacuum Sealing Machine 110/220V High Power Electric Food Sealer",
  price: "2749 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/29/19f5e574609dc25e46fdb4294b69bfcd.jpg",
  description: "Vacuum Sealing Machine with 110/220V high power motor for airtight food storage. Large suction with quick lock fresh technology keeps food fresh up to 5x longer. Compact and easy to use design perfect for kitchen food preservation. Compatible with all standard vacuum seal bags.",
  features: ["110/220V", "High Power", "Airtight Seal", "Quick Lock", "Food Preservation", "Large Suction", "Easy to Use", "Kitchen Appliance"],
  category: "electronics",
  popular: false,
  topSelling: false
},
 

  

  // ── SMART GADGETS ──


  {
  name: "Sky Humidifier | Ultrasonic Air Humidifier",
  price: "2749 PKR",
  image: "https://images.unsplash.com/photo-1615367423057-4e73e0c2c1e4?auto=format&fit=crop&w=400&q=80",
  description: "Sky Humidifier Ultrasonic Air Humidifier with RGB lighting. USB powered, ultra-quiet operation with fine mist technology.",
  features: ["RGB Lighting", "Ultrasonic Technology", "USB Powered", "Ultra Quiet"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},

{
  name: "Mini Portable Handheld Fan With Desktop Base",
  price: "1449 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/25/d24fead5b920fa02e4700a5c87987901.png",
  description: "Mini Portable Handheld Fan with detachable desktop base for versatile use. USB rechargeable with long battery life for all day cooling. Compact and lightweight design perfect for travel, office, and outdoor use. Simply detach from base for handheld use or place on desk for hands-free cooling.",
  features: ["Handheld & Desktop", "USB Rechargeable", "Detachable Base", "Long Battery Life", "Portable", "Lightweight", "Travel Friendly", "Silent Operation"],
  category: "smart-gadgets",
  popular: true,
  topSelling: true
},

  {
    name: "Cordless Car Wash Gun",
    price: "4499 PKR",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
    description: "Automatic Cordless Car Wash Spray Gun 48V High Pressure Water Jet With Foam Pot, 2 Nozzles & 5 Meter Hose.",
    features: ["48V Battery","High Pressure","Foam Pot","2 Nozzles","5M Hose","Cordless"],
    category: "smart-gadgets", popular: true
  },
  {
    name: "Mobile Screen Magnifier 12 inch",
    price: "799 PKR",
    image: "https://images.unsplash.com/photo-1511707171634-cd46f030e849?auto=format&fit=crop&w=400&q=80",
    description: "HD 3D Mobile Phone Screen Magnifier 12 Inch — Foldable Video Amplifier Stand.",
    features: ["12 Inch","HD 3D","No Battery","Foldable","All Phones"],
    category: "smart-gadgets", topSelling: true
  },
  {
    name: "Arctic Air Ultra Cooler",
    price: "2499 PKR",
    salePrice: "1999 PKR",
    image: "https://images.unsplash.com/photo-1524594154904-edd7cdf3a45d?auto=format&fit=crop&w=400&q=80",
    description: "Arctic Air Ultra Evaporative Air Cooler — 3 Speed Settings, Portable, USB Powered.",
    features: ["3 Speed","USB Powered","Portable","Quiet Operation"],
    category: "smart-gadgets", popular: true, topSelling: true
  },
  
    
  {
  name: "Handy Stitch Portable Cordless Sewing Machine",
  category: "smart-gadgets",
  price: "1499 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/07/87e79be3b55667d238a9b059d188f4e8.jpeg",
  description: "Handy Stitch Portable Cordless Handheld Sewing Machine — Makes sewing fun, fast & easy! Ghar mein kapron ki silai, buttons aur repairs ke liye perfect. Lightweight aur compact design, batteries se chalta hai.",
  features: ["Cordless", "Handheld", "Portable", "Lightweight", "Easy to Use", "Home Repairs"],
},
  {
  name: "Digital Blood Pressure Monitor — Arm Style",
  category: "smart-gadgets",
  price: "2799 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2025/09/1757765257-68c55e8906e33-WhatsApp-Image-2025-09-13-at-4.11.07-PM_cleanup.jpeg",
  description: "Aneroid Sphygmomanometer Arm Style Blood Pressure Monitor with Small Screen & Voice Function. Automatic digital BP machine jo ghar par accurate blood pressure aur pulse rate measure karta hai. USB powered, large LCD display, memory storage with date & time.",
  features: ["Voice Function", "LCD Display", "USB Powered", "Memory Storage", "Arm Style", "Pulse Rate"],
},


  {
  name: "Foot Pedicure Grinder Remover Tools Automatic Electronic Foot File",
  price: "1549 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2024/06/51iiOFdrDnL._AC_SY450_.jpg",
  description: "Automatic Electronic Foot File Pedicure Grinder. Removes dead skin and calluses effortlessly for smooth feet.",
  features: ["Electronic", "Auto Grinder", "Dead Skin Remover", "Easy to Use"],
  category: "smart-gadgets",
  popular: true,
  topSelling: false
},

{
  name: "Kitchen Scale SF-400 Digital Electronic Weighing Scale",
  price: "1499 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/07/8be83a0f476eeb32de9a8f4e1074d254.jpeg",
  description: "Kitchen Scale SF-400 Digital Electronic Weighing Scale. Accurate measurements for kitchen and household use.",
  features: ["Digital Display", "Electronic", "Accurate", "Easy to Use"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},
{
  name: "G200 Magnetic RGB Bluetooth Speaker 5W Ultra",
  price: "1599 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/07/a3eb13c96080b97ff0db2528ddc8bc36.png",
  description: "G200 Magnetic RGB Bluetooth Speaker 5W Ultra with colorful RGB lighting and powerful sound.",
  features: ["RGB Lighting", "Bluetooth", "5W Speaker", "Magnetic"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},
{
  name: "Lazy Portable Silent Neck Fan Wearable Rechargeable",
  price: "1549 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/07/b5e7751ec0b5c8cdb71b768fe2843ebc.jpeg",
  description: "Lazy Portable Silent Neck Fan Wearable Rechargeable. Hands-free cooling fan for outdoor and indoor use.",
  features: ["Wearable", "Rechargeable", "Silent", "Portable"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},
{
  name: "3-in-1 Hot Air Brush Professional One-Step Hair Dryer",
  price: "2249 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/06/3dd579fbb6259722291c451d51ea004a.png",
  description: "3-in-1 Hot Air Brush Professional One-Step Hair Dryer and Volumizer for salon-style results at home.",
  features: ["3-in-1", "One Step", "Professional", "Hair Dryer"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},

{
  name: "Double-Ended Spray Water Mist Fan Dual Fan",
  price: "5000 PKR",
  salePrice: "4599 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/28/0b2986fa6ece165f0474fd0dc26514a3.jpeg",
  description: "Double-Ended Spray Water Mist Fan with Dual Fan system. Remote control, USB powered with water mist cooling technology.",
  features: ["Dual Fan", "Water Mist", "Remote Control", "USB Powered"],
  category: "smart-gadgets",
  popular: true,
  topSelling: true
},
{
  name: "Mini Air Cooling Fan Portable Copper Motor",
  price: "4000 PKR",
  salePrice: "3249 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/02/adb8967e3211d56efeaf07cbb72f403c.jpeg",
  description: "Mini Air Cooling Fan Portable with Copper Motor. USB powered personal air cooler with ice cooling technology.",
  features: ["Copper Motor", "Portable", "USB Powered", "Ice Cooling"],
  category: "smart-gadgets",
  popular: true,
  topSelling: true
},


{
  name: "3-in-1 15W Fast Wireless Magnetic Charging Pad For iPhone AirPods & Smartwatch",
  price: "2399 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/6eddacb2051776422558.jpg",
  description: "3-in-1 15W Fast Wireless Magnetic Charging Pad compatible with iPhone, AirPods, and Smartwatch. Charges all three devices simultaneously with fast wireless charging technology. Sleek white design fits perfectly on any desk or nightstand. No more tangled cables — just place and charge.",
  features: ["3-in-1 Charging", "15W Fast Wireless", "iPhone Compatible", "AirPods Compatible", "Smartwatch Compatible", "Magnetic Charging", "Cable Free", "Simultaneous Charging"],
  category: "smart-gadgets",
  popular: true,
  topSelling: false
},

{
  name: "Mini Electric Grinder Stainless Steel Coffee & Spice Grinder",
  price: "2449 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/05/4a98ca2f0db57eb153eb408f04fda72c.jpg",
  description: "Mini Electric Grinder with stainless steel blades that grinds over 50 kinds of ingredients in just 10 seconds. Powerful motor with one-touch operation makes grinding coffee beans, spices, nuts, and grains effortless. Compact and easy to clean design perfect for everyday kitchen use.",
  features: ["10 Second Grinding", "Stainless Steel Blades", "50+ Ingredients", "One-Touch Operation", "Powerful Motor", "Easy to Clean", "Compact Design", "Multi-Purpose"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},
{
  name: "Electric Mini USB Mosquito Killer Racquet Lamp 2-in-1",
  price: "1349 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/05/05/dd366fe87371fd5e0fe6dcaef1538b34.jpeg",
  description: "Electric Mini USB Mosquito Killer Racquet with 2-in-1 lamp function. Safety protection net ensures accidental touch protection for children and adults. USB rechargeable with electric elimination technology for effective mosquito and insect control. Perfect for home, bedroom, and outdoor use.",
  features: ["2-in-1 Racquet & Lamp", "USB Rechargeable", "Safety Protection Net", "Electric Elimination", "Child Safe", "Indoor & Outdoor", "Mosquito Control", "Compact Design"],
  category: "smart-gadgets",
  popular: false,
  topSelling: false
},

  // ── SMART WATCHES ──
 {
  name: "Ultra 2 Smart Watch Big 2.01 Infinite Display",
  price: "2499 PKR",
  image: "https://hhcnewapp.blr1.cdn.digitaloceanspaces.com/uploads/2026/04/24/cdb4f80e977b40ffb23688681e4e7668.png",
  description: "Ultra 2 Smart Watch Big 2.01 Infinite Display with 7 straps included. Multiple band colors aur styles ke saath.",
  features: ["2.01 Inch Display", "7 Straps Included", "Multiple Band Colors", "Smart Watch"],
  category: "smart-watches",
  popular: false,
  topSelling: true
},
  {
  name: "JS9 Ultra Max 2.12 Inch AMOLED Screen Smart Watch Ultra 49mm Series 8 NFC Wireless Charging Sports Watch With Wearfit Pro App — Orange",
  price: "2849 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/92f8afa88d1775615734.jpg",
  description: "JS9 Ultra Max Smart Watch with 2.12 Inch AMOLED display and 49mm Ultra series design. Features NFC, wireless charging, sports tracking, and Wearfit Pro App support. Bold orange sports band with Series 8 design makes it perfect for fitness enthusiasts and everyday wear.",
  features: ["2.12 Inch AMOLED", "49mm Ultra", "NFC", "Wireless Charging", "Series 8 Design", "Wearfit Pro App", "Sports Watch", "Orange Band"],
  category: "smart-watches",
  popular: false,
  topSelling: false
},
{
  name: "X8 Ultra Max 2.2 Inch Smart Watch With Compass Series 8 NFC Always-On Display Wireless Charging Wearfit Pro App — Black",
  price: "2349 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/aff81f29aa1775615910.jpg",
  description: "X8 Ultra Max Smart Watch with 2.2 Inch display, built-in compass, and Always-On Display feature. Supports NFC, wireless charging, and Wearfit Pro App for complete fitness and health tracking. Sleek black design with Series 8 style for a premium look at an affordable price.",
  features: ["2.2 Inch Display", "Always-On Display", "Built-in Compass", "NFC", "Wireless Charging", "Series 8 Design", "Wearfit Pro App", "Black Color"],
  category: "smart-watches",
  popular: false,
  topSelling: false
},

  // ── HOME, KITCHEN & LIFESTYLE ──
  {
  name: "3-in-1 Vegetable and Fruit Peeler Set",
  price: "999 PKR",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
  description: "3-in-1 Vegetable and Fruit Peeler Set for easy peeling. Multiple blade types for different fruits and vegetables.",
  features: ["3-in-1 Design", "Multiple Blades", "Easy Grip Handle", "Durable"],
  category: "home-kitchen",
  popular: false,
  topSelling: false
},
  {
    name: "Automatic Soap Dispenser",
    price: "1399 PKR",
    salePrice: "1099 PKR",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
    description: "Touchless infrared automatic soap dispenser. 350ml capacity, USB rechargeable.",
    features: ["Touchless","350ml","USB Charge","Infrared","Waterproof"],
    category: "home-kitchen", popular: true
  },
  {
    name: "Electric Egg Beater Mixer",
    price: "1599 PKR",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    description: "Handheld electric egg beater with 5 speed settings. Stainless steel whisks included.",
    features: ["5 Speed","Stainless Steel","Handheld","Easy Clean","350W"],
    category: "home-kitchen"
  },
  {
    name: "LED Fairy String Lights 10m",
    price: "899 PKR",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80",
    description: "10 meter warm white LED fairy lights for room decoration. USB powered with remote.",
    features: ["10 Meter","Warm White","USB Powered","Remote","Room Decor"],
    category: "home-kitchen", topSelling: true
  },
  {
    name: "Mini Sandwich Maker",
    price: "1899 PKR",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
    description: "Compact sandwich maker with non-stick plates. Ready in 5 minutes, easy to clean.",
    features: ["Non-Stick","5 Min Ready","Compact","Easy Clean","750W"],
    category: "home-kitchen"
  },

  // ── KIDS & GAMING ──
  {
    name: "Remote Control Racing Car",
    price: "2299 PKR",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    description: "High speed 1:18 scale RC racing car with 2.4GHz remote. 30 min play time.",
    features: ["1:18 Scale","2.4GHz","30 Min Battery","High Speed","Rechargeable"],
    category: "kids-gaming", popular: true, topSelling: true
  },
  {
    name: "Building Blocks Set 500 pcs",
    price: "1799 PKR",
    salePrice: "1499 PKR",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80",
    description: "500 piece colorful building blocks. Creativity booster, age 4+.",
    features: ["500 Pieces","Multi-Color","Compatible","Age 4+","Educational"],
    category: "kids-gaming", popular: true
  },
  {
    name: "Wireless Gaming Controller",
    price: "2999 PKR",
    image: "https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=400&q=80",
    description: "Wireless gaming controller compatible with PC, Android, iOS. Dual vibration motors.",
    features: ["Wireless","Dual Vibration","PC/Android/iOS","8hr Battery","Ergonomic"],
    category: "kids-gaming", topSelling: true
  },
  {
    name: "Kids Karaoke Microphone",
    price: "1299 PKR",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80",
    description: "Colorful wireless karaoke microphone for kids with LED lights and Bluetooth speaker.",
    features: ["Wireless","BT Speaker","LED Lights","Echo Effect","Kids Safe"],
    category: "kids-gaming"
  },

  
  
  // ── STUDIO ──
  {
    name: "Condenser USB Microphone",
    price: "3999 PKR",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80",
    description: "Professional USB condenser microphone for podcasting, streaming, and recording.",
    features: ["USB","Condenser","Cardioid","Studio Grade","Plug & Play"],
    category: "studio", popular: true, topSelling: true
  },

  {
  name: "A101 Gimbal Extendable Auto Face Tracking AI Intelligent Wireless Remote With Fill Light",
  price: "6449 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/1136b2ad481775476211.jpg",
  description: "A101 Gimbal Extendable Selfie Stick with Auto Face Tracking AI technology. Intelligent wireless remote control with built-in fill light for perfect shots in any lighting condition. Smooth gimbal stabilization ensures shake-free videos and photos. Perfect for content creators, vloggers, and social media enthusiasts.",
  features: ["Auto Face Tracking", "AI Intelligent", "Wireless Remote", "Built-in Fill Light", "Gimbal Stabilizer", "Extendable", "Shake-Free Video", "Content Creator"],
  category: "studio",
  popular: false,
  topSelling: false
},

{
  name: "Jmary MT-33 Video Cage Rig Kit For Vlogging",
  price: "2349 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/2fcc9b6c721775481171.jpg",
  description: "Jmary MT-33 Video Cage Rig Kit designed for vloggers and content creators. Features a sturdy metal cage with multiple cold shoe mounts for attaching lights, microphones, and accessories. Comes with a mini tripod stand for stable desktop shooting. Perfect for smartphone filmmaking and professional vlogging setups.",
  features: ["Video Cage Rig", "Cold Shoe Mounts", "Mini Tripod", "Smartphone Compatible", "Metal Build", "Vlogging Kit", "Multi-Accessory Support", "Portable"],
  category: "studio",
  popular: false,
  topSelling: false
},
{
  name: "Aluminum Alloy Tablet Holder & Laptop Stand",
  price: "2249 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/98c89964d61775476672.jpg",
  description: "Premium Aluminum Alloy Tablet Holder and Laptop Stand with adjustable angles for comfortable viewing. Sleek silver finish with non-slip base ensures stability on any surface. Compatible with all tablets and laptops up to 15.6 inches. Ideal for office, studio, and home use.",
  features: ["Aluminum Alloy", "Adjustable Angle", "Non-Slip Base", "Universal Compatible", "Laptop & Tablet", "Portable", "Silver Finish", "Studio & Office Use"],
  category: "studio",
  popular: false,
  topSelling: false
},


{
  name: "I Steady X3 3-Axis Handheld Gimbal Stabilizer For Smartphones — Black",
  price: "13999 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/380c8004531775480730.jpg",
  description: "I Steady X3 3-Axis Handheld Gimbal Stabilizer for smartphones in Black. Advanced 3-axis stabilization eliminates shaky footage for ultra-smooth cinematic videos. Features intelligent shooting modes, auto face tracking, and long battery life. Perfect for vloggers, filmmakers, and content creators who demand professional quality.",
  features: ["3-Axis Stabilization", "Auto Face Tracking", "Cinematic Video", "Smartphone Compatible", "Multiple Shooting Modes", "Long Battery Life", "Foldable Design", "Black Color"],
  category: "studio",
  popular: false,
  topSelling: false
},
{
  name: "210cm Selfie Ring Light Portable Tripod Stand For Live & Photo Studio",
  price: "1499 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/9365ee0ade1775546215.jpg",
  description: "210cm Portable Tripod Stand compatible with ring lights and cameras. Sturdy and adjustable height stand perfect for live streaming, photography, and studio setups. Lightweight aluminum build makes it easy to carry and set up anywhere. Compatible with all standard ring lights and phone holders.",
  features: ["210cm Height", "Portable", "Adjustable Height", "Ring Light Compatible", "Live Streaming", "Studio Use", "Lightweight", "Universal Mount"],
  category: "studio",
  popular: false,
  topSelling: false
},

{
  name: "Jmary MT-75 Light Tripod Stand For Softboxes Ring Lights & Mobile Phones",
  price: "2449 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/510350651775545964.jpg",
  description: "Jmary MT-75 Professional Light Tripod Stand compatible with softboxes, ring lights, and mobile phones. Heavy duty yet lightweight aluminum build with adjustable height up to 75 inches. Features a sturdy locking mechanism and wide base for maximum stability during studio shoots and live sessions.",
  features: ["75 Inch Height", "Softbox Compatible", "Ring Light Compatible", "Mobile Holder", "Aluminum Build", "Adjustable Height", "Studio Use", "Sturdy Base"],
  category: "studio",
  popular: false,
  topSelling: false
},
{
  name: "Tripod Camera Stand 3110 With Mobile Phone Holder",
  price: "1349 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/8eb17c6e9c1775540652.jpg",
  description: "Tripod Camera Stand 3110 with universal mobile phone holder. Lightweight and portable design perfect for photography, vlogging, and video calls. Adjustable legs with non-slip feet ensure stability on any surface. Compatible with smartphones and compact cameras.",
  features: ["Mobile Holder", "Lightweight", "Portable", "Adjustable Legs", "Non-Slip Feet", "Camera Compatible", "Compact Design", "Universal Mount"],
  category: "studio",
  popular: false,
  topSelling: false
},
{
  name: "3366 Aluminium Tripod Stand 55-Inch With Mobile Phone Holder",
  price: "2299 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/860199dde11775476533.jpg",
  description: "3366 Aluminium Tripod Stand 55-Inch with built-in mobile phone holder. Premium aluminum alloy construction with fluid pan head for smooth camera movement. Adjustable height from mini to 55 inches with quick release plate. Perfect for photography, videography, and live streaming.",
  features: ["55 Inch Height", "Aluminum Alloy", "Mobile Phone Holder", "Fluid Pan Head", "Quick Release Plate", "Adjustable Height", "Photography & Video", "Portable"],
  category: "studio",
  popular: false,
  topSelling: false
},
{
  name: "Yungteng VCT-680RM Professional Tripod Stand",
  price: "4199 PKR",
  image: "https://store.computerzone.pk/images/pro_images/396/da2e06dd001775541127.jpg",
  description: "Yungteng VCT-680RM Professional Tripod Stand with heavy duty aluminum construction. Features a smooth ball head with 360 degree rotation and quick release plate for fast camera mounting. Adjustable height with secure locking legs for stable shots in any environment. Ideal for professional photographers and videographers.",
  features: ["Professional Grade", "Ball Head", "360 Rotation", "Quick Release Plate", "Aluminum Build", "Adjustable Height", "Secure Lock", "Photography & Video"],
  category: "studio",
  popular: false,
  topSelling: false
}
];