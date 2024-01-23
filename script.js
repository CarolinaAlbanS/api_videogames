require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const HTTPSTATUSCODE = require("./src/utils/httpStatusCode");
const { connectMongo } = require("./src/utils/db");
const librosRoutes = require("./src/api/routes/libros.routes");
const userRouter = require("./src/api/routes/user.routes");
const autorRoutes = require("./src/api/routes/autor.router");

connectMongo();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.set("secretKey", "nodeRestApi");
app.use(mongoSanitize());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(
  cors({
    origin: ["*", "http://localhost:30001", "http://localhost:4200"],
    credentials: true,
  })
);

// routes
app.use("/all-books", librosRoutes);
app.use("/all-books/users", userRouter);
app.use("/all-books/autor", autorRoutes);

// ruta de bienvenida

app.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to my server",
    app: "Books App",
  });
});

// Manejor de errores

app.use((request, response, next) => {
  let error = new Error();
  error.status = 404;
  error.message = HTTPSTATUSCODE[404];
  next(error);
});

app.use((error, request, response, next) => {
  return response
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");

// Escucha del puerto

app.listen(process.env.PORT, () => {
  console.log(`app running in port ${process.env.PORT}`);
});
