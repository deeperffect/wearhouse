import { useEffect } from "react"

const Checkbox = ({ id, text, changeHandler, checked}) => {
	useEffect(()=>{
		console.log('checkbox:', checked)

	}, [checked])
	return (
		<div className="text-black uppercase">
			<input
			type="checkbox"
			id={id}
			name={id}
			onChange={changeHandler}
			checked={!!checked}
			/>
			<label htmlFor={id}>{text}</label>
		</div>
  	)
}

export default Checkbox