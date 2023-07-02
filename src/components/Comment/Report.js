import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PostAPI from '../../api/PostApi';

import RtMenuIcon from './ReortIcon.png';

const CommentMenu = styled.div`
  position: absolute;
  top: 10px;
  right: -220px;
  width: 220px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${props => (props.show ? 'block' : 'none')};
  flex-direction: column;
  padding: 10px;
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
  margin-left: 5px;
  cursor: pointer;
`;

const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ReportLabel = styled.label`
  margin-bottom: 5px;
`;

const ReportInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const ReportButton = styled.button`
  padding: 5px 10px;
  background-color: #555;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const RtMenu = () => {
  const [showRtMenu, setShowRtMenu] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const location = useLocation();
  const [postId, setPostId] = useState('');

  useEffect(() => {
    const postId = new URLSearchParams(location.search).get('postId');
    if (postId) {
      setPostId(postId);
    }
  }, [location.search]);


  const handleReport = async (commentId, reportReason, userId, postId) => {
    try {
      const response = await PostAPI.reportComment(commentId, reportReason, userId, postId);
      console.log('Report:', response.data);
    } catch (error) {
    }
  };

  const toggleRtMenu = () => {
    setShowRtMenu(!showRtMenu);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const commentId = parseInt(window.localStorage.getItem('commentId'),10);
    const userId = parseInt(window.localStorage.getItem('userId'), 10); 
    handleReport(commentId, reportReason, userId, postId); 
  
    setShowRtMenu(false);
    setReportReason('');
  };
  const handleInputChange = e => {
    setReportReason(e.target.value);
  };

  const handleExampleClick = example => {
    setReportReason(example);
  };

  return (
    <>
      <RtMenuImage
        src={RtMenuIcon}
        alt="Rt 메뉴"
        onClick={toggleRtMenu}
        style={{ marginTop: '5px', marginLeft: '', cursor: 'pointer', height: '15px' }}
      />

      <CommentMenu show={showRtMenu}>
        <CommentMenuItem>신고하기</CommentMenuItem>
        <ReportForm onSubmit={handleSubmit}>
          <ReportLabel>신고 사유:</ReportLabel>
          <ReportInput type="text" value={reportReason} onChange={handleInputChange} />
          <ReportLabel>신고 예시:</ReportLabel>
          <CommentMenuItem onClick={() => handleExampleClick('욕설 및 혐오 표현 사용')}>
            욕설 및 혐오 표현 사용
          </CommentMenuItem>
          <CommentMenuItem onClick={() => handleExampleClick('스팸 또는 광고')}>
            스팸 또는 광고
          </CommentMenuItem>
          <CommentMenuItem onClick={() => handleExampleClick('폭력적인 콘텐츠')}>
            폭력적인 콘텐츠
          </CommentMenuItem>
          <CommentMenuItem onClick={() => handleExampleClick('개인정보 유출')}>
            개인정보 유출
          </CommentMenuItem>
          <ReportButton type="submit">신고</ReportButton>
        </ReportForm>
      </CommentMenu>
    </>
  );
};

export default RtMenu;
