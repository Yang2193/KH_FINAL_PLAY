import React, { useEffect, useState, useContext } from "react";
import { AccountInfoContext } from "../../context/AccountInfo";
import { useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";

const MyProfileEdit = () => {
    const navigate = useNavigate();

    // 로그인 한 아이디 가져오기
    const context = useContext(AccountInfoContext);
    const {userId} = context;

    // 비밀번호 입력
    const [inputPw, setInputPw] = useState("");
    const onChangePw = (e) => {
        const inputPwCk = e.target.value;
        setInputPw(inputPwCk);
    }

    // 회원정보
    const [userInfo, setUserInfo] = useState("");

    // 회원정보 조회 후 화면 출력
    useEffect(() => {
        const userData = async() => {
            try {
                const response = await AccountApi.getUserInfo(userId);
                if (response.status === 200) {
                    setUserInfo(response.data);
                    console.log(userInfo.data);
                  } else {
                    console.log("데이터가 없음");
                  }
              } catch (error) {
                console.log(error);
              }
            };
            userData();
        },[]);
    
    // 회원정보 변경 클릭 시 비밀번호 입력
    // const onClickInfoEdit = () => {
    //     if(!userPw === editPw) {
    //         setEditPwMsg("비밀번호가 일치하지 않습니다.");
    //     } else {
    //         setEditPwOkMsg("");
    //         navigate("")
    //     }
    // }

    // const handleOnKeyPress = e => {
    //     if(e.key === "Enter") {
    //         onClickInfoEdit();
    //     }
    // }
    return (
        <>
        <h3>회원정보</h3>
        <p>ID : {userInfo.userId}</p>
        {/* <button onClick={onClickInfoEdit}>회원정보수정</button> */}
        </>
    );
}

export default MyProfileEdit;