import React, { useState, useEffect } from "react";
import '../../styles/FindAccount.css';

const FindUserIdPw = () => {

    // 아이디 패스워드 찾기 키보드 입력
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userId, setUserId] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isName, setIsName] = useState(false);

    const onChangeUserId = (e) => {
        const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,15}$/ // 아이디 정규표현식(3자리이상 15자리이내)
        const idNow = e.target.value; 
        setUserId(idNow);
        if(!idRegex.test(idNow)) {
            setIsId(false)
        } else {
            setIsId(true);
        }
    }

    const onChangeUserName = (e) => {
        const nameNow = e.target.value;
        setUserName(nameNow); 
        if(nameNow.length < 2 || nameNow.length > 10) {
            setIsName(false);
        } else {
            setIsName(true);
        }
    }

    const onChangeUserEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ // 이메일 정규표현식
        const emailNow = e.target.value ;
        setUserEmail(emailNow);

        if (!emailRegex.test(emailNow)) {
            setIsEmail(false)
        } else {
            setIsEmail(true);
        }        
    }

    // 이름과 메일 입력 값을 axios로 회원조회 접근 코드

    return (
        <>
        <div className="container-find">
        {/* FORM SECTION */}
        <div className="row">
            {/* FIND ID */}
            <div className="col align-items-center flex-col">
            <div className="form-wrapper align-items-center">
                <div className="form">
                <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input type="text" placeholder="User Name" value={userName} onChange={onChangeUserName} />
                </div>
                <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input type="text" placeholder="User Email" value={userEmail} onChange={onChangeUserEmail} />
                </div>
                <button>아이디 찾기</button>
                </div>
            </div>
            <div className="form-wrapper"></div>
            </div>
            {/* FIND ID */}
            {/* FIND PW */}
            <div className="col align-items-center flex-col">
            <div className="align-items-center">
                <div className="form">
                <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input type="text" placeholder="User ID" value={userId} onChange={onChangeUserId}/>
                </div>
                <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input type="text" placeholder="User name" value={userName} onChange={onChangeUserName}/>
                </div>
                <div className="input-group">
                    <i className="bx bxs-mail-send"></i>
                    <input type="email" placeholder="Email" value={userEmail} onChange={onChangeUserEmail}/>
                    <div><button>인증</button></div>
                </div>
                <button>아이디 찾기</button>
                </div>
            </div>
        </div>
        {/* END FIND PW */}
            </div>
        </div>
        </>
    );
};
export default FindUserIdPw;