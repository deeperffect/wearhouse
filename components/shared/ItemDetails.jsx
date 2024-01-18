import { AuthContext } from "@app/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

const ItemDetails = ({item}) => {
  const { user } = useContext(AuthContext)

  return (
    <article className="flex flex-col items-center"> 
      <header className="p-4 font-bold text-3xl">
        <h2>{item.title}</h2>
      </header>
      <figure className="" >
        <img className="" src={item.image} alt={item.title} />
      </figure>
      <div>
        <p className="p-4 text-center max-w-[35rem]">{item.description}</p>
      </div>
      {
        user && user.id === item.owner &&
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href={`/collection/${item._id}/edit`}>Edit</Link>
          </div>
      }
      {
        !user && 
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href="/login">Buy</Link>
          </div>
      }
      {
        user && user.id !== item.owner &&
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href="/buy">Buy</Link>
          </div>
      } 
    </article>
  )
}

export default ItemDetails