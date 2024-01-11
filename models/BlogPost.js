import mongoose from 'mongoose'

const blogPostSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    min: 4,
  },
  title: {
    type: String,
    required: true,
    min:4,
    max:50
  },
  description: {
    type: String,
    required: true,
    min: 16
  },
},
{ timestamps: true }
)

export default mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPost);