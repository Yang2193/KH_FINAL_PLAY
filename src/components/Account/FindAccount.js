import React, { useState } from "react";

export const FindUserId = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    // 이름과 메일 입력 값을 axios로 디비 접근 코드


    return (
        <>
        <div>
            <h2>아이디 찾기</h2>
            
        </div>
        </>
    );
};

export const FindUserPw = () => {

    return (
        <>
        <div>
            <h2>패스워드 찾기</h2>
        </div>
        </>
    );
};