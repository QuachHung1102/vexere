const express = require('express');
const { Station } = require('../models/index');
const {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation,
} = require("../controllers/station.controllers");

const {
    checkExist,
} = require('../middlewares/validations/checkExist');
const { authenticate } = require('../middlewares/authen/authenticate');
const { authorize } = require('../middlewares/authen/authorize');
const stationRouter = express.Router();

stationRouter.post("/", authenticate, authorize(["admin", "superAdmin"]), createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", authenticate, authorize(["admin", "superAdmin"]), checkExist(Station), updateStation);
stationRouter.delete("/:id", authenticate, authorize(["admin", "superAdmin"]), checkExist(Station), deleteStation);

module.exports = stationRouter;
