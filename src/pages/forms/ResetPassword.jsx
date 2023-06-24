import { useState } from "react";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validation Form
    if (password.trim() === "") return toast.error("Password is required!");

    console.log({ password });
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Reset Password</h1>
      <form className="form" onSubmit={formSubmitHandler}>
       

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            id="password"
            placeholder="Enter your new password"
            type="password"
            className="form-input"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button className="form-btn">Submit</button>
      </form>

    </section>
  );
};

export default ResetPassword;
