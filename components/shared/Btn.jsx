import React from 'react';

const Btn = ({ children, type='submit', clickHandler = () => {} }) => {
	return (
		<button onClick={clickHandler}>{children}</button>
	)
};

export default Btn;