import { Product } from '../crud/product';

export interface Category {
  _id: string;
  name: string;
  description: string;
  nbrProduits?: string | number;
  products?: Product[];
}
