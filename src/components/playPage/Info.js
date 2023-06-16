import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/GlobalStyle";
import PlayInfoApi from "../../api/PlayInfoApi";
import { FaHeart } from 'react-icons/fa';
const FixData = styled.div`
    width: 100%;
    height: 80vh;
    h1{
        font-size: 1.5em;
        margin: 0;
        padding-bottom: 2%;
        margin-bottom: 4%;
        border-bottom: 3px solid;

    }
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        img {
            border-radius: 15px;
            width: 35%;
            height: 65%;
            margin-right:5%;
        }
        .box{
            width: 60%;
            height: 65%;
            font-size: 1rem;
            /* border: 1px solid; */
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
            }
            li{
                display: flex;
                margin-bottom: 3%;
                span{
                    width: 30%;
                }
                div{
                    width: 100%;
                }
            }
            strong{
                color: #888;
            }
            p{
                margin-left: 5%;
                font-size: 0.9em;
            }
            .btnBox{
                width: 100%;
                height: 50%;
                display: flex;
                justify-content:end ;
                align-items:end;
                button{
                width: 35%;
                height: 30%;
                font-size: 1.3em;
                border: none;
                border-radius: 15px;
                cursor: pointer;         
               }
               button:hover{
                background-color:#790A2C ;
               }
            }
 
        }
    }
   
   
`


const Info = () =>{

    const [playInfo,setPlayInfo] = useState(null);
    const playId = localStorage.getItem("playId");
    useEffect(()=>{
        const play = async()=>{
            const rsp = await PlayInfoApi.selectPlayInfo(playId);
            setPlayInfo(rsp.data);
        };
        play();
    },[])

// // 찜기능 

//     const [isLiked, setIsLiked] = useState(false); // 최종 찜 상태 
//     const [likedList,setLikedList] = useState([]); // 찜 리스트 배열

//     useEffect(()=>{ // 로그인한 회원id를 기준으로 찜 매장 리스트를 db에서 불러와 확인하고 배열에 삽입
//         const liked = async() => {
//             const rsp = await PlayInfoApi.selectPlayLike(memId);
//             setLikedList(rsp.data);
//         }
//         liked();
//     },[memId]);

//     useEffect(() => {
//         if (likedList.some(item => item.playId === playId)) { // 배열을 확인하며 해당 매장사이트에서 찜이 등록되어 있으면 true 아니면 false
//           setIsLiked(true);
//         } else {
//           setIsLiked(false);
//         }
//       }, [likedList, playId]);


//     const addLike = async () => { 
//         const rsp = await PlayInfoApi.addPlayLike(restId, memId);
//         if (rsp.data === true) {
//             console.log("찜 등록 성공");
//             setLikedList([...likedList, {playId, memId}]); // 찜등록 성공시 배열에도 추가
//             setIsLiked(true); // 최종 찜 상태를 true 로 전달
//             console.log(likedList);
//             console.log(playId);
//             } else {
//                 console.log(" 등록 전송 실패");
//             }
//         };

//     const deleteLike = async () => {
//         const rsp = await PlayInfoApi.delPlayLike(playId, memId);
//         if (rsp.data === true) {
//             console.log("찜 삭제 성공");
//             setLikedList(likedList.filter(item => !(item.playId === playId && item.memId === memId))); // 찜 삭제 성공시 배열에도 삭제
//             setIsLiked(false); // 최종 찜 상태를 false 로 전달
//             console.log(likedList);
//             } else {
//             console.log("삭제 전송 실패");
//             }
//         };

//     const onClickLiked = () =>{
//         if (!isLiked) {
//             addLike();
//         }else
//             deleteLike();
//         }    
    return(
        <>
          {playInfo && playInfo.map(play =>(
            <FixData key = {play.playId}>
                    <div className="content">
                        <img src={play.playPoster} alt="" />
                        {/* <button className="like" onClick={()=>onClickLiked()}>
                                <FaHeart  style={{fontSize: '130%', color: isLiked ? "red" : "#999999" }}/>
                        </button> */}
                        <div className="box">
                            <h1>{play.title}</h1>
                            <ul>
                                <li>
                                    <span>장소</span>
                                    <div>
                                        {play.theaterName}
                                    </div>
                                </li>
                                <li>
                                    <span>공연기간</span>
                                    <div>
                                        {play.periodStart} ~ {play.periodEnd}
                                    </div>
                                </li>
                                <li>
                                    <span>공연시간</span>
                                    <div>
                                        {play.playTime}
                                    </div>
                                </li>
                                <li>
                                    <span>관람연령</span>
                                    <div>
                                        {play.playAge}
                                    </div>
                                </li>
                                <li>
                                    <span>가격</span>
                                    <div>
                                        {play.playPrice}
                                    </div>
                                </li>
                                <li>
                                    <span>공연 스케줄</span>
                                    <div>
                                        {play.playPlan}
                                    </div>
                                </li>
                                <li>
                                    <span> 배우진 </span>
                                    <div>
                                        {play.playCast}
                                    </div>
                                </li>
                            </ul>
                            <div className="btnBox">
                                <Button>예매 하기</Button>
                            </div>
                        </div>
                    </div>
                </FixData>
            ))}
        
        </>
          
    )
}
export default Info;
