import Button from "./Components/Button";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Person from "./Components/Person";
import Status from "./Components/Status";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      age: 9,
    },
    {
      first: "clark",
      age: 3,
    },
    {
      first: "greg",
      age: 10,
    },
  ];

  return (
    <div>
      <h1>TYPESCRIPT</h1>
      <Greet isLoggedIn={true} name="Greg" messageCount={20} />
      <Person names={nameList} name={personName} />
      <Status status="success" />
      <Heading>Greg</Heading>
      <Button
        handleClick={(event, id) => console.log("Button CLicked", event, id)}
      />
    </div>
  );
};

export default App;
