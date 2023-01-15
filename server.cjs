const express = require("express");

const path = require("path");
const fs = require("fs");

const PORT = 6464;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const todolist = [];

app.get("/todo", (req, res) => {
  fs.readFile(
    path.join(__dirname, "./db/todoData.json"),
    "utf8",
    (err, data) => {
      if (err) throw err;

      console.log(data);

      res.json(JSON.parse(data));
    }
  );
});

app.get("/todo/:name/:description", function (req, res) {
  const name = req.params.name;
  const description = req.params.description;
  const obj = { name: name, description: description };
  todolist.push(obj);
  res.json(todolist);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/tdl.html"));
});

app.listen(PORT, function () {
  console.log("Successfully listening on port " + PORT);
});

console.log("server reset");
