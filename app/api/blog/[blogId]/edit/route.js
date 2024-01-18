import connectDB from "@app/utils/connectDB"
import BlogPost from "@models/BlogPost"

export async function PATCH(request) {
  await connectDB()
  const { blogData, blogId } = await request.json()
  const blogFound = await BlogPost.findByIdAndUpdate(blogId, blogData)
  return new Response(JSON.stringify(blogFound))
}