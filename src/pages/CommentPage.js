import React, { useEffect, useState } from 'react';
import './ReviewBoard.css';
import ExApi from '../api/PostApi';
import { Link } from 'react-router-dom';

const CommentPage = () => {
  const [reviews, setReviews] = useState([]);
  const [sortedReviews, setSortedReviews] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await ExApi.boardList();
      setReviews(data.data);
      setSortedReviews(data.data);
      console.log(data.data);
      setIsDataFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  const sortSortNo = () => {
    setSortedReviews([...reviews].sort((a, b) => b.reNo - a.reNo));
  };

  const increaseViews = async (reviewNo) => {
    try {
      await ExApi.increaseViews(reviewNo);
      console.log(`조회수 증가 ${reviewNo}`);
      if (isDataFetched) {
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.reNo === reviewNo ? { ...review, reViews: review.reViews + 1 } : review
          )
        );
      } else {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatWriteDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US');
    return formattedDate;
  };

  return (
    <div className="ReviewBoardWrapper">
      <h2>리뷰 게시판</h2>
      <div className="ButtonWrapper">
        <Link to="/upLoad">
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
          {sortedReviews.map((review) => (
            <tr className="ReviewItem" key={review.reNo}>
              <td className="ReviewTitle">
                <Link
                  to={`/reviews/${review.reNo}`}
                  className="ReviewLink"
                  onClick={() => increaseViews(review.reNo)}
                >
                  {review.reTitle}
                </Link>
              </td>
              <td className="Explaination2">{review.reExplanation}</td>
              <td className="WriteDate">{formatWriteDate(review.reWriteDate)}</td>
              <td className="Id">{review.reId}</td>
              <td className="Views">{review.reViews}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentPage;
