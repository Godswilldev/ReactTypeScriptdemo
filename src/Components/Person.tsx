interface PersonProps {
  name: {
    first: string;
    last: string;
  };
  names: {
    first: string;
    age: Number;
  }[];
}
const Person = ({ name, names }: PersonProps) => {
  return (
    <div>
      <h3>
        {name.first} {name.last}
      </h3>

      <>
        {names.map((name, index) => (
          <h4 key={index}>
            {name.first} {name.age}
          </h4>
        ))}
      </>
    </div>
  );
};

export default Person;
