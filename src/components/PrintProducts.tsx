import ProductList from "./ProductList";
import products from "../data/ProductList.data";

export default function PrintProducts() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <h1>Carrito de compras</h1>
      <ProductList products={products} />
    </div>
  );
}
