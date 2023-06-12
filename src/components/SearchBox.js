import styled from "styled-components"
import React from "react";
import {MdSearch} from "react-icons/md"

const SearchContainer = styled.div`
    position: relative;
    top: 5%;
    border: 0.2rem solid #990A2C;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 40px;
    text-align: center;
    display: flex;
    z-index: 1;
    background-color: white;
    @media (max-width: 768px) {
        width: 60%;
        top: 0%;  
    }
`;
const Input = styled.input`
    width: 80%;
    height: 90%;
    border: none;
    border-style: none;
    outline: none;
    position: absolute;
    left : 20px;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const SearchButton = styled(MdSearch)`
    width : 30px;
    height: 30px;
    position: absolute;
    right: 10px;
`

const SearchBox = () => {
    return(
        <SearchContainer>
            <Input/>
            <SearchButton/>
        </SearchContainer>
    
    )
}

export default SearchBox;