import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountApi from '../../api/AccountApi';
import axios from 'axios';
const KakaoLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URLSearchParams(location.search).get('code');
    if (code) {
        const getAccessToken = async () => {
        try {
            const response = await AccountApi.kakaoAccessToken(code);
            localStorage.setItem("userId", response.data.kakaoProfile.id);
            localStorage.setItem("accessToken", response.data.tokenDto.accessToken);
            localStorage.setItem("refreshToken", response.data.tokenDto.refreshToken);
            localStorage.setItem("isLogin", "TRUE");
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