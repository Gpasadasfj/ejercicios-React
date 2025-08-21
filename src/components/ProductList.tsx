import type { Product, ProductListProps } from "../models/ProductList.model";


export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      {products.map((product: Product) => (
        <>
          <div
            style={{
              padding: "10px",
              border: "2px solid white",
              borderRadius: "0.5em",
            }}
          >
            <h1 key={product.id}>{product.name}</h1>
            <p style={{ fontWeight: "bold" }}>Precio: {product.price}€</p>
          </div>
        </>
      ))}
    </>
  );
}

