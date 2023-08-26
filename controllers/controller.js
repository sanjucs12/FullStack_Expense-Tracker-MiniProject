const Expense = require("../utils/expense");

exports.addExpense = async (req, res, next) => {
  try {
    console.log(req.body);
    const description = req.body.description;
    const amount = req.body.amount;

    const expense = await Expense.create({
      description: description,
      amount: amount,
    });
    res.status(200).send({ newExpense: expense });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    console.log(`data fetched from database`);
    res.status(200).send(expenses);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }
};

exports.deleteExpense = async (req, res, next) => {
  //   console.log(req.params);
  try {
    const expenseId = req.params.id;
    await Expense.destroy({ where: { id: expenseId } });
    res.status(200).send({ message: "expense entry deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "something went wrong" });
  }
};

exports.editExpense = async (req, res, next) => {
  //   console.log(req.params);
  try {
    const expenseId = req.params.id;
    await Expense.destroy({ where: { id: expenseId } });
    res.status(200).send({ message: "expense entry deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "something went wrong" });
  }
};
