const express = require("express");
const cors = require("cors");
const connectDB = require("./db/mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swaggerDocument");

const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
};

const app = express();
connectDB();
app.use(cors(corsOptions));
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
