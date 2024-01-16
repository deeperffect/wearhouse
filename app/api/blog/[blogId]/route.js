import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";

export async function GET(request) {
  await connectDB()
  const url = request.url
  const blogIdRegex = /\/blog\/(\w+)/
  const blogId = url.match(blogIdRegex)[1]
  const blogFound = await BlogPost.findById(blogId)
  return new Response(JSON.stringify(blogFound))
}