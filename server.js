const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app.js");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

// console.log(process.env.DATABASE);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("db connection success");
  });

app.listen(port, () => {
  console.log(`app runing on ${port}, waiting for database connection.....`);
});

app.listen;
