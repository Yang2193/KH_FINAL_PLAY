import React from "react";
import styled from "styled-components";
import { Button } from "../../utils/GlobalStyle";
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

    return(
        <FixData>
            <h1>라스트 세션</h1>
            <div className="content">
                <img src="https://ticketimage.interpark.com/Play/image/large/23/23007040_p.gif" alt="" />
                <div className="box">
                    <ul>
                        <li>
                            <strong>장소</strong>
                            <div>
                                <p>불러올데이터</p>
                            </div>
                        </li>
                        <li>
                            <strong>공연기간</strong>
                            <div>
                                <p>불러올데이터</p>
                            </div>
                        </li>
                        <li>
                            <strong>공연시간</strong>
                            <div>
                                <p>불러올데이터</p>
                            </div>
                        </li>
                        <li>
                            <strong>관람연령</strong>
                            <div>
                                <p>불러올데이터</p>
                            </div>
                        </li>
                        <li>
                            <strong>가격</strong>
                            <div>
                                <p>불러올데이터</p>
                            </div>
                        </li>
                    </ul>
                    <Button>예매 하기</Button>
                </div>
            </div>
        </FixData>
    )
}
export default Info;
