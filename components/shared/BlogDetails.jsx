import { AuthContext } from "@app/contexts/AuthContext"
import { useContext, useState } from "react"
import Link from "next/link"

const BlogDetails = ({blog, setBlog}) => {
  const { user } = useContext(AuthContext)

  async function handleLike() {
    const response = await fetch(`/api/blog/${blog._id}/like`, {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        blogId: blog._id
      })
    })
    const data = await response.json()
    setBlog(data)
  }

  return (
    <article>
        <header>
          <h2 className="font-bold text-3xl text-center p-4">{blog.title}</h2>
        </header>
        <figure>
          <img src={blog.image} alt={blog.title} />
        </figure>
        <div>
          <p className="text-center p-4">{blog.description}</p>
          {
            user && user.id === blog.owner && 
              <div className="flex flex-col items-center gap-4">
              <Link href={`/blog/${blog._id}/edit`} className="bg-white w-full text-black p-4 rounded-xl text-center max-w-[35rem]">Edit</Link>
              </div>
          }     
          {
            user && !blog.likes?.includes(user.id) && 
              <div className="flex flex-col items-center gap-4">
              <button onClick={handleLike} className="bg-white w-full text-black p-4 rounded-xl text-center max-w-[35rem]">Like</button>
              </div>
          }
          {
            user && blog.likes?.includes(user.id) &&
              <div className="text-center">
                <p>Thank you for liking the post!</p>
              </div>
          }
        </div>
    </article>
  
  )
}

export default BlogDetails