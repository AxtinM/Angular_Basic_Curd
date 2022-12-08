import { Product } from '../crud/product';

export interface Category {
  name: string;
  description: string;
  nbrProduits?: string | number;
  produits?: Product[];
}
