import { Link, useParams, useNavigate } from "react-router-dom";
import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsImageFill,
  BsPencilSquare,
  BsTrash,
} from "react-icons/bs";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import swal from "sweetalert";
import UpdatePostModal from "./UpdatePostModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  getSinglePost,
  toggleLikePost,
  updatePostImage,
} from "../../redux/apiCalls/postApiCall";
import "./post-details.css";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSinglePost(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  // States
  const [file, setFile] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);

  // Update Image Submit Handler
  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no image!");
    const formData = new FormData();
    formData.append("image", file);

    dispatch(updatePostImage(formData, post?._id));
  };

  // Delete Post Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deletePost(post?._id));
        navigate(`/profile/${user?._id}`);
      }
    });
  };

  return (
    <section className="post-details">
      <div className="post-details-info">
        <div className="post-details-info-container">
          <h1 className="post-details-title">{post?.title}</h1>

          <div className="post-details-user-info">
            <div className="post-details-user">
              <img
                src={post?.user.profilePhoto?.url}
                alt={post?.user.username}
                className="post-details-user-image"
              />
              <strong>
                <Link to={`/profile/${post?.user._id}`}>
                  {post?.user.username}
                </Link>
              </strong>
            </div>
            <span>|</span>
            <span className="post-details-date">
              {new Date(post?.createdAt).toDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="post-details-image-wrapper">
        <img
          src={file ? URL.createObjectURL(file) : post?.image.url}
          alt={post?.title}
          className="post-details-image"
        />

        {post?.user._id === user?._id && (
          <form
            className="update-post-image-form"
            onSubmit={updateImageSubmitHandler}
          >
            <label htmlFor="file" className="update-post-label">
              <BsImageFill />
              <span>Select new image</span>
            </label>
            <input
              style={{ display: "none" }}
              onChange={({ target }) => setFile(target.files[0])}
              type="file"
              name="file"
              id="file"
            />
            <button type="submit">Upload</button>
          </form>
        )}
      </div>

      <div className="post-details-bottom">
        <p className="post-details-description">
          {post?.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          voluptatibus maiores ratione fugiat aliquam, labore id nemo eius
          similique totam reprehenderit! Laudantium hic excepturi porro nostrum
          aperiam. Accusantium, veritatis error! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima voluptatibus maiores ratione
          fugiat aliquam, labore id nemo eius similique totam reprehenderit!
          Laudantium hic excepturi porro nostrum aperiam. Accusantium, veritatis
          error!
        </p>

        <div className="post-details-icon-wrapper">
          {user && (
            <div onClick={() => dispatch(toggleLikePost(post?._id))}>
              {post?.likes.includes(user?._id) ? (
                <BsHandThumbsUpFill />
              ) : (
                <BsHandThumbsUp />
              )}

              <small>{post?.likes.length} likes</small>
            </div>
          )}

          {post?.user._id === user?._id && (
            <div>
              <span
                className="bi-pencil-square"
                onClick={() => setUpdatePost(true)}
              >
                <BsPencilSquare />
              </span>
              <span className="bi-trash-fill" onClick={deletePostHandler}>
                <BsTrash />
              </span>
            </div>
          )}
        </div>

        <AddComment />
        <CommentList comments={post?.comments} />
      </div>
      {updatePost && (
        <UpdatePostModal post={post} setUpdatePost={setUpdatePost} />
      )}
    </section>
  );
};

export default PostDetails;
