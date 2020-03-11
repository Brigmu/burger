const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, cb){
        const queryString = `SELECT * FROM ${table}`;

        connection.query(queryString, (err, results) => {
            if(err) throw err;

            cb(results);
        })
    },
    insertOne: function(table, cols, vals, cb){
        const columns = cols.toString();
        let queryString = `INSERT INTO ${table}(${columns}) values(?,?)`;

        connection.query(queryString, vals, (err, results) => {
            if(err) throw err;

            cb(results);
        })
    },
    updateOne: function(table, cols, condStatement, condVal, cb){
        let queryString = `UPDATE ${table} set ?? to ? WHERE ?? = ?`

        connection.query(queryString, [cols, true, condStatement, condVal], (err, results) => {
            if(err) throw err;

            cb(results);
        })
    }
};

module.exports = orm;