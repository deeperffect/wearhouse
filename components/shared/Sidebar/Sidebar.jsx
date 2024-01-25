import SidebarItems from "./SidebarItems"
import FilterCheckboxes from "./FilterCheckboxes"
import { SEXES, SIZES } from "@constants/selectOptions"

const Sidebar = () => {	
	return (
		<div className="bg-gray-200 max-w-fit p-6 h-svh border-r-4 border-t-4 border-slate-600">
			<SidebarItems />
			<FilterCheckboxes listChecks={SEXES} />
			<FilterCheckboxes listChecks={SIZES} />
		</div>
	)
}

export default Sidebar