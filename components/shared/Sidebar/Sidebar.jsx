import SidebarItems from "./SidebarItems"
import FilterCheckboxes from "./FilterCheckboxes"
import { SEXES, SIZES } from "@constants/selectOptions"
import { useEffect, useMemo, useState } from "react"

const Sidebar = () => {
	const sexesChecks = new Array(SEXES.length).fill(false)
	const sizesChecks = new Array(SIZES.length).fill(false)
	const [sexes, setSexes] = useState([])
	const [sizes, setSizes] = useState([])

	useEffect(()=> {
		if (!sexes.length) setSexes(sexesChecks)
		if (!sizes.length) setSizes(sizesChecks)
	}, [])

	function changeHandlerSexes(e, index) {
		const isChecked = e.target.checked
		// e.target.checked = !isChecked
		console.log(isChecked)
		// sexes.splice(index, 1, isChecked)
		sexes[index] = !sexes[index]
		setSexes(sexes)
		console.log(sexes)
	}

	function changeHandlerSizes(e, index) {
		const isChecked = e.target.checked
		// e.target.checked = !isChecked
		console.log(isChecked)
		// sexes.splice(index, 1, isChecked)
		sizes[index] = !sizes[index]
		setSizes(sizes)
		console.log(sizes)
	}
	// const checkboxesSex = useMemo(() => <FilterCheckboxes listChecks={SEXES} checks={sexes} changeHandler={changeHandlerSexes}/>, [sexes])
	// const checkboxesSize = useMemo(() => <FilterCheckboxes listChecks={SIZES} checks={sizes} changeHandler={changeHandlerSizes}/>, [sizes])
	return (
		<div className="bg-gray-200 max-w-fit p-6 h-svh border-r-4 border-t-4 border-slate-600">
			<SidebarItems />
			<FilterCheckboxes listChecks={SEXES} checks={sexes} changeHandler={changeHandlerSexes}/>
			<FilterCheckboxes listChecks={SIZES} checks={sizes} changeHandler={changeHandlerSizes}/>
			{/* <checkboxesSex />
			<checkboxesSize /> */}
		</div>
	)
}

export default Sidebar