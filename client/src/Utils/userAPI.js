import axios from "axios";

export default {
    userSearch: function () {
        return axios.get('/api/user')
    },
    userPost: function() {
        return axios.post('/api/users')
    }
}
