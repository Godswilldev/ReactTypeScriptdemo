interface HeadingProps {
  children: String;
}

const Heading = ({ children }: HeadingProps) => {
  return <div> {children} </div>;
};

export default Heading;
