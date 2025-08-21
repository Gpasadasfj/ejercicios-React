import type HelloProps from "../models/Hello.model";
import { useState } from "react";

export default function Hello({ name }: HelloProps) {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? <h1>Hola {name}</h1> : null}
      <button style={{margin:"5px"}} onClick={() => setShow(!show)}>Ocultar saludo</button>
    </>
  );
}
