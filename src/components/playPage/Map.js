import React, { useState,useEffect } from "react";
import PlayInfoApi from "../../api/PlayInfoApi";

const Map = () =>{

    const{kakao} = window;
    const[mapInfo,setMapInfo]=useState("");
// 장소 데이터 가져오기
    useEffect(()=>{
        const theater = async()=>{
            const rsp = await PlayInfoApi.selectTheater("23004670");
            setMapInfo(rsp.data);
        };
        theater();
    },[])
console.log(mapInfo[0].addr);

// 지도 api 사용
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
        geocoder.addressSearch(mapInfo[0].addr, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

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
        {mapInfo.map(e=>(
            <div>
                <p>장소 : {e.theaterName} </p>
                <p>주소 : {e.addr}</p>
                <div id ="map" style={{width:'500px',height:'500px',margin : '50px'}}></div>
            </div>
        ))}
        </>
    )
}

export default Map;