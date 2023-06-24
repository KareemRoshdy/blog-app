/* eslint-disable react/prop-types */
import { BsXCircleFill } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";


const UpdateCommentModal = ({ setUpdateComment }) => {
  // States
  const [text, setText] = useState("this is so great");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validation The Inputs Form
    if (text.trim() === "") return toast.error("Please Write Something!");

    console.log({ text });
    setUpdateComment(false);
  };

  return (
    <div className="update-modal">
      <form className="update-modal-form" onSubmit={formSubmitHandler}>
        <abbr title="close">
          <span
            className="update-modal-form-close"
            onClick={() => setUpdateComment(false)}
          >
            <BsXCircleFill />
          </span>
        </abbr>

        <h2 className="update-modal-title">Edit Comment</h2>
        <textarea
          className="update-modal-textarea"
          onChange={({ target }) => setText(target.value)}
          value={text}
          rows="5"
        ></textarea>

        <button className="update-modal-btn">Edit Comment</button>
      </form>
    </div>
  );
};

export default UpdateCommentModal;
