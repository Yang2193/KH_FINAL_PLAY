import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostAPI from '../api/PostApi';
import PageNation from '../utils/PageNation';
import '../pages/ReviewBoard.css';

const Post = () => {
  const [posts, setPosts] = useState([]); // 포스트 목록을 저장하는 상태
  const [sortedPosts, setSortedPosts] = useState([]); // 정렬된 포스트 목록을 저장하는 상태
  const [isDataFetched, setIsDataFetched] = useState(false); // 데이터를 가져왔는지 여부를 저장하는 상태
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
  const ITEMS_PAGE = 10; // 보여질 아이템 개수

  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트될 때 데이터를 가져오는 함수 호출
  }, []);

  
//데이터 가져오기 fetchData
  const fetchData = async () => {
    try {
      const data = await PostAPI.getAllPosts(); // 포스트 데이터를 가져옴
      setPosts(data); // 포스트 목록 상태 업데이트
      setSortedPosts(data); // 정렬된 포스트 목록 상태 업데이트
      setIsDataFetched(true); // 데이터를 가져왔음을 표시
    } catch (error) {
      console.log(error);
    }
  };
// 최신 순서 sortSortNo
  const sortSortNo = () => {
    setSortedPosts([...posts].sort((a, b) => b.id - a.id)); // id를 기준으로 내림차순으로 정렬하여 정렬된 포스트 목록 상태 업데이트
  };


  //조회수 증가 increaseViews
  const increaseViews = async (postId) => {
    try {
      await PostAPI.increasePostViews(postId); // 포스트 조회수 증가 API 호출
      if (isDataFetched) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId ? { ...post, postViews: post.postViews + 1 } : post
          )
        ); // 조회수 증가한 포스트의 조회수 업데이트
      } else {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };
// 시간 까지 나오는거 자르기 formatWriteDate
  const formatWriteDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US'); // 날짜를 원하는 형식으로 변환
    return formattedDate;
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
// 아직 잘 모름...
  const pageCount = Math.ceil(sortedPosts.length / ITEMS_PAGE); // 페이지 수 계산
  const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스
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
                      <Link to={`/posts/${post.id}`} className="ReviewLink" onClick={() => increaseViews(post.id)}>
        {post.postTitle}
      </Link>

                </td>
                <td className="Explaination2">{post.postContent}</td>
                <td className="WriteDate">{formatWriteDate(post.postDate)}</td>
                <td className="Id">{post.memberInfo.userId}</td>
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
