import { CheckboxesContext } from "@app/contexts/CheckboxesContext"
import { useContext } from "react"

const Checkbox = ({ id, text }) => {
	const { onCheck } = useContext(CheckboxesContext)
	return (
		<div className="text-black uppercase">
			<input
			type="checkbox"
			id={id}
			name={id}
			onChange={(e) => onCheck(e)}
			/>
			<label htmlFor={id}>{text}</label>
		</div>
  	)
}

export default Checkbox