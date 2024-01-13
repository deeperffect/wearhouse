import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  title: {
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
  size: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
},
{ timestamps: true }
)


export default mongoose.models.Item || mongoose.model("Item", itemSchema);
