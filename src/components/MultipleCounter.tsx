import { useState } from "react";
import { multipleCounterData } from "../data/MultipleCounter.data";
import { CounterItem } from "../models/CounterItem.model";

export function MultipleCounter() {
  const [multipleCounter, setMultipleCounter] = useState(multipleCounterData);

  const increaseCounter = (id: number) => {
    setMultipleCounter(
      multipleCounter.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  const decreaseCounter = (id: number) => {
    setMultipleCounter(
      multipleCounter.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };

  const resetCounter = (id: number) => {
    setMultipleCounter(
      multipleCounter.map((counter) =>
        counter.id === id ? { ...counter, count: (counter.count = 0) } : counter
      )
    );
  };

  return (
    <div>
      {multipleCounter.map((counter) => (
        <CounterItem
          counter={counter}
          increaseCounter={increaseCounter}
          decreaseCounter={decreaseCounter}
          resetCounter={resetCounter}
        />
      ))}
    </div>
  );
}
