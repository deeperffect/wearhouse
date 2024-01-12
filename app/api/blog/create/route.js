import connectDB from "@app/lib/connectDB"
import BlogPost from "@models/BlogPost"

export async function POST(request) {
  await connectDB()

  const data = await request.json()
  const { image, title, description } = data

  const newPost = {
    image,
    title,
    description,
  }

  await BlogPost.save(newPost)



  return new Response(JSON.stringify())
}