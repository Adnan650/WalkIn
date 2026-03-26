export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: (number | string)[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Walkin Air Max Pro",
    price: 129.99,
    description: "Experience ultimate comfort with the Walkin Air Max Pro. Featuring our signature cushioning technology and a breathable mesh upper, these sneakers are perfect for both running and everyday wear.",
    category: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: "2",
    name: "Walkin Street Classic",
    price: 89.99,
    description: "A timeless design meets modern comfort. The Street Classic features a durable leather upper and a classic silhouette that never goes out of style.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "3",
    name: "Walkin Cloud Runner",
    price: 149.99,
    description: "Feel like you're walking on clouds. The Cloud Runner is our lightest shoe yet, designed for marathon runners and casual joggers alike.",
    category: "Running",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12, 13]
  },
  {
    id: "4",
    name: "Walkin Urban High",
    price: 109.99,
    description: "Elevate your street style with the Urban High. These high-top sneakers offer ankle support and a bold look that stands out in the crowd.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=800&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: "5",
    name: "Walkin Trail Blazer",
    price: 139.99,
    description: "Conquer any terrain with the Trail Blazer. Built with a rugged outsole for maximum grip and a water-resistant upper for unpredictable weather.",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: "6",
    name: "Walkin Retro 90s",
    price: 119.99,
    description: "A blast from the past. The Retro 90s brings back chunky soles and vibrant color blocking for a nostalgic yet trendy look.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop",
    sizes: [5, 6, 7, 8, 9, 10]
  },
  {
    id: "7",
    name: "Walkin Speedster",
    price: 159.99,
    description: "Designed for pure speed. The Speedster features a carbon fiber plate and responsive foam to propel you forward with every step.",
    category: "Running",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: "8",
    name: "Walkin Court Master",
    price: 99.99,
    description: "Dominate the court with the Court Master. Excellent lateral support and a grippy outsole make these perfect for basketball or tennis.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12, 13, 14]
  },
  {
    id: "9",
    name: "Walkin Slip-On Ease",
    price: 69.99,
    description: "Convenience meets comfort. The Slip-On Ease is perfect for quick errands or relaxing weekends, featuring a stretchy upper and soft insole.",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "10",
    name: "Walkin Eco-Knit",
    price: 115.00,
    description: "Sustainable style. The Eco-Knit is made from 100% recycled materials, offering a breathable, sock-like fit while reducing your carbon footprint.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: "11",
    name: "Walkin Flex Trainer",
    price: 105.99,
    description: "Versatility for your workout. The Flex Trainer provides stability for lifting and flexibility for cardio, making it the ultimate gym shoe.",
    category: "Training",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: "12",
    name: "Walkin Winter Shield",
    price: 145.00,
    description: "Keep your feet warm and dry. The Winter Shield features a fleece lining and a waterproof exterior to brave the cold months.",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: "13",
    name: "Walkin Essential Men's Tee",
    price: 35.00,
    description: "The perfect everyday t-shirt. Made from 100% organic cotton, this tee offers a relaxed fit and unmatched breathability for all-day comfort.",
    category: "Men's Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "14",
    name: "Walkin Active Women's Top",
    price: 45.00,
    description: "Stay cool during your workouts. This active top features moisture-wicking technology and a flattering, athletic fit.",
    category: "Women's Apparel",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "15",
    name: "Walkin Classic Men's Hoodie",
    price: 75.00,
    description: "A wardrobe staple. Our classic hoodie is crafted from premium fleece, featuring a kangaroo pocket and an adjustable drawstring hood.",
    category: "Men's Apparel",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "16",
    name: "Walkin Essential Women's Tee",
    price: 35.00,
    description: "Soft, versatile, and effortlessly stylish. This essential tee is designed to be your go-to top for any casual occasion.",
    category: "Women's Apparel",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3db8?q=80&w=800&auto=format&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"]
  }
];

export const categories = ["All", "Running", "Lifestyle", "Outdoor", "Sports", "Casual", "Training", "Men's Apparel", "Women's Apparel"];
