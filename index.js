const path = require("node:path");

const express = require("express");
const app = express();
const messagesRouter = require("./routes/messagesRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server listening on port ${PORT}`);
});
