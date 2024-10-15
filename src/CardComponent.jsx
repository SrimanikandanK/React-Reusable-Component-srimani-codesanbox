import React from "react";

const Card = ({ children, border = "blue" }) => {
  return (
    <div
      style={{ border: "1px solid red", padding: "20px", borderRadius: "5px" }}
    >
      {children}
    </div>
  );
};

export default Card;
