import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PostItem = ({ post, username, userId }) => {
  const profileLink = userId
    ? `/profile/${userId}`
    : `/profile/${post?.user._id}`;
  return (
    <div className="post-item">
      <div className="post-item-image-wrapper">
        <img
          src={post?.image.url}
          alt={post?.title}
          className="post-item-image"
        />
      </div>

      <div className="post-item-info-wrapper">
        <div className="post-item-info">
          <div className="post-item-author">
            <strong>Author: </strong>

            <Link className="post-item-username" to={profileLink}>
              {username ? username : post?.user.username}
            </Link>
          </div>

          <div className="post-item-date">
            {new Date(post?.createdAt).toDateString()}
          </div>
        </div>

        <div className="post-item-details">
          <h4 className="post-item-title">{post?.title}</h4>
          <Link
            className="post-item-category"
            to={`/posts/categories/${post?.category}`}
          >
            {post?.category}
          </Link>
        </div>

        <p className="post-item-description">
          {post?.description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          atque! Vitae et obcaecati, expedita id aut quia veritatis consequatur
          voluptatem modi fugit ipsum iure hic provident neque, voluptatibus
          accusamus animi? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nesciunt, atque! Vitae et obcaecati, expedita id aut quia
          veritatis consequatur voluptatem modi fugit ipsum iure hic provident
          neque, voluptatibus accusamus animi?
        </p>
        <Link className="post-item-link" to={`/posts/details/${post?._id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
