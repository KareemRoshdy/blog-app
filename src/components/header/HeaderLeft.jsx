/* eslint-disable react/prop-types */
import { BsList, BsX } from "react-icons/bs";
import Logo from "./Logo";

const HeaderLeft = ({ toggle, openNavbar }) => {
  return (
    <div className="header-left">
      <Logo />
      <div className="header-menu" onClick={openNavbar}>
        {toggle ? <BsX /> : <BsList />}
      </div>
    </div>
  );
};

export default HeaderLeft;
