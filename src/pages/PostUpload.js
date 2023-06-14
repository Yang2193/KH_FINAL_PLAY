import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from '../components/Comment/ImageUploader';
import PostAPI from '../api/PostApi';

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

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 300px; /* 리뷰 설명 칸의 높이를 300px로 설정합니다. */
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color:#800634;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const PostUpload = () => {
  const [postData, setPostData] = useState({
    postTitle: '',
    postImage: '',
    postContent: '',
  });

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
        postData.postImage,
        postData.postContent
      );

      if (response.status === 200) {
        console.log('게시물 등록 성공');
      } else {
        console.log('게시물 등록 실패');
      }
    } catch (error) {
      console.error('게시물 등록 에러:', error);
    }
  };

  return (
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
          내용
          <Textarea
            name="postContent"
            value={postData.postContent}
            onChange={handleInputChange}
            className="myTextarea" // 추가적인 스타일을 적용하기 위한 className을 추가합니다.
          ></Textarea>
        </Label>
      </div>
      <Button onClick={handleUpload}>등록하기</Button>
    </Container>
  );
};

export default PostUpload;
