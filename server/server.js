//ENTRY point for my application

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use("/api/locations", require("./routes/api/locations"));
app.use("/api/inventory", require("./routes/api/inventory"));

app.listen(5000, () => {
  console.log("listening");
});
