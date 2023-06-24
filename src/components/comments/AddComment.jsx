import { useState } from "react";
import { toast } from "react-toastify";
import "./add-comment.css";

const AddComment = () => {
  const [text, setText] = useState("");

  //   Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write something");

    console.log({ text });
    setText("");
  };
  return (
    <form className="add-comment" onSubmit={formSubmitHandler}>
      <textarea
        rows="4"
        type="text"
        placeholder="add a comment"
        className="add-comment-input"
        value={text}
        onChange={({ target }) => setText(target.value)}
      ></textarea>
      <button className="add-comment-btn" type="submit">
        Comment
      </button>
    </form>
  );
};

export default AddComment;
