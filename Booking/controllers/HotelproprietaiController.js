const hotelproprietair = require('../models/Hotel');

const addhotelproprietair = async (hotelproprietairs, res) => {
    

    // create a new booking
    const newBooking = new hotelproprietair({
       ...hotelproprietairs
    });

    await newBooking .save();
    return res.status(201).json({
        message: "Hurry! now you are successfully Hotel.",
        success: true
        });
  
    
  
};

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
    addhotelproprietair,
    updatehotelproprietair,
    delethotelproprietair
    
    };