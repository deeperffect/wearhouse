import { BasketContext } from '@app/contexts/BasketContext';
import React, { useContext } from 'react';
import ItemCard from './Item/ItemCard';
import Image from 'next/image';

const BasketContent = ({toggleBasket}) => {	
	const { incrementItemCount, decrementItemCount, basketItems, totalPrice } = useContext(BasketContext);

    return (
		<div>
			<header className='flex justify-between border-b-2 mb-6 border-slate-600'>
				<h2 className='text-3xl mx-auto'>Basket</h2>
				<button onClick={toggleBasket}>
					<Image src="/assets/icons/x.svg" alt='x button' width={16} height={32} />
				</button>
			</header>
			{
				basketItems && basketItems.length > 0 ?
				(<div className='flex flex-col items-center justify-center'>
					<ul>
						{
							basketItems.map((item, index) => {
								console.log(item);
								const itemToDisplay = item.item;
								return <li key={`${itemToDisplay._id}${index}`}>									
											<ItemCard card={itemToDisplay} />
											<div className='flex justify-center items-center mb-4'>
												<button className="text-xl" onClick={() => decrementItemCount(itemToDisplay)}>-</button>
												<span className='bg-slate-500 px-4 text-white rounded-md mx-4'>{item.count}</span>
												<button className="text-xl" onClick={() => incrementItemCount(itemToDisplay)}>+</button>
											</div>											
										</li>
							})
						}
					</ul>
					<div className='flex flex-col items-center text-center gap-2 mt-8 border-t-2 border-slate-600 px-4 max-w-[26rem]'>
						<h3 className='text-2xl font-bold'>Total Price</h3>
						<h2 className='text-xl'>€{totalPrice}</h2>
						<button className='text-white bg-darkOrange hover:bg-lightOrange p-2 mb-4 rounded-md'>Checkout</button>
					</div>
				</div>) : (
					<div className='flex justify-center'>
						<h3 className='text-xl'>Basket is empty.</h3>
					</div>

				)
			}			
		</div>
    );
}

export default BasketContent;