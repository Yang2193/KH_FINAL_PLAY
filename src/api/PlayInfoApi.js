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
    selectPlayLike : async(userId)=>{
        return await axios.get(KH_DOMAIN + `/play/playLikeList2?id=${userId}`)
    },
    addPlayLike : async(playId,userId)=>{
        const id = {
            playId : playId,
            userId : userId
        }
        return await axios.post(KH_DOMAIN + `/play/addPlayLike`,id)
    },
    delPlayLike : async(playId,userId)=>{
        const id = {
            playId : playId,
            userId : userId
        }
        return await axios.post(KH_DOMAIN + `/play/deletePlayLike`,id)
    },
    myPagePlayLike : async(userId)=>{
        return await axios.get(KH_DOMAIN + `/play/playLikeList?id=${userId}`)
    },
}



export default PlayInfoApi;