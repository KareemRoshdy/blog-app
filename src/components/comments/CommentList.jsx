import { BsPencilSquare, BsTrash } from "react-icons/bs";
import swal from "sweetalert";
import { useState } from "react";
import Moment from "react-moment";
import UpdateCommentModal from "./UpdateCommentModal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../redux/apiCalls/commentApiCall";
import "./comment-list.css";

const CommentList = ({ comments }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.post);

  // States
  const [updateComment, setUpdateComment] = useState(false);
  const [commentForUpdate, setCommentForUpdate] = useState(null);

  // Update Comment Handler
  const updateCommentHandler = (comment) => {
    setCommentForUpdate(comment);
    setUpdateComment(true);
  };

  // Delete Comment Handler
  const deleteCommentHandler = (commentId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deleteComment(commentId));
      }
    });
  };
  return (
    <div className="comment-list">
      <h4 className="comment-list-count">
        {comments?.length > 0 ? comments?.length + " Comments" : "No Comments"}
      </h4>

      <div className="comments-list-box">
        {comments?.map((comment) => (
          <div key={comment._id} className="comment-item">
            <div className="comment-item-info">
              <h5 className="comment-item-username">
                <Link to={`/profile/${comment?.user}`}>{comment.username}</Link>
              </h5>

              <div className="comment-item-time">
                <Moment fromNow ago>
                  {comment.createdAt}
                </Moment>{" "}
                ago
              </div>
            </div>

            <p className="comment-item-text">{comment.text}</p>

            {user?._id === comment?.user._id ||
              (user?._id === post?.user._id && (
                <div className="comment-item-icon-wrapper">
                  <span
                    className="bi-pencil-square"
                    onClick={() => updateCommentHandler(comment)}
                  >
                    <BsPencilSquare />
                  </span>
                  <span
                    className="bi-trash-fill"
                    onClick={() => deleteCommentHandler(comment?._id)}
                  >
                    <BsTrash />
                  </span>
                </div>
              ))}
          </div>
        ))}
      </div>

      {updateComment && (
        <UpdateCommentModal
          commentForUpdate={commentForUpdate}
          setUpdateComment={setUpdateComment}
        />
      )}
    </div>
  );
};

export default CommentList;
