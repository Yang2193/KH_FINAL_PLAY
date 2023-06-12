import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";

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


const Header = ({children}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  }

    return(
        <Container>
          {isMobile ? <>{children}</> : <LogoBox>{children}</LogoBox>}         
          <MenuBurger/>   
        </Container>
    );

}

export default Header;