const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../dist")));

const port = process.env.PORT || 8081;
const keywords = {
  keywords: [
    "amigo",
    "amor",
    "amar",
    "año",
    "camino",
    "caminar",
    "viajar",
    "viaje",
  ],
};

app.get("/api/keywords", (req, res) => {
  res.json(keywords);
});

app.listen(port, () => {
  console.log(`${port} 뿅! 서버구동!`);
});
