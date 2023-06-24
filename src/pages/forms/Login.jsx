import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";

const Login = () => {
  const dispatch = useDispatch();
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Validation Form
    if (email.trim() === "") return toast.error("Email is required!");
    if (password.trim() === "") return toast.error("Password is required!");

    dispatch(loginUser({ email, password }));
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Login to your account</h1>
      <form className="form" onSubmit={formSubmitHandler}>
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

        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        <p>
          Did you forgot your password?
          <Link to={`/forgot-password`}>Forgot Password</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
