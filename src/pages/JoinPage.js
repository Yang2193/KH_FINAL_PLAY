import React from "react";
import Join1 from "../components/Account/Join1";
import Join2 from "../components/Account/Join2";
import Join3 from "../components/Account/Join3";
import { Routes, Route } from "react-router-dom";
import AccountProvide from "../context/AccountInfo";

const JoinPage = () => {
    return (
        <AccountProvide>
            <Routes>
                <Route path="/" element={<Join1/>} />
                <Route path="/step2" element={<Join2/>} />
                <Route path="/step3" element={<Join3/>} />
            </Routes>
        </AccountProvide>
    );
}
export default JoinPage;