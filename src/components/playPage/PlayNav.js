import React from "react";
import styled from "styled-components";
import { useState } from "react";
const NavBar = styled.div`
    display: flex;
    align-items: center;
    height: 5vh;
    border-bottom: 1px solid;
    margin-top: 5%;
    ul{
      width: 100%;
      list-style: none;
      display: flex;
      padding: 0;
    }
    li{
      display: flex;
      justify-content: center;
      width: 10%;
      /* border: 1px solid; */
      height: 100%;
      background-color: white;
      font-size: 1.5em;
      font-weight: bold;
      cursor: pointer;
      margin-right: 1%;
    }
    .nav-item {
    position: relative;
    cursor: pointer;
  }

.nav-item::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: black;
  display: none;
}

.nav-item.active::before {
  display: block;
}
`

const PlayNav = ({ handleType }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickInfo = () => {
    handleType("default");
    setActiveIndex(0);
  }
  const onClickMap = () => {
    handleType("map");
    setActiveIndex(1);
  };
    return (
      <NavBar>
        <ul>
          <li onClick={onClickInfo} className={activeIndex === 0 ? "nav-item active" : "nav-item"}>
            상세 정보
          </li>
          <li onClick={onClickMap} className={activeIndex === 1 ? "nav-item active" : "nav-item"}>
            장소 정보
          </li>
        </ul>
      </NavBar>
    );
  };

export default PlayNav;