import React from "react";
import Greet from "./Components/Greet";
import Person from "./Components/Person";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div>
      <h1>TYPESCRIPT</h1>
      <Greet isLoggedIn={false} name="Greg" messageCount={20} />
      <Person personName={personName} />
    </div>
  );
};

export default App;
