import React, { useEffect, useState, useContext } from "react";
import { AccountInfoContext } from "../../context/AccountInfo";

const MyProfileEdit = () => {

    // 로그인 한 회원정보 가져오기
    const context = useContext(AccountInfoContext);
    const {userId, userPw, userName, userNickname, userphone, userEmail} = context;
    
    return (
        <>
        <p>ID : {userId}</p>
        <p>Name : {userName}</p>
        <p>Phone : {userEmail}</p>
        <button>회원정보변경</button>
        </>
    );
}

export default MyProfileEdit;