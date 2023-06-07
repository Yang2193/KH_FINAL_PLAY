import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const MapCss =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Map = () =>{

    return(
        <MapCss>
            <div id="map" style="width:500px;height:400px;"></div>
        </MapCss>
    )
}

export default Map;