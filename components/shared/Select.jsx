const Select = ({options, id, value, onChange, className='' }) => {
	return (
		<select
			className={`rounded-md text-black ${className}`}
			id={id}
			value={value}
			onChange={onChange}
		>
		{
			options.map(({value, text}) => {
				return (
					<option value={value} key={`option_${value}`}>{text}</option>
				)
		})}
		</select>
  )
};

export default Select;