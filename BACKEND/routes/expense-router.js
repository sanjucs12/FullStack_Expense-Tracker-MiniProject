const express = require("express");
const controller = require("../controllers/expense-controller");
const router = express.Router();

router.post("/expenses/add-expense", controller.addExpense);
router.get("/expenses/get-expenses", controller.getExpenses);
router.delete("/expenses/delete-expense/:id", controller.deleteExpense);
router.delete("/expenses/edit-expense/:id", controller.editExpense);

module.exports = router;
