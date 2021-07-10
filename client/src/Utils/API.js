import axios from "axios";

const API = {

    postNewTransaction: (form, symbol) => {
        const coin = axios.get(`/api/coins/${symbol}`);
        console.log("Coin log!!!", coin);
        if (coin === 404) {
            return axios.post("/api/coins/", form)
        } else if (coin === 200) {
            return axios.put("/api/coins/", form)
        }

    // postNewTransaction: form => {

    // }
}
}

export default API;