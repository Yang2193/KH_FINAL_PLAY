import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ReviewBoard.css';
import ExApi from '../api/PostApi';

const ReviewDetail = () => {
  const { reNo } = useParams();
  const [review, setReview] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const fetchReview = async () => {
    try {
      const response = await ExApi.getReview(reNo);
      setReview(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await ExApi.getComments(reNo);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReview();
    fetchComments();
  }, [reNo]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ExApi.createComment(reNo, comment);
      const newComment = response.data;
      setComments([...comments, newComment]);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ReviewDetailWrapper">
      <h2 className="ReviewDetailTitle">{review.reTitle}</h2>
      <img className="ReviewDetailImage" src={review.reImg} alt={review.reTitle} />
      <div className="ReviewDetailInfo">
        <p className="De_Title2">글 제목: {review.reTitle2}</p>
        <p className="De_WriteDate">작성 날짜: {review.reWriteDate}</p>
        <p className="De_Views">조회수: {review.reViews}</p>
        <p className="ReviewExplanation">상세 설명: {review.reExplanation}</p>
      </div>
      <div className="ReviewComments">
        <h3 className="CommentTitle">댓글</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea className="CommentInput" value={comment} onChange={handleCommentChange} />
          <button type="submit">댓글 작성</button>
        </form>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDetail;
