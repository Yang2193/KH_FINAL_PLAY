import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/GlobalStyle";
import PlayInfoApi from "../../api/PlayInfoApi";
const FixData = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 5%;
    /* border: 1px solid; */
    h1{
        margin: 0;
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        /* border: 1px solid; */
        img {
            width: 40%;
            height: 80%;
            margin-right:10%;
        }
        .box{
            font-size: 1.3em;
            width: 30%;
            height: 80%;
            /* border: 1px solid; */
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
            }
            button{
                width: 60%;
                height: 10%;
                font-size: 1em;
                border: none;
                position: relative;
                top:10%;
                border-radius: 15px;
                cursor: pointer;
            }
        }
    }
   
   
`


const Info = () =>{

    const [playInfo,setPlayInfo] = useState(null);
    useEffect(()=>{
        const playInfo = async()=>{
            const rsp = await PlayInfoApi.selectPlayInfo("23004670");
            setPlayInfo(rsp.data);
        };
        playInfo();
    },[])
    return(
        <>
          {playInfo && playInfo.map(play =>(
            <FixData key = {play.playId}>
                    <h1>{play.title}</h1>
                    <div className="content">
                        <img src={play.posterImageUrl} alt="" />
                        <div className="box">
                            <ul>
                                <li>
                                    <strong>장소</strong>
                                    <div>
                                        <p>{play.theaterName}</p>
                                    </div>
                                </li>
                                <li>
                                    <strong>공연기간</strong>
                                    <div>
                                        <p>{play.periodStart} ~ {play.periodEnd}</p>
                                    </div>
                                </li>
                                <li>
                                    <strong>공연시간</strong>
                                    <div>
                                        <p>{play.playTime}</p>
                                    </div>
                                </li>
                                <li>
                                    <strong>관람연령</strong>
                                    <div>
                                        <p>{play.playAge}</p>
                                    </div>
                                </li>
                                <li>
                                    <strong>가격</strong>
                                    <div>
                                        <p>{}</p>
                                    </div>
                                </li>
                            </ul>
                            <Button>예매 하기</Button>
                        </div>
                    </div>
                </FixData>
            ))}
        
        </>
          
    )
}
export default Info;
