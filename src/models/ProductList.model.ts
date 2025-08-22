export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  // addProduct: (id:number) => void;
}

export interface ProductListProps {
  products: Product[];
}
