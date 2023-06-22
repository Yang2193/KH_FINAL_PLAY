import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentAPI from '../api/PostApi';

const CommentSection = styled.div`
  margin-top: 30px;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 88%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CommentButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #888;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #888;
`;

const CommentDate = styled.span`
  margin-right: 10px;
  color: #888;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const CommentPage = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const data = await CommentAPI.getCommentsByPostId(postId);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const newComment = {
        commentContent: comment,
        commentDate: new Date(),
        postId: postId,
      };

      const response = await CommentAPI.createComment(newComment);
      setComments([...comments, response]);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentSection>
      <CommentInputWrapper>
        <CommentInput
          type="text"
          placeholder="댓글을 입력하세요..."
          value={comment}
          onChange={handleCommentChange}
        />
        <CommentButton onClick={handleSubmitComment}>댓글 작성</CommentButton>
      </CommentInputWrapper>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentDate>{comment.commentDate}</CommentDate>
            <CommentContent>{comment.commentContent}</CommentContent>
            <CommentInfo>
              <CommentAuthor>{comment.author}</CommentAuthor>
            </CommentInfo>
          </CommentItem>
        ))}
      </CommentList>
    </CommentSection>
  );
};

export default CommentPage;
