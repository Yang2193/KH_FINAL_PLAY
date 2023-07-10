import React, { useEffect, useState } from 'react';
import PostAPI from '../../api/PostApi';
import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';
import { Button } from "../../utils/GlobalStyle";
import MessageModal from '../../utils/MessageModal';
const OneCss=styled.div`
width: 100%;
height: 100%;
.empty{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
}
h2{
  width: 100%;
}
.addReview{
  .ratingBox{
    width: 100%;
  }
  border: 1px solid;
  border-radius: 10px;
  border-color: #eee;
  padding: 1%;
  width: 100%;
  height: 30%;
  textarea{
    margin: 0;
    border: none;
    outline: none;
    resize: none;

  }
.add{
  height:25px;
  margin: 0 5px;

}
 
}
.selectReview{
  border-bottom: 1px solid;
  border-color: #eee;
  padding: 1%;
  .read{
    height:20px;
  }
  p{
    span{
      font-size: 0.8em;
      color:#ccc;
    }
  }
button{
  width: 5%;
  border: none;
  cursor: pointer;
  margin-left: 50%;
}
}
.btn{
  width: 100%;
  text-align: end;
  button{
    font-size: 1em;
    border-radius: 5px;
    width: 10%;
    height: 100%;
    border: none;
    cursor: pointer;
  }
}

`

const OneReview = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [content, setContent] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const[delMo,setDelMo]=useState(false);
  const userId = localStorage.getItem("userId");
  const playId = localStorage.getItem("playId");

  useEffect(() => {
    const getReview = async () => {
        const rsp = await PostAPI.getOLR(playId);
        if (rsp.status===200) {
          setReviews(rsp.data);
        } 
    };
    getReview();
  }, [modalOpen,delMo]);

  const onChangeRating = e =>{
    setRating(e)
}
const onChangeContent = e =>{
  if (e.target.value.length <= 100) {
    setContent(e.target.value);
  }    
}

const addReview = async () =>{
  const rsp = await PostAPI.addOLR(content,rating,userId,playId);
  if(rsp.status === 200) {
    console.log("성공");
    setModalOpen(true);
    resetInput();
  } else {
      console.log("전송 실패");
  }
}
const deleteReview = async (id) =>{
  const rsp = await PostAPI.deleteOLR(id);
  if(rsp.status === 200) {
    console.log("성공");
    setDelMo(true);
  } else {
      console.log("전송 실패");
  }
}

const resetInput = () => {
  setRating("");
  setContent("");
}
const onClickClose = () => {
  setModalOpen(false);
  setDelMo(false);
  }
console.log(rating);
  return (
    <OneCss>
      <div className='addReview'>
        <div className='ratingBox'>
          <Rating
          size={"25px"}
          className='add'
          onClick={onChangeRating}
          initialValue={rating}
          allowFraction/> {rating===""? "별점을 선택해주세요." : `${rating} 점`}
        </div>
        <textarea onChange={onChangeContent} value={content} placeholder='관람후기를 남겨보세요!'></textarea>
        <div className='btn'>
          <Button onClick={addReview}>등록</Button>
        </div>
      </div>
      {reviews.length > 0 ? reviews.map(review => (
        <div className='selectReview' key={review.id}>
          <p><Rating size={"20"} className='read' initialValue={review.olrRating} readonly/></p>
          <p>{review.olrContent}</p>
          <p>{review.memberInfo.userId} <span>{(new Date(review.olrDate)).toLocaleString('ko')}</span> {userId ===review.memberInfo.userId ? <Button onClick={()=>deleteReview(review.id)}>삭제</Button> : null}</p>
        </div>
      ))
      : <div className='empty'>관람후기를 등록해주세요</div>}
      <MessageModal open={modalOpen} close={onClickClose} header="등록 완료">리뷰가 등록 되었습니다.</MessageModal>
      <MessageModal open={delMo} close={onClickClose} header="삭제 완료">리뷰가 삭제 되었습니다.</MessageModal>

    </OneCss>
  );
};

export default OneReview;
