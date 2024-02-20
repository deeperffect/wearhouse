import { BasketContext } from '@app/contexts/BasketContext';
import React, { useContext } from 'react';
import ItemCard from './Item/ItemCard';
import Image from 'next/image';

const BasketContent = () => {	
	const { removeFromBasket } = useContext(BasketContext);
	const basketItems = JSON.parse(localStorage.getItem('items'));

    return (
		<div className='bg-slate-200/50 flex flex-col'>
			<header className='flex'>
				<h2 className='text-3xl'>Basket</h2>
				<Image src="/assets/icons/x.svg" alt='x button' width={16} height={32} />
			</header>
			{
				basketItems && basketItems.length > 0 ?
				(<ul className='flex flex-col max-w-[10rem]'>
					{
						basketItems.map((item, index) => {
							return <li>
										<ItemCard card={item} key={index} />
										<button onClick={() => removeFromBasket(item.id)}>Remove</button>
									</li>
						})}
				</ul>) : (
					<div>
						<h3 className='text-xl'>Basket is empty.</h3>
					</div>

				)
			}			
		</div>
    );
}

export default BasketContent;
