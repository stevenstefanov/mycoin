import axios from "axios";

const API = {
    postNewTransaction: (form, symbol) => {
        return axios.post(`/api/coins/${symbol}`, form);
},
    postNewSale: (form, symbol) => {
    return axios.put(`/api/coins/${symbol}`, form);
}
}

export default API;