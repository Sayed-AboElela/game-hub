import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"26bcfc4b875e44bfb0ff68b3ba2f1bb8"
    }
})