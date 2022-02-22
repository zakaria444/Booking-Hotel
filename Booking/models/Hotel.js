
const { Schema,model } = require('mongoose');
const HotelSchema = new Schema   (
    {
        name: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false
        },
      
        stars: {
            type: Number,
            required: true
        },

        image_cover: {
            type: String,
            required: false
        },
   
        localisation: {
            city: {
                type: String,
                required: [true, 'Hotel must have a city']
            },
            country: {
                type: String,
                required: [true, 'Hotel must have a coutry']
            }
             
        }
    },

);
module.exports = model("Hotel", HotelSchema);