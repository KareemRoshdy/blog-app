import { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validation Form

    if (email.trim() === "") return toast.error("Email is required!");

    console.log({ email });
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Forgot Password</h1>
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

        <button className="form-btn">Submit</button>
      </form>
    </section>
  );
};

export default ForgotPassword;
