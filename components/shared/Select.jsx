const Select = ({options, id, value, onChange, className='' }) => {
  return (
    <select
      className={`rounded-md text-black ${className}`}
      id={id}
      value={value}
      onChange={onChange}
    >
      {options.map(({value, text}) => {
        return (
          <option value={value} key={`option_${value}`}>{text}</option>
          )
      })}
      </select>
  )
}

export default Select



{/* <select
          className="rounded-md text-black"
          id="category" value={category}
          onChange={(e) => {
            router.push(`${e.target.value}`)
            setCategory(e.target.value)
          }}
        >
          {CATEGORIES.map(({value, text}) => {
            return (
              <option value={value} key={`option_${value}`}>{text}</option>
              )
          })}
        </select> */}