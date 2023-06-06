import React, { createContext, useState } from "react";

export const AccountInfoContext = createContext();

const AccountProvide = ({children} ) => {
    const [accountInfo, setAccountInfo] = useState({
        id: "",
        pw: "",
        name: "",
        phone: "",
        email: ""
    });

    return (
        <AccountInfoContext.Provider value={{ accountInfo, setAccountInfo}}>
            {children}
        </AccountInfoContext.Provider>
    );
}
export default AccountProvide;