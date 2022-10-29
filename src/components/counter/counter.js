import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleCount = (amount) => {
    setCount((currentCount) => {
      return currentCount + amount;
    });
  };
  return (
    <>
      <h5>Counter</h5>
      <button onClick={() => handleCount(-1)}>-</button>
      <div>{count}</div>
      <button onClick={() => handleCount(1)}>+</button>
    </>
  );
}
