import type { Product, ProductListProps } from "../models/ProductList.model";
import { useState } from "react";

export default function ProductList({ products }: ProductListProps) {
  const [product, setProduct] = useState<Product[]>(products);

  const addProduct = (id: number) => {
    setProduct(
      product.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProduct(
      product.map((product) =>
        product.id === id && product.amount > 0
          ? { ...product, amount: product.amount - 1 }
          : product
      )
    );
  };

  const totalPrice = () =>
    product.reduce((acum, pro) => acum + pro.amount * pro.price, 0);

  return (
    <>
      <div style={{ display: "flex" }}>
        {product.map((product: Product) => (
          <div
            key={product.id}
            style={{
              padding: "10px",
              border: "2px solid white",
              borderRadius: "0.5em",
              width: "300px",
              height: "300px",
              margin: "auto",
              fontWeight: "bold",
            }}
          >
            <h1>{product.name}</h1>
            <p>Precio: {product.price}€</p>
            <p>Cantidad: {product.amount}</p>
            <button onClick={() => addProduct(product.id)}>+</button>
            <button onClick={() => removeProduct(product.id)}>-</button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {product
          .filter((pro) => pro.amount > 0)
          .map((pro) => (
            <div key={pro.id}>
              <h4>{pro.name}</h4>
              <p>Cantidad en carrito: {pro.amount}</p>
              <p>
                Precio total del producto:{" "}
                {Number((pro.amount * pro.price).toFixed(2))}€
              </p>
            </div>
          ))}
      </div>
      <h3>Total</h3>
      <p>{totalPrice().toFixed(2)}€</p>
    </>
  );
}
