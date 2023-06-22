// Post.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostAPI from '../api/PostApi';
import PageNation from '../utils/PageNation';
import '../pages/ReviewBoard.css';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await PostAPI.getAllPosts();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div className="ReviewBoardWrapper">
        <h1>Post</h1>
        <table className="ReviewTable">
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr className="ReviewItem" key={post.id}>
                <td className="ReviewTitle">
                  <Link to={`/post/${post.id}`} className="ReviewLink">
                    {post.postTitle}
                  </Link>
                </td>
                <td>{post.memberInfo.userId}</td>
                <td>{post.postDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PageNation
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
};

export default Post;
