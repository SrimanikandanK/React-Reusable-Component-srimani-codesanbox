import React, { useRef } from "react";

const useRefComponent = () => {
  const inputRef = useRef("");
  const display = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>useRef explanation</h3>
      <p>{inputRef.current?.value}</p>
      <input type="text" ref={inputRef} />
      <button onClick={display}>Display in console</button>
    </div>
  );
};

export default useRefComponent;
