import "./verify-email.css";
import { BsPatchCheck, BsPatchExclamation } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { verifyEmail } from "../../redux/apiCalls/authApiCall";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { userId, token } = useParams();
  const { isEmailVerified } = useSelector((state) => state.auth);

  console.log({ userId, token });

  useEffect(() => {
    dispatch(verifyEmail(userId, token));
  }, [dispatch, userId, token]);

  return (
    <section className="verify-email">
      {isEmailVerified ? (
        <>
          <span className="verify-email-icon">
            <BsPatchCheck />
          </span>
          <h1 className="verify-email-title">
            Your email address has been successfully verified
          </h1>
          <Link to={`/login`} className="verify-email-link">
            Go to login page
          </Link>
        </>
      ) : (
        <>
          <span className="verify-email-ico-found-icon">
            <BsPatchExclamation />
          </span>
          <h1 className="verify-email-not-found">Not Found</h1>
        </>
      )}
    </section>
  );
};

export default VerifyEmail;
