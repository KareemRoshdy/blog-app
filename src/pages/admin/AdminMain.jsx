import { Link } from "react-router-dom";
import {
  BsPerson,
  BsFilePostFill,
  BsTag,
  BsChatLeftText,
} from "react-icons/bs";
import AddCategoryForm from "./AddCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../redux/apiCalls/categoryApiCall";
import { getUsersCount } from "../../redux/apiCalls/profileApiCall";
import { getPostsCount } from "../../redux/apiCalls/postApiCall";
import { getAllComments } from "../../redux/apiCalls/commentApiCall";

const AdminMain = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { usersCount } = useSelector((state) => state.profile);
  const { postsCount } = useSelector((state) => state.post);
  const { comments } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getUsersCount());
    dispatch(getPostsCount());
    dispatch(getAllComments());
  }, [dispatch]);

  return (
    <div className="admin-main">
      <div className="admin-main-header">
        {/* Users-Table */}
        <Link to={`/admin-dashboard/users-table`} className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">{usersCount}</div>
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

        {/* Posts-Table */}
        <Link to={`/admin-dashboard/posts-table`} className="admin-main-card">
          <h5 className="admin-card-title">Posts</h5>
          <div className="admin-card-count">{postsCount}</div>
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

        {/* Categories-Table */}
        <Link
          to={`/admin-dashboard/categories-table`}
          className="admin-main-card"
        >
          <h5 className="admin-card-title">Categories</h5>
          <div className="admin-card-count">{categories.length}</div>
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

        {/* Comments-Table */}
        <Link
          to={`/admin-dashboard/comments-table`}
          className="admin-main-card"
        >
          <h5 className="admin-card-title">Comments</h5>
          <div className="admin-card-count">{comments.length}</div>
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
