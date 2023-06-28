import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MessageModal from "../utils/MessageModal";
import styled, {css, keyframes} from "styled-components";
import { AccountInfoContext } from "../context/AccountInfo";




const MenuButton = styled.div`
  height  : 100px;
  width : 80px;
  position: absolute;
  border-radius : 16px;
  right: 16px;
  top: 0px;
  cursor: pointer;

  @media (max-width: 768px) {
        width: 60px;
        height: 100px;
        right: 8px;
        
    }
`;

const Box = styled.div`
    display: none;
    width: 260px;
    background-color: #fff;
    color: #990A2C;
    border-radius: 20px;
    position: absolute;
    top: 0px;
    left: -166px;
    border: 1px solid #990A2C;

    z-index: 3;

    ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: center;
      animation: ${slideIn} 0.3s ease-in-out;
     
      .header{
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        

      }


    
    .box{
        width: 260px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: center;


    }

      .item{
        height: 80px;
        width: 200px;
        border-top: 1px dotted #990A2C;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
            font-weight: bold;
        }
      }

     
    `}

   
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;


const SideMenu = () => {
    const {resetUser} = useContext(AccountInfoContext);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();
    const userId = window.localStorage.getItem("userId");
    const authority = window.localStorage.getItem("authority");

    //팝업창
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {   

        
        const clickOutside = (event) =>{
            if(ref.current && !ref.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };
      
    },[ref]);

    //모달창 닫기
    const onClickClose = () => {
        setModalOpen(false);
    }

    //로그인 페이지로
    const onClickLogin = () => {
        setModalOpen(false);
        navigate("/login");
    }

    
    const onClickMenu = () => {
        setIsOpen(!isOpen);
    }

    const onClickBox = (event) => {
        event.stopPropagation();
    };

    const handleLinkClick = (path,category) => {
        const queryParams = new URLSearchParams();
        if(category) queryParams.set("category", category);
        navigate({ pathname: path, search: queryParams.toString() }); 
        setIsOpen(false);
      };

    const logout = () =>{
        localStorage.clear();
        resetUser();
        navigate("/");
        setIsOpen(!isOpen);
        setModalOpen("logout");
    }
    

    return(
        <MenuButton  onClick={onClickMenu} ref={ref}>
                <Box isOpen={isOpen} >
                   <div className="header">메뉴</div>
                    <div className="box" onClick={onClickBox}>
                            {userId ?
                                <div className="item" onClick={logout}>로그아웃</div>
                            :   <div className="item" onClick={()=> handleLinkClick("/Login")}>로그인/회원가입</div>
                            }
                            <div className="item" onClick={()=> handleLinkClick("/post")}>리뷰 게시판</div>
                            <div className="item" onClick={()=> handleLinkClick(!userId ? setModalOpen("login") : "/MyPage")}>마이 페이지</div>
                    </div>
                </Box>
                <MessageModal open={modalOpen==="login"} close={()=>navigate('/Login') } confirm={onClickLogin} header="로그인">로그인이 필요한 페이지입니다.</MessageModal>
                <MessageModal open={modalOpen==="logout"} close={onClickClose} confirm={onClickClose} header="로그아웃">로그아웃 하셨습니다.</MessageModal>
        </MenuButton>
        
    );
}

export default SideMenu;