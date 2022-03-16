const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../React_Project/public/')
    },
    filename: function (req, file, cb) {
        
        cb(null, file.originalname)
    }
})


const upload = multer({
    storage: storage,
    fileFilter: function (req, file, calback) {
        if (file.mimetype == "image/png" || file.mimetype == "iamge/jpg") {
            calback(null, true)
        } else {
            console.log("this format is not supported")
            calback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})


module.exports = upload