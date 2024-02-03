const Checkbox = ({ id, text, checked, handleChange}) => {
    return (
        <div className="text-black uppercase">
            <input
                type="checkbox"
                id={id}
                name={id}
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={id}>{text}</label>
        </div>
      )
}

export default Checkbox