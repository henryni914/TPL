const pool = require("../db/dbconfig");

module.exports = {
    test: function (req, res) {
        pool.query(`SELECT * FROM users`)
            .then(data => res.json(data))
            .catch(e => console.error(e.stack))
    }
};