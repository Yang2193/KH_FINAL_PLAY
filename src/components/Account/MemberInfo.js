import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AccountPopUp from "./AccountPopUp";
import { AccountInfoContext } from "../../context/AccountInfo";

const MemberInfo = () => {
    const navigate = useNavigate();
    const { accountInfo, setAccountInfo } = useContext(AccountInfoContext);

    // 키보드 입력
    const [inputId, setInputId] = useState(accountInfo.id);
    const [inputPw, setInputPw] = useState(accountInfo.pw);
    const [inputPwCk, setInputPwCk] = useState("");
    const [inputEmail, setInputEmail] = useState(accountInfo.email);
    
    

    return (
        <>
        </>
    );
}

export default MemberInfo;