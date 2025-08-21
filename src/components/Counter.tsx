import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
        <button onClick={() => setContador(contador - 1)}>Restar</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>
    </div>
  );
}
