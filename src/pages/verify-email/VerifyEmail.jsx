import "./verify-email.css";
import { BsPatchCheck, BsPatchExclamation } from "react-icons/bs";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const isEmailVerified = true;
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
