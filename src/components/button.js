import React from "react";

const Button = (props) => {
  return <button className="button-wrapper" type="button" {...props}>{props.children}</button>;
};
export default Button;
