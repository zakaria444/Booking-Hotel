const router = require("express").Router();

const { userAuth, checkRole } = require("../controllers/Auth");

const { creatType, getType , getTypes , deleteType , updateType } = require("../controllers/TypeController");

router.post("/add" , creatType);

router.get("/:Id",  getType);

router.get("/type/list", getTypes);

router.delete("/:Id",  deleteType);

router.patch("/:Id",  updateType);

module.exports = router;