import { Link } from "react-router-dom";
import {
  BsPerson,
  BsFilePostFill,
  BsTag,
  BsChatLeftText,
} from "react-icons/bs";
import AddCategoryForm from "./AddCategoryForm";

const AdminMain = () => {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <Link to={`/admin-dashboard/users-table`} className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link
              to={`/admin-dashboard/users-table`}
              className="admin-card-link"
            >
              See all users
            </Link>
            <div className="admin-card-icon">
              <BsPerson />
            </div>
          </div>
        </Link>

        <Link to={`/admin-dashboard/posts-table`} className="admin-main-card">
          <h5 className="admin-card-title">Posts</h5>
          <div className="admin-card-count">210</div>
          <div className="admin-card-link-wrapper">
            <Link
              to={`/admin-dashboard/posts-table`}
              className="admin-card-link"
            >
              See all posts
            </Link>
            <div className="admin-card-icon">
              <BsFilePostFill />
            </div>
          </div>
        </Link>

        <Link
          to={`/admin-dashboard/categories-table`}
          className="admin-main-card"
        >
          <h5 className="admin-card-title">Categories</h5>
          <div className="admin-card-count">10</div>
          <div className="admin-card-link-wrapper">
            <Link
              to={`/admin-dashboard/categories-table`}
              className="admin-card-link"
            >
              See all categories
            </Link>
            <div className="admin-card-icon">
              <BsTag />
            </div>
          </div>
        </Link>

        <Link
          to={`/admin-dashboard/comments-table`}
          className="admin-main-card"
        >
          <h5 className="admin-card-title">Comments</h5>
          <div className="admin-card-count">44</div>
          <div className="admin-card-link-wrapper">
            <Link
              to={`/admin-dashboard/comments-table`}
              className="admin-card-link"
            >
              See all comments
            </Link>
            <div className="admin-card-icon">
              <BsChatLeftText />
            </div>
          </div>
        </Link>
      </div>

      <AddCategoryForm />
    </div>
  );
};

export default AdminMain;
