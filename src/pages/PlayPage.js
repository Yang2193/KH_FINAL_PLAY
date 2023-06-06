import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayNav from "../components/playPage/PlayNav";
import Map from "../components/playPage/Map";
import { useState } from "react";
import Detail from "../components/playPage/Detail";
import Info from "../components/playPage/Info";
const PlayPage = () => {

    const[type,setType] = useState("");

	const handleType = (e) =>{
		setType(e);

	}
    return(
        <>
            <Header/>
            <Info/>
            <PlayNav  handleType={handleType}/>
            {type === "default" &&(
                <Detail/>
            )}
            {type === "map" &&(
                <Map/>
            )}
            <Footer/>
        </>
    )
}

export default PlayPage;