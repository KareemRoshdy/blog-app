import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { BsEye, BsTrash } from "react-icons/bs";
import swal from "sweetalert";
import {posts} from "../../dummyData" 

const PostsTable = () => {
  // Delete Post Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };
  
  return (
    <section className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">Posts</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>Users</th>
              <th>Post Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image">
                    <img
                      src="/images/user-avatar.png"
                      alt="userImage"
                      className="table-user-image"
                    />
                    <span className="table-username">
                      {item.user.username}
                    </span>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>
                  <div className="table-button-group">
                    <button title="view post" className="table-view-btn">
                      <Link to={`/posts/details/${item._id}`}>
                        <BsEye />
                      </Link>
                    </button>
                    <button
                      title="delete post"
                      className="table-delete-btn"
                      onClick={deletePostHandler}
                    >
                      <BsTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PostsTable;
