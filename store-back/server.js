const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const itemRecordRoute = require("./Api/itemRecord");
const authRoute = require("./Api/authroute");
const registerUser = require("./Api/registeruser");
const approveRecord = require("./Api/adminRecord");
const approvedRecord = require("./Api/investorRecord");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use("/api/itemRecord", itemRecordRoute);
app.use("/api/auth", authRoute);
app.use("/api/register", registerUser);
app.use("/api/approveRecord", approveRecord);
app.use("/api/approvedRecord", approvedRecord);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("the database connection is successful");
  })
  .catch((err) => console.log("error occurs ", err));

app.listen(process.env.PORT, () => {
  console.log("the server is listening on port ", process.env.PORT);
});
