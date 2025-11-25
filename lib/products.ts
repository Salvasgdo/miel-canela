export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  ingredients: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tarta de Chocolate",
    description: "Deliciosa tarta de chocolate con tres capas de bizcocho húmedo y ganache de chocolate belga",
    category: "Tartas",
    price: 28.50,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
    ingredients: ["Chocolate belga", "Harina", "Huevos", "Azúcar", "Mantequilla", "Cacao"],
    featured: true,
  },
  {
    id: "2",
    name: "Cupcakes de Vainilla",
    description: "Suaves cupcakes de vainilla con buttercream de mantequilla y decoración personalizada",
    category: "Cupcakes",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&auto=format&fit=crop",
    ingredients: ["Vainilla", "Harina", "Huevos", "Azúcar", "Mantequilla"],
    featured: true,
  },
  {
    id: "3",
    name: "Cheesecake de Frutos Rojos",
    description: "Cremoso cheesecake con base de galleta y coulis de frutos rojos del bosque",
    category: "Tartas",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1533134242443-d4ea90ce1dca?w=800&auto=format&fit=crop",
    ingredients: ["Queso crema", "Fresas", "Arándanos", "Frambuesas", "Galletas", "Mantequilla"],
    featured: true,
  },
  {
    id: "5",
    name: "Tarta Red Velvet",
    description: "Clásica tarta red velvet con frosting de queso crema y su característico color rojo",
    category: "Tartas",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&auto=format&fit=crop",
    ingredients: ["Harina", "Cacao", "Colorante rojo", "Huevos", "Queso crema", "Azúcar"],
  },
  {
    id: "6",
    name: "Brownies de Chocolate",
    description: "Brownies densos y húmedos con trozos de chocolate y nueces",
    category: "Brownies",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop",
    ingredients: ["Chocolate", "Harina", "Huevos", "Azúcar", "Nueces", "Mantequilla"],
  },
  {
    id: "7",
    name: "Tarta de Limón",
    description: "Refrescante tarta de limón con merengue suizo ligeramente tostado",
    category: "Tartas",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&auto=format&fit=crop",
    ingredients: ["Limones", "Huevos", "Azúcar", "Mantequilla", "Harina"],
  },
  {
    id: "8",
    name: "Cookies Chips de Chocolate",
    description: "Galletas crujientes por fuera y suaves por dentro, con trozos generosos de chocolate",
    category: "Cookies",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop",
    ingredients: ["Harina", "Chips de chocolate", "Azúcar morena", "Mantequilla", "Huevos"],
  },
  {
    id: "9",
    name: "Tarta de Zanahoria",
    description: "Tarta húmeda de zanahoria con especias y frosting de queso crema con nueces",
    category: "Tartas",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop",
    ingredients: ["Zanahoria", "Canela", "Nueces", "Harina", "Queso crema", "Azúcar"],
  },
];

export const categories = [
  "Todos",
  "Tartas",
  "Cupcakes",
  "Brownies",
  "Cookies",
];

