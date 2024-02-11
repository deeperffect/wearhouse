import React from 'react';

const Btn = ({ children, type='submit', clickHandler = () => {} }) => {
	return (
		<button className="block p-2 px-4 text-white bg-darkOrange hover:bg-lightOrange rounded-full baseline" onClick={clickHandler}>{children}</button>
	)
};

export default Btn;