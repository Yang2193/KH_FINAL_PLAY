import axios from "axios";

const Domain = "http://localhost:8111";

const AccountApi = {
    
    // 로그인
    memberLogin : async(userId, userPw) => {
        const login = {
            userId: userId,
            userPw: userPw
        };
        return await axios.post(Domain + "/login", login);
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
    }
}

export default AccountApi;