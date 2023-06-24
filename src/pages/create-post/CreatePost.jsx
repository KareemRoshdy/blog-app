import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BsImageFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/apiCalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
import { getCategories } from "../../redux/apiCalls/categoryApiCall";
import "./create-post.css";

const CreatePost = () => {
  const { categories } = useSelector((state) => state.category);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isPostCreated } = useSelector((state) => state.post);

  // States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    // Validation The Inputs Form
    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "")
      return toast.error("Post Description is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    dispatch(createPost(formData));
  };

  useEffect(() => {
    if (isPostCreated) {
      navigate("/");
    }
  }, [isPostCreated, navigate]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className="create-post">
      <h1 className="create-post-title">Create New Post</h1>

      <form className="create-post-form" onSubmit={FormSubmitHandler}>
        <input
          type="text"
          placeholder="Post Title"
          className="create-post-input"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <select
          className="create-post-input"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option disabled value="">
            Select A Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>

        <textarea
          className="create-post-textarea"
          rows="5"
          placeholder="Post Description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        ></textarea>

        <label className="create-post-image" htmlFor="file">
          <BsImageFill />
          <span> {file ? file.name : "Select Image"}</span>
        </label>
        <input
          type="file"
          name="file"
          id="file"
          hidden
          className="create-post-upload"
          onChange={({ target }) => setFile(target.files[0])}
        />

        <button type="submit" className="create-post-btn">
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="25"
              visible={true}
            />
          ) : (
            "Create"
          )}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
