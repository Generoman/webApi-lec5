import express from "express";
import path from "path";

const app = express();

app.get("/api/login", (req, res) => {
  res.json({
    username: "pompadour",
  });
  console.log("GET /login ");
});

app.post("/api/login", (req, res) => {
  res.sendStatus(401);
  console.log("POST /login ");
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on http://localhost:${server.address().port}`);
});
