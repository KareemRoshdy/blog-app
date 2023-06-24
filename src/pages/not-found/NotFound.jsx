import { Link } from "react-router-dom";
import "./not-found.css";
import notFound from "./notFound.jpg"

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-image">
        <img src={notFound} alt="" />
      </div>
      <Link className="not-found-link" to={`/`}>
        Back to home page
      </Link>
    </section>
  );
};

export default NotFound;
