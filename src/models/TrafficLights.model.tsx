export type Light = "red" | "yellow" | "green";

type PrintTrafficLightsProps = {
  actualLight: Light;
  changeColor: () => void;
};

export function PrintTrafficLights({
  actualLight,
  changeColor,
}: PrintTrafficLightsProps) {
  return (
    <>
      <h1>Semáforo</h1>
      <button onClick={() => changeColor()}>Cambiar color</button>
      <div style={{ margin: "10px" }}>
        <div
          className="trafficLight"
          style={{
            backgroundColor: actualLight === "red" ? "red" : "grey",
            boxShadow: actualLight === "red" ? "0 0 20px red" : "none",
          }}
        ></div>
        <div
          className="trafficLight"
          style={{
            backgroundColor: actualLight === "yellow" ? "yellow" : "grey",
            boxShadow: actualLight === "yellow" ? "0 0 20px yellow" : "none",
          }}
        ></div>
        <div
          className="trafficLight"
          style={{
            backgroundColor: actualLight === "green" ? "green" : "grey",
            boxShadow: actualLight === "green" ? "0 0 20px green" : "none",
          }}
        ></div>
      </div>
    </>
  );
}
