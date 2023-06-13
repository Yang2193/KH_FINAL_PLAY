import React from "react";
import { useNavigate } from "react-router";

const MyPageMain = () => {
    const navigate = useNavigate();
    // 나의 프로필 정보 (회원탈퇴 포함)

    // 내가 올렸던 리뷰 보기

    // 내가 올렸던 티켓양도 보기

    // 내가 결제했던 티겟 보기

    console.log(window.localStorage.getItem("isLogin"));

    const onClickLogOut = () => {
        window.localStorage.setItem("isLogin", "False");
        navigate("/");
    };

    return (
        <>
        <button onClick={onClickLogOut}>로그아웃</button>
        </>
    )
}

export default MyPageMain;