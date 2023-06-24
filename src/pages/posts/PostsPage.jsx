import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import PostLists from "../../components/posts/PostLists";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsByPageNumber,
  getPostsCount,
} from "../../redux/apiCalls/postApiCall";
import "./posts-page.css";

const POST_PER_PAGE = 3;

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, postsCount } = useSelector((state) => state.post);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(postsCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(getPostsByPageNumber(currentPage));
    window.scrollTo({ top: 0, left: 0 });
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(getPostsCount());
  }, []);

  return (
    <>
      <section className="posts-page">
        <PostLists posts={posts} />
        <Sidebar />
      </section>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default PostsPage;
