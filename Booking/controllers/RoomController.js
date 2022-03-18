
const Room = require("../models/Room")




const getRooms =  (req, res) => {
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let order = req.query.order ? req.query.order : 'asc';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    const hotelId = req.params.hotelId

    Room.find() 
   
 
 .sort([[sortBy, order]])
 .populate('hotel_id')
 .limit(limit)
 .exec((err,rooms)=>{
     if(err) {
         return res.status(404).json({
             error:"Romm not fund !"
         })
     }
     res.json({
         rooms
     })
 })
}
const getRoomsid =  (req, res) => {
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let order = req.query.order ? req.query.order : 'asc';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    const hotelId = req.params.hotelId

    Room.find({ hotel_id: hotelId }) 
   
 
 .sort([[sortBy, order]])
 .populate('hotel_id')
 .limit(limit)
 .exec((err,rooms)=>{
     if(err) {
         return res.status(404).json({
             error:"Romm not fund !"
         })
     }
     res.json({
         rooms
     })
 })
}
const getRoom = async (req, res) => {
    const roomId = req.params
    console.log("🚀 ~ file: RoomController.js ~ line 31 ~ getRoom ~ roomId", roomId.hotelId)
    try {
        const room = await Room.find({ _id: roomId.hotelId })
        res.status(200).json({ success: true, data: room })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}

const creatRoom = async (req, res) => {
console.log("🚀 ~ file: RoomController.js ~ line 40 ~ creatRoom ~ reqimage", req.files)
console.log("🚀 ~ file: RoomController.js ~ line 40 ~ creatRoom ~ reqimage", req.body)

    try {
        const { name } = req.body
        const { description } = req.body
        const { type } = req.body
        const { price } = req.body



        const { hotel_id } = req.body

        const newRoom = new Room({
            name: name,
            description: description,
            type: type,
            price: price,
            images : [],
            hotel_id: hotel_id
        })
        if (req.files) {
           
           req.files.forEach(element => {
            const filename  =  { img : element.originalname }
            newRoom.images.push(filename)
           }
            
          
           
           );
    
          
        }
  

        const saveRoom = await newRoom.save()
        res.status(201).json({ success: true, data: saveRoom })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}


const updateRoom = async (req, res) => {
    const roomId = req.params.roomId
    const { name } = req.body
    const { description } = req.body
    const { type } = req.body
    const { price } = req.body
    const { hotel_id } = req.body
    try {
        const updatedRoomData = await Room.updateOne({ _id: roomId }, {
            $set: {
                name: name,
                description: description,
                type: type,
                price: price,

                hotel_id: hotel_id
            }
        })
        res.status(201).json({ success: true, data: updatedRoomData })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

const deletRoom = async (req, res) => {
    const roomId = req.params.roomId
    try {
        await Room.remove({ _id: roomId })
        res.status(200).json({ success: true, data: deletRoom })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

  
// search
 const searchRoom = (req,res)=>{

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    
    
    let findArgs = {};
    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
    console.log(findArgs)
    Room.find(findArgs)
    .sort([[sortBy, order]])
  
  
    .exec((err, rooms) => {
        if (err) 
        {return res.status(400).json({ success: false, err })}
        res.json({ rooms})
    })
}

 



 

module.exports = {
    creatRoom,
    getRooms,
    getRoom,
    updateRoom,
    getRoomsid,
    deletRoom,
    searchRoom,
    

};

