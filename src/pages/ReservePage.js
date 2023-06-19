import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';

const ReserveStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    .cal{
        width: 20%;
        height:35%;
        /* border: 1px solid; */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3% 0;
    }
    .time{
        width: 50%;
        height: 40%;
        p{
            border: 1px solid;
            width: 15%;
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1em;
            padding: 1%;
            border-radius : 10px;
        }
    }
    .react-calendar {
            width: 100%;
            height: 95%;
            max-height: 100%;
            max-width: 100%;
            background-color: #fff;
            color: #222;
            border-radius: 8px;
            /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); */
            line-height: 1.125em;
            }
            .react-calendar__navigation button {
            color: #990A2C;
            
            min-width: 44px;
            background: none;
            font-size: 1.5em;
            margin-top: 8px;
            font-weight:bold;
            }
            .react-calendar__navigation button:enabled:hover,
            .react-calendar__navigation button:enabled:focus {
            background-color: #eee;
            }
            .react-calendar__navigation button[disabled] {
            background-color: #eee;
            }
            abbr[title] {
            text-decoration: none;
            }
            .react-calendar__tile{
                background-color: #fff;
                font-size: 1em;
            }
            .react-calendar__tile:enabled:hover,
            .react-calendar__tile:enabled:focus {
            background: #990A2C;
            color: #fff;
            border-radius: 50%;
            }
            
            .react-calendar__tile--now {
            background: white;
            border-radius: 6px;
            color: black;
            }
            .react-calendar__tile--active {
            background: #990A2C;
            border-radius: 50%;
            font-weight: bold;
            color: white;
            }
            .react-calendar__tile--active:enabled:hover,
            .react-calendar__tile--active:enabled:focus {
            background: #990A2C;
            color: white;
        }
`

const ReservePage = () =>{
    const [seat, setSeat] = useState(1);
    const [value, setValue] = useState(new Date());// 날짜 저장
    function selectSeat(e) { 
        setSeat(e.target.value);
      }
    function setOption(start, end) { // 포문 돌려서 옵션 생성
        const options = [];
        for (let i = start; i <= end; i++) {
          options.push(
            <option key={i} value={i}>
              {i}번
            </option>
          );
        }
        return options;
    }
    
    return(
        <ReserveStyle>
            <div className="cal">
                <Calendar
                onChange={setValue} 
                value={value}
                calendarType="US"
                minDate={new(Date)}
                />  
            </div>
            <div className="time">
                <h3>회차 선택</h3>
                <p>20시 00분</p>
            </div>
            <div className="seat">
                <h3>좌석 선택</h3>
                <select onChange={selectSeat} value={seat}>
                    {setOption(1,10)}
                </select>            
            </div>
            <button> 다음 </button>
        </ReserveStyle>
    )
}

export default ReservePage;