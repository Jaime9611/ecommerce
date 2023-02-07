export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  stock: number;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
}
