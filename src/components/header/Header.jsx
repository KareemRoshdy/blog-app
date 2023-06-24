import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const openNavbar = () => setToggle((prev) => !prev);
  const closeNavbar = () => setToggle(false);

  return (
    <header className="header">
      <HeaderLeft openNavbar={openNavbar} toggle={toggle} />
      <Navbar closeNavbar={closeNavbar} toggle={toggle} />
      <HeaderRight />
    </header>
  );
};

export default Header;
