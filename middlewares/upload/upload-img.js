const multer = require('multer');
const mkdirp = require('mkdirp');

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/users/${type}`);
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/users/${type}`); // setup chỗ cần lưu
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // set tên cho khỏi bị ghi đè :)
            cb(null, uniqueSuffix + '-' + file.originalname); // đặt lại tên cho file
        }
    })
    const upload = multer({
        storage: storage, fileFilter: function (req, file, cb) {
            const extensionImageList = [".png", ".jpg"];
            const extension = file.originalname.slice(-4);
            const check = extensionImageList.includes(extension);
            if (check) {
                cb(null, true);
            } else {
                cb(new Error(`extension không hợp lệ`));
            }
        }, limits: { fieldSize: 20 }
    });
    return upload.single(type);
}

module.exports = {
    uploadImage,
};
