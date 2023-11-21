import React from "react";

export function App() {
  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleSubtract = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <p>Counter: {count}</p>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}