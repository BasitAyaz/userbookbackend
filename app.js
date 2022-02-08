const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRoute = require("./route/book");
const userRoute = require("./route/user");

mongoose.connect(
  "mongodb+srv://user2:user123456@cluster0.3ytfn.mongodb.net/pro2?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected Successfully");
  }
);

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Backend App Start");
});

app.listen(process.env.port || 5000, () => {
  console.log("Server is listening on 5000");
});
