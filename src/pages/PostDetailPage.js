
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostAPI from '../api/PostApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommentPage from './CommentPage';

const Background = styled.div`
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const PostDetailWrapper = styled.div`
  width: 900px;
  height: auto;
  min-height: 890px;
  margin: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  flex-grow: 1;
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
  background-color: #f6f6f6;
  padding: 0 20px;
  border-radius: 5px;
`;

const PostInfoItem = styled.span`
  display: inline-block;
  margin-right: 10px;
  color: ${(props) => (props.userId ? '#000' : '#888')};
  font-weight: ${(props) => (props.userId ? 'bold' : 'normal')};
`;

const PostImage = styled.div`
  margin-bottom: 20px;
`;

const PostContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-line;
  margin-bottom: 20px;
`;

const LoadingMessage = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CommentWrapper = styled.div`
  margin-top: 20px;
`;

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await PostAPI.getPostById(postId);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return (
      <>
        <Header />
        <Background>
          <LoadingMessage>Loading...</LoadingMessage>
        </Background>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Background>
        <PostDetailWrapper>
          <PostHeader>
            <PostTitle>{post.postTitle}</PostTitle>
            <PostInfo>
              <PostInfoItem userId>{post.memberInfo.userId}</PostInfoItem>
              <PostInfoItem>{post.postDate}</PostInfoItem>
            </PostInfo>
          </PostHeader>
          <PostImage>
            <img src={post.imageUrl} alt="Post" />
          </PostImage>
          <PostContent>{post.content}</PostContent>
          <CommentWrapper>
            <CommentPage postId={postId} />
          </CommentWrapper>
        </PostDetailWrapper>
      </Background>
      <Footer />
    </>
  );
};

export default PostDetailPage;
