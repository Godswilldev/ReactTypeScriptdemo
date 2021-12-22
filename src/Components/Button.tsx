// import React from "react";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}
const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 1)}>Click</button>
    </div>
  );
};

export default Button;
