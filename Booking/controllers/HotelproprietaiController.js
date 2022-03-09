const hotelproprietair = require('../models/Hotel');
console.log("🚀 ~ file: HotelproprietaiController.js ~ line 2 ~ hotelproprietair", hotelproprietair)
  
const gethotelproprietair = async (hotelproprietairs, res) => {
    
    try {
        const hotels = await hotelproprietair.find()
        
        res.status(200).json({ success: true, data: hotels })
      } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
      }
  
    
  
};
const getOnehotelproprietair = async (req, res) => {
    let paramss = req.params.hotelid;
  const hotelIdone = paramss
  const _id = "6228bc648b47cadd83beb76d"
  try {
    const hotel =  hotelproprietair.findById(_id)
  
    res.status(200).json({ success: true, data: hotel })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }

};
const addhotelproprietair = async (req, res) => {


  
  // create a new booking
  try {
    const name = req.name
    const description = req.description
    const stars = req.stars
    const city  = req.localisation[0]
    const country  = req.localisation[1]
    const user_id  = req.user_id
    const newHotel = new hotelproprietair({
      name: name,
      description: description,
      stars: stars,
      localisation: {city,country},
      user_id:user_id

      
    })

    if (req.body) {
      newHotel.image_cover = req.body.image_cover
    }
   

    
    const saveHotel = await newHotel.save()
    res.status(201).json({ success: true, data: saveHotel })
  } catch (error) {
   
    console.log(req.file);
        res.status(404).json({ success: false, data: [], error: error })
  }



};

// const addhotelproprietair =  (req, res) => {  //  console.log(req.body.localisation.city);
//   //  res.status(201).json({ success: true, data: req.body })
//   try {
//     const name = req.name
//     const description = req.description
//     const stars = req.stars
//     const city  = req.localisation[0]
//     const country  = req.localisation[1]
//     const user_id  = req.user_id



//     const newHotel = new hotelproprietair({
//       name: name,
//       description: description,
//       stars: stars,
//       localisation: {city,country},
//       user_id:user_id


//     })
    
//     const saveHotel =  newHotel.save()
//     console.log("🚀 ~ file: HotelproprietaiController.js ~ line 39 ~ addhotelproprietair ~ newHotel", newHotel)
//     res.status(201).json({ success: true, data: saveHotel })
//   } catch (error) {
   
//     console.log(req.file);
//         res.status(404).json({ success: false, data: [], error: error })
//   }
  
    
  
// };

const updatehotelproprietair = async (req,res)=> {
    const idhotels=req.params.hotelid;
    const {name}= req.body;
    const {description}= req.body;
    const {status}= req.body;
    let newvalues = { $set: {name: name, description:description} };
  let bookings = await hotelproprietair.updateOne({_id:idhotels}, newvalues);
  return res.status(200).json({
      ...bookings,
      message:"Hurray ! You ar now updat hotels Par ID .",
      success:false
    })
};


const delethotelproprietair = async (req,res)=> {
    const idhotels=req.params.hotelid;
  let bookings = await hotelproprietair.deleteOne({_id:idhotels});
  return res.status(200).json({
      ...bookings,
      message:"Hurray ! You ar now Delet hotels Par ID .",
      success:false
    })
};





module.exports = {
  getOnehotelproprietair,
    addhotelproprietair,
    updatehotelproprietair,
    delethotelproprietair,
    gethotelproprietair,
    
    
    };