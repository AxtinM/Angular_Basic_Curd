export interface Product {
  _id: number;
  name: string;
  description?: string;
  category: string | any;
  price: number;
  quantity?: number;
}
