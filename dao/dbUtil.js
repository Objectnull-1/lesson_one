// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "sql123",
//     database: "school"
// });

// module.exports = connection;

function createConnection(){
    var connection = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "sql123",
            database: "school"
        });
        return connection;
    };
    module.exports.createConnection = createConnection;

