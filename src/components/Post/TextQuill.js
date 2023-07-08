import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const EditorContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Back = styled.h2`
  height: 600px;
`;
const EditorTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #800634;
`;

const EditorWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 500px;
`;

const MyEditor = () => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <Back>
    <EditorContainer>
      <EditorTitle>내용 입력</EditorTitle>
      <EditorWrapper>
        <ReactQuill value={text} onChange={handleChange} />
      </EditorWrapper>
    </EditorContainer>
    </Back>
  );
};

export default MyEditor;
