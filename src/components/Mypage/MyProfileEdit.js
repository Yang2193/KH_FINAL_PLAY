import React, { useEffect, useState } from "react";
import AccountApi from "../../api/AccountApi";

const MyProfileEdit = () => {
    const userId = localStorage.getItem("userId");
    const [infoData, setInfoData] = useState([]);


    // 로그인 한 계정에 대한 정보
    console.log(localStorage.getItem("userId"));
    useEffect (() => {
        const userData = async () => {
            try {
                const userInfo = await AccountApi.getUserInfo(userId);
                if(userInfo.status === 200) {
                    setInfoData(userInfo.data);
                    console.log(userInfo.data);
                } else {
                    console.log("데이터가 불러오기 실패");
                }
            }catch(e){
                console.log(e);
            }
        };
        userData();
    },[])
    
    return (
        <>
        </>
    );
}

export default MyProfileEdit;