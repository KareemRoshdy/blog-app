import {
  BsBoxArrowInRight,
  BsBoxArrowLeft,
  BsPerson,
  BsPersonPlus,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/apiCalls/authApiCall";

const HeaderRight = () => {
  // Dispatch
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // States
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="header-right">
      {user ? (
        <div className="header-right-user-info">
          <span
            className="header-right-username"
            onClick={() => setDropdown((prev) => !prev)}
          >
            {user?.username}
          </span>
          <img
            src={user?.profilePhoto.url}
            alt="userPhoto"
            className="header-right-user-photo"
          />

          {dropdown && (
            <div className="header-right-dropdown">
              <Link
                to={`/profile/${user?._id}`}
                className="header-dropdown-item"
                onClick={() => setDropdown(false)}
              >
                <BsPerson />
                <span>Profile</span>
              </Link>
              <div
                className="header-dropdown-item"
                onClick={() => {
                  dispatch(logoutUser());
                  setDropdown(false);
                  navigate("/");
                }}
              >
                <BsBoxArrowLeft />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link to="/login" className="header-right-link">
            <BsBoxArrowInRight />
            <span>Login</span>
          </Link>
          <Link to="/register" className="header-right-link">
            <BsPersonPlus />
            <span>Register</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderRight;
