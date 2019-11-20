//ENTRY point for my application

const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const app = express();

app.get("/", function(req, res) {
  res.send("would you like to access /locations or /inventory ?");
});

app.use(cors());

app.use(logger);
app.use(express.json());

app.use("/locations", require("./routes/api/locations"));
app.use("/inventory", require("./routes/api/inventory"));

app.listen(5000, () => {
  console.log("listening");
});
