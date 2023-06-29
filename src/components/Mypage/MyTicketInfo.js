import React from "react";
import { useState } from "react";

const MyTicketInfo = () => {
    const userId = localStorage.getItem('userId');
    const [paymentList, setPaymentList] = useState([]);
    const buyTicketlist = () => {
        try{
            
        } catch (e) {
            console.log(e);
        }
    }
    // 구매한 티켓 내역 확인

    
    return (
        <>
        <button><h3>{userId}님의 구매내역</h3></button>
        </>
    );
}

export default MyTicketInfo;