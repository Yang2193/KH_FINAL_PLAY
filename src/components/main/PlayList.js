import styled from "styled-components"
import React from "react"

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

const PlayList = ({playList}) => {

    const playListMap = 
        playList && 
        playList.map(pl => (
            <tr key={pl.playId}>
                    <td className="image">
                        <img src={pl.imageUrl} alt="image1" className="img-thumb"/>
                    </td>
                    <td className="title">
                        {pl.title}
                    </td>
                    <td className="location">
                        {pl.theaterName}
                    </td>
                    <td className="period">
                        {pl.periodStart} ~ {pl.periodEnd}
                    </td>
                </tr>
        ));

    return(
        <ListBox>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>상품명</th>
                            <th>장소</th>
                            <th>기간</th>
                        </tr>
                    </thead>
                    <tbody>
                         {playList.length > 0 ? playListMap : 
                            <tr>
                             <td colSpan={4}>검색 결과가 존재하지 않습니다.</td>
                            </tr>
                         }     
                    </tbody>
                </table>
            </ListBox>
    )
}

export default PlayList;