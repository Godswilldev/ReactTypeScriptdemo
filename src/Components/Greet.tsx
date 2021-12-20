import React from "react";

interface GreetProps {
  name: String;
  messageCount: Number;
  isLoggedIn: Boolean;
}
const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name} You have {props.messageCount} unread messages
        </h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </div>
  );
};

export default Greet;
