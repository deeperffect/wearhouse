import { AuthContext } from "@app/contexts/AuthContext";
import { ShoppingBagContext } from "@app/contexts/ShoppingBagContext";
import Section from "@components/Section";
import Link from "next/link";
import { useContext } from "react";

const ItemDetails = ({item, setItem}) => {
    const { user } = useContext(AuthContext);
    const { addToCart } = useContext(ShoppingBagContext);

	async function handleFav() {
		const response = await fetch(`/api/collection/item/${item._id}/fav-add`, {
		method: "POST",
		body: JSON.stringify({
		userId: user.id,
		itemId: item._id
		})
	});
    const data = await response.json();
    console.log(data);
    setItem(data);
	};

    function addToShoppingBag() {
        addToCart(item);
    }

    const buttonText = item.favorites?.includes(user?.id) ? 'Remove from favorites' : 'Add to favorites';

    return (
        <article className="flex flex-col items-center mx-auto max-w-[45rem] py-8 rounded-xl bg-slate-200/50"> 
            <header>
                <h2 className="p-2 font-bold text-3xl">{item.title}</h2>
                <p className="text-2xl uppercase text-center pb-2">{item.sex}</p>
            </header>
            <figure>
                <img src={item.image} alt={item.title} />
            </figure>
            <div className="flex flex-col items-center p-2 my-4 bg-slate-400/50 rounded-xl">
                <p className="p-4 text-center max-w-[40rem]">{item.description}</p>
                <p className="uppercase">Price: €{item.price}</p>
                <p className="uppercase">Size: {item.size}</p>
            </div>
            {
                user && user.id === item.owner &&
                <div className="bg-green-400 text-black p-2 w-full text-center max-w-[30rem]">
                        <Link href={`/collection/item/${item._id}/edit`}>Edit</Link>
                    </div>
            }
            {
                !user && 
                <div className="bg-darkOrange hover:bg-lightOrange text-black p-2  w-full text-center max-w-[30rem]">
                        <Link href="/login">Add to Shopping Bag</Link>
                    </div>
            }
            {
                user && user.id !== item.owner &&
                <>
                        <div className="bg-darkOrange hover:bg-lightOrange text-black p-2 my-2 w-full text-center max-w-[30rem]">
                            <button onClick={addToShoppingBag}>Add to Shopping Bag</button>
                        </div>     
                        <div className="bg-lightBlue hover:bg-indigo-300 text-black p-2  w-full text-center max-w-[30rem]">
                            <button onClick={handleFav}>{buttonText}</button>
                        </div>
                    </>
            } 
            
        </article>
    )
}

export default ItemDetails;