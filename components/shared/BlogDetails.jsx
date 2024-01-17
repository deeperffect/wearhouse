import { AuthContext } from "@app/contexts/AuthContext"
import { Suspense, useContext } from "react"
import Loader from "./Loader"

const BlogDetails = ({blog}) => {
  const { user } = useContext(AuthContext)

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
          {user && user.id === blog.owner ? 
          (
            <div className="flex flex-col items-center gap-4">
            <button className="bg-white w-full text-black p-4 rounded-xl text-center max-w-[35rem]">Edit</button>
            <button className="bg-white w-full text-black p-4 rounded-xl text-center max-w-[35rem]">Delete</button>
          </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
            <button className="bg-white w-full text-black p-4 rounded-xl text-center max-w-[35rem]">Like</button>
            </div>
          )}
        </div>
    </article>
  
  )
}

export default BlogDetails