import connectDB from "@app/utils/connectDB"
import BlogPost from "@models/BlogPost"

export async function DELETE(request, params) {
  await connectDB()
  const blogId = params.params.blogId
  if(!blogId) {
    console.log("Invalid blogId")
    return new Response(JSON.stringify({ error: 'Invalid BlogId' }), { status: 400 })
  }
  try{
    await BlogPost.findByIdAndDelete(blogId)
    return new Response(JSON.stringify('blog deleted'))
  } catch (error) {
    console.log('Deletee blog post failed:', error)
    return new Response(JSON.stringify({ error: 'Delete blog post failed' }), { status: 500 })
  }
}