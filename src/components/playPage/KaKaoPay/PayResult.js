import React from "react";
import axios from "axios";

class PayResult extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.state;
    const {
      location: { search },
    } = props;

    // url에 붙어서 온 pg_token을 결제 API에 줄 params에 할당
    params.pg_token = search.split("=")[1];
  }
  
  state = {
    params: {
      // 가맹점 코드
      cid: "TC0ONETIME",
      // localstorage에서 tid값을 읽어온다.
      // 결제 고유 번호를 받아옴
      tid: window.localStorage.getItem("tid"),
      // 가맹점 주문 번호
      partner_order_id: "partner_order_id",
      // 가맹점 회원 id
      partner_user_id: "partner_user_id",
      // 결제승인 요청을 인정하는 토큰
      pg_token: "",
    },
  };
  
  componentDidMount() {
    const { params } = this.state;
    
    axios({
      // 요청 url
      url: "/v1/payment/approve",
      // 요청 method
      method: "POST",
      // 요청 key
      headers: {
        Authorization: "KakaoAK 9eb9b92fd6c7162db3af0773c6c1e2ea",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    }).then((response) => {
      // 결제 승인에 대한 응답 출력
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <h2>Result page</h2>
        <h1>결제 성공</h1>
      </div>
    );
  }
}
export default PayResult;