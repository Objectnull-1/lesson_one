var studentService = require("../service/studentservice")
var url = require("url");
var path = new Map();
function getData(request, response) {
    studentService.queryAllStudent(function (result) {
        var resArr = [];
        for (var i = 0; i < result.length; i ++) {
            resArr.push(result[i].name);
        }
        // console.log(resArr);
        // console.log(response);
        // response.writeHead(200)
        // response.write("年后")
        // response.end();
    })
    // response.write("hello");
    // response.end();
    // throw new Error("一个来自程序运行中的错误")
}

path.set("/getData", getData);

function login(request, response) {
    var params = url.parse(request.url, true).query;
    studentService.queryStudentByStuNum(params.stuNum, function (result) {
        console.log(result);
        var res = "";
        if (result == null || result.length == 0) {
            res = "Fail";
        } else {
            if (result.pwd == params.password) {
                res = "OK"
            } else {
                res = "Fail";
            }
    
        }
        
    })
}

path.set("/login", login);

module.exports.path = path;