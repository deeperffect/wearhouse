import connectDB from "@app/utils/connectDB"
import BlogPost from "@models/BlogPost"

export async function DELETE(request, params) {
  await connectDB()
  const blogId = params.params.blogId
  await BlogPost.findByIdAndDelete(blogId)
  return new Response(JSON.stringify('blog deleted'))
}