import axios from "axios";

export default {
    userSearch: function () {
        return axios.get('/api/users')
    },
    userPost: function(data) {
        return axios.post('/api/users/', data)
    },
    getNews: function(search) {
        return axios.get(`http://api.mediastack.com/v1/news?access_key=b586f17605bd4e43196259000bb30837&keywords=${search}&countries=us,gb
        `)
    }
}

