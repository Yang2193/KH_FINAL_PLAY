import React from "react";
import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const PlayInfoApi = {
    selectPlayInfo : async(mt20id) => {
        const playId = {
            playId : mt20id
        }
        return await axios.get(KH_DOMAIN + `/play/${mt20id}`,playId);
    },
    // 선택된 극장 상세정보 불러오기
    theaterDetail: async (mt10id) => {
        const theaterId = {
            theaterId : mt10id
        }
        return await axios.get(KH_DOMAIN + `/play/theater/${mt10id}`, theaterId);
    },
    // 찜 조회
    selectPlayLike : async(userId)=>{
        return await axios.get(KH_DOMAIN + `/play/playLikeList2?id=${userId}`)
    },
    // 찜추가
    addPlayLike : async(playId,userId)=>{
        const id = {
            playId : playId,
            userId : userId
        }
        return await axios.post(KH_DOMAIN + `/play/addPlayLike`,id)
    },
    // 찜삭제
    delPlayLike : async(playId,userId)=>{
        const id = {
            playId : playId,
            userId : userId
        }
        return await axios.post(KH_DOMAIN + `/play/deletePlayLike`,id)
    },
    // 마이페이지 용 찜조회
    myPagePlayLike : async(userId)=>{
        return await axios.get(KH_DOMAIN + `/play/playLikeList?id=${userId}`)
    },
}



export default PlayInfoApi;