import React from "react";

const Button = ({ children, handleClick }) => (
  <div className="Button__wrapper" onClick={handleClick}>
    {children}
  </div>
);

export default Button;