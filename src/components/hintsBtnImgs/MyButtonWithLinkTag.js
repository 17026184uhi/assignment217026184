import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyButton = ({ txt, to }) => {
  return (
    <Link to={`/${to}`}>
      <Button className="btn btn-primary mb-1 p-2">{txt}</Button>
    </Link>
  );
};

export default MyButton;
