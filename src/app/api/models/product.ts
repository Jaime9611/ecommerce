export interface ProductApi {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  desc: string;
  inventory: Inventory;
  categories: CategoryApi[];
}

export interface CategoryApi {
  id: string;
  name: string;
}

export interface Inventory {
  id: string;
  quantity: number;
}
