const pool = require("../db/dbconfig");

module.exports = {
    test: function (req, res) {
        pool.query(`SELECT * FROM users`, (q_err, q_res) => {
            res.json(q_res.rows)
        })
    },
    createUser: function (req, res) {
        const values = [req.body.username, req.body.email, req.body.password];
        pool.query(`INSERT INTO users(username, email, password) VALUES($1,$2,$3)`, values,
            (q_err, q_res) => {
                if (q_err) return res.json(q_err)
                res.json(q_res.rows)
            }
        )
    },
    findUser: function (req, res) {
        const values = [req.body.username, req.body.email];
        pool.query(`SELECT * FROM user WHERE username = $1 OR email = $2]`, values,
            (q_err, q_res) => {
                if (q_err) return res.json(q_err)
                res.json(q_res.rows)
            }
        )
    }
}