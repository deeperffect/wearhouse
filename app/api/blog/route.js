import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";

export async function GET(request) {
  await connectDB()
  try {
    const allBlogs = await BlogPost.find()
    return new Response(JSON.stringify(allBlogs))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Error fetching blogs' }), { status: 500 })
  }
}