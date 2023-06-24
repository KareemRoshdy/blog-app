import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { BsTrash } from "react-icons/bs";
import swal from "sweetalert";

const CommentsTable = () => {
  // Delete Comments Handler
  const deleteCommentsHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Comment has been deleted!", {
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
        <h1 className="table-title">Comments</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>Users</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  <div className="table-image">
                    <img
                      src="/images/user-avatar.png"
                      alt="userImage"
                      className="table-user-image"
                    />
                    <span className="table-username">Kareem Roshdy</span>
                  </div>
                </td>
                <td>thank you for this post</td>
                <td>
                  <div className="table-button-group">
                    <button
                      title="delete comment"
                      className="table-delete-btn"
                      onClick={deleteCommentsHandler}
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

export default CommentsTable;
