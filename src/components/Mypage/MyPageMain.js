import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AccountInfoContext } from "../../context/AccountInfo";
import MyProfileEdit from "./MyProfileEdit";
import MyReview from "./MyReview";
import MyPlayLike from "./MyPlayLike";
import styled from "styled-components";

const categories = [
    {
        name: 'menu1',
        text: '내정보 / 수정'
    },
    {
        name: 'menu2',
        text: '내가 쓴 리뷰'
    },
    {
        name: 'menu3',
        text: '찜 목록'
    },
    {
        name: 'menu4',
        text: '결제 내역'
    },
]

const MyPageMain = () => {
    const MenuBlock = styled.div`
        background-color: #990A2C;
        width: 300px;
        height: auto;
        text-align: center;
        position: relative;
        border-radius: 5px;
        margin-right: 10px;
    `

    const Category = styled.div`
        cursor: pointer;
        padding-bottom: 2rem;
        text-align: center;

    `
    // 나의 프로필 정보 (회원탈퇴 포함)
    // 50% 
    // 내가 올렸던 리뷰 보기
    // 90% 프론트만 남음
    // 찜 목록 보기
    // 50% 중복체크 시 안되게
    // 내가 결제했던 티겟 보기
    return (
        <>
        <MyProfileEdit/>
        <MyReview/>
        <MyPlayLike/>
        </>
    );
}

export default MyPageMain;