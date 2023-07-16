import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountApi from '../../api/AccountApi';
import axios from 'axios';
const KakaoLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URLSearchParams(location.search).get('code');
    console.log("인가코드 " + code)
    if (code) {
        const getAccessToken = async () => {
        try {
            const response = await AccountApi.kakaoAccessToken(code);
            localStorage.setItem("kakaoId", response.data.id);
            localStorage.setItem("kakaoName", response.data.properties.nickname);
            localStorage.setItem("kakaoInfo", JSON.stringify(response.data));
            localStorage.setItem("isLogin", "TRUE");
            console.log(localStorage.getItem("kakaoInfo"));
            navigate('/');
        } catch (error) {
            console.error('액세스 토큰 요청 실패:', error);
        }
        }
        getAccessToken();
    };
      

    return (
        <>
        </>
    )
}

export default KakaoLogin;