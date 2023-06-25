/* eslint-disable react/prop-types */
import { BsXCircleFill } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/apiCalls/profileApiCall";

const UpdateProfileModal = ({ setUpdateProfile, profile }) => {
  const dispatch = useDispatch();

  // States
  const [username, setUsername] = useState(profile?.username);
  const [bio, setBio] = useState(profile?.bio);
  const [password, setPassword] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validation The Inputs Form
    if (username.trim() === "") return toast.error("Username is required");
    if (bio.trim() === "") return toast.error("Bio is required");

    const updatedUser = { username, bio };
    if (password.trim() !== "") {
      updatedUser.password = password;
    }

    dispatch(updateProfile(profile?._id, updatedUser));
    setUpdateProfile(false);
  };

  return (
    <div className="update-modal">
      <form className="update-modal-form" onSubmit={formSubmitHandler}>
        <abbr title="close">
          <span
            className="update-modal-form-close"
            onClick={() => setUpdateProfile(false)}
          >
            <BsXCircleFill />
          </span>
        </abbr>

        <h2 className="update-modal-title">Update Profile</h2>
        <input
          type="text"
          className="update-modal-input"
          value={username}
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          className="update-modal-input"
          value={bio}
          placeholder="Bio"
          onChange={({ target }) => setBio(target.value)}
        />
        <input
          type="password"
          className="update-modal-input"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <button className="update-modal-btn">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfileModal;
