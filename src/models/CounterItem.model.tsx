import type { MultipleCounterProps } from "./Counter.model";

type CounterItemProps = {
  counter: MultipleCounterProps;
  increaseCounter: (counterId: number) => void;
  decreaseCounter: (counterId: number) => void;
  resetCounter: (counterId: number) => void;
};

export function CounterItem({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
}: CounterItemProps) {
  return (
    <>
      <p>Contador: {counter.count}</p>
      <div
        key={counter.id}
        style={{ display: "flex", justifyContent: "center", gap: "5px" }}
      >
        <button onClick={() => increaseCounter(counter.id)}>+</button>
        <button onClick={() => decreaseCounter(counter.id)}>-</button>
        <button onClick={() => resetCounter(counter.id)}>Reiniciar</button>
      </div>
    </>
  );
}
