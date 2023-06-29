import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import MenuBar from "./MypageMenu";
import styled from "styled-components";
import MyprofileEdit from "./MyProfileEdit";

const MypageBlock = styled.div`
    .section {
        display: flex;
        flex-direction: row;
        margin: 20px auto;
        justify-content:center;
    }
`;

const MyPageMain = () => {
    const location = useLocation();
    const queryParmas = new URLSearchParams(location.search);
    const headerSelect = queryParmas.get("category");

    const [category, setCategory] = useState(headerSelect || 'nomal');
    const onSelect = useCallback(category => setCategory(category), []);

    useEffect(() => {
        setCategory(headerSelect || 'nomal');
    }, [headerSelect]);

    return (
        <MypageBlock>
        <MyprofileEdit/>
        <MenuBar/>
        </MypageBlock>
    );
}

export default MyPageMain;