import axios from "axios";
import Functions from "../utils/Functions";

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

    // 회원조회
    getUserInfo : async(userId) => {
        Functions.setAuthorizationHeader();
        const infoData = {
            userId: userId
        };
        return await axios.post(Domain + "/member/userinfo", infoData);
    },

    // Context에서 회원조회
    userInfo: async() => {
        Functions.setAuthorizationHeader();
        return await axios.get(Domain + "/user");
    },
    
    // 회원가입
    memberReg : async(userId, userPw, userNickname, userName, userEmail, userPhone) => {
        const memberInfo = {
            userId: userId,
            userPw: userPw,
            userNickname: userNickname,
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone
        };
        return await axios.post(Domain + "/auth/signup", memberInfo);
    },

    // 회원탈퇴
    memeberDel : async(userId) => {
        const memberDelCmd = {
            userId: userId
        };
        return await axios.post(Domain + "/auth/userdelete", memberDelCmd);
    },

    // 아이디 찾기
    findMemberId : async(userName, userEmail) => {
        const findId = {
            userName: userName,
            userEmail: userEmail
        };
        return await axios.post(Domain + "/auth/find/id", findId);
    },

    findMemberPw: async (userId, userName, email) => {
        const findPw = {
            userId: userId,
            userName: userName,
            email: email
        };
        return await axios.post(Domain + "/auth/find/pw?email=" + email, findPw);
    },

    // 마이페이지 회원 별 리뷰 가져오기
    getMemberReview : async(userId) => {
        Functions.setAuthorizationHeader();
        const getReview = {
            userId: userId
        };
        return await axios.post(Domain + "/mypage/find/post", getReview);
    },

    checkMemberPw: async(userPw) => {
        Functions.setAuthorizationHeader();
        const checkMemberPwcmd = {
            userPw: userPw
        };
        return await axios.post(Domain + "/mypage/checkmemberPw", checkMemberPwcmd);
    }
}

export default AccountApi;