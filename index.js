const express = require("express");
const cors = require("cors");
const { success, error } = require("consola");
const { connect } = require("mongoose");
const { DB, PORT } = require("./config");

const app = express();

//  Middlwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/", require("./routes/todos"));

//  Init server
app.listen(PORT, () =>
  success({
    message: `Server is up and running on http://localhost:${PORT}`,
    badge: true,
  })
);

// Connect DataBase
connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
})
  .then(() => success({ message: "DB is connected", badge: true }))
  .catch((err) => error({ message: `${err}`, badge: true }));
