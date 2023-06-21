import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostAPI from '../api/PostApi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Background = styled.div`
  background-color: #E2E2E2;
  height: 1000px;
`;

const PostDetailWrapper = styled.div`
  max-width: 940px;
  max-height: 1800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: 70px;
`;

const PostHeader = styled.div`
  margin-bottom: 20px;
`;

const PostTitle = styled.h2`
  font-size: 23px;
  margin-bottom: 30px;
  margin-right: 80%;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #888;
  font-size: 14px;
  height: 48px;
  background-color: #F6F6F6;
  padding: 0 20px;
  border-radius: 5px;
`;

const PostInfoItem = styled.span`
  display: inline-block;
  margin-right: 10px;
  color: ${props => props.userId ? '#000' : '#888'};
  font-weight: ${props => props.userId ? 'bold' : 'normal'};
`;

const PostImage = styled.div`
  margin-bottom: 20px;
`;

const PostContent = styled.div`
  line-height: 1.6;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #888;
  margin-top: 40px;
`;

const CommentSection = styled.div`
  margin-top: 30px;
`;

const CommentInput = styled.input`
  width: 88%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CommentButton = styled.button`
  margin-left: 15px;
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

const CommentDate = styled.span`
  font-size: 12px;
  color: #888;
`;

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const userId = window.localStorage.getItem("isUserId");

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await PostAPI.getPostById(postId);
      setPost(data);
      if (data.comments) {
        setComments(data.comments);
      } else {
        setComments([]);
      }
      increaseViews(postId);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const increaseViews = async (postId) => {
    try {
      await PostAPI.increasePostViews(postId);
      setPost(prevPost => ({ ...prevPost, postViews: prevPost.postViews + 1 }));
    } catch (error) {
      console.log(error);
    }
  };

  const formatWriteDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US');
    return formattedDate;
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const newComment = {
        commentContent: comment,
        commentDate: new Date(),
        postId: post.id,
      };
      const response = await PostAPI.createComment(newComment.postId, newComment);
      setComments([...comments, response]);
      setComment('');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <>
      <Header></Header>
      <Background>
        <PostDetailWrapper>
          <PostHeader>
            <PostTitle>{post.postTitle}</PostTitle>
            <PostInfo>
              <div>
                <PostInfoItem userId>작성자: {post.memberInfo.userId}</PostInfoItem>
                <PostInfoItem>작성 날짜: {formatWriteDate(post.postDate)}</PostInfoItem>
              </div>
              <PostInfoItem>조회수: {post.postViews}</PostInfoItem>
            </PostInfo>
          </PostHeader>
          <PostImage>
            <img src={post.postImageUrl} alt="Post" />
          </PostImage>
          <PostContent>{post.postContent}</PostContent>
          <CommentSection>
            <CommentInput
              type="text"
              placeholder="댓글을 입력하세요..."
              value={comment}
              onChange={handleCommentChange}
            />
            <CommentButton onClick={handleSubmitComment}>댓글 작성</CommentButton>
            <CommentList>
              {comments.map((comment) => (
                <CommentItem key={comment.id}>
                  <CommentContent>{comment.commentContent}</CommentContent>
                  <CommentDate>{formatWriteDate(comment.commentDate)}</CommentDate>
                </CommentItem>
              ))}
            </CommentList>
          </CommentSection>
        </PostDetailWrapper>
      </Background>
      <Footer></Footer>
    </>
  );
};

export default PostDetailPage;
