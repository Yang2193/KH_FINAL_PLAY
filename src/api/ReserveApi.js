import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const ReserveApi = {
    //예매 추가
    addReserve : async(userId,playId,seeDate,seatPosition) =>{
        const info = {
            userId: userId,
            playId: playId,
            seeDate: seeDate,
            seatPosition: seatPosition
        }
        return await axios.post(KH_DOMAIN + `/play/addReserve`,info)
    },
    //예매 조회 dto로 조회 (예매 테이블에 모든 컬럼 + 회원아이디와 연극 아이디만 조회)
    selectResDto : async(userId)=>{
        return await axios.get(KH_DOMAIN + `/play/resList?id=${userId}`)
    },
    //예매조회 entity로 조회 (예매 테이블에서 모든 컬럼 + 연극아이디와 회원아이디만나오는게 아니라 연극정보 테이블 값 전부와 회원정보 테이블값 전부가 다담겨서 나옴)
    selectResEntity : async(userId)=>{
        return await axios.get(KH_DOMAIN + `/play/reserveList?id=${userId}`)
    },
    selectSeat : async(theaterId)=>{
        return await axios.get(KH_DOMAIN+`/play/selSeat?id=${theaterId}`)
    }
}



export default ReserveApi;