const express = require("express");
const expensesController = require("./../controllers/expensesController");

const router = express.Router();

router
  .route("/")
  .get(expensesController.getAllExpenses)
  .post(expensesController.createExpense);

router
  .route("/:id")
  .patch(expensesController.updateExpense)
  .delete(expensesController.deleteExpense);

module.exports = router;
