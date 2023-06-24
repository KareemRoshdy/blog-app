/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import logo from "./icon.png";

const Logo = () => {
  return (
    <Link to={"/"} className="header-logo">
      <img src={logo} alt="logo-image" />
    </Link>
  );
};

export default Logo;
