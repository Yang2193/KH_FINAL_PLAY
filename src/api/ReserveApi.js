import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const ReserveApi = {
    addReserve : async() =>{
        const info = {

        }
        return await axios.post(KH_DOMAIN + ``,info)
    }

}



export default ReserveApi;