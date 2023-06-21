import React from "react";
import axios from "axios";

class PaySelect extends React.Component {
    state = {
        next_redirect_pc_url: "",
        tid: "",
        params: {
          // 가맹점 코드
          cid: "TC0ONETIME",
          // 결제 고유번호를 받아옴
          tid: window.localStorage.getItem("tid")
        },
      };
      componentDidMount() {
        const { params } = this.state;
        axios({
          // 요청 url
          url: "/v1/payment/order",
          // 요청 method
          method: "GET",
          // 요청 key
          headers: {
            Authorization: "KakaoAK 9eb9b92fd6c7162db3af0773c6c1e2ea",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          params,
        }).then((response) => {
          let data = [
            response.data.cid,
            response.data.item_name,
            response.data.payment_method_type,
            response.data.quantity,
            response.data.amount.total
          ];
          console.log(data);
          console.log(response);
          // 결제 승인에 대한 응답 출력
          console.log(`조회 데이터 : 가맹점 고유 번호${response.data.cid}`);
          console.log(`조회 데이터 : 결제한 상품 이름${response.data.item_name}`);
          console.log(`조회 데이터 : 결제 방법${response.data.payment_method_type}`);
          console.log(`조회 데이터 : 결제 총 개수${response.data.quantity}`);
          console.log(`조회 데이터 : 결제 총 금액${response.data.amount.total}`);
        });
      }
      render() {
        return (
          <div>
            <h2>결제 내역 조회 페이지</h2>
          </div>
        );
      }
}

export default PaySelect;