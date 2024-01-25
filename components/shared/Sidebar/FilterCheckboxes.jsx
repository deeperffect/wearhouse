import Checkbox from "./Checkbox"

const FilterCheckboxes = ({ listChecks }) => {
	return (
  		<div>
			{
				listChecks.map((listItem) => {
					return(
						<Checkbox
							key={`check_${listItem.value}`}
							id={listItem.value}
							text={listItem.text}
						/>
					)
				})
			}
		</div>
	)
}

export default FilterCheckboxes