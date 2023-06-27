import React, { useState, useContext, useEffect } from "react";
import { AccountInfoContext } from "../../context/AccountInfo";
import {MyProfileEditDetail, PwCheck } from "./MyProfileEditDetail";

const MyProfileEdit = () => {
  const { isPwd } = useContext(AccountInfoContext);
  return (
    <>
    {isPwd ? <MyProfileEditDetail/> : <PwCheck/>}
    </>
  );
};

export default MyProfileEdit;
