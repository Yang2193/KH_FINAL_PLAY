import React, { useCallback, useEffect, useState } from "react";
import MyPageMain from "../components/Mypage/MyPageMain";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import MenuBar from "../components/Mypage/MypageMenu";
import Section from "../components/Mypage/Section";

const Mypage = () => {
    const location = useLocation();
    const queryParmas = new URLSearchParams(location.search);
    const headerSelect = queryParmas.get("category");

    const [category, setCategory] = useState(headerSelect || 'nomal');
    const onSelect = useCallback(category => setCategory(category), []);

    useEffect(() => {
        setCategory(headerSelect || 'nomal');
    }, [headerSelect]);
    return (
        <>
        <Header/>
        <MyPageMain/>
        <MenuBar category={category} onSelect={onSelect}/>
        <Section category={category}/>
        <Footer/>
        </>
    );
}

export default Mypage;