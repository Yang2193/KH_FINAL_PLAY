import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostAPI from '../api/PostApi';

const PostDetailWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const PostHeader = styled.div`
  margin-bottom: 20px;
`;

const PostTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  color: #888;
  font-size: 14px;
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

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await PostAPI.getPostById(postId);
      setPost(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatWriteDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US');
    return formattedDate;
  };

  if (!post) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <PostDetailWrapper>
      <PostHeader>
        <PostTitle>{post.postTitle}</PostTitle>
        <PostInfo>
          작성자: {post.memberId} | 작성 날짜: {formatWriteDate(post.postDate)} | 조회수: {post.postViews}
        </PostInfo>
      </PostHeader>
      <PostImage>
        <img src={post.postImageUrl} alt="Post" />
      </PostImage>
      <PostContent>{post.postContent}</PostContent>
    </PostDetailWrapper>
  );
};

export default PostDetail;
