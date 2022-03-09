const router = require("express").Router();




const {
    addhotelproprietair,
    updatehotelproprietair,
    delethotelproprietair,
    gethotelproprietair
  } = require("../controllers/HotelproprietaiController");

  router.get('/gethotelproprietair', async(req,res)=>{
    await gethotelproprietair(req,res);
});

  router.post('/addhotelproprietair', async(req,res)=>{
    await addhotelproprietair(req.body,res);
});


router.post('/updatehotelproprietair/:hotelid', async(req,res)=>{
    await updatehotelproprietair(req,res);
});

router.post('/delethotelproprietair/:hotelid', async(req,res)=>{
    await delethotelproprietair(req,res);
});





module.exports = router;
