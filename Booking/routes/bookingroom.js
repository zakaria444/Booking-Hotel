const router = require("express").Router();


const {
  BookingRoomClient,
  
    bookingroomproprietair,
    getbookingroom,
    getbookingroomById
  } = require("../controllers/BookingroomController");
const BookingRoom = require("../models/BookingRoom");

  router.post('/addbookingroom', async(req,res)=>{
    await  bookingroomproprietair(req.body,res);
});

router.get('/getbookingroom', async(req,res)=>{
  await   getbookingroom(req,res);
});

router.get('/getbookingroombyid/:bookingroomid', async(req,res)=>{
  await   getbookingroomById(req,res);
});

//reservation Crud Client
router.post('/ClientAddBookingRoom',async(req,res)=>{
  await BookingRoomClient(req.body,res);
});






module.exports = router;
