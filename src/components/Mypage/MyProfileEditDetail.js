import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";
import Header from "../Header";
import Footer from "../Footer";
import profile from "../../images/mypageicon2.png";
import xmark from "../../images/x-mark.png";
import "../../styles/MyProfileEditDetail.css";

const MyProfileEditDetail = () => {
  const navigate = useNavigate();
  
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);
  // 변경할 프로필 변수
  const [password, setPassword] = useState(localStorage.getItem("userPw"));
  const [conPassword, setConPassword] = useState(localStorage.getItem("userPw"));
  const [nickname, setNickname] = useState(userInfo.userNickname);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // 오류 메세지
  const [passwordMsg, setPasswordMsg] = useState("");
  const [conPasswordMsg, setConPasswordMsg] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");

  // 유효성 검사
  const [isPassword, setIsPassword] = useState(false);
  const [isConPassword, setIsConPassword] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isAll, setIsAll] = useState(false);
  
  useEffect(() => {
    if(userInfo)
      setPhone(userInfo.userPhone);
      setEmail(userInfo.userEmail);
      setPassword(password);
      setConPassword(conPassword);
  }, [userInfo]);

  const onChagePw = (e) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    setPassword(e.target.value);
    if (!pwRegex.test(password)) {
      setPasswordMsg(
        "영문자 대/소 + 특수문자 + 숫자를 조합하여 8~20자리 이상 입력하세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMsg("");
      setIsPassword(true);
    }
  };

  const onChageConPw = (e) => {
    setConPassword(e.target.value);
  };

  useEffect(() => {
    if (password === conPassword) {
      setConPasswordMsg("");
      setIsConPassword(true);
    } else {
      setConPasswordMsg("비밀번호가 일치하지 않습니다.");
      setIsConPassword(false);
    }
  }, [password, conPassword]);

  const onChageNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9ㄱ-ㅎ가-힣])[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,10}$/;
    const updatedNickname = e.target.value;
    setNickname(updatedNickname);
  
    if (!nicknameRegex.test(updatedNickname)) {
      setNicknameMsg(
        "영문자 대/소 + 숫자 + 한글 조합으로 2~10자의 닉네임을 입력하세요."
      );
      setIsNickname(false);
    } else {
      setNicknameMsg("");
      setIsNickname(true);
    }
  };

  const onChagePhone = (e) => {
    const telRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
    setPhone(e.target.value);
    if (!telRegex.test(phone)) {
      setPhoneMsg("'-'를 포함하여 전화번호 10-11자리를 입력하세요");
      setIsPhone(false);
    } else {
      setPhoneMsg("");
      setIsPhone(true);
    }
  };

  const onChageEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(e.target.value);
    if (!emailRegex.test(email)) {
      setEmailMsg("이메일 형식이 맞지 않습니다. 다시 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMsg("");
      setIsEmail(true);
    }
  };

  const updateInfo = async () => {
    try {
      const response = await AccountApi.updateUserInfo(
        userInfo.userId,
        password,
        nickname,
        userInfo.userName,
        phone,
        email
      );
      navigate("/mypage");
      console.log("회원정보 수정", response);
    } catch (e) {
      console.log(e);
    }
  };

  const updateKakao = async() => {
    try {
      const response = await AccountApi.updateUserInfo2(userInfo.userId, nickname);
      if(response){
        console.log("회원정보 수정", response);
        navigate("/mypage");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const imageUrl = userInfo.imgUrl || profile;
  const getUserId = userInfo.userEmail.split("@")[0];

  const onClickEnter = () => {
    navigate('/mypage');
  }
  return (
    <>
  <Header />
  <div id="main" className="mypage-container">
    {localStorage.getItem("loginValue") === "DEFAULT" ? (
      <>
        {userInfo ? (
          <>
            <tbody>
              <tr>
                <th>아이디</th>
                <td>{userInfo.userId}</td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input type="password" value={password} onChange={onChagePw} />
                  {passwordMsg && <p>{passwordMsg}</p>}
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <input type="password" value={conPassword} onChange={onChageConPw} />
                  {conPasswordMsg && <p>{conPasswordMsg}</p>}
                </td>
              </tr>
              <tr>
                <th>닉네임</th>
                <td>
                  <input type="text" value={nickname} onChange={onChageNickname} />
                  {nicknameMsg && <p>{nicknameMsg}</p>}
                </td>
              </tr>
              <tr>
                <th>이름</th>
                <td>{userInfo.userName}</td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>
                  <input type="text" value={phone} onChange={onChagePhone} />
                  {phoneMsg && <p>{phoneMsg}</p>}
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input type="text" value={email} onChange={onChageEmail} />
                  {emailMsg && <p>{emailMsg}</p>}
                </td>
              </tr>
            </tbody>
            <button onClick={updateInfo}>수정</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    ) : (
      <>
        <div className="mypage-profile-box">
          {userInfo ? (
            <>
              <div className="mypage-pic-box">
                <div className="mypage-pic-delete">
                  <label>
                    <img className="mypage-pic-del-btn" src={xmark} alt="Delete Profile" />
                  </label>
                </div>
                <div className="mypage-pic">
                  <div className="mypage-pic-div mypage-pic-div2">
                    <img src={imageUrl} alt="Profile" />
                  </div>
                </div>
                <div className="mypage-pic-change">
                  <label>
                    <p className="mypage-pic-change-btn">변경</p>
                  </label>
                </div>
              </div>
              <div className="mypage-box mypage-nickname-sns-box">
                <div className="mypage-empty-box"></div>
                <div className="mypage-nickname-box">
                  <div className="mypage-nickname-setbox">
                    <div className="mypage-title mypage-nickname-title">닉네임</div>
                    <div className="mypage-nickname-input">
                      <input type="text" name="nickname" maxLength={64} placeholder="입력해주세요" value={nickname} onChange={onChageNickname} />
                    </div>
                    <div className="mypage-nickname-checkbtn">
                    <button className="mypage-nickname-button" type="submit" onClick={updateKakao}>수정</button>
                    </div>
                  </div>
                  <div className="mypage-nickname-checkbox">
                    <p className="mypage-nickname-check"></p>
                  </div>
                </div>
                <div className="mypage-box mypage-sns-box">
                  <div className="mypage-title mypage-sns-title">ID</div>
                  <div className="mypage-sns-input">{getUserId}</div>
                  <div className="mypage-sns-bye">
                    <div className="mypage-pop-up">탈퇴</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
          </div>
          <div className="mypage-save-box">
          <button className="mypage-save-btn mypage-gradient-btn" onClick={onClickEnter}>확인</button>
          </div>
      </>
    )}
  </div>
</>
  );
};

export default MyProfileEditDetail;