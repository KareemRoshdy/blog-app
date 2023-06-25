import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "./add-comment.css";
import { createComment } from "../../redux/apiCalls/commentApiCall";

const AddComment = ({ postId }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  //   Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write something");

    dispatch(createComment({ text, postId }));
    setText("");
  };
  return (
    <form className="add-comment" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="add a comment"
        className="add-comment-input"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button className="add-comment-btn" type="submit">
        Comment
      </button>
    </form>
  );
};

export default AddComment;
