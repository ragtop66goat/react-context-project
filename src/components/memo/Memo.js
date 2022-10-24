import { useState, useMemo } from "react";

export function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const styleTheme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((dark) => !dark)}>Theme</button>
      <div style={styleTheme}>{doubleNumber}</div>
    </>
  );
}

const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};
