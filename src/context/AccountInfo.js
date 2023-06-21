import React, { createContext, useState } from "react";

export const AccountInfoContext = createContext();

const AccountProvider = ({children} ) => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userName, setUserName] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");

    return (
        <AccountInfoContext.Provider value={{userId, setUserId, userPw, setUserPw, userName, setUserName, userNickname, setUserNickname, userPhone, setUserPhone, userEmail, setUserEmail}}>
            {children}
        </AccountInfoContext.Provider>
    );
}
export default AccountProvider;