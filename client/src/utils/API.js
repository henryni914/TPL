import axios from "axios";

export default {

    // test: function () {
    //     return axios.get(`/api/user`)
    // },
    findUser: function (user) {
        console.log(user)
        return axios.get(`/api/user`, user)
    },
    createUser: function (user) {
        return axios.post(`/api/user/create`, user)
    }
}