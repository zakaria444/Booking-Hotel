const {Schema, model}= require('mongoose');
const BookingroomSchema = new Schema (
    {
    
        room_id:{
            type: String,
            required:true     
        },
        rooms_quantity:{
            type:String,
            required:false      
        },
        price:{
            type:String,
            required: false
        },
        total_price:{
            type:String,
            required:false
        },
        booking_id: 
            { type: Schema.Types.ObjectId,ref:'booking'}
                    
    },
    
    {timestamps:true},
);
module.exports = model(
    "bookingroom",BookingroomSchema,
    
    );