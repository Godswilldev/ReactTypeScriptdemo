import Button from "./Components/Button";
import Container from "./Components/Container";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
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
        handleClick={(event, id, name) =>
          console.log("Button CLicked", event, id, name)
        }
      />
      <Input />
      <Container
        style={{
          border: "10px solid black",
          padding: "1rem",
        }}
      />
    </div>
  );
};

export default App;
