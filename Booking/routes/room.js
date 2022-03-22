const router = require("express").Router();

// const {

//     userAuth,

//     checkRole
// } = require("../controllers/Auth");
const {
    creatRoom,
    searchRoom,
    getRoom,
    getRoomsid,
    updateRoom,
    deletRoom,
    getRooms
} =  require("../controllers/RoomController");


const upload = require('../middlewares/upload')

router.post("/add", upload.array('images',8), creatRoom);






router.post("/search", searchRoom);
router.get("/getroom/:hotelId", getRoomsid);

router.get("/", getRooms);
router.get("/:hotelId",  getRoom);



router.get("/:roomId",  getRoom); 
router.patch("/:roomId",  upload.array('images',8), updateRoom);
router.delete("/:roomId", deletRoom);












module.exports = router;