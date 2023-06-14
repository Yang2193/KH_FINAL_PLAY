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
    // selectActor : async(mt20id)=> {
    //     return await axios.get(KH_DOMAIN + `/play/selectActor?id=${mt20id}`);
    // },
    // selectTheater : async(mt20id)=> {
    //     return await axios.get(KH_DOMAIN + `/play/selectTheater?id=${mt20id}`);
    // },
}



export default PlayInfoApi;