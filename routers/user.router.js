const express = require('express');
const { User } = require('../models/index');
const {
    register,
    login,
    uploadAvatar,
    getAllTripUser,
} = require("../controllers/user.controllers");
const {
    checkExist,
} = require('../middlewares/validations/checkExist');
const { authenticate } = require('../middlewares/authen/authenticate');
const { uploadImage } = require('../middlewares/upload/upload-img');

const userRouter = express.Router();



userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/upload-avatar", authenticate, uploadImage(`avatar`), uploadAvatar);
userRouter.get("/all-trip", getAllTripUser);


module.exports = userRouter;
