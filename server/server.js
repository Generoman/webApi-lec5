import express from "express";

const app = express();
console.log("Running on http://localhost:3000");

app.get("/login", (req, res) => {
  res.json({
    username: "pompadour",
  });
});

app.post("/login", (req, res) => {
  res.sendStatus(401);
});

app.listen(3000);
