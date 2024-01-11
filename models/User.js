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

// userSchema.pre('save', async function () {
//   try{
//     const User = this.constructor
//     const userExists = await User.find({
//       email: this.get("email")
//     })
//     .lean()
//     .exec()
//     if (userExists.length > 0) {
//       throw new Error ("user already exists")
//     }
//   }catch (error) {
//     throw new Error(error)
//   }
//   })

export default mongoose.models.User || mongoose.model("User", User);