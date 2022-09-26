const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "must have amount"],
  },
  expenseTitle: {
    type: String,
    required: [true, "must have title"],
  },
  description: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

// expenseSchema.pre("save", function preSave(next) {
//   var something = this;
//   something.updatedAt(Date.now());
//   next();
// });

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
