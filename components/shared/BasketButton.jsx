import Image from 'next/image';
import React from 'react'

const BasketButton = ({handleClick, isActive}) => {
	return (
		<button onClick={handleClick}>
			<Image src="/assets/icons/shopping-bag.png" alt="shopping bag icon" width={29} height={22}/>
		</button>
	)
}

export default BasketButton;