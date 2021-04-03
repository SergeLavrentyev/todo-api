const express = require("express");
const { success, error } = require("consola");
const { connect } = require("mongoose");
const { DB, PORT } = require("./config");

const app = express();

//  Middlwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", require("./routes/todos"));

//  Init server
app.listen(PORT, () =>
  success({
    message: `Server is up and running on http://localhost:${PORT}`,
    badge: true,
  })
);

// Connect DataBase
connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => success({ message: "DB is connected", badge: true }))
  .catch((err) => error({ message: `${err}`, badge: true }));
