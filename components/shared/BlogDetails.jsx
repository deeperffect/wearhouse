import { AuthContext } from "@app/contexts/AuthContext"
import { Suspense, useContext } from "react"
import Loader from "./Loader"

const BlogDetails = ({blog}) => {
  const { user } = useContext(AuthContext)

  return (
    <article>
        <header>
          <h2 className="font-bold text-3xl">{blog.title}</h2>
        </header>
        <figure>
          <img src={blog.image} alt={blog.title} />
        </figure>
        <div>
          <p>{blog.description}</p>
          {user && user.id === blog.owner ? 
          (
            <div>
            <button>edit</button>
            <button>delete</button>
          </div>
          ) : (
            <div>
            <button>like</button>
            </div>
          )}
        </div>
    </article>
  
  )
}

export default BlogDetails