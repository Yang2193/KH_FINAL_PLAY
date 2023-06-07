import React, { useContext } from "react";
import JoinStepBar from "./JoinStepBar";
import JoinTitle from "./JoinTitle";
import { AccountInfoContext } from "../../context/AccountInfo";
import MemberInfo from "./MemberInfo";


const Join2 = () => {
    const { accountInfo, setAccountInfo } = useContext(AccountInfoContext)
    return (
        <>
        <JoinTitle>회원가입</JoinTitle>
        <JoinStepBar currentStep={2} totalSteps={4}/>
        <MemberInfo accountInfo={accountInfo} setAccountInfo={setAccountInfo} />
        </>
    )
}

export default Join2;