import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 40
  },
  description: {
    type: String,
    required: true,
    min: 8,
    max: 50
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  image: {
    type: String,
    required: true,
    min: 8,
    max: 50
  },
  category: {
    type: String,
    required: true,
    min: 8,
    max: 50
  }
},
{ timestamps: true }
)

export const Item = mongoose.model('Item', itemSchema)