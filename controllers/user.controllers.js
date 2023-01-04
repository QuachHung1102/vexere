const { User, sequelize } = require('../models/index');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');


const register = async (req, res) => {
    let data = req.body;
    try {
        // tạo avatardefault
        const avatarDefaultUrl = await gravatar.url(data.email, { protocol: 'http', s: '100' });
        // tạo ra một chuỗi ngẫu nhiên
        const salt = bcryptjs.genSaltSync(10);
        // Mã hóa salt + password
        const hashPassword = bcryptjs.hashSync(data.password, salt);
        data.password = hashPassword;
        data.avatar = avatarDefaultUrl;
        const newUser = await User.create(data);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        const isAuth = bcryptjs.compareSync(password, user.password);
        if (isAuth) {
            const token = jwt.sign({ email: user.email, type: user.type }, "quachhung389", { expiresIn: 60 * 60 });
            res.status(200).send({ message: `Đăng nhập thành công`, token });
        } else {
            res.status(500).send({ message: `Đăng nhập thất bại` });
        }
    } else {
        res.status(404).send(`Email không tồn tại!`);
    }
}

const uploadAvatar = async (req, res) => {
    // const file = req.file;
    const { file } = req;
    const urlImage = `http://localhost:3000/${file.path}`;
    const { user } = req;
    const userFound = await User.findOne({ where: { email: user.email } });
    userFound.avatar = urlImage;
    await userFound.save();
    res.send(urlImage);
}

const getAllTripUser = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `
                select users.name as "Tên", fromStation.name as "Điểm đi", toStation.name as "Điểm đến" from users 
                inner join tickets on users.id = tickets.users_id
                inner join trips on trips.id = tickets.trip_id
                inner join stations as fromStation on fromStation.id = trips.fromStation
                inner join stations as toStation on toStation.id = trips.toStation;
            `
        );
        res.send(results);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTripUser,
};
