import React from "react";
import styled from "styled-components";
const FixData = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        position: relative;
        bottom: 45%;
        left:10%;
    }
    img {
        width: 30%;
        height: 80%;
        margin-right: 10%;
    }
    .box{
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
        }
        font-size: 1.5em;
        width: 30%;
        height: 80%;
        /* border: 1px solid; */
    }
`


const Info = () =>{

    return(
        <FixData>
            <h1>라스트 세션</h1>
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
            </div>
        </FixData>
    )
}
export default Info;
