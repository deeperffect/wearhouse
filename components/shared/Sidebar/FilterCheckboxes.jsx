import Checkbox from "./Checkbox"

const FilterCheckboxes = ({listChecks, changeHandler, checks}) => {
	return (
  		<div>
			{
				listChecks.map((listItem, index) => {
					return(
						<Checkbox
							key={`check_${listItem.value}`}
							id={listItem.value}
							text={listItem.text}
							checked={checks[index]}
							changeHandler={(e) => changeHandler(e, index)}
						/>
					)
				})
			}
		</div>
	)
}

export default FilterCheckboxes