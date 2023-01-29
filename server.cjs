const express = require("express");

const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 6464;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const pizzalist = [];

app.get("/pizza", (req, res) => {
  fs.readFile(
    path.join(__dirname, "./db/pizzaData.json"),
    "utf8",
    (err, data) => {
      if (err) throw err;

      console.log(data);

      res.json(JSON.parse(data));
    }
  );
});

app.get("/pizza/:time/:topping", function (req, res) {
  const time = req.params.time;
  const topping = req.params.topping;
  const obj = { time: time, topping: topping };
  pizzalist.push(obj);
  res.json(pizzalist);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/pizza.html"));
});

app.listen(PORT, function () {
  console.log("Successfully listening on port " + PORT);
});

console.log("server reset");
