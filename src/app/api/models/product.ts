export interface ProductApi {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  desc: string;
  inventory: number;
  categories: CategoryApi[];
}

export interface CategoryApi {
  id: string;
  name: string;
}
