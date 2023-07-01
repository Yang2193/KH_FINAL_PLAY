import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import RtMenuIcon from './ReortIcon.png';

const CommentMenu = styled.div`
  position: absolute;
  top: 10px;
  right: -120px;
  width: 120px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${props => (props.show ? 'block' : 'none')};
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  z-index: 999;
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

const RtMenuImage = styled.img`
  cursor: pointer;
  display: ${props => (props.showImage ? 'block' : 'none')};
`;

const RtMenu = ({ handleReport }) => {
  const [showRtMenu, setShowRtMenu] = useState(false);
  const [isCommentAuthor, setIsCommentAuthor] = useState(false);
  const [showImage, setShowImage] = useState(false); // 로그인 사용자에게 이미지를 보여줄지 여부

  const location = useLocation();
  const { postId, commentAuthorId } = useParams();
  const loggedInUserId = localStorage.getItem('userId');

  useEffect(() => {
    setIsCommentAuthor(commentAuthorId === loggedInUserId);
  }, [commentAuthorId, loggedInUserId]);

  useEffect(() => {
    const postId = new URLSearchParams(location.search).get('postId');
    if (postId) {
      window.localStorage.setItem('postId', postId);
    }
  }, [location.search]);

  useEffect(() => {
    const loggedInUserId = localStorage.getItem('userId');
    setShowImage(loggedInUserId !== null);
  }, []);

  const toggleRtMenu = () => {
    setShowRtMenu(!showRtMenu);
  };

  return (
    <>
      <RtMenuImage
        src={RtMenuIcon}
        alt="Rt 메뉴"
        onClick={toggleRtMenu}
        style={{ marginTop: '3px', marginLeft: '', cursor: 'pointer', height: '18px' }}
        showImage={showImage}
      />

      <CommentMenu show={showRtMenu}>
        <CommentMenuItem onClick={handleReport}>신고하기</CommentMenuItem>
      </CommentMenu>
    </>
  );
};

export default RtMenu;
