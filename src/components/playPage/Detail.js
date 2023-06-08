import React from "react";
import styled from "styled-components";

const DetailBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div{
        width: 100%;
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        flex-direction: column;
        h3{

        }
    }
    .casting{
        margin-top: 3%;
        height: 30vh;
        .actorBox{
            flex-direction: row;
            height: 100%;
            .actor{
                margin-left: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 10%;
                height: 100%;
                p{
                    margin: 0;
                    font-size: 0.8em;
                }
                img{
                    border-radius: 50%;
                    width: 85%;
                    height: 50%;
                }
        }
        }

    }
    .imageBox{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`
const Detail = () =>{

    return(
        <DetailBox>
            <div className="casting">
                <h3>캐스팅</h3>
                <div className="actorBox">
                    <div className="actor">
                        <img src="https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/01/0400040801_4813_021721.330.gif" alt="" />
                        <p>배역 이름</p>
                        <p>배우 이름</p>
                    </div>
                    <div className="actor">
                        <img src="https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_1738_01.041.gif" alt="" />
                        <p>배역 이름</p>
                        <p>배우 이름</p>
                    </div>
                </div>
            </div>
            <div className="notice">
                <h3>공지사항</h3>
                <div className="imageBox">
                    <img src="https://ticketimage.interpark.com/Play/ITM/Data/Modify/2023/5/2023052216571037.jpg" alt="" />
                </div>
            </div>
            <div className="detail">
                <h3>상세 정보</h3>
                <div className="imageBox">
                    <img src="https://ticketimage.interpark.com/Play/image/etc/23/23007040-04.jpg" alt="" />
                </div>
            </div>
        </DetailBox>
    )
}

export default Detail;