import { useState } from "react";
import { type Light, PrintTrafficLights } from "../models/TrafficLights.model";

export function TrafficLights() {
  const [actualLight, setActualLight] = useState<Light>("red");

  const changeColor = () => {
    switch (actualLight) {
      case "red":
        setActualLight("yellow");
        break;
      case "yellow":
        setActualLight("green");
        break;
      case "green":
        setActualLight("red");
    }
  };

  return (
    <div>
      <PrintTrafficLights actualLight={actualLight} changeColor={changeColor} />
    </div>
  );
}
