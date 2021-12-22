interface ButtonProps {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
    name?: String
  ) => void;
}
const Button = ({ handleClick }: ButtonProps) => (
  <button onClick={(event) => handleClick(event, 20)}>Click</button>
);

export default Button;
