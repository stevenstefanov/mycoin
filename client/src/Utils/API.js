import axios from "axios";

const API = {

    postNewTransaction: (form, symbol) => {
        return axios.post(`/api/coins/${symbol}`, form);
    }
}

export default API;