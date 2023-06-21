import React from "react";
import axios from "axios";
import styled from "styled-components";

const Style = styled.div`
    * {
        margin: 0 auto;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        width: 1024px;
        height: 768px;
        margin-top: 5rem;
        background-color: #232323;
        color: silver;
        align-items: center;
        justify-content: center;
    }
    .head-line {
        font-size: 3em;
        font-weight: bold;
    }
`;

class PayReady extends React.Component {
  // state의 초기값
  state = {
    // 응답에서 가져올 것들
    next_redirect_pc_url: "",
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      // 가맹점 코드
      cid: "TC0ONETIME",
      // 가맹점 주문번호
      partner_order_id: "partner_order_id",
      // 가맹점 회원 id
      partner_user_id: "partner_user_id",
      //  상품명
      item_name: "테스트 아이템",
      //  상품 수량
      quantity: 1,
      //  상품 총액
      total_amount: 125000,
      // 상품 비과세 금액
      tax_free_amount: 20000,
      // router에 지정한 PayResult의 경로로 수정
      // 결제 성공
      approval_url: "http://localhost:3000/payresult",
      // 결제 실패
      fail_url: "http://localhost:3000/payresult",
      // 결제 취소
      cancel_url: "http://localhost:3000/payresult",
    },
  };

  componentDidMount() {
    const { params } = this.state;
    axios({
      // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 준다.
      url: "/v1/payment/ready",
      // 결제 준비 API는 POST 메소드라고 한다.
      method: "POST",
      // 요청 정보 + 카카오 디벨로퍼스에서 나의 Admin Key 헤더에 담아서 요청
      headers: {
        Authorization: "KakaoAK 9eb9b92fd6c7162db3af0773c6c1e2ea",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      // 설정한 매개변수들
      params,
    }).then((response) => {
      const {
        // 응답에서 필요한 data만 뽑는다.
        data: { next_redirect_pc_url, tid },
      } = response;
      // 결제 url
      console.log(next_redirect_pc_url);
      // 결제 고유 번호
      console.log(tid);
      // localstorage에 tid 저장
	    window.localStorage.setItem("tid", tid);
      this.setState({ next_redirect_pc_url, tid });
    }).catch(error => {
      console.error(error);
    })
  }

  render() {
    // state를 조회할 때는 this.state로 조회한다
    const { next_redirect_pc_url } = this.state;

    return (
      <Style>
            <div className="container">
                <h2 className="head-line">카카오페이 결제하기</h2>
                <a href={next_redirect_pc_url}><img className="kakao" src="" alt="카카오페이" /></a>
            </div>
      </Style>
    );
  }
}
export default PayReady;