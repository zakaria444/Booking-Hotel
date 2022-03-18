const router = require("express").Router();

// const {

//     userAuth,

//     checkRole
// } = require("../controllers/Auth");
const {
    creatRoom,
    searchRoom,
    getRoom,
    updateRoom,
    deletRoom,
    getRooms
} =  require("../controllers/RoomController");


const upload = require('../middlewares/upload')

router.post("/add", upload.array('images',8), creatRoom);






router.post("/search", searchRoom);

router.get("/", getRooms);
router.get("/:hotelId",  getRoom);
router.patch("/:hotelId", updateRoom);
router.delete("/:hotelId",  deletRoom);
router.get("/", getRooms);
router.get("/:roomId",  getRoom); 
router.patch("/:roomId",  updateRoom);
router.delete("/:roomId", deletRoom);



router.get("/:roomId",  getRoom);
router.patch("/:roomId",  updateRoom);
router.delete("/:roomId", deletRoom);




router.get("/:hotelId",  getRoom);
router.patch("/:hotelId",  updateRoom);
router.delete("/:hotelId",  deletRoom);




module.exports = router;