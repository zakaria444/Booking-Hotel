const bookingroom = require('../models/BookingRoom');


const bookingroomproprietair = async (bookingroomproprietair, res) => {
    

    // create a new booking
    const newBooking = new bookingroom({
       ...bookingroomproprietair
    });

    await newBooking.save();
    return res.status(201).json({
        message: "Hurry! now you are successfully Booking.",
        success: true
        });
    }

    //addbookingRoom Client
    
    const BookingRoomClient=async(BookingRoomClient,res)=>{
const newBookingClient = new bookingroom({
  ...BookingRoomClient
});
console.log(newBookingClient);
await newBookingClient.save();
return res.status(201).json({
  message: "Hurry! now you are successfully Booking.",
        success: true
})
    }


    const getbookingroom = async (req, res) => {
      
        try {
          const bookingrooms = await bookingroom.find().populate('booking_id');
          res.status(200).json({success: true , data: bookingrooms})
        }catch(error){
          res.status(404).json({success: false , data: [], error: error})
        }
      }


      const getbookingroomById = async (req, res) => {
        const idbookingroom=req.params.bookingroomid;
        console.log(idbookingroom);
        try {
          const bookingrooms = await bookingroom.findOne({_id:idbookingroom}).populate('booking_id');
          res.status(200).json({success: true , data: bookingrooms})
        }catch(error){
          res.status(404).json({success: false , data: [], error: error})
        }
      }




module.exports = {
    bookingroomproprietair,
    getbookingroom,
    getbookingroomById,
    BookingRoomClient
    
    };