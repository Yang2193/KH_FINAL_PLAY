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

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('서울특별시 종로구 대학로8가길 85 대학로문화공간', function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
        });    
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