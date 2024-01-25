'use client'
import { createContext, useState } from 'react'

export const CheckboxesContext = createContext()

const checkedBoxesArray = []
export const CheckboxesProvider = ({ children }) => {
	const [checkedBoxes, setCheckedBoxes] = useState(checkedBoxesArray)
	
	const onCheck = (e) => {
		const checkbox = e.target.name
		if(!checkedBoxesArray.includes(checkbox)) {
			checkedBoxesArray.push(checkbox)
		} else {
			const indexToRemove = checkedBoxesArray.indexOf(checkbox)
			checkedBoxesArray.splice(indexToRemove, 1)
		}
		setCheckedBoxes(checkedBoxesArray)
	}
  
	return (
	<CheckboxesContext.Provider value={{ checkedBoxes, setCheckedBoxes, onCheck }}>
		{children}
	</CheckboxesContext.Provider>
	)
}