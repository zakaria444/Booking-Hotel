const router = require("express").Router();
const {
    creatHotelImages,
    getImagesByHotel,
    OwnercreatHotelImages,
    getImage,
    
  } = require("../controllers/HotelsImagesController");

const upload = require('../middlewares/upload')

const {
    addhotelproprietair,
    updatehotelproprietair,
    delethotelproprietair,
    gethotelproprietair,
    getOnehotelproprietair,
    searchHotels
  } = require("../controllers/HotelproprietaiController");

  router.get('/gethotelproprietair', async(req,res)=>{
    await gethotelproprietair(req,res);
});

router.get('/getonehotelproprietair/:hotelid', (req,res)=>{
   getOnehotelproprietair(req,res);

});

router.post("/addhotelproprietair" ,upload.single('image_cover'),   addhotelproprietair);

router.post("/upload", upload.single('file'),  creatHotelImages);


router.post("/search", searchHotels);


router.patch('/updatehotelproprietair/:hotelid',  updatehotelproprietair);

router.delete('/delethotelproprietair/:hotelid', async(req,res)=>{
    await delethotelproprietair(req,res);
});





module.exports = router;
