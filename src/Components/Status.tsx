interface StatusProps {
  status: "loading" | "success" | "error" | "";
}
const Status = ({ status }: StatusProps) => {
  let message: String;

  switch (status) {
    case "loading":
      message = "loading";
      break;
    case "success":
      message = "Data fetched Successfully";
      break;

    case "error":
      message = "Error fetching Data";
      break;

    default:
      message = "hello";
      break;
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
