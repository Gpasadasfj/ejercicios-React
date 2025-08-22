export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface ProductListProps {
  products: Product[];
}
