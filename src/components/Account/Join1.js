import React from "react";
import Agreement from "./JoinAgree";
import JoinTitle from "./JoinTitle";
import JoinStepBar from "./JoinStepBar";

const Join1 = () => {
    return (
        <>
        <JoinTitle>회원가입</JoinTitle>
        <JoinStepBar currentStep={1} totalSteps={4}/>
        <Agreement/>
        </>
    )
}

export default Join1;