import axios from "axios";

const Domain = "http://localhost:8111";

const AccountApi = {
    // 토큰 GET 로그인
    getToken : async(userId, userPw) => {
        const auth = {
            userId: userId,
            userPw: userPw
        };
        return await axios.post(Domain + "/auth/login", auth);
    },

    getUserInfo : async(userId) => {
        const infoData = {
            userId: userId
        };
        return await axios.post(Domain + "/member/userinfo", infoData);
    },
    
    // 회원가입
    memberReg : async(userId, userPw, userName, userPhone, userEmail) => {
        const memberInfo = {
            userId: userId,
            userPw: userPw,
            userName: userName,
            userPhone: userPhone,
            userEmail: userEmail
        };
        return await axios.post(Domain + "/auth/join/step2", memberInfo);
    },

    // 아이디 찾기
    findMemberId : async(userName, userEmail) => {
        const findId = {
            userName: userName,
            userEmail: userEmail
        };
        return await axios.post(Domain + "/member/find/id", findId);
    },

    // 비밀번호 찾기
    findMemberPw : async(userId, userName, userEmail) => {
        const findPw = {
            userId: userId,
            userName: userName,
            userEmail: userEmail
        };
        return await axios.post(Domain + "/member/find/pw", findPw);
    }
}

export default AccountApi;