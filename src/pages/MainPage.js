import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import logoex from "../images/logoex.png";
import Header from "../components/Header";

const dramaData = [
    ["23002001", "나의 PS파트너", "https://ticketimage.interpark.com/Play/image/large/23/23002001_p.gif","대학로 아트포레스트 2관","2023.05.05","2023.08.31"],
    ["23004421", "공포 연극[괴담:위험한 해시태그]", "https://ticketimage.interpark.com/Play/image/large/23/23004421_p.gif","청주 소명아트홀","2023.05.05","2023.08.31"],
    ["23006291", "검정고무신 - 부산", "https://ticketimage.interpark.com/Play/image/large/23/23006291_p.gif","부산시민회관 소극장","2023.05.05","2023.08.31"],
    ["23006613", "곰 & 청혼 - 부산", "https://ticketimage.interpark.com/Play/image/large/23/23006613_p.gif","여기는 극장입니다","2023.05.05","2023.08.31"],
    ["23007147", "공연배달서비스 간다 [템플] - 고양", "https://ticketimage.interpark.com/Play/image/large/23/23007147_p.gif","고양아람누리 새라새극장","2023.05.05","2023.08.31"]
]


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

const SearchBox = styled.div`
    position: relative;
    top: 0%;
    border: 0.2rem solid #990A2C;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 40px;
    text-align: center;
    display: flex;
`

const ListBox = styled.div`
    position: relative;
    top: 5%;
    margin: 0 auto;
    width: 50%;

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

    td{
        height: 100px;
        
        .image {

        }
        

        .img-thumb{
            width: 100px;
            height: 100px;
            object-fit: cover;
        }

        .title{

        }

        .location{

        }

        .period{

        }
    }

    td .image img{
        width: 100px;
        height: 100px;
    }


    .menu p{
        margin: 0 20px;
    }
`

const MainPage = () => {
    return(
        <Container> 
            <Header/>

            <LogoBox>
                <p className="text">카피캣</p>
                <img className="logo" src={logoex} alt="로고 사진"/>
            </LogoBox>
            <SearchBox>

            </SearchBox>
            <ListBox>
                <table>
                    <thead>
                        <th colSpan={2}>상품명</th>
                        <th>장소</th>
                        <th>기간</th>
                    </thead>
                    <tbody>
                            {dramaData && dramaData.map(e =>(
                                <tr id={e[0]}>
                                    <td className="image">
                                        <img src={e[2]} alt="image1" className="img-thumb"/>
                                    </td>
                                    <td className="title">
                                        {e[1]}
                                    </td>
                                    <td className="location">
                                        {e[3]}
                                    </td>
                                    <td className="period">
                                        {e[4]} ~ {e[5]}
                                    </td>
                                </tr>

                            ))}         
                    </tbody>
                </table>
            </ListBox>
            <Footer/>
        </Container>
    )
}

export default MainPage