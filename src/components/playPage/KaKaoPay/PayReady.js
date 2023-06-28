import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";




const PayReady = () => {
    const title = localStorage.getItem("titleInfo")
    const priceInfo = localStorage.getItem("selPrice"); // 선택한 가격정보
    const seatInfo = localStorage.getItem("seatInfo");// 선택한 좌석 정보
    const timeInfo = localStorage.getItem("timeInfo");
    const dateInfo = localStorage.getItem("dateInfo");
// 카카오페이
    let [data, setData] = useState({
        next_redirect_pc_url: "",
        tid: "",
            // 가맹점 코드
            cid: "TC0ONETIME",
            // 가맹점 주문번호
            partner_order_id: "partner_order_id",
            // 가맹점 회원 id
            partner_user_id: "partner_user_id",
            // 상품 이름
            item_name: title,
            // 상품 수량
            quantity: 1,
            // 총 가격
            total_amount: priceInfo,
            // 상품 비과세
            tax_free_amount: 0,
            // 결제 성공 URL
            approval_url: "http://localhost:3000/payresult",
            // 결제 실패 URL
            fail_url: "http://localhost:3000/info",
            // 결제 취소 URL
            cancel_url: "http://localhost:3000/info"
    });
    
    useEffect(() => {
        axios({
            url: "https://kapi.kakao.com/v1/payment/ready",
            method: "POST",
            headers: {
                Authorization: `KakaoAK a4ff9779bc55331da1b4b556b7a8a942`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
                data: new URLSearchParams(data).toString(),
        })
        .then(response => {
        const {
            data: { next_redirect_pc_url, tid },
        } = response;
        // 결제 고유번호 tid를 저장
        window.localStorage.setItem("tid", tid);
        window.localStorage.setItem('url', next_redirect_pc_url);
        setData({ next_redirect_pc_url, tid });
        }).catch(error => {
        console.log(error);
        });
    }, []);

  const payUrl = window.localStorage.getItem('url');
    return (
        <>
            <h1> 결제 정보 </h1>
            <p>상품 정보 : {title}</p>
            <p>좌석 정보 : {seatInfo}</p>
            <p>가격 정보 : {priceInfo}</p>
            <p>날짜 정보 : {dateInfo}</p>
            <p>시간 정보 : {timeInfo}</p>
            <a href={payUrl}>결제하기</a>
        </>
    );
}
export default PayReady;