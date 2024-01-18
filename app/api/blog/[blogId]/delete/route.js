import connectDB from "@app/utils/connectDB"
import BlogPost from "@models/BlogPost"

export async function DELETE(request) {
  await connectDB()
  const url = request.url
  const blogIdRegex = /\/blog\/(\w+)/
  const blogId = url.match(blogIdRegex)[1]
  await BlogPost.findByIdAndDelete(blogId)
  return new Response(JSON.stringify('blog deleted'))
}