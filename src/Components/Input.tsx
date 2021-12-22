// interface InputProps {
//   value: string;
//   handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
// }

const Input = () => {
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  };
  return (
    <input
      type="text"
      value=""
      onChange={handleInputChange}
      name="text"
      id="text"
    />
  );
};

export default Input;
