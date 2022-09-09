const express = require('express')
const app = express()
const port = 3002 // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 연동으로 추가된 부분

var connection = mysql.createConnection({
  /// 새로 추가된 부분
  host: "localhost",
  user: "test", // mysql에 아이디를 넣는다.
  password: "test", // mysql의 비밀번호를 넣는다.
  database: "tableTest", //위에서 만든 데이터베이스의 이름을 넣는다.
});
connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("requested!")
})
  
app.get("/getList", (req, res) => {
connection.query("SELECT * FROM test", function (err, rows, fields) {
    if (err) {
      console.log("데이터 가져오기 실패");
    } else {
      console.log(rows[0]);
      res.send(rows);
    }
  });
});

app.get('/doJoin2', (req, res) => {
  const user_id = "aaaaaa"; 
  res.send('22222222222Hello World!')
  console.log("doJoin!")
  connection.query("INSERT INTO `test` (test) values(?)", [user_id]),
    function (err, rows, fields) { 
      if (err) 
        console.log("DB저장 실패");
      else
        console.log("DB저장 성공");
    }
})

app.get('/doJoin', (req, res) => {
  const user_id = "a"; 
  res.send('Hello World!')
  console.log("doJoin!")
  connection.query("INSERT INTO `test` (test) values(?)", [user_id]),
    function (err, rows, fields) { 
      if (err) 
        console.log("DB저장 실패");
      else
        console.log("DB저장 성공");
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})