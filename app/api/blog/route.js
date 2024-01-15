import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";

export async function GET(request) {
  await connectDB()
  const allBlogs = await BlogPost.find()
  return new Response(JSON.stringify(allBlogs))

}