import axios from "axios"

const url = axios.create({
    baseURL: "https://api-trainersquad.onrender.com"
})

export default url