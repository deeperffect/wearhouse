import { AuthContext } from "@app/contexts/AuthContext";
import { BasketContext } from "@app/contexts/BasketContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const ItemDetails = ({item, setItem}) => {
    const { user } = useContext(AuthContext);
    const { addToBasket } = useContext(BasketContext);
    const router = useRouter();
    async function handleBuy() {
        addToBasket(item);
    }

	async function handleFav() {
		const response = await fetch(`/api/collection/item/${item._id}/fav-add`, {
		method: "POST",
		body: JSON.stringify({
		userId: user.id,
		itemId: item._id
		})
	});
    const data = await response.json();
    setItem(data);
	};
    
    const onAdd = () => {
        router.push("/login");
    };
    const buttonText = item.favorites?.includes(user?.id) ? 'Remove from favorites' : 'Add to favorites';
    const onEdit = () => {
        router.push(`/collection/item/${item._id}/edit`);
    };
    
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
                    <div onClick={onEdit} className="cursor-pointer bg-darkOrange hover:bg-lightOrange text-white p-2 w-full text-center max-w-[30rem]">
                        <button>Edit</button>
                    </div>
            }
            {
                !user && 
                    <div onClick={onAdd} className="cursor-pointer bg-darkOrange hover:bg-lightOrange text-white p-2  w-full text-center max-w-[30rem]">
                        <button>Add to Shopping Bag</button>
                    </div>
            }
            {
                user && user.id !== item.owner &&
                <>
                        <div onClick={handleBuy} className="cursor-pointer bg-darkOrange hover:bg-lightOrange text-white p-2 my-2 w-full text-center max-w-[30rem]">
                            <button>Add to Shopping Bag</button>
                        </div>     
                        <div  onClick={handleFav} className="cursor-pointer bg-lightBlue hover:bg-indigo-300 text-white p-2  w-full text-center max-w-[30rem]">
                            <button>{buttonText}</button>
                        </div>
                    </>
            } 
            
        </article>
    )
}

export default ItemDetails;