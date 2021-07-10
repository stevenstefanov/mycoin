import axios from "axios";

const API = {
    postNewTransaction: form => {
        return axios.post("/coin/submit", form)
    }
}

export default API;