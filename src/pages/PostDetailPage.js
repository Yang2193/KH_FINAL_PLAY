import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostAPI from '../api/PostApi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Background = styled.div`
  background-color: #E2E2E2;
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
  height: ${props => props.height};
  transition: height 0.3s;
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
  background-color: #990A2C;
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
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  position: relative;
  font-size: 14px;
  margin-bottom: 5px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #365899;
`;

const CommentMenu = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 120px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  z-index: 999;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const CommentMenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  color: #555;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f6f6f6;
  }
`;

const formatWriteDate = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  const formattedDate = new Date(date).toLocaleString('ko', options);
  return formattedDate;
};

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [commentSectionHeight, setCommentSectionHeight] = useState('auto');
  const [showCommentMenu, setShowCommentMenu] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState('');

  useEffect(() => {
    window.localStorage.setItem('postId', postId);
  }, [postId]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await PostAPI.getPostById(postId);
      setPost(data);
      increaseViews(postId);
      const comments = await PostAPI.getCommentsByPostId(postId);
      setComments(comments);
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

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const newComment = {
        commentContent: comment,
        postId: postId,
        userId: localStorage.getItem("userId"),
      };

      const response = await PostAPI.createComment(newComment);
      if (response.status === 200) {
        console.log(response.data);
        fetchPost();
        setComment('');
      }

      console.log('작성된 댓글:', response);
    } catch (error) {
      console.log(error);
    }
  };



  
  const [isCommentAuthor, setIsCommentAuthor] = useState(false);


  const handleCommentMenu = (commentId) => {
    const loggedInUserId = localStorage.getItem("userId");
    const selectedComment = comments.find(comment => comment.id === commentId);
  
    if (selectedComment && selectedComment.userId === loggedInUserId) {
      setSelectedCommentId(commentId);
      setIsCommentAuthor(true);
      setShowCommentMenu(true);
    } else {
      setIsCommentAuthor(false);
      setSelectedCommentId('');
      alert("본인만 수정 삭제를 할 수 있습니다");
    }
  };
  

  const handleDeleteComment = async () => {
    
    
  };

  const handleUpdateComment = () => {

  };

  useEffect(() => {
    const commentSection = document.getElementById('commentSection');
    if (commentSection) {
      const sectionHeight = commentSection.scrollHeight + 'px';
      setCommentSectionHeight(sectionHeight);
    }
  }, [comments]);

  if (!post) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <>
      <Header />
      <Background>
        <PostDetailWrapper>
          <PostHeader>
            <PostTitle>{post.postTitle}</PostTitle>
            <PostInfo>
              <div>
                <PostInfoItem userId>작성자: {post.memberInfo ? post.memberInfo.userNickname : ''}</PostInfoItem>
                <PostInfoItem>{formatWriteDate(post.postDate)}</PostInfoItem>
              </div>
              <PostInfoItem>조회수: {post.postViews}</PostInfoItem>
            </PostInfo>
          </PostHeader>
          <PostImage>
            <img src={post.postImageUrl} alt="Post" />
          </PostImage>
          <PostContent>{post.postContent}</PostContent>

          <CommentSection id="commentSection" height={commentSectionHeight}>
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
                  <CommentContent>
                    <CommentAuthor>{comment.nickname}</CommentAuthor>
                    <CommentDate>{formatWriteDate(comment.commentDate)}</CommentDate>
                    <CommentMenuItem>
                      <div onClick={() => handleCommentMenu(comment.id)}>{comment.commentContent}</div>
                    </CommentMenuItem>
                    {comment.id === selectedCommentId && isCommentAuthor && (
                      <CommentMenu  show={showCommentMenu}>
                        <CommentMenuItem onClick={handleDeleteComment}>삭제</CommentMenuItem>
                        <CommentMenuItem onClick={handleUpdateComment}>수정</CommentMenuItem>
                      </CommentMenu>
                    )}
                  </CommentContent>
                </CommentItem>
              ))}
            </CommentList>

            
          </CommentSection>
        </PostDetailWrapper>
      </Background>
      <Footer />
    </>
  );
};

export default PostDetailPage;
