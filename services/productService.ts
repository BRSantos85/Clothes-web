
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Fusion Workstation',
    price: 1899.99,
    description: 'A powerful and sleek workstation for all your creative and professional needs. Features the latest processor and a stunning 4K display.',
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/tech1/600/400',
  },
  {
    id: 2,
    name: 'ErgoComfort Chair',
    price: 349.50,
    description: 'Experience unparalleled comfort with our ergonomic office chair, designed for long hours of work without fatigue.',
    category: 'Furniture',
    imageUrl: 'https://picsum.photos/seed/chair2/600/400',
  },
  {
    id: 3,
    name: 'Flow Mechanical Keyboard',
    price: 159.00,
    description: 'A tactile and responsive mechanical keyboard with customizable RGB backlighting. Perfect for gamers and typists.',
    category: 'Accessories',
    imageUrl: 'https://picsum.photos/seed/keyboard3/600/400',
  },
  {
    id: 4,
    name: 'SoundWave Pro Headphones',
    price: 249.99,
    description: 'Immerse yourself in high-fidelity audio with these noise-cancelling over-ear headphones. Crystal clear sound and deep bass.',
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/audio4/600/400',
  },
  {
    id: 5,
    name: 'Aura Smart Lamp',
    price: 89.99,
    description: 'Set the perfect mood with millions of colors. Controllable via app and compatible with voice assistants.',
    category: 'Home Goods',
    imageUrl: 'https://picsum.photos/seed/lamp5/600/400',
  },
  {
    id: 6,
    name: 'Nomad Leather Backpack',
    price: 199.00,
    description: 'A stylish and durable backpack crafted from genuine leather. Ample space for your laptop and daily essentials.',
    category: 'Accessories',
    imageUrl: 'https://picsum.photos/seed/bag6/600/400',
  },
   {
    id: 7,
    name: 'Quantum-Core Laptop',
    price: 2500.00,
    description: 'The next generation of portable computing. Blazing fast speeds and a battery that lasts all day.',
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/laptop7/600/400',
  },
  {
    id: 8,
    name: 'Minimalist Desk',
    price: 450.00,
    description: 'A clean and modern desk made from sustainable oak. The perfect centerpiece for a productive workspace.',
    category: 'Furniture',
    imageUrl: 'https://picsum.photos/seed/desk8/600/400',
  }
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate network delay
  });
};

export const getFeaturedProducts = (): Promise<Product[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.slice(0, 4));
        }, 300);
    });
};
