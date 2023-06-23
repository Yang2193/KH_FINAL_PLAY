import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";

const MyProfileEdit = () => {
    const navigate = useNavigate();

    // 로그인 한 아이디 가져오기
    const userId = localStorage.getItem('userId');

    // 비밀번호 입력
    const [inputPw, setInputPw] = useState("");
    const onChangePw = (e) => {
        const inputPwCk = e.target.value;
        setInputPw(inputPwCk);
    }

    // 회원정보
    const [userInfo, setUserInfo] = useState("");

    // 회원정보 조회 후 화면 출력

    const userData = async() => {
        try {
            const response = await AccountApi.getUserInfo(userId);
            if (response.status === 200) {
                setUserInfo(response.data);
                console.log(userInfo);
                } else {
                console.log("데이터가 없음");
                }
            } catch (error) {
            console.log(error);
            }
        };

        console.log(userInfo);
    return (
        <>
        <button onClick={userData}><h3>회원정보</h3></button>
        <p>ID : {userInfo.userId}</p>
        <p>PW : {userInfo.userPw}</p>
        <p>Name : {userInfo.userName}</p>
        <p>Nickname : {userInfo.userNickname}</p>
        <p>Email : {userInfo.userEmail}</p>
        <p>Phone : {userInfo.userPhone}</p>


        {/* <button onClick={onClickInfoEdit}>회원정보수정</button> */}
        </>
    );
}

export default MyProfileEdit;