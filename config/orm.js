// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, burger, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false)";

        console.log(queryString);

        connection.query(queryString, [table, burger], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (table, id, cb) {
        var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        console.log(queryString);
        connection.query(queryString, [table, id], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
