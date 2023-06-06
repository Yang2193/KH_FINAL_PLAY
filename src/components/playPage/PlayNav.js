import React from "react";
import styled from "styled-components";
const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    border-bottom: 1px solid;
    margin-top: 5%;
    button{
        width: 10%;
        height: 100%;
        border: none;
        background-color: white;
        font-size: 1.5em;
        font-weight: bold;
    }
    button:focus{
        border-bottom:5px solid ;
    }

`

const PlayNav = ({handleType}) =>{


      const onClickInfo = () => {
        handleType("default");
      }
      
    const onClickMap = () => {
        handleType("map");
      }

    return(
    <NavBar>
      <button onClick={onClickInfo}>공연 정보</button>
      <button onClick={onClickMap}>지도</button>
    </NavBar>
    )
}

export default PlayNav;