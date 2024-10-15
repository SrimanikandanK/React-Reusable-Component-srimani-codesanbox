import React from "react";

const Button = ({ children, color = "", onClick, size = "medium" }) => {
  const styles = {
    backgroundColor: color,
    padding: size === "large" ? "12px 20px" : "8px 16px",
    fontSize: size === "large" ? "16px" : "14px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// const Button = ({ children }) => {
//     return <button>{children}</button>;
//   };

//   export default Button;
