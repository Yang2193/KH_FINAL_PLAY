import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/GlobalStyle";
import PlayInfoApi from "../../api/PlayInfoApi";
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
    return(
        <>
          {playInfo && playInfo.map(play =>(
            <FixData key = {play.playId}>
                    <div className="content">
                        <img src={play.playPoster} alt="" />
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
