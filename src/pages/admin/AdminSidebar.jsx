import { Link } from "react-router-dom";
import {
  BsChatLeftText,
  BsColumns,
  BsFilePostFill,
  BsPerson,
  BsTag,
} from "react-icons/bs";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <Link to={`/admin-dashboard`} className="admin-sidebar-title">
        <BsColumns />
        <span>Dashboard</span>
      </Link>

      <ul className="admin-dashboard-list">
        <Link className="admin-sidebar-link" to={`/admin-dashboard/users-table`}>
          <BsPerson />
          <span>Users</span>
        </Link>
        <Link className="admin-sidebar-link" to={`/admin-dashboard/posts-table`}>
          <BsFilePostFill />
          <span>Posts</span>
        </Link>
        <Link className="admin-sidebar-link" to={`/admin-dashboard/categories-table`}>
          <BsTag />
          <span>Categories</span>
        </Link>
        <Link className="admin-sidebar-link" to={`/admin-dashboard/comments-table`}>
          <BsChatLeftText />
          <span>Comments</span>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
