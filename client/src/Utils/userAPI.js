import axios from "axios";

export default {
    userSearch: function () {
        return axios.get('/api/users')
    },
    userPost: function(data) {
        return axios.post('/api/users/', data)
    },
    getNews: function(search) {
        return axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=355951895a634ee4a816c7dc90a06bdc`)
    }
}

