import type { Product } from '../types/product';

export const products: Product[] = [
  { id: 1, title: 'Наушники', price: 7990, quantity: 12, category: 'electronics', isNew: true },
  { id: 2, title: 'Клавиатура', price: 5490, quantity: 5, category: 'electronics', isNew: false },
  { id: 3, title: 'Лампа', price: 2490, quantity: 8, category: 'home', isNew: true },
  { id: 4, title: 'Кружка', price: 890, quantity: 0, category: 'home', isNew: false },
  { id: 5, title: 'Рюкзак', price: 3990, quantity: 4, category: 'accessories', isNew: false },
  { id: 6, title: 'Часы', price: 5990, quantity: 7, category: 'accessories', isNew: true },
];