import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { MdMenu, MdLogin, MdMyLocation } from "react-icons/md";
import SideMenu from "./SideMenu";

const Container = styled.div`
  width: 100%;
  background-color: #990A2C;
  position: relative;
  height : 100px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const LogoBox = styled.div`
  width: 200px;
  height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuBurger = styled(MdMenu)`
  width: 80px;
  height: 80px;
  position: absolute;
  right: 16px;
  color: white;

  @media (max-width: 768px) {
        width: 60px;
        height: 60px;
        right: 8px;
        
    }
`
const LoginBox = styled(MdLogin)`
  width: 50px;
  height: 50px;
  color: white;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 8px;
  }
`

const MyPageBox = styled(MdMyLocation)`
  width: 50px;
  height: 50px;
  color: white;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 8px;
  }
`

const Header = ({children}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

// children 자리에 나중에 Logo대신 SearchBox를 넣을 생각
  const onClickMenu = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
  }
    return(
        <Container>
          {isMobile ? <>{children}</> : <LogoBox>{children}</LogoBox>}         
          <MenuBurger/>
          <SideMenu/>
        </Container>
    );

}

export default Header;