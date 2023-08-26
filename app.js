const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./utils/expense");
const Expense = require("./utils/expense");

const controller = require("./controllers/controller");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/expenses/add-expense", controller.addExpense);
app.get("/expenses/get-expenses", controller.getExpenses);
app.delete("/expenses/delete-expense/:id", controller.deleteExpense);
app.delete("/expenses/edit-expense/:id", controller.editExpense);

sequelize
  .sync()
  .then((response) => {
    // console.log(response);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(`error sync to database :${err}`);
  });
