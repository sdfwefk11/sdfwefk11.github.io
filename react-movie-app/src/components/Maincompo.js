import { Link } from "react-router-dom";
function Maincompo({ movie, text }) {
  return (
    <h1>
      <Link to={movie}>{text}</Link>
    </h1>
  );
}

export default Maincompo;
