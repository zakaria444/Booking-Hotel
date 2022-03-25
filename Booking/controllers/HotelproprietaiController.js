const hotelproprietair = require('../models/Hotel');
  
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
    const name = req.body.name
    const description = req.body.description
    const stars = req.body.stars
    const city  = req.body.city
    const country  = req.body.country 
    // const image_cover = req.body.image_cover
    const user_id  = req.body.user_id
    const newHotel = new hotelproprietair({
      name: name,
      description: description,
      stars: stars,
      localisation: {city,country},
      user_id:user_id

      
    })

    if (req.file) {
      newHotel.image_cover = req.file.originalname
    }
   

    
    const saveHotel = await newHotel.save()
    res.status(201).json({ success: true, data: saveHotel })
  } catch (error) {
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
console.log("🚀 ~ file: HotelproprietaiController.js ~ line 106 ~ updatehotelproprietair ~ req", req.body)
  const hotelId = req.params.hotelid
  const { name } = req.body
  const { description } = req.body
  const { stars } = req.body

  const city = req.body.localisation[0]
  const country = req.body.localisation[1]

  try {
    const updatedHotelData = await hotelproprietair.updateOne({ _id: hotelId }, {
      $set: {
        name: name,
        description: description,
        stars: stars,
        localisation:{city , country },

        
      }
      
    })
    if (req.file) {
      newHotel.image_cover = req.file.originalname
    }
   
    res.status(201).json({ success: true, data: updatedHotelData })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
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
// search
const searchHotels = (req,res)=>{
  console.log("🚀 ~ file: RoomController.js ~ line 164 ~ searchRoom ~ req", req.body.body.filters)
 
     let order = req.body.order ? req.body.order : "desc";
     let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
     let limit = req.body.limit ? parseInt(req.body.limit) : 100;
     let skip = parseInt(req.body.skip);
     
     
     let findArgs = {};
     for (let key in req.body.body.filters) {
 
         if (req.body.body.filters[key].length > 0) {    
             if (key === "price") {
                 findArgs[key] = {
                     $gte: req.body.body.filters[key][0],
                     $lte: req.body.body.filters[key][1]
                 }
             } else {
                 findArgs[key] = req.body.body.filters[key];
             }
         }
     }
     hotelproprietair.find(findArgs)
     .sort([[sortBy, order]])
   
   
     .exec((err, hotels) => {
         if (err) 
         {return res.status(400).json({ success: false, err })}
         res.json({ hotels})
     })
 }
 




module.exports = {
  getOnehotelproprietair,
    addhotelproprietair,
    updatehotelproprietair,
    delethotelproprietair,
    gethotelproprietair,
    searchHotels,
    
    
    };