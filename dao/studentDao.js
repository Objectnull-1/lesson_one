var dbUtil = require("./dbUtil")

function queryAllStudent(success) {
    var querySql = "select * from student;";
    var connection = dbUtil.createConnection();
    connection.connect();
    connection.query(querySql, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}


function queryStudentByClassAndAge(classNum, age) {
    var connection = dbUtil.createConnection();

    var querySql = "select * from student where class = ? and age = ?;";
    var queryParams = [classNmae, age];
    connection.connect();
    connection.query(querySql, queryParams, function (error, result) {
        if (error == null) {
            console.log(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryStudentByStuNum(stuNum, success) {
    var connection = dbUtil.createConnection();

    var querySql = "select * from student where stu_num = ?;";
    connection.connect();
    connection.query(querySql, stuNum, function (error, result) {
        if (error == null) {
            console.log(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}
module.exports = {
    "queryAllStudent": queryAllStudent,
    "queryStudentByClassAndAge": queryStudentByClassAndAge,
    "queryStudentByStuNum": queryStudentByStuNum
};