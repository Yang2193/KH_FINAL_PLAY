import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";
import '../../styles/Account.css';
import { AccountInfoContext } from "../../context/AccountInfo";

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(AccountInfoContext);
    const {setUserId, setUserPw, setUserName, setUserNickname, setUserPhone, setUserEmail, isLogin, setIsLogin} = context;

    // 키보드 입력 받기
    const [loginId, setLoginId] = useState(""); // 로그인 아이디
    const [loginPw, setLoginPw] = useState(""); // 로그인 비밀번호

    // 오류 메시지
    const [loginIdOkMsg, setLoginIdOkMsg] = useState("");
    const [loginIdMsg, setLoginIdMsg] = useState("");
    const [loginPwOkMsg, setLoginPwOkMsg] = useState("");
    const [loginPwMsg, setLoginPwMsg] = useState("");

    // 유효성 검사
    const [isLoginId, setIsLoginId] = useState(false);
    const [isLoginPw, setIsLoginPw] = useState(false);

    // 정규식
    const idRegEx = /^[A-Za-z0-9]{3,15}$/g;
    const pwRegEx = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+=-]).{8,20}$/;

    const onChangeLoginId = (e) => {
      const loginInputId = e.target.value;
      setLoginId(loginInputId);
      if(!idRegEx.test(loginInputId)) {
          setIsLoginId(false);
          setLoginIdMsg("3~15자리 영문자 또는 숫자를 입력하세요.");
      } else {
          setIsLoginId(true);
          setLoginIdOkMsg("");
      }
    }

    const onChangeLoginPw = (e) => {
      const loginInputPw = e.target.value ;
      setLoginPw(loginInputPw);

      if (!pwRegEx.test(loginInputPw)) {
          setIsLoginPw(false);
          setLoginPwMsg("8~20자리 소문자, 숫자, 특수문자를 입력하세요.");
      } else {
          setIsLoginPw(true);
          setLoginPwOkMsg("");
      }        
    }

    const handleOnKeyPress = e => {
        if(e.key === 'Enter') {
            onClickLogin();
        }
    }
  
    const onClickLogin = async() => {
      try {
        const response = await AccountApi.getToken(loginId, loginPw);
        if(response.status === 200) {
          window.localStorage.setItem("accessToken", response.data.accessToken);
          window.localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("isLogin", "TRUE");
          localStorage.setItem("userId", loginId);
          try {
            const response2 = await AccountApi.getUserInfo(loginId);
            const userData = response2.data
            localStorage.setItem("userData", JSON.stringify(userData));
            console.log(userData);
          } catch(e) {
            console.log(e);
          }
          navigate("/");
        }
      } catch(e) {
        console.log(e);
      }
    };
  
    const onClickGoToAgree = () => {
      navigate("/join")
    }

    return (
      <div className="wrapper">
        <div className="loginWrapper">
          <div className="login">
            <h2>로그인</h2>
            <div className="loginMain">
              <div className="loginSmallBox">
                <input type="text" value={loginId} className="loginInput" placeholder="아이디" onChange={onChangeLoginId}/>
              </div>
              <div className="loginErrMsg">
                {!isLoginId && <span className="loginIdErr">{loginIdMsg}</span>}
                {isLoginId && <span className="loginIdOk">{loginIdOkMsg}</span>}
              </div>
              <div className="loginSmallBox">
                <input type="password" value={loginPw} className="loginInput" placeholder="패스워드" onChange={onChangeLoginPw} onKeyUp={handleOnKeyPress}/>
              </div>
              <div className="loginErrMsg">
                {!isLoginPw && <span className="loginPwErr">{loginPwMsg}</span>}
                {isLoginPw && <span className="loginPwOk">{loginPwOkMsg}</span>}
              </div>
              <div className="IdPwSearchButtonBox">
                <Link to="/find" className="IdPwSearchButton">아이디 / 패스워드 찾기</Link>
              </div>
              <button className="loginButton" onClick={onClickLogin}>로그인</button>
              <div>
                <button className="regButton" onClick={onClickGoToAgree}>회원가입</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;