const mongoose = require("mongoose");
const RoomSchema = mongoose.model(
    "Room",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false
        },
        price: {
            type: String,
            required: true
        },
        

        image_cover: {
            type: String,
            required: false
        },
        hotel_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        },
    },
        { timestamps: true })
);

module.exports = RoomSchema;

