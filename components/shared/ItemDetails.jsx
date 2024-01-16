import { AuthContext } from "@app/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

const ItemDetails = ({item}) => {
  const { user } = useContext(AuthContext)

  return (
    <article> 
      <header>
        <h2 className="font-bold text-3xl">{item.title}</h2>
      </header>
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div>
        <p>{item.description}</p>
      </div>
      {user && user.id === item.owner ? (
        <div>
          <Link href={`/collection/${item._id}/edit`}>Edit</Link>
        </div>
        ) : (
        <div>
          <button>Buy</button>
        </div>
        )
    }
    </article>
  )
}

export default ItemDetails