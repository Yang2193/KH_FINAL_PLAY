import React, { useState, useEffect, useContext } from "react";
// import { UserContext } from "../../context/userInfo";
import { Link, useNavigate } from "react-router-dom";
// import AxiosApi from "../../api/axiosapi";
// import Modal from "../../utill/Modal";
// import PostCode from "./popUpAddr";
import '../../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [containerClass, setContainerClass] = useState("container-login");

    // Context API에 값을 저장
    // const context = useContext(UserContext);
    // const {setId, setPassword} = context;

    // 키보드 입력 받기
    const [userId, setUserId] = useState(""); // 로그인 아이디
    const [userPwd, setUserPwd] = useState(""); // 로그인 비밀번호
    const [signUpUserId, setSignUpUserId] = useState(""); // 회원가입 아이디
    const [signUpUserPw, setSignUpUserPw] = useState(""); // 회원가입 비밀번호
    const [signUpUserPwCheck, setSignUpUserPwCheck] = useState(""); // 회원가입 비밀번호 체크
    const [signUpUserName, setSignUpUserName] = useState(""); // 회원가입 이름
    const [signUpPhone, setSignUpPhone] = useState(""); // 회원가입 전화번호
    const [signUpUserEmail, setSignUpUserEmail] = useState(""); // 회원가입 메일
    const [signUpAddr, setSignUpAddr] = useState({address:"",}); // 주소

    // 오류 메시지
    const [nameError, setNameError] = useState("");
    const [idError, setIdError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [repwdError, setRepwdError] = useState("");
    const [telError, setTelError] = useState();
    const [emailError, setEmailError] = useState("");
    const [seachIdError, setSearchIdError] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isSignId, setIsSignId] = useState(false);
    const [isSignIdCk, setIsSignIdCk] = useState(false);
    const [isSignPw, setIsSignPw] = useState(false);
    const [isSignPwCk, setIsSignPwCk] = useState(false);
    const [isSignName, setIsSignName] = useState(false);
    const [isSignPhone, setIsSignPhone] = useState(false);
    const [isSignEmail, setIsSignEmail] = useState(false);

    // 회원 조회
    const [searchId, setSearchId] = useState(false);

    // 주소찾기 영역
    const [popup, setPopup] = useState(false);

    const toggle = () => {
        const container = document.getElementById("container-login");
        container.classList.toggle("sign-in");
        container.classList.toggle("sign-up");
        setUserId('');
        setUserPwd('');
        setSignUpUserId('');
        setSignUpUserPw('');
        setSignUpUserPwCheck('');
        setSignUpUserName('');
        setSignUpPhone('');
        setSignUpUserEmail('');
        setIsId(false);
        setIsPwd(false);
        setIsSignId(false);
        setIsSignPw(false);
        setIsSignPwCk(false);
        setIsSignName(false);
        setIsSignPhone(false);
        setIsSignEmail(false);
    };

    const onChangeUserId = (e) => {
        const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,15}$/ // 아이디 정규표현식(3자리이상 15자리이내)
        const idNow = e.target.value; 
        setUserId(idNow);
        if(!idRegex.test(idNow)) {
            setIsId(false);
        } else {
            setIsId(true);
        }
    }

    const onChangeSignUpUserId = (e) => {
        const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,15}$/ // 아이디 정규표현식(3자리이상 15자리이내)
        const idNow = e.target.value; 
        setSignUpUserId(idNow);
        if(!idRegex.test(idNow)) {
            setIdError('8자리 이상 15자리 이내로 입력해주세요');
            setIsSignId(false)
        } else {
            setIdError('');
            setIsSignId(true);
        }
    }

    const onChangeUserPw = (e) => {
        const pwdRegex =  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; // 비밀번호 정규표현식(숫자+영문자 및 특수문자 조합으로 8자리 이상)
        const pwdNow = e.target.value ;
        setUserPwd(pwdNow);

        if (!pwdRegex.test(pwdNow)) {
            setIsPwd(false)
        } else {
            setPwdError('');
            setIsPwd(true);
        }        
    }

    const onChangeSignUpUserPw = (e) => {
        const pwdRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; // 비밀번호 정규표현식(숫자+영문자 및 특수문자 조합으로 8자리 이상)
        const pwdNow = e.target.value ;
        console.log(pwdNow);
        setSignUpUserPw(pwdNow);
        if (!pwdRegex.test(pwdNow)) {
            setPwdError('숫자+영문자 및 특수문자 조합으로 8자리 이상 입력해주세요.')
            setIsSignPw(false)
            console.log(isSignPw);
        } else {
            setPwdError('');
            setIsSignPw(true);
            console.log(isSignPw);
        }        
    }

    const onChangeSignUpUserPwCheck = (e) => {
        const pwdRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; // 비밀번호 정규표현식(숫자+영문자 및 특수문자 조합으로 8자리 이상)
        const pwdNow = e.target.value ;
        setSignUpUserPwCheck(pwdNow);
        if (!pwdRegex.test(pwdNow)) {
            setPwdError('숫자+영문자 및 특수문자 조합으로 8자리 이상 입력해주세요.')
            setIsSignPwCk(false)
        } else {
            setPwdError('');
            setIsSignPwCk(true);
        }        
    }

    const onChangeSignUserName = (e) => {
        const nameNow = e.target.value;
        setSignUpUserName(nameNow); 

        if(nameNow.length < 2 || nameNow.length > 10) {
            setIsSignName(false);
        } else {
          setNameError('');
            setIsSignName(true);
        }
    }

    const onChangeSignUserTel = (e) => {
        const telRegEx = /^\d{2,3}-\d{3,4}-\d{4}$/; // 전화번호 정규표현식
        const telNow = e.target.value;
        setSignUpPhone(telNow);

        if(!telRegEx.test(telNow)) {
            setTelError('전화번호 형식이 맞지 않아요 다시 입력해주세요.')
            setIsSignPhone(false)
        } else {
            setTelError('');
            setIsSignPhone(true);

        }
    }

    const onChangeUserEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ // 이메일 정규표현식
        const emailNow = e.target.value ;
        setSignUpUserEmail(emailNow);

        if (!emailRegex.test(emailNow)) {
            setEmailError('이메일 형식이 맞지 않아요 다시 입력해주세요.')
            setIsSignEmail(false)
        } else {
            setEmailError('');
            setIsSignEmail(true);
        }        
    }

    useEffect(() => {
        const container = document.getElementById("container-login");

        setTimeout(() => {
        container.classList.add("sign-in");
        }, 100);
    }, []);

    // const handleToggle = () => {
    //     toggle(); // toggle 함수 호출

    // };

    // 로그인 실패 시 팝업처리(모달)
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    }

    const confirmBtn = () => {
        setModalOpen(false);
        console.log("확인 버튼이 눌러졌습니다.")
    }

    // const handleOnKeyPress = e => {
    //     if(e.key === 'Enter') {
    //         onClickLogin();
    //     }
    // }

    // const onClickSignIdCheck = async() => {
    //   // 중복 아이디 체크
    //   console.log(signUpUserId);
    //   try {
    //     const response = await AxiosApi.customRegCheck(signUpUserId); // 아이디 조회
    //     console.log(response.data);
    //     setSearchId(response.data);
    //     if(response.data === false) {
    //       setIdError('중복된 아이디가 있습니다.');
    //       setIsSignIdCk(false);
    //     }
    //     else {
    //       setSearchId(response);
    //       setIsSignIdCk(true);
    //     }
    //   } catch(e){
    //     console.log(e);
    //   }
    // };
    // const onClickSignUp = async() => {
    //   // 회원가입 axios 호출
    //   const response = await AxiosApi.
    // }


    const handleInput = (e) => {
      setSignUpAddr({
          // ... => userAddr에 다 담겠다는 의미
          ...signUpAddr,
          [e.target.name]:e.target.value,
      })
      console.log(e.target.name);
    }

    // 팝업창 열기
    const handleComplete = () => {
      setPopup(!popup);
    }
  
    // const onClickLogin = async() => {
    //   // 로그인 위해 axios 호출
    //   try {
    //     const response = await AxiosApi.customLogin(userId, userPwd);
    //     console.log(response.data);
    //     if(response.data === true) {
    //         window.localStorage.setItem("Id", userId); // setItem(키, 값)
    //         window.localStorage.setItem("password", userPwd);
    //         window.localStorage.setItem("isLogin", "TRUE");
    //         setId(userId);
    //         setPassword(userPwd);
    //         navigate("/");
    //     }
    //   } catch(e){
    //     console.log(e);
    //   }
    // };

    // const onClickSignUp = async() => {
    //   // 회원가입을 위해 axios호출
    //   try {
    //     const response = await AxiosApi.customReg(signUpUserName, signUpUserId, signUpUserPw,  signUpPhone, signUpUserEmail, signUpAddr.address);
    //     console.log(response.data);
    //     if(response.data === true) navigate('/');
    //   } catch(e) {
    //     console.log(e);
    //   }
    // };
  
  return (
    <>
    <div id="container-login" className={containerClass}>
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
        {/* {popup && <PostCode addr={signUpAddr} setAddr={setSignUpAddr} />} */}
          <div className="align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="User ID" value={signUpUserId} onChange={onChangeSignUpUserId} className={isSignId && isSignIdCk ? 'focused-id' : ''}/>
              </div>
              <div className="comment">
                 {signUpUserId.length > 0 && <span className={`message ${isSignId ? '' : 'error'}`}>{idError}</span>}
              </div>
              <div className="input-group">
                {/* <button className="idck-btn" onClick={onClickSignIdCheck}>중복 확인</button> */}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" value={signUpUserPw} onChange={onChangeSignUpUserPw} className={isSignPw && (signUpUserPw === signUpUserPwCheck) ? 'focused-pw' : ''}/>
              </div>
              <div className="comment">
                 {signUpUserPw.length > 0 && <span className={`message ${isSignPw ? '' : 'error'}`}>{pwdError}</span>}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Confirm password" value={signUpUserPwCheck} onChange={onChangeSignUpUserPwCheck} className={isSignPw && (signUpUserPw === signUpUserPwCheck) ? 'focused-pw' : ''}/>
              </div>
              <div className="comment">
                 {signUpUserPwCheck.length > 0 && <span className={`message ${isSignPwCk ? '' : 'error'}`}>{repwdError}</span>}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="text" placeholder="User name" value={signUpUserName} onChange={onChangeSignUserName} className={isSignName ? 'focused-name' : ''}/>
              </div>
              <div className="comment">
                 {signUpUserName.length > 0 && <span className={`message ${isSignName ? '' : 'error'}`}>{nameError}</span>}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="text" placeholder="User phone" value={signUpPhone} onChange={onChangeSignUserTel} className={isSignPhone ? 'focused-tel' : ''}/>
              </div>
              <div className="comment">
                 {signUpPhone.length > 0 && <span className={`message ${isSignPhone ? '' : 'error'}`}>{telError}</span>}
              </div>
              <div className="input-group">
                <i className="bx bxs-mail-send"></i>
                <input type="email" placeholder="Email" value={signUpUserEmail} onChange={onChangeUserEmail} className={isSignId ? 'focused-email' : ''}/>
                <div><button>인증</button></div>
              </div>
              <div className="comment">
                 {signUpUserId.length > 0 && <span className={`message ${isSignEmail ? '' : 'error'}`}>{emailError}</span>}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Certification Number" value={signUpUserPw} onChange={onChangeSignUpUserPw} className={isSignId ? 'focused' : ''}/>
              </div>
              <div className="comment">
                 {signUpUserId.length > 0 && <span className={`message ${isSignId ? '' : 'error'}`}>{idError}</span>}
              </div>
              <div className="input-group">
                <i className="bx bxs-addr-alt"></i>
                <input type="text" placeholder="주소 입력" onChange={handleInput} value={signUpAddr.address} />
                    <br />
                    <button className="addrBtn" onClick={handleComplete}>주소찾기</button>
              </div>
              {/* <button onClick={onClickSignUp}>Sign up</button> */}
              <p>
                <span>Already have an account?</span>
                {/* <b onClick={handleToggle} className="pointer">
                  Sign in here
                </b> */}
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
        {/* <Modal open={modalOpen} type={true} confirm={confirmBtn} close={closeModal} header="로그인 실패">아이디 및 패스워드를 재확인 해주세요</Modal> */}
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" value={userId} onChange={onChangeUserId}/>
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                {/* <input type="password" placeholder="Password" value={userPwd} onChange={onChangeUserPw} onKeyPress={handleOnKeyPress} /> */}
              </div>
              {/* <button onClick={onClickLogin}>Sign in</button> */}
              <p>
                <b>Forgot Your <br /> <Link to='/find'>ID</Link> / <Link to='/find'>Password</Link></b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b className="pointer"> {/* onClick={handleToggle} */}
                  <Link to="/join">Sign up here</Link>
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome <br /> to <br /> Capy Cat</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
    </>
  );
};

export default Login;