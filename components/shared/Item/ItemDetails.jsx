import { AuthContext } from "@app/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

const ItemDetails = ({item}) => {
  const { user } = useContext(AuthContext)

  async function handleAdd() {
    const response = await fetch(`/collection/item/${item._id}/fav-add`, {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        itemId: item._id
      })
    })
  }

  async function handleRemove() {
    const response = await fetch(`/collection/item/${item._id}/fav-remove`, {
      method: "DELETE"
    })
  }

  return (
    <article className="flex flex-col items-center"> 
      <header>
        <h2 className="p-2 font-bold text-3xl">{item.title}</h2>
        <p className="text-2xl uppercase text-center pb-2">{item.sex}</p>
      </header>
      <figure className="" >
        <img className="" src={item.image} alt={item.title} />
      </figure>
      <div className="flex flex-col items-center p-4">
        <p className="p-4 text-center max-w-[40rem]">{item.description}</p>
        <p className="uppercase">Price: €{item.price}</p>
        <p className="uppercase">Size: {item.size}</p>
      </div>
      {
        user && user.id === item.owner &&
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href={`/collection/item/${item._id}/edit`}>Edit</Link>
          </div>
      }
      {
        !user && 
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href="/login">Buy</Link>
          </div>
      }
      {
        user && user.id !== item.owner && !item.favorites?.includes(user.id) &&
        <>
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href={`/collection/item/${item._id}/buy`}>Buy</Link>
          </div>
           <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <button onClick={handleAdd}>Add to Favorites</button>
           </div>
        </>
      }
      {
        user && user.id !== item.owner && item.favorites?.includes(user.id) &&
        <>
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <Link href="/buy">Buy</Link>
          </div>
          <div className="bg-white text-black p-4 rounded-xl  w-full text-center max-w-[35rem]">
            <button onClick={handleRemove}>Remove from Favorites</button>
          </div>
        </>
      } 
    </article>
  )
}

export default ItemDetails