import React, { createContext, useEffect, useState } from "react";

export const AccountInfoContext = createContext();

const AccountProvider = ({children} ) => {
    const [userId, setUserId] = useState("");
    const [userNickname, setUserNickname] = useState("");
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
              setUserNickname(userData.userNickname);
              setIsLogin(true);
            }
          } else {
            setIsLogin(false);
            // 로그아웃 시 사용자 정보 초기화
            setUserId("");
            setUserNickname("");
          }
    },[]);

    return (
        <AccountInfoContext.Provider value={{userId, setUserId,  userNickname, setUserNickname, isLogin, setIsLogin}}>
            {children}
        </AccountInfoContext.Provider>
    );
}
export default AccountProvider;