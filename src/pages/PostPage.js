import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostAPI from '../api/PostApi';
import PageNation from '../utils/PageNation';
import '../pages/ReviewBoard.css';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PAGE = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rsp = await PostAPI.getAllPosts();
        console.log(rsp);
        if (rsp.status === 200) {
          setPosts(rsp.data);
          setSortedPosts(rsp.data);
        } else {
          console.log("데이터가 없거나 불러오기를 실패함");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const sortSortNo = () => {
    setSortedPosts([...posts].sort((a, b) => b.id - a.id));
  };

  // 프론트에서 증가 시키는 이유
  // posts 배열을 순회하면서 변경된 게시물의 조회수만 1 실시간으로 증가시키기 위해
  const increaseViews = async (postId) => {
    try {
      await PostAPI.increasePostViews(postId);
    } catch (error) {
      console.log(error);
    }
  };

  const formatWriteDate = (date) => {
    const currentDate = new Date();
    const writeDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    if (isSameDay(currentDate, writeDate)) {
      const formattedTime = writeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return ` ${formattedTime}`;
    } else {
      const formattedDate = writeDate.toLocaleDateString('ko', options);
      return formattedDate;
    }
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const pageCount = Math.ceil(sortedPosts.length / ITEMS_PAGE);
  const offset = currentPage * ITEMS_PAGE;
  const currentPageData = sortedPosts.slice(offset, offset + ITEMS_PAGE);
  

  return (
    <>
      <Header />
      <div className="ReviewBoardWrapper">
        <h2>리뷰 게시판</h2>
        <div className="ButtonWrapper">
          <Link to="/postUpload">
            <button className="insert">등록하기</button>
          </Link>
          <button className="insert" onClick={sortSortNo}>
            최신순
          </button>
        </div>
        <table className="ReviewTable">
          <thead>
            <tr>
              <th>리뷰 제목</th>
              <th>설명</th>
              <th>작성 날짜</th>
              <th className="text_id">아이디</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((post) => (
              <tr className="ReviewItem" key={post.id}>
                <td className="ReviewTitle">
                  <Link
                    to={`/post/select/${post.id}`}
                    className="ReviewLink"
                    onClick={() => increaseViews(post.id)}
                  >
                    {post.postTitle}
                  </Link>
                </td>
                <td className="Explaination2">{post.postContent}</td>
                <td className="WriteDate">{formatWriteDate(post.postDate)}</td>
                <td className="Id">{post.userId}</td>
                <td className="Views">{post.postViews}</td>
              </tr>
            ))}
          </tbody>

        </table>
        {pageCount > 1 && <PageNation pageCount={pageCount} onPageChange={handlePageClick} />}
      </div>
      <Footer />
    </>
  );
};

export default Post;
