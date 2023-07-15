import React, { useState } from 'react';
import { storage } from './firebase';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const UploadButton = styled.button`
  padding: 10px 20px;
  font-size: 13px;
  background-color: #800634;
  color: #fff;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  margin-top: 10px;
`;

const UploadImg = styled.div`
  margin-top: 20px;

  img {
    width: 50%;
  }
`;

const DropzoneContainer = styled.div`
  border: 2px dashed #ddd;
  border-radius: 4px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.isDragActive ? '#f7f7f7' : '#fff')};
  transition: background-color 0.3s ease;

  p {
    margin: 0;
    font-size: 14px;
    color: ${(props) => (props.isDragActive ? '#888' : '#333')};
  }
`;

const ImageUploader = ({ onChange }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

  const handleUpload = (file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('File uploaded successfully!');
      fileRef.getDownloadURL().then((url) => {
        console.log('저장경로 확인: ' + url);
        setUrl(url);
        onChange(url);
      });
    });
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    handleUpload(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <DropzoneContainer {...getRootProps()} isDragActive={isDragActive}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>파일을 여기에 놓아주세요...</p>
        ) : (
          <p>파일을 드래그하거나 클릭하여 선택하세요.</p>
        )}
      </DropzoneContainer>
      {/* <UploadButton onClick={() => handleUpload(file)}>Upload</UploadButton> */}
      <UploadImg>
        {url && <img src={url} alt="uploaded" />}
      </UploadImg>
    </div>
  );
};

export default ImageUploader;
