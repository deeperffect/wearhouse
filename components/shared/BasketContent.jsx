import { BasketContext } from '@app/contexts/BasketContext';
import React, { useContext } from 'react';
import ItemCard from './Item/ItemCard';
import Image from 'next/image';

const BasketContent = ({toggleBasket}) => {	
	const { incrementItemCount, decrementItemCount, basketItems } = useContext(BasketContext);

    return (
		<div className=' flex flex-col'>
			<header className='flex justify-between border-b-2 mb-6 border-slate-600'>
				<h2 className='text-3xl'>Basket</h2>
				<button onClick={toggleBasket}>
					<Image src="/assets/icons/x.svg" alt='x button' width={16} height={32} />
				</button>
			</header>
			{
				basketItems && basketItems.length > 0 ?
				(<ul className='flex flex-col max-w-[10rem]'>
					{
						basketItems.map((item, index) => {
							console.log(item);
							const itemToDisplay = item.item;
							return <li key={`${itemToDisplay._id}${index}`}>
										<ItemCard card={itemToDisplay} />
										<div className='flex'>
											<button className="text-xl" onClick={() => decrementItemCount(itemToDisplay)}>-</button>
											<span className='bg-slate-500 px-4 text-white rounded-md m-4'>{item.count}</span>
											<button className="text-xl" onClick={() => incrementItemCount(itemToDisplay)}>+</button>
										</div>
									</li>
						})}
				</ul>) : (
					<div className='flex justify-center'>
						<h3 className='text-xl'>Basket is empty.</h3>
					</div>

				)
			}			
		</div>
    );
}

export default BasketContent;