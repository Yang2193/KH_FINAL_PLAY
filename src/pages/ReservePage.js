import React from "react";
import Calendar from "react-calendar";
import { useState,useEffect } from "react";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../utils/GlobalStyle";
import moment from "moment/moment";
const ReserveStyle = styled.div`
    margin-top: 2%;
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    left: 25%;
    .seat{
        width: 100%;
        select{
            width: 10%;
            font-size: 1em;
            margin-left: 10%;

        }
    }
    .time{
        width: 100%;
        height: 20%;
        display: flex;
        p{
            width: 20%;
            height: 40%;
            border: 1px solid;
            border-radius: 10px;
            margin-top:10%;
            margin-left: 2%;
            background-color: white;
            font-size: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        /* 선택된 버튼에 대한 스타일 변경 */
    
        }
        .selected{
            background-color: #990a2c;
            color: #fff;
        }
    }
    .cal{
        width: 100%;
        height:50%;

    }
    .btn{
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            width: 30%;
            height: 20%;
            border: none;
            border-radius: 15px;
            cursor: pointer;
        }
    }
    .react-calendar {
            width: 100%;
            height: 100%;
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
                height: 55px;
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
    const timeInfo = localStorage.getItem("time") // 요일별 시간 정보 가져오기
    // 요일을 숫자로 반환
    function changeDay(day) {
        const dayOfWeek = {
          월요일: 1,
          화요일: 2,
          수요일: 3,
          목요일: 4,
          금요일: 5,
          토요일: 6,
          일요일: 0
        };
        
        return dayOfWeek[day];
    }
    // 날짜 선택시 해당 날짜에 맞는 요일에 연극 시간을 불러옴
    function getTimeOptions(timeInfo, selectedDate) {
        const dayOptions = timeInfo.split(', '); // 문자열 정보를 시간과 요일별로 나누고
        const date = new Date(selectedDate);
        const selectedDay = date.getDay();// 선택한 날짜의 요일을 숫자로 출력
        let timeOptions = null;
        dayOptions.forEach(dayOption => { // for문 돌리며 요일별 날짜 정보들 나누고 
            const [dayRange, timeRange] = dayOption.split('(');
            const days = dayRange.split(' ~ ');
            const startDay = changeDay(days[0]); // 요일 문자열을 숫자로 변경 후 대입
            const endDay = changeDay(days.length > 1 ? days[1] : days[0]);
            const times = timeRange.replace(')', '').split(',');
            if (
                (selectedDay >= startDay && selectedDay <= endDay) || // 토요일부터 일요일까지 
                (startDay > endDay && (selectedDay >= startDay || selectedDay <= endDay)) // 평일~평일
              ) {
                timeOptions = times;
              }
            });
        return timeOptions ;

      }
      
      
    const playId = localStorage.getItem("playId"); // 연극 아이디
    const userId = localStorage.getItem("userId"); // 유저 아이디
    const [seat, setSeat] = useState(1); // 선택한 좌석 정보
    const [value, setValue] = useState();// 선택한 공연 날짜 정보
    const[selTime,setSelTime] = useState(""); // 선택한 공연 시간 정보
    const [timeOptions, setTimeOptions] = useState([]);

    function selectSeat(e) { 
        setSeat(e.target.value);
    }
    function setOption(start, end) { // 포문 돌려서 좌석 옵션 생성
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
    function dateData(date) {
        setValue(date);
        setTimeOptions(getTimeOptions(timeInfo, date));
      }
    function timeData(time) {
        setSelTime(time);
      }
    
    useEffect(() => {
        // 요일이 변경되면 선택된 시간 초기화
        setSelTime("");
    }, [value]);

    const allData =() =>{
        const date = moment(value).format("YYYY-MM-DD")
        console.log(seat,date,selTime,userId,playId);
    }
    return(
        <>
        <Header children={"예매하기"}/>
        <ReserveStyle>
            <div className="cal">
                <Calendar
                onChange={dateData} 
                value={value}
                calendarType="US"
                minDate={new(Date)}
                />  
            </div>
            <div className="time">
                <h3>회차 선택</h3>
                {timeOptions && timeOptions.map((time, index) => (
                    <p 
                    className={selTime === time ? "selected" : ""}
                    onClick={()=>timeData(time)} 
                    key={index}
                    >
                        {time.trim()}
                    </p>
                    ))}
            </div>
            <div className="seat">
                <h3>좌석 선택</h3>
                <select onChange={selectSeat} value={seat}>
                    {setOption(1,10)}
                </select>            
            </div>
            <div className="btn">
                <Button onClick={()=>allData()}> 선택 완료</Button>
            </div>
        </ReserveStyle>
        <Footer/>
    </>
    )
}

export default ReservePage;