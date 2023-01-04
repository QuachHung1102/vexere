const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const token = req.header("token");
    try {
        const decode = jwt.verify(token, "quachhung389");
        if (decode) {
            req.user = decode;
            next();
        } else {
            res.status(401).send(`Bạn chưa đăng nhập!`);
        }
    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = {
    authenticate,
};
