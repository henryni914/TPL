import axios from "axios";

export default {
    findUser: function (user) {
        return axios.post(`/api/user`, user)
    },
    createUser: function (user) {
        return axios.post(`/api/user/create`, user)
    },
    createTrade: function (trade) {
        return axios.post(`/api/trade`, trade)
    },
    getUserTrades: function (id) {
        return axios.get(`/api/trade/user/` + id)
    }
}