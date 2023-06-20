import axios from "axios";

// 이 프로젝트 전역에서 두루 쓰이는 함수를 모아놓았습니다.
const Functions = {
    getAccessToken : () => {
        return window.localStorage.getItem("accessToken");
      },

    //  인증/권한이 필요한 API 요청에 이 함수를 쓴 다음에 요청을 보내주세요.
    setAuthorizationHeader : () => {
        const accessToken = Functions.getAccessToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
      }

}

export default Functions;