import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayNav from "../components/playPage/PlayNav";
import Map from "../components/playPage/Map";
import { useState } from "react";
import Detail from "../components/playPage/Detail";
import Info from "../components/playPage/Info";
import styled from "styled-components";

const Contents = styled.div`
    width: 60%;
    position: relative;
    left: 20%;
`


const PlayPage = () => {

    const[type,setType] = useState("default");

	const handleType = (e) =>{
		setType(e);

	}
    return(
        <>
            <Header/>
            <Contents>
                <Info/>
                <PlayNav  handleType={handleType}/>
                {type === "default" &&(
                    <Detail/>
                )}
                {type === "map" &&(
                    <Map/>
                )}
            </Contents>
            <Footer/>
        </>
    )
}

export default PlayPage;