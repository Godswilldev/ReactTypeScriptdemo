interface GreetProps {
  name: String;
  messageCount?: Number;
  isLoggedIn: Boolean;
}
const Greet = ({ name, isLoggedIn, messageCount = 10 }: GreetProps) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>
          Welcome {name} You have {messageCount} unread messages
        </h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </div>
  );
};

export default Greet;
