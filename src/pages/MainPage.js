import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import logoex from "../images/logoex.png";

const Container = styled.div`
    height: 100vh;
`

const LogoBox = styled.div`
    position: relative;
    top : 20%;
    width: 40%;
    height: 30%;
    margin: 10px auto;

    .text{
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.75rem;
        color: gray;
    }

    p {
        margin-top: 0;
    }

    .logo {
        display: block;
        margin: 0 auto;
        width: 70%;
        height: auto;
    }

`

const SearchBox = styled.div`
    position: relative;
    top: 25%;
    border: 0.2rem solid #500e10;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 40px;
    text-align: center;
    display: flex;
`

const MenuBox = styled.div`
    position: relative;
    top: 40%;
    margin: 0 auto;
    width: 87%;
    height: 3%;

    .menu{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu p{
        margin: 0 20px;
    }
`

const MainPage = () => {
    return(
        <Container> 
            <LogoBox>
                <p className="text">카피캣</p>
                <img className="logo" src={logoex} alt="로고 사진"/>
            </LogoBox>
            <SearchBox>

            </SearchBox>
            <MenuBox>
                <div className="menu">
                    <p>로그인</p>
                    <p>마이페이지</p>
                    <p>될대로 돼라</p>
                </div>
            </MenuBox>
            <Footer/>
        </Container>
    )
}

export default MainPage