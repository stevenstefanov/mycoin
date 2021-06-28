import axios from "axios";

export default {
    userSearch: function () {
        return axios.get('/api/user')
    }
}
