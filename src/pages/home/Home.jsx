import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import PostLists from "../../components/posts/PostLists";
import { useEffect } from "react";
import { getPostsByPageNumber } from "../../redux/apiCalls/postApiCall";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostsByPageNumber(1));
  }, [dispatch]);

  return (
    <section className="home">
      <div className="home-hero-header">
        <div className="home-hero-header-layout">
          <h1 className="home-title">Blogs</h1>
          <p className="home-description">
            Welcome to our Blog! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eum iusto ut qui. Quos consequatur impedit.
          </p>
        </div>
      </div>

      <div className="home-latest-post">Latest Posts</div>

      <div className="home-container">
        <PostLists posts={posts} />
        <Sidebar />
      </div>
      <div className="home-see-posts-link">
        <Link to="/posts" className="home-link">
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
