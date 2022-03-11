const express = require("express");
require("dotenv").config();
const usersRouter = require("./Controllers/UsersController");
const authRouter = require("./Controller/Auth");
const db = require("./Database/connection");
const cors = require("cors");
const helmet = require("helmet");
const cleaner = require("xss-clean");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 16 * 1000,
  max: 100,
});

//<----------- middlewares ---------------->
//use static files
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cleaner());
app.use(limiter());

//
app.get("/", (req, res) => {
  res.send(`<h2>Welcome to Cart-Me API</h3>`);
});
//#############################################################

//#############################################################

//<----------- routes ---------------->
app.use("/cartme/api/v1/users", usersRouter);

const port = process.env.PORT || 9233;

//#############################################################

//database check
const startDB = async () => {
  try {
    await db(
      process.env.MONGO_DB_CONNECTION_STRING ||
        "mongodb://localhost:27017/MongoCartMe"
    );
    //server connection
    app.listen(
      port,
      console.log(`Server is running on http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startDB();
