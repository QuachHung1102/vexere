const checkExist = (model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        const station = await model.findOne({ where: { id } });
        if (station) {
            next();
        } else {
            res.status(404).send(`Not Found id: ${id}`);
        }
    }
}
// Trả về 1 hàm cho đỡ phải code

module.exports = {
    checkExist,
};
