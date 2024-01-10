import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 20
  },
  email: {
    type: String,
    unique: true,
    required: true,
    min:8,
    max:50
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
},
{ timestamps: true }
)

export const User = mongoose.model('User', userSchema)