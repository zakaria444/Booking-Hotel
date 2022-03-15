
const Type = require("../models/Type")

const creatType = async (req, res) => {

  try {
    const name = req.body.name
    const price = req.body.price



    const newType = new Type({
      name: name,
      price: price
    })

    // console.log(req.body.user_id);


    const saveType = await newType.save()
    res.status(201).json({ success: true, data: saveType })
  } catch (error) {

    // console.log(error);
        res.status(400).json({ success: false, data: [], error: error })
  }
}



const getType =  async (req, res) => {
  const typeId = req.params.Id;
 console.log(typeId);
 
  try {
    const type = await  Type.find({ _id: typeId })
    console.log(type);
     return res.status(200).json({ success: true, data: type })
    console.log(error);
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
    
  }
}



const getTypes = async (req, res) => {
  try {
    const types = await Type.find()
    res.status(200).json({ success: true, data: types })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}




const deleteType = async (req, res) => {
  const typeId = req.params.Id
  try {
    await Type.remove({ _id: typeId })
    res.status(200).json({ success: true, data: deleteType })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}


const updateType = async (req, res) => {
  const typeId = req.params.Id
  const { name } = req.body
  const { price } = req.body

  try {
    const updateType = await Type.updateOne({ _id: typeId }, {
      $set: {
        name: name,
        price: price
        
      }
    })
    res.status(201).json({ success: true, data: updateType })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}


module.exports = {
    creatType,
    getType, 
    getTypes,
    deleteType,
    updateType
};