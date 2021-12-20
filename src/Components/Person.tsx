import React from "react";
interface PersonProps {
  personName: {
    first: string;
    last: string;
  };
}
const Person = (props: PersonProps) => {
  return (
    <div>
      <h3>
        {props.personName.first} {props.personName.last}
      </h3>
    </div>
  );
};

export default Person;
