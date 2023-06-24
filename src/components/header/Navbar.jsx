/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  BsHouseDoor,
  BsJournalPlus,
  BsPersonGear,
  BsSticky,
} from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = ({ toggle, closeNavbar }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className={toggle ? "navbar open" : "navbar"}>
      <ul className="nav-links">
        <Link to="/" className="nav-link" onClick={closeNavbar}>
          <BsHouseDoor />
          <span>Home</span>
        </Link>

        <Link to="/posts" className="nav-link" onClick={closeNavbar}>
          <BsSticky />
          <span>Posts</span>
        </Link>

        {user && (
          <Link
            to="/posts/create-post"
            className="nav-link"
            onClick={closeNavbar}
          >
            <BsJournalPlus />
            <span>Create</span>
          </Link>
        )}

        {user?.isAdmin && (
          <Link
            to="/admin-dashboard"
            className="nav-link"
            onClick={closeNavbar}
          >
            <BsPersonGear />
            <span>Admin Dashboard</span>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
