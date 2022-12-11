export interface Product {
  _id: number;
  name: string;
  description?: string;
  category: string;
  price: number;
  quantity?: number;
}
