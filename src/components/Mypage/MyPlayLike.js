import React from "react";
import { useState, useEffect } from "react";
import PlayInfoApi from "../../api/PlayInfoApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ListBox = styled.div`
    position: relative;
    top: 10%;
    margin: 0 auto;
    width: 70%;
    @media (max-width: 768px) {
        width: 80%;
        font-size: 80%;

        td .img-thumb{
            width: 60px;
            height: 80px;
        }
    }

    .bar{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    table{
        width : 100%;
    }

    thead, tbody{
        width : 100%
    }
    
    thead th{
        background-color: #990A2C;
        color: #fff;
    }
    
    tbody td{
        border-bottom: 1px dotted #999;
    }

    td{
        height: 100px;
        text-align: center;
        font-size: 1rem;
        padding: 10px 0;

        @media (max-width: 768px) {
        font-size: 0.8rem;
        }
    }

    .img-thumb{
            width: 90px;
            height: 120px;
            margin: 0 auto;
            border: 1px solid #b9b9b9;
            vertical-align: middle;
        }
                    
    .menu p{
        margin: 0 20px;
    }
`

const MyPlayLike = () => {
    // 로그인 한 회원정보 가져오기
    const userId = localStorage.getItem('userId');

    // 찜목록 데이터 저장하기
    const [likeList, setLikeList] = useState([]);

    // 오류 메세지
    const [likeListMsg, setLikeListMsg] = useState("");
    const [likeListOkMsg, setLikeListOkMsg] = useState("");

    const nav = useNavigate();

    const movePage =(playId)=>{
        localStorage.setItem("playId",playId);
        nav("/info");
    }
    
    useEffect(() => {
        const playLikeData = async() => {
            try {
                const likeData = await PlayInfoApi.myPagePlayLike(userId);
                console.log(likeData.data);
                if(likeData.status === 200) {
                    setLikeList(likeData.data);
                } else {
                    setLikeListMsg("찜한 목록이 없거나 불러오기 실패");
                }
            } catch(e) {
                console.log(e);
            }
        }
        playLikeData();
    }, [])
    

    return (
        <>
        <h3>{userId}님의 찜목록</h3>
        <ListBox>
        <table className="ReviewTable">
          <thead>
          </thead>
          <tbody>
            {likeList.map((ll) => (
              <tr className="likeItem" key={ll.id} onClick={() => movePage(ll.playInfo.playId)}>
                <td className="image"><img src={ll.playInfo.imageUrl} alt="image1" className="img-thumb"/></td>
                <td className="title">{ll.playInfo.title}</td>
                <td className="location">{ll.playInfo.theaterName}</td>
                <td className="period">{ll.playInfo.periodStart} ~ {ll.playInfo.periodEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </ListBox>
        </>
    );
}

export default MyPlayLike;