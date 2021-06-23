const pool = require("../db/dbconfig");

module.exports = {
    test: function(req, res) {
        pool.query(`SELECT * FROM users`, (q_err, q_res) => {
            res.json(q_res.rows)
        })
    },
    test2: function (req, res) {
        console.log('test')
    }
}