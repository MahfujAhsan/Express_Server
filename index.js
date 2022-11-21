const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const usersRoutes = require("./routes/v1/users.route.js");
const viewCount = require("./middleware/viewCount");


app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/v1/users", usersRoutes)


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.send("NO ROUTE FOUND")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


