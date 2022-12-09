import { Product } from '../crud/product';

export interface Category {
  id: string | number;
  name: string;
  description: string;
  nbrProduits?: string | number;
  produits?: Product[];
}
