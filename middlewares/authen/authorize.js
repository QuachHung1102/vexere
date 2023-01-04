const authorize = (arrType) => {
    return async (req, res, next) => {
        const { user } = req;
        if (arrType.findIndex((ele) => ele === user.type) > -1) {
            next();
        } else {
            res.status(403).send(`Bạn không đủ quyền hạn!`)
        }
    }
}

module.exports = {
    authorize,
};
