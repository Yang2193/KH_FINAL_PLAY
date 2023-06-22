import React, { createContext, useEffect, useState } from "react";

export const AccountInfoContext = createContext();

const AccountProvider = ({children} ) => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userName, setUserName] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setIsLogin(true);
      
            // 사용자 정보 복구
            const storedUserData = localStorage.getItem("userData");
            if (storedUserData) {
              const userData = JSON.parse(storedUserData);
              setUserId(userData.userId);
              setUserPw(userData.userPw);
              setUserName(userData.userName);
              setUserNickname(userData.userNickname);
              setUserPhone(userData.userPhone);
              setUserEmail(userData.userEmail);
            }
          } else {
            setIsLogin(false);
      
            // 로그아웃 시 사용자 정보 초기화
            setUserId("");
            setUserPw("");
            setUserName("");
            setUserNickname("");
            setUserPhone("");
            setUserEmail("");
          }
    },[]);

    return (
        <AccountInfoContext.Provider value={{userId, setUserId, userPw, setUserPw, userName, setUserName, userNickname, setUserNickname, userPhone, setUserPhone, userEmail, setUserEmail, isLogin, setIsLogin}}>
            {children}
        </AccountInfoContext.Provider>
    );
}
export default AccountProvider;