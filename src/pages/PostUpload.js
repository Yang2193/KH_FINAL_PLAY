import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../components/Post/ImageUploader';
import PostAPI from '../api/PostApi';
import MyEditor from '../components/Post/TextQuill';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #800634;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const PostUpload = () => {
  const [postData, setPostData] = useState({
    postTitle: '',
    postImage: '',
  });
  const [postContent, setPostContent] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (image) => {
    setPostData((prevData) => ({
      ...prevData,
      postImage: image,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpload = async () => {
    try {
      const response = await PostAPI.addPost(
        postData.postTitle,
        postContent,
        postData.postImage,
        '1',
        localStorage.getItem('userId')
      );

      if (response.id) {
        toast.success('게시물 등록 성공');
        navigate(-1);
      } else {
        toast.error('게시물 등록 실패');
      }
    } catch (error) {
      console.error('게시물 등록 에러:', error);
    }
  };

  return (
    <>
      <ToastContainer />

      <Container>
        <Heading>게시물 등록</Heading>
        <div>
          <Label>
            제목
            <Input
              type="text"
              name="postTitle"
              value={postData.postTitle}
              onChange={handleInputChange}
            />
          </Label>
        </div>
        <div>
          <Label>
            이미지
            <ImageUploader onChange={handleImageChange} />
          </Label>
        </div>
        <div>
          <Label>
            내용 입력
            <MyEditor value={postContent} onChange={setPostContent} />
          </Label>
        </div>
        <Button onClick={handleUpload}>등록하기</Button>
      </Container>
    </>
  );
};

export default PostUpload;
