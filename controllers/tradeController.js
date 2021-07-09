const pool = require("../db/dbconfig");

module.exports = {
    createTrade: function (req, res) {
        const { ticker, type, quantity, price, total, user_id, date } = req.body;
        const values = [ticker, type, quantity, price, total, user_id, date];
        pool.query(`INSERT INTO trades(ticker,type,quantity,price,cost,user_id, open_date) 
        VALUES($1,$2,$3,$4,$5,$6,$7)`, values,
            (q_err, q_res) => {
                if (q_err) return res.json(q_err)
                res.json(q_res.rows[0]);
            }
        )
    }
};