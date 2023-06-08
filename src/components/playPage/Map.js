import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const MapCss =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Map = () =>{
    const{kakao} = window;
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center : new kakao.maps.LatLng(33.450701,126.570667),
            level:3
        };
        const map = new kakao.maps.Map(container,options);        
    },[])


    

    return(
        <>
            <p>장소 : 불러올 데이터</p>
            <p>주소 : 불러올 데이터</p>
            <div id ="map" style={{width:'500px',height:'500px',margin : '50px'}}></div>
        </>
        )
}

export default Map;