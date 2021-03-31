const express = require("express");
const { success, error } = require("consola");
const { connect } = require("mongoose");
const { DB, PORT } = require("./config");

const app = express();

app.listen(PORT, () =>
  success({
    message: `Server is up and running on http://localhost:${PORT}`,
    badge: true,
  })
);

connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => success({ message: "DB is connected", badge: true }))
  .catch((err) => error({ message: `${err}`, badge: true }));
