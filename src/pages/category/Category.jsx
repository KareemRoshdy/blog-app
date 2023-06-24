import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostLists from "../../components/posts/PostLists";
import { getPostsByCategory } from "../../redux/apiCalls/postApiCall";
import "./category.css";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { postsCategory } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostsByCategory(category));
    window.scrollTo(0, 0);
  }, [dispatch, category]);

  return (
    <section className="category">
      {postsCategory.length === 0 ? (
        <>
          <h1 className="category-not-found">
            Posts With{" "}
            <span>
              {'"'}
              {category}
              {'"'}
            </span>{" "}
            Category Not Found
          </h1>
          <Link to={`/posts`} className="category-not-found-link">
            Back To Posts Page
          </Link>
        </>
      ) : (
        <>
          <h1 className="category-title">
            Post based on
            <span className="category-name">
              {'"'}
              {category}
              {'"'}
            </span>
          </h1>
          <PostLists posts={postsCategory} />
        </>
      )}
    </section>
  );
};

export default Category;
