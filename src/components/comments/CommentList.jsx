import { BsPencilSquare, BsTrash } from "react-icons/bs";
import swal from "sweetalert";
import { useState } from "react";
import Moment from "react-moment";
import UpdateCommentModal from "./UpdateCommentModal";
import "./comment-list.css";
import { useSelector } from "react-redux";

const CommentList = ({ comments }) => {
  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.post);

  // States
  const [updateComment, setUpdateComment] = useState(false);

  // Delete Comment Handler
  const deleteCommentHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
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
    <div className="comment-list">
      <h4 className="comment-list-count">
        {comments?.length > 0 ? comments?.length + " Comments" : "No Comments"}
      </h4>
      {comments?.map((comment) => (
        <div key={comment._id} className="comment-item">
          <div className="comment-item-info">
            <h5 className="comment-item-username">{comment.username}</h5>

            <div className="comment-item-time">
              <Moment fromNow ago>
                {comment.createdAt}
              </Moment>{" "}
              ago
            </div>
          </div>

          <p className="comment-item-text">{comment.text}</p>

          {user?._id === comment?.user._id || user?._id === post?.user._id && (
            <div className="comment-item-icon-wrapper">
              <span
                className="bi-pencil-square"
                onClick={() => setUpdateComment(true)}
              >
                <BsPencilSquare />
              </span>
              <span className="bi-trash-fill" onClick={deleteCommentHandler}>
                <BsTrash />
              </span>
            </div>
          )}
        </div>
      ))}
      {updateComment && (
        <UpdateCommentModal setUpdateComment={setUpdateComment} />
      )}
    </div>
  );
};

export default CommentList;
