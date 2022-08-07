const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log("Acess denied!");
  }
  console.log("Database connected...");
  insertData(connection)
});

function insertData(con){
  const SQL_QUERY = "INSERT INTO `person_list`(`Name`, `Roll`, `adress`, `Gender`) VALUES ('pagla','325','mymensingh','male')";

  con.query(SQL_QUERY,(err) => {
    if(err){
      console.log("data not inserted!")
    }
    console.log('data inserted successfuly!...')
  })
}