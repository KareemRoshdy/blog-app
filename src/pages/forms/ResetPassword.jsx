import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getResetPassword,
  resetPassword,
} from "../../redux/apiCalls/passwordApiCall";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { userId, token } = useParams();
  const { isError } = useSelector((state) => state.password);

  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(getResetPassword(userId, token));
  }, [dispatch, userId, token]);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Validation Form
    if (password.trim() === "") return toast.error("Password is required!");

    dispatch(resetPassword(password, { userId, token }));
  };

  return (
    <section className="form-container">
      {isError ? (
        <h1>Not Found</h1>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
};

export default ResetPassword;
