import React, { useEffect, useState, useContext } from "react";
import { AccountInfoContext } from "../../context/AccountInfo";
import { useNavigate } from "react-router-dom";

const MyProfileEdit = () => {
    const navigate = useNavigate();

    // 로그인 한 회원정보 가져오기
    const context = useContext(AccountInfoContext);
    const {userId, userPw, userName, userNickname, userphone, userEmail} = context;

    // 회원정보 변경을 위한 비밀번호 재입력
    const [editPw, setEditPw] = useState("");

    // 오류메세지
    const [editPwOkMsg, setEditPwOkMsg] = useState("");
    const [editPwMsg, setEditPwMsg] = useState("");

    const onChangeEditPw = (e) => {
        const editInputPw = e.target.value;
        setEditPw(editInputPw);
    }
    
    // 회원정보 변경 클릭 시 비밀번호 입력
    const onClickInfoEdit = () => {
        if(!userPw === editPw) {
            setEditPwMsg("비밀번호가 일치하지 않습니다.");
        } else {
            setEditPwOkMsg("");
            navigate("")
        }
    }

    const handleOnKeyPress = e => {
        if(e.key === "Enter") {
            onClickInfoEdit();
        }
    }
    return (
        <>
        <h3>회원정보</h3>
        <p>ID : {userId}</p>
        <p>Name : {userName}</p>
        <p>Email : {userEmail}</p>
        <button onClick={onClickInfoEdit}>회원정보수정</button>
        </>
    );
}

export default MyProfileEdit;햣