import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import logoex from "../images/logoex.png";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import MainApi from "../api/MainApi";
import PlayList from "../components/main/PlayList";

const Container = styled.div`
    height: 100vh;
    position: relative;
    overflow: auto;
`

const LogoBox = styled.div`
    position: relative;
    top : 0%;
    width: 40%;
    height: 20%;
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

const ListBox = styled.div`
    position: relative;
    top: 10%;
    margin: 0 auto;
    width: 70%;

    @media (max-width: 768px) {
        width: 80%;
        font-size: 80%;

        td .img-thumb{
            width: 60px;
            height: 80px;
        }
    }

    .bar{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    table{
        width : 100%;
    }

    thead, tbody{
        width : 100%
    }
    
    thead th{
        background-color: #990A2C;
        color: #fff;
    }
    
    tbody td{
        border-bottom: 1px dotted #999;
    }

    td{
        height: 100px;
        text-align: center;
        font-size: 1rem;
        padding: 10px 0;

        @media (max-width: 768px) {
        font-size: 0.8rem;
        }
    }

    .img-thumb{
            width: 90px;
            height: 120px;
            margin: 0 auto;
            border: 1px solid #b9b9b9;
            vertical-align: middle;
        }
                    
    .image {

    }

    .title{

    }

    .location{

    }

    .period{

    }
    
    .menu p{
        margin: 0 20px;
    }
`

const MainPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [playList, setPlayList] = useState([]);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const rsp = await MainApi.getPlayList();
                if(rsp.status === 200){
                    setPlayList(rsp.data);
                    console.log(rsp.data);
                }
            } catch(error){
                console.error(error);
            }
        };
        fetchData();
    }, [])

    useEffect(() => {
        console.log(playList);
    }, [playList])

 
    const handlePlayList = (playlist) => {
        setPlayList(playlist);
    }


    return(
        <Container> 
             {isMobile ? (
            <Header>
                <SearchBox handlePlayList={handlePlayList}/>
            </Header>) : (
                <>
                    <Header>로고 자리</Header>
                    <SearchBox handlePlayList={handlePlayList}/>
                </>
            )}
            <PlayList playList={playList}/>
            <Footer/>
        </Container>
    )
}

export default MainPage