import React from "react";
import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const PlayInfoApi = {
    selectPlayInfo : async(id) => {
        return await axios.get(KH_DOMAIN + `/api/selectPlayInfo?id=${id}`);
    },
    selectActor : async(id)=> {
        return await axios.get(KH_DOMAIN + `/api/selectActor?id=${id}`);
    },
    selectTheater : async(id)=> {
        return await axios.get(KH_DOMAIN + `/api/selectTheater?id=${id}`);
    },
}



export default PlayInfoApi;