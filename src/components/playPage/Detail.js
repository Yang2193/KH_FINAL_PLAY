import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayInfoApi from "../../api/PlayInfoApi";

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
        height: 40vh;
        .castingBox{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .actorBox{
            width: 13%;
            height: 80%;
            .actor{
                margin-left: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                height: 100%;
                p{
                    margin: 0;
                    font-size: 0.8em;
                }
                img{
                    border-radius: 50%;
                    width: 75%;
                    height: 75%;
                }
        }
        }

    }
    .more{
        border: none;
        cursor: pointer;
        height: 20%;
    }
    .imageBox{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`
const Detail = () =>{

    // const [actorInfo,setActorInfo] = useState("");
    // const [visibleActor,setVisibleActor] = useState([]);
    // const [count,setCount] = useState(6)
    // const playId = localStorage.getItem("playId");

    // useEffect(() => {
    //     const actor = async()=>{
    //         const rsp = await PlayInfoApi.selectActor(playId)
    //         setActorInfo(rsp.data);
    //     };
    //     actor();
    // },[]);

    // useEffect(() => {
    //     setVisibleActor(actorInfo.slice(0,count));
    //   }, [actorInfo,count]);
    
    // const handleLoadMore = () => {
    //     setCount(actorInfo.length);
    //     if (count === actorInfo.length) {
    //         setCount(6)
    //     }
    // }

    // const [playInfo,setPlayInfo] = useState(null);

    // useEffect(()=>{
    //     const play = async()=>{
    //         const rsp = await PlayInfoApi.selectPlayInfo(playId);
    //         setPlayInfo(rsp.data);
    //     };
    //     play();
    // },[])
    return(
        <DetailBox>
        {/* <div className="casting">
         <h3>캐스팅</h3>
        <div className="castingBox">
            {visibleActor && visibleActor.map(actor =>(
                <div className="actorBox"  key = {actor.actorId}>
                    <div className="actor">
                        <img src={actor.actorImage} alt="" />
                        <p>{actor.roleName}</p>
                        <p>{actor.actorName}</p>
                    </div>
                </div>
            ))}
        </div>
        {actorInfo.length < 6 ? null : <button  className="more" onClick={handleLoadMore}>더보기</button>}
        </div>
        {playInfo && playInfo.map(play =>(
            <div key={play.playId}>
                <div className="notice">
                    <h3>공지사항</h3>
                    <div className="imageBox">
                        <img src={play.noticeImageUrl} alt="" />
                    </div>
                </div>
                <div className="detail">
                    <h3>상세 정보</h3>
                    <div className="imageBox">
                        <img src={play.infoImageUrl} alt="" />
                    </div>
                </div>
            </div>
        ))} */}
        </DetailBox>
    )
}

export default Detail;