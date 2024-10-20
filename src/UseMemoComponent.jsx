import { useState, useMemo } from "react";

// Anton Video code

const UseMemoComponent = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);

  // below code using useMemo

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number);
  // }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        // onChange={(e)=> setNumber(e=>(e.target.value))} />
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(number) {
  for (let i = 0; i < 10000; i++) {
    console.log("Loop started");
  }
  return number * 2;
}

export default UseMemoComponent;
