/* eslint-disable react/prop-types */
import { BsXCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../redux/apiCalls/postApiCall";
import { getCategories } from "../../redux/apiCalls/categoryApiCall";

const UpdatePostModal = ({ post, setUpdatePost }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  // States
  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [description, setDescription] = useState(post.description);

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validation The Inputs Form
    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "")
      return toast.error("Post Description is required");

    console.log({ title, category, description });
    dispatch(updatePost({ title, category, description }, post?._id));
    setUpdatePost(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="update-modal">
      <form className="update-modal-form" onSubmit={formSubmitHandler}>
        <abbr title="close">
          <span
            className="update-modal-form-close"
            onClick={() => setUpdatePost(false)}
          >
            <BsXCircleFill />
          </span>
        </abbr>

        <h2 className="update-modal-title">Update Post</h2>
        <input
          type="text"
          className="update-modal-input"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <select
          className="update-modal-input"
          onChange={({ target }) => setCategory(target.value)}
          value={category}
        >
          <option disabled value="">
            Select a Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>

        <textarea
          className="update-modal-textarea"
          onChange={({ target }) => setDescription(target.value)}
          value={description}
          rows="5"
        ></textarea>

        <button className="update-modal-btn">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePostModal;
