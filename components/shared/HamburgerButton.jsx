import React from 'react'

const HamburgerButton = ({handleClick, isActive}) => {
	const beforeInactive = `before:mt-[-50%]`;
	const afterInactive = `after:mt-[50%]`;
	const before = `before:transition-hamburgerButton before:duration-300 before:content-[''] before:h-[2px] before:bg-current before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-full`;
	const after = `after:transition-hamburgerButton after:duration-300 after:content-[''] after:h-[2px] after:bg-current after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:w-full`;
	const beforeActive = `before:mt-0 before:rotate-45`;
	const afterActive = `after:mt-0 after:-rotate-45`;

	return (
		<button onClick={handleClick} className={`lg:hidden relative w-6 aspect-square  ${before} ${isActive ? beforeActive : beforeInactive} ${after} ${isActive ? afterActive : afterInactive}`}>
			<span className={`transition-opacity duration-300 h-[2px] bg-current absolute top-[50%] translate-y-[-50%] left-0 w-full ${isActive ? 'opacity-0' : ''}`}></span>
		</button>
	)
}

export default HamburgerButton