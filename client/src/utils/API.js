import axios from "axios";

export default {
    findUser: function (user) {
        return axios.post(`/api/user`, user)
    },
    createUser: function (user) {
        return axios.post(`/api/user/create`, user)
    }
}