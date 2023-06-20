import axios from "axios";

const Domain = "http://localhost:8111/auth";

const AccountApi = {
    // 토큰 GET 로그인
    getToken : async(userId, userPw) => {
        const auth = {
            userId: userId,
            userPw: userPw
        };
        return await axios.post(Domain + "/login", auth);
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
        return await axios.post(Domain + "/join/step2", memberInfo);
    },

    // 아이디 찾기
    findMemberId : async(userName, userEmail) => {
        const findId = {
            userName: userName,
            userEmail: userEmail
        };
        return await axios.post(Domain + "/find/memberid", findId);
    },

    // 비밀번호 찾기
    findMemberPw : async(userId, userName, userEmail) => {
        const findPw = {
            userId: userId,
            userName: userName,
            userEmail: userEmail
        };
        return await axios.post(Domain + "/find/memberpw", findPw);
    }
}

export default AccountApi;