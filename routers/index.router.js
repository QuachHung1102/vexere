const express = require('express');
const stationRouter = require("./station.router");
const userRouter = require('./user.router');
const tripRouter = require('./trip.router');
const fingerprintRouter = require('./testFingerprint');

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/test-finger-print", fingerprintRouter);

module.exports = rootRouter;
