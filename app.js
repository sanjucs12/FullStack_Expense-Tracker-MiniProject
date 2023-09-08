const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./BACKEND/utils/database");
const expenseRoutes = require("./BACKEND/routes/expense-router");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(expenseRoutes);

sequelize
  .sync()
  .then((response) => {
    // console.log(response);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(`error sync to database :${err}`);
  });
