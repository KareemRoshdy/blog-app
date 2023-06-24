import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/apiCalls/authApiCall";
import "./form.css";
import swal from "sweetalert";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerMessage } = useSelector((state) => state.auth);

  // States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Validation Form
    if (username.trim() === "") return toast.error("Username is required!");
    if (email.trim() === "") return toast.error("Email is required!");
    if (password.trim() === "") return toast.error("Password is required!");

    dispatch(registerUser({ username, email, password }));
  };

  if (registerMessage) {
    swal({
      title: registerMessage,
      icon: "success",
    }).then((isOk) => {
      if (isOk) {
        navigate("/login");
      }
    });
  }

  return (
    <section className="form-container">
      <h1 className="form-title">Create new account</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            placeholder="Enter your username"
            type="text"
            className="form-input"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            className="form-input"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            placeholder="Enter your password"
            type="password"
            className="form-input"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button className="form-btn">Register</button>
      </form>
      <div className="form-footer">
        <p>
          Already have an account? <Link to={`/login`}>Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
