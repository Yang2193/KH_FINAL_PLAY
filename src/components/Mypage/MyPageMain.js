import React from "react";
import { useNavigate } from "react-router";
import MyProfileEdit from "./MyProfileEdit";
import MyReview from "./MyReview";
import MyPlayLike from "./MyPlayLike";

const MyPageMain = () => {
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
    )
}

export default MyPageMain;