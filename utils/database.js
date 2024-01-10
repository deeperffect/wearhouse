import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if(isConnected) {
    console.log('Already connected to MongoDB')
  return
  }

  try {
    await mongoose.connect('mongodb://127.0.0.1/wearhouse')
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}