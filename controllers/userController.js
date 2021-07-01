const pool = require("../db/dbconfig");
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    // test: function (req, res) {
    //     pool.query(`SELECT * FROM users`, (q_err, q_res) => {
    //         res.json(q_res.rows)
    //     })
    // },
    createUser: function (req, res) {
        const hash = bcrypt.hashSync(req.body.password, salt);
        const values = [req.body.username, req.body.email, hash];
        pool.query(`INSERT INTO users(username, email, password) 
        VALUES($1,$2,$3)
        RETURNING uid, username, email, date_created`, values,
            (q_err, q_res) => {
                if (q_err) return res.json(q_err)
                res.json(q_res.rows[0]);
            }
        )
    },
    findUser: function (req, res) {
        const values = [req.body.username];
        pool.query(`SELECT * FROM users WHERE username = $1`, values,
            (q_err, q_res) => {
                if (q_err) return res.json(q_err)
                if (q_res.rows.length === 0) {
                    return res.json(false);
                } else {
                    let match = bcrypt.compareSync(req.body.password, q_res.rows[0].password);
                    if (match) {
                        return res.json(q_res.rows[0]);
                    }
                    return res.json('invalid password');
                }
            }
        )
    }
}