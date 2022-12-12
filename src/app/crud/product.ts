export interface Product {
  _id: any | string;
  name: string;
  description?: string;
  category: string | any;
  price: number;
  quantity?: number;
}
