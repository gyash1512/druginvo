import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const conn = mysql.createConnection({
  host: "dbdrug.mysql.database.azure.com",
  user: "dbadmin",
  password: "druginvo@123",
  database: "login",
  port: 3306,
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM manufacturer WHERE email = ? AND contact_number = ?";
  conn.query(query, [email, password], (err, results) => {
    if (err) {
      res.status(500).send("Server error");
    } else if (results.length > 0) {
      const user = results[0];
      res.json({ user, token: "dummy-token" });
    } else {
      res.status(401).send("Invalid email or password");
    }
  });
});

module.exports.handler = serverless(app);
