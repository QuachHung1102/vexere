const express = require('express');
const path = require('path');
const Fingerprint  = require('express-fingerprint');
const { sequelize } = require('./models/index');
const rootRouter = require("./routers/index.router");
const app = express();
const port = 3000;

// cai dat su dung kieu json
app.use(express.json());
// sử dụng fingerprint
app.use(Fingerprint());

// set static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

app.use("/api/v1", rootRouter);

// listen
app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});