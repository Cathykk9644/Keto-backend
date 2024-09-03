const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Importing Controller
const MealController = require("./controllers/mealController");
const AuthController = require("./controllers/authController");
const ProfileController = require("./controllers/profileController");

// Importing Router
const MealsRouter = require("./routes/mealRouter");
const AuthRouter = require("./routes/authRouter");
const ProfilesRouter = require("./routes/profileRouter");

const app = express();
require("dotenv").config();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// importing DB
const db = require("./db/models/index");
const { meal, user } = db;

// initializing Controllers
const mealController = new MealController(meal);
const authController = new AuthController(user);
const profileController = new ProfileController(user);

// initializing Routers
const mealRouter = new MealsRouter(mealController).routes();
const authRouter = new AuthRouter(authController).routes();
const profileRouter = new ProfilesRouter(profileController).routes();

// Use routes
app.use("/meals", mealRouter);
app.use("/auth", authRouter);
app.use("/profiles", profileRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the backend API of Simply-Keto!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
