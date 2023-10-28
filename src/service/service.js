import axios from "axios"

const url = axios.create ({
    //baseURL: "https://api-trainersquad.onrender.com"
    baseURL: "http://localhost:5000/api"
})

 export default url