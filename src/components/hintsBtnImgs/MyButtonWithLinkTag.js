import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyButton = ({ txt, to }) => {
  return (
    <Link to={`/${to}`}>
      <div className="d-grid gap-2 mb-2">
        <Button>{txt}</Button>
      </div>
    </Link>
  );
};

export default MyButton;
