'use client'
import { SEXES, SIZES } from '@constants/selectOptions';
import { createContext, useState } from 'react';

export const CheckboxesContext = createContext();

export const CheckboxesProvider = ({ children }) => {
	const [sexesArray, setSexesArray] = useState(SEXES);
	const [sizesArray, setSizesArray] = useState(SIZES);

	function handleChangeSexes(e) {
		const value = e.target.id;
		const valueIndex = sexesArray.findIndex((curr) => curr.value === value); 
		const newArr = [...sexesArray];
		newArr[valueIndex].checked = !newArr[valueIndex].checked; 
		setSexesArray(newArr);
	};

	function handleChangeSizes(e) {
		const value = e.target.id;
		const valueIndex = sizesArray.findIndex((curr) => curr.value === value);
		const newArr = [...sizesArray];
		newArr[valueIndex].checked = !newArr[valueIndex].checked;   
		setSizesArray(newArr);
	};
		
	return (
		<CheckboxesContext.Provider value={{ sexesArray, setSexesArray, sizesArray, setSizesArray, handleChangeSexes, handleChangeSizes }}>
			{children}
		</CheckboxesContext.Provider>
	)
};