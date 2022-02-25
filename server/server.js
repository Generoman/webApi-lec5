import express from "express";

const app = express();

app.get("/login", (req, res) => {
  res.json({
    username: "pompadour",
  });
  console.log("GET /login ");
});

app.post("/login", (req, res) => {
  res.sendStatus(401);
  console.log("POST /login ");
});

app.use(express.static("public"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on http://localhost:${server.address().port}`);
});
