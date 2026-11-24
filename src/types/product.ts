export type Category = 'electronics' | 'home' | 'accessories';

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  category: Category;
  isNew: boolean;
}