const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.put("/user/update", (req, res) => {
  return res.json(req.body);
});

app.listen(5000, () => {
  console.log("Server is running...");
});
