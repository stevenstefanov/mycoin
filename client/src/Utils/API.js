import axios from "axios";

const API = {
    postNewTransaction: form => {
        return axios.post("/api/coins/", form)
    }
}

export default API;